// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscription: false}

  isClicked = () => {
    this.setState(prevState => ({subscription: !prevState.subscription}))
  }

  buttonText = () => {
    const {subscription} = this.state
    return subscription ? 'Subscribed' : 'Subscribe'
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank You! Happy Learning</p>
          <button type="button" className="button" onClick={this.isClicked}>
            {this.buttonText()}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
