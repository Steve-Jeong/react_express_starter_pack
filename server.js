const express = require('express')

const app = express()

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Steve', lastName: 'Jeong' },
    { id: 2, firstName: 'Tom', lastName: 'Jerry' },
    { id: 3, firstName: 'Mickey', lastName: 'Mouse' },
  ]

  res.json(customers)
})

const PORT = 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))