const express = require('express')
const router = express.Router()

router.post('/login', (req, res, next) => {
  const param = { token: 'xxxxxxxxxxxxxx' }
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param)
})

router.get('/user', (req, res, next) => {
  const param = {
    id: 1,
    name: 'sample'
  }
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param)
})

module.exports = router