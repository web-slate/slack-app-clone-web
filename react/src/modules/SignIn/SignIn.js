import React from 'react'
import PropTypes from 'prop-types'

// UI Components.
import { InputTextField } from '@/ui'

// Custom Hooks.
import { useI18n } from '@/i18n'

// block components
import { TopBar, Sidebar } from '@/blocks/Region'

import ChatWindow from '@/blocks/ChatWindow'
 

import styles from './SignIn.module.css'

// Utils.
import { RoutePaths } from '@/utils'


const SignIn = (props) => {
  const { formatMessage } = useI18n()
  return (
      <>
      <div className={styles.container}>
      <TopBar />
      <main className={styles.contentArea}>
        <Sidebar />
        <section class={styles.body}>
        <ChatWindow />
        </section>
      </main>
      </div>
      </>
  )
}



export default SignIn
