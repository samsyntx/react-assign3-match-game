import './index.css'

const ThumbnailItems = props => {
  const {eachImageDetails, changeImageAndCheckRes} = props
  const {id, thumbnailUrl} = eachImageDetails

  const clickedOnThumbnail = () => {
    changeImageAndCheckRes(id)
  }

  return (
    <li className="thumbnailItems">
      <img
        onClick={clickedOnThumbnail}
        className="thumbnail-image-style"
        src={thumbnailUrl}
        alt={id}
      />
    </li>
  )
}

export default ThumbnailItems
