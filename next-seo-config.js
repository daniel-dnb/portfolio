const title = 'Daniel Bernardes — Front-End Developer.'
const description =
  'Brazilian front-end developer who loves to create innovative solutions.'
const url = 'https://danielbnd.com'

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
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'Daniel Bernardes'
    },
    {
      name: 'application-name',
      content: 'Daniel Bernardes'
    },
    {
      name: 'keywords',
      content:
        'Daniel, Daniel Bernardes, danielbnd, daniel bnd, Front-End, frontend, programador, developer, rio de janeiro, rj, sites, web, freelance web developer rio de janeiro'
    },
    {
      name: 'twitter:image',
      content: `${url}/banner.png`
    }
  ]
}

export default SEO
