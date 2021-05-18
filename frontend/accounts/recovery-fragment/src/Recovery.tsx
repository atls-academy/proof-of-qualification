import React, { useRef }       from 'react'

import { Button }              from '@ui/button'
import { Input }               from '@ui/input'
import { Box, Column, Layout } from '@ui/layout'
import { Text }                from '@ui/text'

import messages                from './messages'

export const Recovery = ({ intl, email, onChangeEmail, onReset }: any) => {
  const formRef = useRef(null)

  return (
    <form method='POST' ref={formRef}>
      <Box width={400} mx={[32, 0]}>
        <Column>
          <Layout>
            <Text color='white' fontWeight='bold' fontSize='giant'>
              {intl.formatMessage(messages.resetPassword)}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 32]} />
          <Layout>
            <Input
              placeholder={intl.formatMessage(messages.email)}
              value={email}
              onChange={onChangeEmail}
              onEnter={onReset}
            />
          </Layout>
          <Layout flexBasis={24} />
          <Layout>
            <Button fill size='large' color='chicago' fontWeight='medium' onClick={onReset}>
              {intl.formatMessage(messages.sendMail)}
            </Button>
          </Layout>
        </Column>
      </Box>
    </form>
  )
}
