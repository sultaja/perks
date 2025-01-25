import mongoose from "mongoose"

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: String,
    icon: String,
  },
  { timestamps: true },
)

const offerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    promoCode: String,
    value: { type: String, required: true },
    perkId: { type: mongoose.Schema.Types.ObjectId, ref: "Perk", required: true },
  },
  { timestamps: true },
)

const stepSchema = new mongoose.Schema(
  {
    order: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
    perkId: { type: mongoose.Schema.Types.ObjectId, ref: "Perk", required: true },
  },
  { timestamps: true },
)

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  perkId: { type: mongoose.Schema.Types.ObjectId, ref: "Perk", required: true },
})

const perkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    logo: String,
    value: { type: String, required: true },
    details: { type: String, required: true },
    howToRedeem: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true },
)

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    image: String,
    date: { type: Date, required: true },
    readTime: { type: String, required: true },
  },
  { timestamps: true },
)

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  emailVerified: Date,
  image: String,
})

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: String,
  provider: String,
  providerAccountId: String,
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String,
})

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  expires: Date,
  sessionToken: { type: String, unique: true },
})

const verificationTokenSchema = new mongoose.Schema({
  identifier: String,
  token: { type: String, unique: true },
  expires: Date,
})

// Only create models if they haven't been created yet
export const Category = mongoose.models.Category || mongoose.model("Category", categorySchema)
export const Offer = mongoose.models.Offer || mongoose.model("Offer", offerSchema)
export const Step = mongoose.models.Step || mongoose.model("Step", stepSchema)
export const FAQ = mongoose.models.FAQ || mongoose.model("FAQ", faqSchema)
export const Perk = mongoose.models.Perk || mongoose.model("Perk", perkSchema)
export const BlogPost = mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema)
export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Account = mongoose.models.Account || mongoose.model("Account", accountSchema)
export const Session = mongoose.models.Session || mongoose.model("Session", sessionSchema)
export const VerificationToken =
  mongoose.models.VerificationToken || mongoose.model("VerificationToken", verificationTokenSchema)

