import express from 'express'
import history from 'connect-history-api-fallback'
import path from 'path'

const staticPath = path.join(__dirname, '../static')
const serveStatic = [express.static(staticPath), history()]

export default serveStatic
