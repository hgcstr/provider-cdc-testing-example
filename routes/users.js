const userRoutes = (app, fs) => {
  // variables
  const dataPath = './data/users.json'

  // helper methods
  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = 'utf8',
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err
      }

      callback(returnJson ? JSON.parse(data) : data)
    })
  }

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = 'utf8',
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err
      }

      callback()
    })
  }

  // READ
  app.get('/users', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err
      }

      res.send(JSON.parse(data))
    })
  })

  //GET BY ID
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err
      }

      const userData = JSON.parse(data)[userId]
      console.log(userData)

      if (userData != undefined) {
        res.status(200)
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.parse(data)[userId])
      } else {
        res.status(404)
        const notFound = { code: 'NotFound', Message: 'User not found' }
        res.setHeader('Content-Type', 'application/json')
        res.send(notFound)
      }
    })
  })

}

module.exports = userRoutes
