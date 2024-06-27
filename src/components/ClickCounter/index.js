import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increase = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state

    return (
      <div className="bgCounter">
        <div>
          <h1 className="heading">
            The Button has been clicked
            <br />
            <span className="counter">{count}</span> times
          </h1>
          <p>Click the button to increase the count!</p>
          <button type="button" className="counterBtn" onClick={this.increase}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
