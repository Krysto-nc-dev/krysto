import { Schema, model, models } from 'mongoose'

// Définition du schéma pour les plans de tarification
const PlanSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Le nom du plan est requis'],
      unique: [true, 'Ce plan existe déjà'],
    },
    price: {
      type: Number,
      required: [true, 'Le prix du plan est requis'],
    },
    description: {
      type: String,
      required: [true, 'La description du plan est requise'],
    },
    features: [
      {
        type: String,
        required: [true, 'Les fonctionnalités du plan sont requises'],
      },
    ],
    isPopular: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

// Création du modèle Plan en utilisant le schéma défini, ou récupération s'il existe déjà
const Plan = models.Plan || model('Plan', PlanSchema)

export default Plan
