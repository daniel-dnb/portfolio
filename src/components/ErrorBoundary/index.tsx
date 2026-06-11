import { Component } from 'react'
import type { ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
