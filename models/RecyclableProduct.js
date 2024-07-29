import mongoose from 'mongoose'
const { Schema, model, models } = mongoose

// Définition du schéma pour les produits recyclables
const RecyclableProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    category: {
      type: String,
      required: [true, 'Vous devez ajouter une catégorie'],
      enum: ['Alimentaires', 'Beauté', 'Entretien', 'Autres'],
      default: 'Alimentaires',
    },
    brand: {
      type: String,
      required: [true, 'Please add a brand'],
      unique: true,
      trim: true,
      maxlength: [50, 'Brand cannot be more than 50 characters'],
    },
    plastic_types: [
      {
        type: Schema.Types.ObjectId,
        ref: 'PlasticType',
      },
    ],
    colors: [
      {
        type: Schema.Types.ObjectId,
        ref: 'PlasticColor',
      },
    ],
    weightGr: {
      type: Number,
      required: [true, 'Please specify the weight in grams'],
    },
    barCode: {
      type: String,
      required: [true, 'Please add a barcode'],
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [1000, 'Description cannot be more than 1000 characters'],
    },
    recyclingNote: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5'],
    },
    images: [
      {
        type: String,
        required: [true, 'Please add at least one image'],
      },
    ],
  },
  {
    timestamps: true,
  },
)

// Création du modèle RecyclableProduct en utilisant le schéma défini, ou récupération s'il existe déjà
const RecyclableProduct =
  models.RecyclableProduct ||
  model('RecyclableProduct', RecyclableProductSchema)

export default RecyclableProduct
