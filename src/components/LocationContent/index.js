import './index.css'

const LocationContent = props => {
  const {locationDetails} = props
  const {name, imageUrl, description} = locationDetails

  return (
    <li className="location-list">
      <div className="location-list-container">
        <img src={imageUrl} alt={name} className="image" />
        <div className="location-info-container">
          <h1 className="heading">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default LocationContent
