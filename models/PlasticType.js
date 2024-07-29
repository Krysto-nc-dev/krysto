import mongoose from 'mongoose'

const { Schema, model, models } = mongoose

const PlasticTypeSchema = new Schema(
  {
    sigleFr: {
      type: String,
      required: [true, 'Le sigle en français est requis'],
      trim: true,
      unique: true,
    },
    sigleEn: {
      type: String,
      required: [true, 'Le sigle en anglais est requis'],
      trim: true,
      unique: true,
    },
    scientificNameFr: {
      type: String,
      required: [true, 'Le nom scientifique en français est requis'],
      trim: true,
    },
    scientificNameEn: {
      type: String,
      required: [true, 'Le nom scientifique en anglais est requis'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Une description est requise'],
    },
    images: [
      {
        type: String,
        required: [true, 'Au moins une image est requise'],
      },
    ],
    flotability: {
      alcohol: { type: Boolean, required: true },
      vegetableOil: { type: Boolean, required: true },
      water: { type: Boolean, required: true },
      glycerine: { type: Boolean, required: true },
    },
    injectionTemperature: {
      type: String,
      required: [true, 'La température d’injection est requise'],
    },
    density: {
      type: Number,
      required: [true, 'La densité est requise'],
    },
    meltingPoint: {
      type: Number,
      required: [true, 'Le point de fusion est requis'],
    },
    properties: {
      heatResistance: {
        type: String,
        required: [true, 'La résistance à la chaleur est requise'],
      },
      chemicalResistance: {
        type: String,
        required: [true, 'La résistance chimique est requise'],
      },
      rigidity: { type: String, required: [true, 'La rigidité est requise'] },
      toxicity: { type: String, required: [true, 'La toxicité est requise'] },
      environmentalImpact: {
        type: String,
        required: [true, 'L’impact environnemental est requis'],
      },
    },
  },
  { timestamps: true },
)

const PlasticType =
  models.PlasticType || model('PlasticType', PlasticTypeSchema)

export default PlasticType
