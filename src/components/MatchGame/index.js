import {Component} from 'react'

class MatchGame extends Component {
  headerRender = () => (
    <div className="header-main-container">
      <div className="img-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <div className="score-and-timer-container">
        <p>
          Score: <span>4</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>
            <span>50</span> sec
          </p>
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <div className="complete-bg-match-game-container">
        {this.headerRender()}
        <div className="result-and-game-container">
          {this.completeGameContainer()}
        </div>
      </div>
    )
  }
}

export default MatchGame
