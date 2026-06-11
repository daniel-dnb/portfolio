import type { ReactNode } from 'react'
import {
  ClientOnly,
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts
} from '@tanstack/react-router'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import AppProviders from '../providers/AppProviders'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      },
      {
        title: 'Daniel Bernardes - Front-End Developer.'
      },
      {
        name: 'description',
        content:
          'Brazilian front-end developer who loves to create innovative solutions.'
      },
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
        content: 'https://danielbnd.com/banner.png'
      },
      {
        name: 'twitter:description',
        content:
          'Brazilian front-end developer who loves to create innovative solutions.'
      },
      {
        property: 'og:url',
        content: 'https://danielbnd.com'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: 'Daniel Bernardes - Front-End Developer.'
      },
      {
        property: 'og:locale',
        content: 'pt_BR'
      },
      {
        property: 'og:description',
        content:
          'Brazilian front-end developer who loves to create innovative solutions.'
      },
      {
        property: 'og:image',
        content: 'https://danielbnd.com/banner.png'
      }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap'
      }
    ]
  }),
  component: RootComponent
})

function RootComponent() {
  return (
    <RootDocument>
      <AppProviders>
        <Outlet />
      </AppProviders>
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <ClientOnly>
          <TanStackDevtools
            plugins={[
              {
                name: 'TanStack Router',
                render: <TanStackRouterDevtoolsPanel />
              }
            ]}
          />
        </ClientOnly>
        <Scripts />
      </body>
    </html>
  )
}
