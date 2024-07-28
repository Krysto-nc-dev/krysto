import connectDB from '@/config/database'
import Product from '@/models/Product'
// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB()
    const products = await Product.find({})
    // Fetch data from your database
    return new Response(JSON.stringify(products), {
      status: 200,
    })
  } catch (error) {
    console.log('Error: ', error)
    return new Response('Something went wrong', { status: 500 })
  }
}
