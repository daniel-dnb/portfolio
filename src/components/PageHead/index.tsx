import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface PageHeadProps {
  title: string
  description: string
}

const PageHead: NextPage<PageHeadProps> = ({
  title,
  description,
  children
}) => {
  const router = useRouter()
  const url = `https://www.danielbnd.com${router.pathname}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      {children}
    </>
  )
}

export default PageHead
