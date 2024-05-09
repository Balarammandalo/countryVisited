import './index.css'

const VisitedCountries = props => {
  const {visitedCountryList, onClickRemove} = props
  const {imageUrl, name, id} = visitedCountryList

  const removeCountry = () => {
    onClickRemove(id)
  }

  return (
    <li className="visited-list">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="name-button">
        <p className="name-para">{name}</p>
        <button className="remove-button" type="button" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
