import AppBar from '@material-ui/core/AppBar'
import styled from 'styled-components'

export const HeaderBox = styled(AppBar)`
  &.MuiAppBar-root {
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    height: 80px;
    justify-content: center;
  }
`
