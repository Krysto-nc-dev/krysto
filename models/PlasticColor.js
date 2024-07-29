import mongoose from 'mongoose'

const { Schema, model, models } = mongoose

const PlasticColorSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Le nom de la couleur est requis'],
      trim: true, // Pour enlever les espaces inutiles avant et après le nom
    },
    images: [
      {
        type: String,
        required: [true, 'Au moins une image est requise pour la couleur'],
      },
    ],
    rarityIndex: {
      type: Number,
      min: [1, "L'indice de rareté doit être au minimum de 1"],
      max: [5, "L'indice de rareté ne peut pas dépasser 5"],
      required: [true, "L'indice de rareté est requis"],
      default: 3, // Modification de la valeur par défaut pour refléter une rareté moyenne
    },
  },
  {
    timestamps: true, // Pour ajouter automatiquement les propriétés createdAt et updatedAt
  },
)

const PlasticColor =
  models.PlasticColor || model('PlasticColor', PlasticColorSchema)

export default PlasticColor
