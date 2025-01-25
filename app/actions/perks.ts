"use server"

import { revalidatePath } from "next/cache"
import { sql } from "@/lib/db"
import { z } from "zod"

const PerkSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  logo: z.string().optional(),
  value: z.string().min(1),
  details: z.string().min(1),
  howToRedeem: z.string().min(1),
  categoryId: z.number(),
  offers: z.array(
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      promoCode: z.string().optional(),
      value: z.string().min(1),
    }),
  ),
  steps: z.array(
    z.object({
      orderNum: z.number(),
      title: z.string().min(1),
      description: z.string().min(1),
      image: z.string().optional(),
    }),
  ),
  faq: z.array(
    z.object({
      question: z.string().min(1),
      answer: z.string().min(1),
    }),
  ),
})

export async function createPerk(data: z.infer<typeof PerkSchema>) {
  try {
    const slug = data.title.toLowerCase().replace(/\s+/g, "-")

    const result = await sql`
      INSERT INTO perks (title, slug, description, logo, value, details, how_to_redeem, category_id)
      VALUES (${data.title}, ${slug}, ${data.description}, ${data.logo}, ${data.value}, ${data.details}, ${data.howToRedeem}, ${data.categoryId})
      RETURNING id
    `
    const perkId = result.rows[0].id

    await Promise.all([
      ...data.offers.map(
        (offer) =>
          sql`INSERT INTO offers (title, description, promo_code, value, perk_id)
            VALUES (${offer.title}, ${offer.description}, ${offer.promoCode}, ${offer.value}, ${perkId})`,
      ),
      ...data.steps.map(
        (step) =>
          sql`INSERT INTO steps (order_num, title, description, image, perk_id)
            VALUES (${step.orderNum}, ${step.title}, ${step.description}, ${step.image}, ${perkId})`,
      ),
      ...data.faq.map(
        (item) =>
          sql`INSERT INTO faqs (question, answer, perk_id)
            VALUES (${item.question}, ${item.answer}, ${perkId})`,
      ),
    ])

    revalidatePath("/admin/perks")
    revalidatePath("/perks")
    return { success: true, data: { id: perkId, ...data, slug } }
  } catch (error) {
    console.error("Failed to create perk:", error)
    return { success: false, error: "Failed to create perk" }
  }
}

export async function updatePerk(id: number, data: z.infer<typeof PerkSchema>) {
  try {
    const slug = data.title.toLowerCase().replace(/\s+/g, "-")

    await sql`
      UPDATE perks
      SET title = ${data.title}, slug = ${slug}, description = ${data.description},
          logo = ${data.logo}, value = ${data.value}, details = ${data.details},
          how_to_redeem = ${data.howToRedeem}, category_id = ${data.categoryId}
      WHERE id = ${id}
    `

    await Promise.all([
      sql`DELETE FROM offers WHERE perk_id = ${id}`,
      sql`DELETE FROM steps WHERE perk_id = ${id}`,
      sql`DELETE FROM faqs WHERE perk_id = ${id}`,
      ...data.offers.map(
        (offer) =>
          sql`INSERT INTO offers (title, description, promo_code, value, perk_id)
            VALUES (${offer.title}, ${offer.description}, ${offer.promoCode}, ${offer.value}, ${id})`,
      ),
      ...data.steps.map(
        (step) =>
          sql`INSERT INTO steps (order_num, title, description, image, perk_id)
            VALUES (${step.orderNum}, ${step.title}, ${step.description}, ${step.image}, ${id})`,
      ),
      ...data.faq.map(
        (item) =>
          sql`INSERT INTO faqs (question, answer, perk_id)
            VALUES (${item.question}, ${item.answer}, ${id})`,
      ),
    ])

    revalidatePath("/admin/perks")
    revalidatePath("/perks")
    revalidatePath(`/perks/${slug}`)
    return { success: true, data: { id, ...data, slug } }
  } catch (error) {
    console.error("Failed to update perk:", error)
    return { success: false, error: "Failed to update perk" }
  }
}

export async function deletePerk(id: number) {
  try {
    await sql`DELETE FROM perks WHERE id = ${id}`

    revalidatePath("/admin/perks")
    revalidatePath("/perks")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete perk:", error)
    return { success: false, error: "Failed to delete perk" }
  }
}

export async function getPerk(slug: string) {
  try {
    const perkResult = await sql`
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM perks p
      JOIN categories c ON p.category_id = c.id
      WHERE p.slug = ${slug}
    `
    const perk = perkResult.rows[0]

    if (!perk) return { success: false, error: "Perk not found" }

    const [offersResult, stepsResult, faqResult] = await Promise.all([
      sql`SELECT * FROM offers WHERE perk_id = ${perk.id} ORDER BY id`,
      sql`SELECT * FROM steps WHERE perk_id = ${perk.id} ORDER BY order_num`,
      sql`SELECT * FROM faqs WHERE perk_id = ${perk.id} ORDER BY id`,
    ])

    return {
      success: true,
      data: {
        ...perk,
        offers: offersResult.rows,
        steps: stepsResult.rows,
        faq: faqResult.rows,
      },
    }
  } catch (error) {
    console.error("Failed to fetch perk:", error)
    return { success: false, error: "Failed to fetch perk" }
  }
}

export async function getPerks() {
  try {
    const perksResult = await sql`
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM perks p
      JOIN categories c ON p.category_id = c.id
      ORDER BY p.id
    `
    const perks = perksResult.rows

    const perksWithOffers = await Promise.all(
      perks.map(async (perk) => {
        const offersResult = await sql`SELECT * FROM offers WHERE perk_id = ${perk.id} ORDER BY id`
        return {
          ...perk,
          offers: offersResult.rows,
        }
      }),
    )

    return { success: true, data: perksWithOffers }
  } catch (error) {
    console.error("Failed to fetch perks:", error)
    return { success: false, error: "Failed to fetch perks" }
  }
}

