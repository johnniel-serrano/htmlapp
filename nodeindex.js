// create server with vercel serve
const handler = require('serve-handler')
const http = require('http')

const server = http.createServer((request, response) => {
    // return default response
    return handler(request, response)
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000')
})