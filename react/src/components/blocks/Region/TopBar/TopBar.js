import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from '../../Header'

const TopBar = (props) => {
  const { className, ...rest } = props
  return (
    <Header {...rest } />  
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
}

export default TopBar
