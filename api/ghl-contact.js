export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { firstName, lastName, email, profession, address, connectSalesRep } = req.body

  // Validate required fields
  if (!firstName || !lastName || !email || !profession || !address) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Call GHL API server-to-server
    const response = await fetch(
      'https://rest.gohighlevel.com/v1/contacts/',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GHL_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          customFields: {
            profession,
            address,
            connectSalesRep: connectSalesRep ? 'Yes' : 'No'
          }
        })
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error('GHL API Error:', error)
      return res.status(response.status).json({ error: 'Failed to create contact in GHL' })
    }

    const data = await response.json()
    return res.status(200).json({ success: true, contactId: data.id })
  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
