import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

// UI Components.
import { InputTextField } from '@/ui'

// Custom Hooks.
import { useI18n } from '@/i18n'

// Utils.
import { RoutePaths } from '@/utils'

// Service Hooks
import usePost from '@/hooks/usePost'

const SAMPLE_POST_API_URL = 'https://jsonplaceholder.typicode.com/posts'

const SignIn = (props) => {
  const navigate = useNavigate()
  const { formatMessage } = useI18n()

  const { loading, error, response, sendPostData } = usePost(
    SAMPLE_POST_API_URL,
    'sendPostData'
  )

  return (
    <>
      <section>
        <div>
          <h1>Login Form</h1>
          <div>
            {error && 'API is failed'}
            {response && 'Submitted successfully'}
          </div>
          Username:
          <InputTextField
            name="name"
            value=""
            placeholder={formatMessage({ id: 'user_name' })}
          />
          <button
            onClick={async () => {
              await sendPostData({
                id: 1,
                title: 'title',
                body: 'body',
                userId: 1,
              })
              navigate(RoutePaths.DashBoard)
            }}
            disabled={loading}
          >
            go to dashboard
          </button>
        </div>
      </section>
    </>
  )
}

SignIn.propTypes = {
  title: PropTypes.string,
}

export default SignIn
