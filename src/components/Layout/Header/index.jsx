import Hidden from '@material-ui/core/Hidden'
import Link from 'next/link'
import { MENU_OPTIONS } from '../../../constants/menu'
import Logo from '../../DataDisplay/Logo'
import Container from '../../Foundation/Container'
import { FlexList, HeaderBox } from './style'

export default function Header() {
  // const menuItems = MENU_OPTIONS.map(option => {
  //   return (
  //     <li key={option.id}>
  //       <Link href={option.link}>
  //         <a>
  //           {option.label}
  //         </a>
  //       </Link>
  //     </li>
  //   )
  // })

  return (
    <HeaderBox position="sticky">
      <Container>
        <Logo invert href="/" />
      </Container>
    </HeaderBox>
  )
}
