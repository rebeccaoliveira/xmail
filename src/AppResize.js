import React from 'react'
import { connect } from 'react-redux'
import { isMobile, isDesktop } from './store/actions'
import ReactResizeDetector from 'react-resize-detector'

const AppResize = ({isMobile, isDesktop, compose}) => {
  const onResize = (width, height) => {
    if (width < 960 && compose.device !== 'mobile') {
      isMobile()
    } else if (width >= 960 && compose.device !== 'desktop') {
      isDesktop()
    }
  }

  return (
    <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
  )
}

const mapStateToProps = (state) => ({
  compose: state.compose
})

const mapDispatchToProps = {
  isMobile,
  isDesktop
}

export default connect(mapStateToProps, mapDispatchToProps)(AppResize)
