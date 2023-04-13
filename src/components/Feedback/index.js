// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClick: false}

  onChangeEmoji = () => {
    this.setState({isClick: true})
  }

  renderFeedBackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="question-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(eachItems => (
            <li key={eachItems.id}>
              <button
                className="button"
                type="button"
                onClick={this.onChangeEmoji}
              >
                <img
                  className="emoji-img"
                  src={eachItems.imageUrl}
                  alt={eachItems.name}
                />
                <br />
                <spam className="emoji-name">{eachItems.name}</spam>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankyouResponse = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img className="thankyou-img" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isClick} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isClick ? this.thankyouResponse() : this.renderFeedBackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
