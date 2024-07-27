import { Schema, model, models } from 'mongoose'
import bcrypt from 'bcryptjs'

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
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['user', 'partner', 'reseller'],
      default: 'user',
      required: [true, 'Le rôle est requis'],
    },
  },
  { timestamps: true },
)

// Méthode pour comparer les mots de passe
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

const User = models.User || model('User', UserSchema)

export default User
