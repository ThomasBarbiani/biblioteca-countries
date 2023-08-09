import { CssBaseline } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchParams] = useSearchParams()

    const [country, setCountry] = useState(null)
    const query = searchParams.get("q")

    const getSearchedCountry = async (url) => {
        try {
            const res = await axios.get(url);
            setCountry(res.data);
            console.log(country)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        const url = `https://countryinfoapi.com/api/countries/name/${query}`
        getSearchedCountry(url)
    }, [query])
    
    return (
        <>
            <CssBaseline />
            {country && (
                <>  
                    <p>{country.name}</p> 
                    <p>{country.cca3}</p> 
                    <p>{country.capital}</p> 
                </>
            )}
        </>
    )
}

export default Search