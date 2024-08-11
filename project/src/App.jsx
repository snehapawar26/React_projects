import axios from "axios";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import "./App.css";
 
export default function App() {
 
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
 
    useEffect(() => {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(res => {
          setCountries(res.data);
          setFiltered(res.data);
        })
    }, []) 
 
  const handleFilter = () => {
    if (search) {
      let _countries = [...countries];
      _countries = _countries.filter(country => {
        let countryName = country.name.common.toLowerCase();
        let searchName = search.toLowerCase();
        if (countryName.startsWith(searchName)) return true;
      });
 
      setFiltered(_countries);
    }
    else {
      setFiltered(countries)
    }
  }
 
  const debouncedFilter = debounce(handleFilter, 1000);
 
  /*   useEffect(() => {
      debouncedFilter();
    }, [search]); */
 
  useEffect(() => {
    if (search) {
      let timeout = setTimeout(() => {
        console.log("getting called")
      }, 1000);
 
 
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [search])
 
  return (
    <>
     {/* <h1>welcome</h1> */}
      <div className="search">
        {/* <h1>welcome</h1> */}
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
 
      <h1>welcome</h1>
 
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Flag</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {
            filtered.map((country, index) => {
              return (
                <tr key={index}>
                  <td>{country.name.common}</td>
                  <td><img src={country.flags.png} width={50} /></td>
                  <td>{country.population}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
 
    </>
  )
}