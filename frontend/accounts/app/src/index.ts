import connectRedis                           from 'connect-redis'
import express                                from 'express'
import session                                from 'express-session'
import next                                   from 'next'
import { AdminApi, Configuration, PublicApi } from '@ory/kratos-client'

import flow                                   from './flow'

const RedisStore = connectRedis(session)

const bootstrap = async () => {
  const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: __dirname,
  })

  const handle = app.getRequestHandler()

  await app.prepare()

  const server = express()

  server.use(
    session({
      resave: false,
      secret: process.env.SESSION_SECRET || 'session-secret',
      saveUninitialized: true,
      cookie: {
        domain: process.env.SESSION_COOKIE_DOMAIN || '.serenity.local.aunited.dev',
      },
      store: new RedisStore({
        host: process.env.REDIS_HOST || 'redis',
      }),
    }),
  )

  server.use((req, res, nextMid) => {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    req['kratos'] = {
      adminApi: new AdminApi(
        new Configuration({ basePath: process.env.KRATOS_ADMIN_URL || 'http://kratos:4434/' }),
      ),
      publicApi: new PublicApi(
        new Configuration({
          basePath: process.env.KRATOS_PUBLIC_URL || 'https://kratos.serenity.local.aunited.dev/',
        }),
      ),
    }

    nextMid()
  })

  server.use(flow())

  server.get('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT || 3000)
}

bootstrap()
