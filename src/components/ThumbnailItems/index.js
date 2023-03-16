import './index.css'

const ThumbnailItems = props => {
  const {eachImageDetails} = props
  const {id, thumbnailUrl} = eachImageDetails
  return (
    <li className="thumbnailItems">
      <img className="thumbnail-image-style" src={thumbnailUrl} alt={id} />
    </li>
  )
}

export default ThumbnailItems
