const express = require('express')
const server = express()
server.use(express.json())

const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')


server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        messageCustom: 'big error!',
        message: err.message,
        stack: err.stack,
      });
})

server.use('*', (req, res) =>  {
    res.json({check: 'one, two, one, two'})
})

module.exports = server
