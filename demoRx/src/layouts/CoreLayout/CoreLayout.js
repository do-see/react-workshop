import React from 'react'
import '../../styles/core.scss'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import themeDecorator from 'material-ui/lib/styles/theme-decorator'
import themePreferences from './ThemePreferences'
import classes from './ApplicationStyles.scss'

export class CoreLayout extends React.Component {

  render () {
    return (<div className={classes.application}>{React.cloneElement(this.props.children, this.props)}</div>)
  }
}

const muiTheme = getMuiTheme(themePreferences)
export default themeDecorator(muiTheme)(CoreLayout)
