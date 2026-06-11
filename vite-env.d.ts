/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import type { ComponentType, SVGProps } from 'react'

  const ReactComponent: ComponentType<
    SVGProps<SVGSVGElement> & { className?: string }
  >
  export default ReactComponent
}
