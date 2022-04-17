import React, { useState } from 'react'

// block components
import { TopBar, Sidebar } from '@/blocks/Region'
import ChatWindow from '@/blocks/ChatWindow'

// Context
import ApplicationContext from '@/context/Application'

import styles from './Application.module.css'

import useOrganizationById from '@/hooks/services/useOrganizationById'
import { PageLoader } from '@/blocks'
import { storageAPI } from '@/utils'

const Application = () => {
  const storage = storageAPI()
  const channel = JSON.parse(storage.getItem('channel') || '{}')

  const [organizationId, setOrganizationId] = useState('')
  const [organizationName, setOrganizationName] = useState('')
  const [channelId, setChannelId] = useState(channel.channel_id || '')
  const [channelName, setChannelName] = useState(channel.channel_name || '')
  const [channelData, setChannelData] = useState(channel || {})

  const {
    response: organizationResponse,
    error: organizationError,
    loading: organizationLoading,
  } = useOrganizationById()

  if (organizationLoading) return <PageLoader organizationLoading />
  if (organizationError) return organizationError.message

  if (organizationResponse) {
    if (organizationId !== organizationResponse.organization_id) {
      setOrganizationId(organizationResponse.organization_id)
    }
    if (organizationName !== organizationResponse.organization_name) {
      setOrganizationName(organizationResponse.organization_name)
    }
  }

  const setChannel = (channel) => {
    if (channel && channel.channel_id) {
      setChannelName(channel.channel_name)
      setChannelId(channel.channel_id)
      setChannelData(channel)
      storage.setItem('channel', JSON.stringify(channel))
    }
  }

  const applicationContext = {
    organizationId,
    organizationName,
    channelId,
    channelName,
    channelData,
    setChannel,
  }

 
  return (
    organizationName && (
      <ApplicationContext.Provider value={applicationContext}>
        <div className={styles.container}>
          <TopBar orgName={organizationName} />
          <main className={styles.contentArea}>
            <Sidebar />
            <section className={styles.body}>
              <ChatWindow />
            </section>
          </main>
        </div>
      </ApplicationContext.Provider>
    )
  )
}

export default Application
