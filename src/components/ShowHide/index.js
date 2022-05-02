// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  changeFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  changeLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div>
            <button
              className="button"
              type="button"
              onClick={this.changeFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="box">Joe</p>}
          </div>

          <div>
            <button
              className="button"
              type="button"
              onClick={this.changeLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="box">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
