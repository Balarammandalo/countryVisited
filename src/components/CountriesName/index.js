import './index.css'

const CountriesName = props => {
  const {countryDetails, onVisitCountry} = props
  const {id, name, isVisited} = countryDetails

  const visitCountry = () => {
    onVisitCountry(id)
  }

  return (
    <li>
      <div className="country-item">
        <p className="country-name">{name}</p>
        {isVisited ? (
          <p className="visit-heading">Visited</p>
        ) : (
          <button className="visit-button" type="button" onClick={visitCountry}>
            Visit
          </button>
        )}
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CountriesName
