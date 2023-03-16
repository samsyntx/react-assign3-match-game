import './index.css'

const GameOverComp = props => {
  const {score, startingGameAgain} = props

  const playAgainButtonClicked = () => {
    startingGameAgain()
  }

  return (
    <div className="game-over-complete-container">
      <div className="trophy-content-container">
        <img
          className="trophy-style"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <h1>Your Score</h1>
        <p className="score-show-in-result">{score}</p>
        <button
          onClick={playAgainButtonClicked}
          className="play-gain-button"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="play-gain-text">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default GameOverComp
