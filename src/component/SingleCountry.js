import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleCountry() {
  const [country, setCountry] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v2/name/${name}`);
        const data = await res.json();
        // Assuming the API returns an object directly for a single country
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleCountry();
  }, [name]);

  // Render the content once the data is available
  return (
    <section className='p-8 md:py-0 max-w-7xL mx-auto'>
      {country.name && ( // Check if 'country.name' exists before rendering
        <div key={country.population} className='grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen'>
          <article>
            <img src={country.flags.svg} alt={country.name.common} />
          </article>
          <article>
            {/* Display additional details of the single country here */}
            <h3 className='font-bold text-gay-900 text-4xl lg:text-6xl'>{country.name.common}</h3>
            <ul>
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocalString()}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
                <li>Curreny: {item.currencies}</li>
            </ul>
            {item.border && (
            <>
            <h3>Borders</h3>
            <ul>
            {item.borders.map((border, index)=>(
                <li key={index}>{border}</li>
            ))}

            </ul>
            </>
          </article>
        </div>
      ))}
    </section>
  );
}
