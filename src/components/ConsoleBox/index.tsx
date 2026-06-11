import type { CSSProperties, FC, PropsWithChildren } from 'react'
import { cn } from '../../lib/cn'

interface ConsoleBoxType {
  width?: string
  window: string
  title: string
  height: string
  margintop?: string
}

const ConsoleBox: FC<PropsWithChildren<ConsoleBoxType>> = props => {
  const containerStyle: CSSProperties = {
    ...(props.width ? { width: props.width } : {}),
    ...(props.margintop ? { marginTop: props.margintop } : {})
  }

  const bodyStyle: CSSProperties = {
    ...(props.height ? { height: props.height } : {})
  }

  return (
    <div
      className={cn(
        'console-box',
        props.window === 'Large' && 'console-box--large',
        props.window === 'Small' && 'console-box--small'
      )}
      style={containerStyle}
    >
      <div className="console-titlebar" style={{ width: props.width }}>
        <div className="console-controls">
          <div className="traffic-light traffic-light--red" />
          <div className="traffic-light traffic-light--yellow" />
          <div className="traffic-light traffic-light--green" />
        </div>
        <div className="console-titlebar-title">
          {props.title} : node — Konsole
        </div>
      </div>
      <div className="console-body" style={bodyStyle}>
        {props.children}
      </div>
    </div>
  )
}

export default ConsoleBox
