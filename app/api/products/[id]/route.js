import connectDB from '@/config/database'
import Product from '@/models/Product'
// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB()
    const product = await Product.findById(params.id)
    // Fetch data from your database

    if (!product) {
      return new Response('Product not found', { status: 404 })
    }
    return new Response(JSON.stringify(product), {
      status: 200,
    })
  } catch (error) {
    console.log('Error: ', error)
    return new Response('Something went wrong', { status: 500 })
  }
}
