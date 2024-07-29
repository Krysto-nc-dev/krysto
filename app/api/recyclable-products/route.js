import connectDB from '@/config/database'
import RecyclableProduct from '@/models/RecyclableProduct'
// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB()
    const recyclableProducts = await RecyclableProduct.find({})
    // Fetch data from your database
    return new Response(JSON.stringify(recyclableProducts), {
      status: 200,
    })
  } catch (error) {
    console.log('Error: ', error)
    return new Response('Something went wrong', { status: 500 })
  }
}
