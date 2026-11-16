import Script from 'next/script'

interface GoogleAdSenseProps {
  clientId: string
}

export default function GoogleAdSense({ clientId }: GoogleAdSenseProps) {
  return (
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    />
  )
}
