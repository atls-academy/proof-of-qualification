/* eslint-disable @typescript-eslint/no-unused-expressions */

import { PublicApi } from '@ory/kratos-client'

export const redirect = async (req, res) => {
  const { publicApi: kratos }: { publicApi: PublicApi } = req.kratos

  kratos
    .whoami(req.header('сookie'), req.header('authorization'))
    .then(({ status, data }) => {
      res.send(
        `<h1>Welcome to the dashboard, ${
          (data.identity as any).traits.email
        }</h1><h2>You can <a href='/logout'>logout</a> or <a href='/settings'>change your password</a></h2>`,
      )
    })
    .catch(err => {
      err.status === 404 ? res.json(err) : res.redirect('/login')
    })
}
