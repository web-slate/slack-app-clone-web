import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { I18nMsg } from '@/i18n'

import Header from '../../Header'

const TopBar = (props) => {
  const { className, ...rest } = props
  return (
    <Header />  
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
}

export default TopBar
