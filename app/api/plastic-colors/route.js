import connectDB from '@/config/database'
import PlasticColor from '@/models/PlasticColor'
// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB()
    const plasticColors = await PlasticColor.find({})
    // Fetch data from your database
    return new Response(JSON.stringify(plasticColors), {
      status: 200,
    })
  } catch (error) {
    console.log('Error: ', error)
    return new Response('Something went wrong', { status: 500 })
  }
}
