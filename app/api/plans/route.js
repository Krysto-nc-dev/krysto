import connectDB from '@/config/database'
import Plan from '@/models/Plan'
// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB()
    const plans = await Plan.find({})
    // Fetch data from your database
    return new Response(JSON.stringify(plans), {
      status: 200,
    })
  } catch (error) {
    console.log('Error: ', error)
    return new Response('Something went wrong', { status: 500 })
  }
}
