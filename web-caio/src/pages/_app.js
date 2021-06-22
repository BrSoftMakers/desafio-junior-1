import '../../styles/globals.css'
import { Provider as ProviderA , createClient } from 'urql'
import { Provider as ProviderB } from 'react-redux'
import store from '../store/index'

const client = createClient({ url: 'http://localhost:8080/graphql' })

function MyApp({ Component, pageProps }) {
  return (
    <ProviderA value={client}>
      <ProviderB store={store}>
        <Component {...pageProps} />
      </ProviderB>
    </ProviderA>
  )
}

export default MyApp
