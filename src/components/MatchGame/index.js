import {Component} from 'react'
import TabsItems from '../TabsItems'

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

  completeGameContainer = () => (
    <div className="main-container-for-play-game">
      <img
        src="https://www.google.com/search?q=imgae&oq=imgae&aqs=edge..69i57j0i273j0i10i131i433i512l5j0i10i512j0i10i131i433i512.1055j0j9&sourceid=chrome&ie=UTF-8#imgrc=GOm7hFq2LnbWrM"
        alt="trial"
      />
      <TabsItems />
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
