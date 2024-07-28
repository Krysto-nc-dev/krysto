import { Schema, model, models } from 'mongoose'

const ProductSchema = new Schema(
  {
    // createdBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

const Product = models.Product || model('Product', ProductSchema)

export default Product
