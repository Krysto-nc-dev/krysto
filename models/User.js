import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Cet email existe déjà'],
      required: [true, 'Le mail est requis'],
    },
    username: {
      type: String,
      required: [true, "Le nom d'utilisateur est requis"],
    },
    image: {
      type: String,
    },
    googleId: {
      type: String,
    },
    dolibarrId: {
      type: String,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['user', 'partner', 'reseller', 'client', 'artisant', 'recycler'],
      default: 'user',
      required: [true, 'Le rôle est requis'],
    },
    plan: {
      type: String,
      enum: ['FREE', 'PREMIUM', 'PRO'],
      default: 'FREE',
    },
  },
  { timestamps: true },
)

const User = models.User || model('User', UserSchema)

export default User
