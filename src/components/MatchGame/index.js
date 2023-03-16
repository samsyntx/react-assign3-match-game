import {Component} from 'react'
import TabsItems from '../TabsItems'
import ThumbnailItems from '../ThumbnailItems'
import './index.css'

class MatchGame extends Component {
  headerRender = () => (
    <div className="header-main-container">
      <img
        className="match-game-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />

      <div className="score-and-timer-container">
        <p className="header-paragraph">
          Score: <span className="header-span">4</span>
        </p>
        <div className="timer-container">
          <img
            className="timer-icon-css"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="header-span">50 sec</p>
        </div>
      </div>
    </div>
  )

  completeGameContainer = () => {
    const {tabsList, imagesList} = this.props
    return (
      <div className="main-container-for-play-game">
        <img
          className="main-big-img-style"
          src="https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png"
          alt="trial"
        />
        <ul className="menu-items-container">
          {tabsList.map(eachTabItem => (
            <TabsItems tabsItemDetail={eachTabItem} key={eachTabItem.tabId} />
          ))}
        </ul>
        <ul className="thumbnail-container">
          {imagesList.map(eachImage => (
            <ThumbnailItems eachImageDetails={eachImage} key={eachImage.id} />
          ))}
        </ul>
      </div>
    )
  }

  gameOverContainer = () => (
    <div className="game-over-complete-container">
      <div className="trophy-content-container">
        <img
          className="trophy-style"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <h1>Your Score</h1>
        <p className="score-show-in-result">30</p>
        <button className="play-gain-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="play-gain-text">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )

  render() {
    const gameRunning = false
    return (
      <div className="complete-bg-match-game-container">
        {this.headerRender()}
        <div className="result-and-game-container">
          {gameRunning
            ? this.completeGameContainer()
            : this.gameOverContainer()}
        </div>
      </div>
    )
  }
}

export default MatchGame
