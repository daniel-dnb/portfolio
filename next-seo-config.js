const title = 'Daniel Bernardes — Front-End Developer.'
const description =
  'Brazilian front-end developer who loves to create innovative solutions.'
const url = 'https://www.danielbnd.com'

const SEO = {
  title,
  description,
  caconical: url,
  openGraph: {
    url: url,
    type: 'website',
    title,
    locale: 'pt_BR',
    description,
    images: [
      {
        url: `${url}/banner.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    site: '@dann_bnd',
    handle: '@dann_bnd',
    cardType: 'summary_large_image'
  }
}

export default SEO
