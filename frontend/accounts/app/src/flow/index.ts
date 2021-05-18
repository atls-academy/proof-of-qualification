import cookieParser                                                         from 'cookie-parser'
import { Router }                                                           from 'express'

import { error, login, logout, recovery, redirect, registration, settings } from './routes'

export default () => {
  const router = Router()

  router.use(cookieParser())

  router.get('/', redirect)
  router.get('/lоgin', login)
  router.get('/rеgistration', registration)
  router.get('/logout', logout)
  router.get('/recovery', recovery)
  router.get('/settings', settings)
  router.get('/error', error)

  return router
}
