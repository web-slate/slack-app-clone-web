import React, { useState } from 'react'
import PropTypes from 'prop-types'

// UI Components.
import { InputTextField } from '@/ui'

// Custom Hooks.
import { useI18n } from '@/i18n'

// block components
import { TopBar, Sidebar } from '@/blocks/Region'
import ChatWindow from '@/blocks/ChatWindow'

// Context
import ApplicationContext from '@/context/Application'

import styles from './Application.module.css'

// FIXME: This values should be dynamic
const ORGANIZATION_ID = '1ae5241e-a51b-11ec-b909-0242ac120002'
const CHANNEL_ID = '4f0300c2-a51b-11ec-b909-0242ac120002'
const CHANNEL_NAME = 'hello'

const Application = () => {
  //TODO: Update organizationId and channelId based on selection
  const [organizationId, setOrganizationId] = useState(ORGANIZATION_ID)
  const [channelId, setChannelId] = useState(CHANNEL_ID)
  const [channelName, setChannelName] = useState(CHANNEL_NAME)

  const applicationContext = {
    organizationId,
    channelId,
    channelName,
  }

  return (
    <ApplicationContext.Provider value={applicationContext}>
      <div className={styles.container}>
        <TopBar />
        <main className={styles.contentArea}>
          <Sidebar />
          <section className={styles.body}>
            <ChatWindow />
          </section>
        </main>
      </div>
    </ApplicationContext.Provider>
  )
}

export default Application
