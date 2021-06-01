import Head from 'next/head'
import PropTypes from 'prop-types'
import { TITLE_PAGE, DESCRIPTION } from '../../../constants/global'
import SEO from '../../Configuration/SEO'
import ErrorBoundary from '../../Configuration/Error'
import Footer from '../Footer'
import Header from '../Header'
import { StyledMain } from './style'

export default function DefaultPage({ children }) {
  return (
    <StyledMain>
      <Head>
        <SEO
          title={TITLE_PAGE}
          description={DESCRIPTION}
        />
      </Head>
      <Header />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      <Footer />
    </StyledMain>
  )
}

DefaultPage.propTypes = {
  children: PropTypes.element
}
