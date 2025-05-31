/* eslint-disable react/prop-types */
import styles from './CountryList.module.css';
import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';
function CountryList({cities, isLoading}) {
    // console.log(cities)
    if(!cities.length) return <Message message = "No Countries Added Yet." />
    // const uniqueCountries = set()
    const allCountries = cities.map(city=> ({
    country: city.country,
    emoji: city.emoji,
    id: city.id,
    }));
  
    const uniqueCountries = allCountries.filter(
        (country, index, self) =>
          index === self.findIndex(c => c.country === country.country)
      );
      
    if(isLoading) return <Spinner/>
    
    return (
        <div className = {styles.countryList}>
          {uniqueCountries.map(country=> <CountryItem key = {country.id} country = {country}/>)}
        </div>
    )
}

export default CountryList
