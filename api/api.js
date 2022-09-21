import express from 'express'

const api = express()

api.get('/status', (req, resp) => {
     resp.json({
        msg: 'API en linea y funcionando'
     })
})

export default api