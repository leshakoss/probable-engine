import React from 'react'

class InteractiveComponent extends React.Component<{}, { color: string }> {
  constructor(props) {
    super(props)

    this.state = {
      color: 'red'
    }
  }

  render() {
    const { color } = this.state
    return (
      <div style={{ color }} onClick={this.swapColor}>
        Wow! Who knew it would work!
      </div>
    )
  }

  private swapColor = () => {
    this.setState({
      color: this.state.color === 'red' ? 'green' : 'red'
    })
  }
}

const App = () => (
  <div>
    <h1>Hello world!</h1>
    I am an universal app!
    <InteractiveComponent />
  </div>
)

export default App
