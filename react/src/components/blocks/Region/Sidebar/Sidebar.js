import React from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '@/i18n'

// Domain Components.
import SidebarNav from './SidebarNav'

// Utils.
import { RoutePaths } from '@/utils'
import styles from './Sidebar.styles.css'

const Sidebar = (props) => {
  const { formatMessage } = useI18n()
  return (
    <section className={styles.sidebarMain}>
      <SidebarNav />
    </section>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
}

export default Sidebar
