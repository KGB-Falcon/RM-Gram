import { ApolloProvider } from '@apollo/client'
import {AppProps} from 'next/app' 
import 'tailwindcss/tailwind.css'
import { Client } from '../apollo/client'
import { Layout } from '../components/organisms/layout'

function MyApp({ Component, pageProps }: AppProps){
  return (
    <ApolloProvider client={Client}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp