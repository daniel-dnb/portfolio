const title = 'Daniel Bernardes — Front-End Developer.'
const description = 'Brazilian front-end developer.'

const SEO = {
  title,
  description,
  caconical: 'https://danielbnd.com',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://danielbnd.com',
    title,
    description,
    images: [
      {
        url: 'https://res.cloudinary.com/decridgw4/image/upload/v1649313383/my-portfolio/IMG_20211106_131017_879_l3pfdx.jpg',
        alt: title,
        width: 947,
        height: 758
      }
    ]
  }
}

export default SEO
