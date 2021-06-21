/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import router from 'next/router'
import { useEffect } from 'react'
import * as gtag from 'utils/gtag'

export default function useGtag() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    function handleRouteChange(url: URL) {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
