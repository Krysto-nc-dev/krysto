import connectDB from '@/config/database'
import PlasticType from '@/models/PlasticType'
// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB()
    const plasticTypes = await PlasticType.find({})
    // Fetch data from your database
    return new Response(JSON.stringify(plasticTypes), {
      status: 200,
    })
  } catch (error) {
    console.log('Error: ', error)
    return new Response('Something went wrong', { status: 500 })
  }
}
