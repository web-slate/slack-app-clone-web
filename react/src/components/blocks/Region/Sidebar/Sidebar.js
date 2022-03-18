import React from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '@/i18n'

// Domain Components.
import SidebarNav from './SidebarNav'

// Utils.
import { RoutePaths } from '@/utils'

const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props
  const { formatMessage } = useI18n()

  const pages = [
    {
      title: formatMessage({ id: 'dashboard' }),
      href: RoutePaths.dashboard,
      icon: '',
    },
    {
      title: formatMessage({ id: 'other_module' }),
      href: RoutePaths.dashboard,
      icon: '',
    },
  ]

  return (
    <section>
      <div {...rest}>
        <SidebarNav pages={pages} />
      </div>
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
