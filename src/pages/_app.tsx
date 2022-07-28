import { AppProps } from 'next/app'
import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ''
  return (
    <React.StrictMode>
      {DOMAIN && (
        <Auth0Provider
          domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? ''}
          clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? ''}
          redirectUri="http://localhost:3000"
          audience={DOMAIN + '/api/v2/'}
          scope="profile email read:users read:current_user"
          // skipRedirectCallback={true}
        >
          <Component {...pageProps} />
        </Auth0Provider>
      )}
    </React.StrictMode>
  )
}
