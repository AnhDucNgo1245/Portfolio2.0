import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    console.error('ErrorBoundary caught error:', error)
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary detail:', error.message, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div style={{ color: 'red', background: '#111', padding: 16, zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0 }}>
          ERROR: {this.state.error?.message}
        </div>
      )
    }
    return this.props.children
  }
}

