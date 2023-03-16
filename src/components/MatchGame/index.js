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
