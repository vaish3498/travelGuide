import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import LocationContent from '../LocationContent'

class Home extends Component {
  state = {
    locationList: [],
    isLoading: false,
  }

  componentDidMount = () => {
    this.getLocation()
  }

  getLocation = async () => {
    this.setState({
      isLoading: true,
    })

    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updateData = data.packages.map(location => ({
        id: location.id,
        name: location.name,
        imageUrl: location.image_url,
        description: location.description,
      }))
      this.setState({
        locationList: updateData,
        isLoading: false,
      })
    }
  }

  renderLocationList = () => {
    const {locationList} = this.state
    return (
      <ul className="location-list">
        {locationList.map(eachLocation => (
          <LocationContent
            key={eachLocation.id}
            locationDetails={eachLocation}
          />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="line" />
        <div className="location-container">
          {isLoading ? this.renderLoader() : this.renderLocationList()}
        </div>
      </div>
    )
  }
}

export default Home
