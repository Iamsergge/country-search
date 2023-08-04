import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const url = `https://restcountries.com/v2/all?fields=name,flags`;

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null); // Add a state to handle errors

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data'); // Throw an error for non-ok responses
        }
        const countries = await response.json();
        setCountries(countries);
      } catch (error) {
        setError(error.message); // Set the error state if there's an error
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData(); // Call the async function to fetch data when the component mounts
  }, []);

  // Render the country data or the error message using conditional rendering
  return (
    <>
      {error && <div>Error: {error}</div>}
      <section className='grid'>
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } = country;

          return (
            <Link key={numericCode} to={`/${name.common}`}>
              <article>
                <div>
                  <img src={flag} alt={name.common} />
                </div>
                <div className='details'>
                  <h3>{name.common}</h3>
                  <h4>Population: <span>{population}</span></h4>
                  <h4>Region: <span>{region}</span></h4>
                  <h4>Capital: <span>{capital}</span></h4>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
