const getDirectory = require('./get')
const createDirectory = require('./create')
const deleteDirectory = require('./delete')
const updateDirectory = require('./update')
const path = require("path")

module.exports = async function routes(fastify) {
    // Register auth handler
    fastify.addHook('preHandler', fastify.auth([fastify.basicAuth]))
    // Register routes
    fastify.get("/home", (req, reply) => {

        reply.sendFile(path.join(process.cwd(), "/src/http/html/index.html"))
        return reply
    })
    fastify.get('/directories', getDirectory.opts, getDirectory.handler)
    fastify.get('/directories/:directoryId', getDirectory.opts, getDirectory.handler)
    fastify.post('/directories', createDirectory.opts, createDirectory.handler)
    fastify.delete('/directories/:directoryId', deleteDirectory.opts, deleteDirectory.handler)
    fastify.put('/directories/:directoryId', updateDirectory.opts, updateDirectory.handler)
}
