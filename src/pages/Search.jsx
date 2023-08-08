import { CssBaseline } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchParams] = useSearchParams()

    const [country, setCountry] = useState(null)
    const query = searchParams.get("q")

    const getSearchedCountry = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setCountry(data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        const searchWithQueryURL = `https://countryinfoapi.com/api/countries/name/${query}`;

        getSearchedCountry(searchWithQueryURL);
    }, [query])

    return (
        <>
            <CssBaseline />
            {country && (
                <>
                    <p>{country.cca3}</p>
                </>
            )}
        </>
    )
}

export default Search