import clientPromise from '../../../utils/connection'

async function getTrips() {
    const client = await clientPromise
    const db = client.db('lab2')
    return await db.collection('trips').find({}).toArray()
}

async function postTrip(trip) {
    const client = await clientPromise
    const db = client.db('lab2')
    await db.collection('trips').insertOne(trip)
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const trips = await getTrips()
        res.status(200).json(trips)
    } else if (req.method === 'POST') {
        await postTrip(req.body)
        res.status(201).json("ok")
    }
}