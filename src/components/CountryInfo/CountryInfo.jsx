import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export const CountryInfo = () => {

    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState([true])
    const [error, setError] = useState('')

    const {countryName} = useParams()

    const getCountryByName = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            const data = await response.json()
            setCountry(data)
            setIsLoading(false)
            } catch (error) {
                setError(error)
                setIsLoading(false)
                }


    }
    useEffect(() => {
        getCountryByName()
        }, [])

    
  return (
    <div className="country__info__wrapper">
         <button><Link to= '/'>Back</Link></button>
         <div className="country__info__container">
         {country?.map((country, index) => (
        <div className="country__info__container" key={index}>
          <div className="country__info-img">
            <img src={country.flags.png} alt="" />
          </div>

          <div className="country__info">
            <h3> <span>{country.name.common}</span></h3>

            <div className="country__info-left">
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Sub Region: <span>{country.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
              <h5>
                Borders: <span>{country.borders}</span>
              </h5>
              <h5>
                
              </h5>
            </div>
          </div>
        </div>
      ))}
         </div>
    </div>
  )
}
