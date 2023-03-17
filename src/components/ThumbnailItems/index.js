import './index.css'

const ThumbnailItems = props => {
  const {eachImageDetails, changeImageAndCheckRes} = props
  const {id, thumbnailUrl} = eachImageDetails

  const clickedOnThumbnail = () => {
    changeImageAndCheckRes(id)
  }

  return (
    <li className="thumbnailItems">
      <button
        className="thumbnail-button-img"
        onClick={clickedOnThumbnail}
        type="button"
      >
        <img
          className="thumbnail-image-style"
          src={thumbnailUrl}
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default ThumbnailItems
