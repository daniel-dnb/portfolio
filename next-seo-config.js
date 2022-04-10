const title = 'Daniel Bernardes — Front-End Developer.'
const description = 'Brazilian front-end developer.'

const SEO = {
  title,
  description,
  caconical: 'https://www.danielbnd.com',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.danielbnd.com',
    title,
    description,
    images: [
      {
        url: 'https://www.danielbnd.com/me.jpg',
        alt: title
      }
    ]
  }
}

export default SEO
