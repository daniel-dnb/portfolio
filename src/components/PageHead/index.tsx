import type { FC, ReactNode } from 'react'
import { useEffect } from 'react'

interface PageHeadProps {
  title: string
  description: string
  children: ReactNode
}

const PageHead: FC<PageHeadProps> = ({
  title,
  description,
  children
}) => {
  useEffect(() => {
    document.title = title

    const metaDescription = document.querySelector('meta[name="description"]')
    metaDescription?.setAttribute('content', description)
  }, [description, title])

  return <>{children}</>
}

export default PageHead
