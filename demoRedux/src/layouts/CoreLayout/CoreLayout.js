import React, { PropTypes } from 'react'
import '../../styles/core.scss'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import themeDecorator from 'material-ui/lib/styles/theme-decorator'
import themePreferences from './ThemePreferences'
import classes from './ApplicationStyles.scss'

function CoreLayout ({ children }) {
  return (
    <div className='page-container'>
      <div className={classes.application}>
        {children}
      </div>
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

const muiTheme = getMuiTheme(themePreferences)
export default themeDecorator(muiTheme)(CoreLayout)
