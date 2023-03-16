import {Component} from 'react'
import TabsItems from '../TabsItems'
import ThumbnailItems from '../ThumbnailItems'
import GameOverComp from '../GameOverComp'
import './index.css'

class MatchGame extends Component {
  state = {
    timer: 60,
    isGameRunning: true,
    score: 0,
    ListCategory: 'FRUIT',
    ImageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
  }

  componentDidMount() {
    this.timerId = setInterval(this.startTimerAfterRender, 1000)
  }

  startTimerAfterRender = () => {
    const {timer} = this.state
    if (timer === 0) {
      clearInterval(this.timerId)
      this.setState({isGameRunning: false})
    } else {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    }
  }

  changeImageAndCheckRes = uniqueId => {
    const {ImageId} = this.state
    const {imagesList} = this.props
    if (uniqueId === ImageId) {
      this.setState(prevState => ({score: prevState + 1}))
    } else {
      clearInterval(this.timerId)
      this.setState({isGameRunning: false})
    }
    const generatingRandom = Math.floor(Math.random() * imagesList.length)
    const BImageDetails = imagesList[generatingRandom]
    this.setState({ImageId: BImageDetails.id})
  }

  changeCategoryList = uniqueCategory => {
    this.setState({ListCategory: uniqueCategory})
  }

  startingGameAgain = () => {
    this.setState({
      isGameRunning: true,
      score: 0,
      ListCategory: 'FRUIT',
    })
  }

  renderHeaderSection = () => {
    const {score, timer} = this.state
    const timerFormatted = timer < 10 ? `0${timer}` : timer
    console.log(score)
    return (
      <div className="header-main-container">
        <img
          className="match-game-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <div className="score-and-timer-container">
          <p className="header-paragraph">
            Score : <span className="header-span">{score}</span>
          </p>
          <div className="timer-container">
            <img
              className="timer-icon-css"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="header-span">{timerFormatted} sec</p>
          </div>
        </div>
      </div>
    )
  }

  completeGameContainer = () => {
    const {tabsList, imagesList} = this.props
    const {ListCategory, ImageId} = this.state

    const filteredList = imagesList.filter(
      eachImage => eachImage.category === ListCategory,
    )
    const filterImage = imagesList.filter(each => each.id === ImageId).pop()

    return (
      <div className="main-container-for-play-game">
        <img
          className="main-big-img-style"
          src={filterImage.imageUrl}
          alt={filterImage.id}
        />
        <ul className="menu-items-container">
          {tabsList.map(eachTabItem => (
            <TabsItems
              isActiveTab={eachTabItem.tabId === ListCategory}
              changeCategoryList={this.changeCategoryList}
              tabsItemDetail={eachTabItem}
              key={eachTabItem.tabId}
            />
          ))}
        </ul>
        <ul className="thumbnail-container">
          {filteredList.map(eachImage => (
            <ThumbnailItems
              changeImageAndCheckRes={this.changeImageAndCheckRes}
              eachImageDetails={eachImage}
              key={eachImage.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isGameRunning, score} = this.state
    return (
      <>
        <div className="header-top-menu-container ">
          {this.renderHeaderSection()}
        </div>
        <div className="complete-bg-match-game-container">
          <div className="result-and-game-container">
            {isGameRunning ? (
              this.completeGameContainer()
            ) : (
              <GameOverComp
                score={score}
                startingGameAgain={this.startingGameAgain}
              />
            )}
          </div>
        </div>
      </>
    )
  }
}

export default MatchGame
