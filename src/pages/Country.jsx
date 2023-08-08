import * as React from 'react';
import axios from 'axios'
import { useState, useEffect} from 'react'
import { Box, CssBaseline } from '@mui/material';
import { useParams } from 'react-router-dom';


const Country = () => {

    const [data, setData] = useState(null);
    const { name } = useParams()

    const dataCountry = async (url) => {
        try {
            const response = await axios.get(url + name)
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const url = 'https://countryinfoapi.com/api/countries/'
        dataCountry(url);
    }, []);

    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: '#DBDBDB',
                    borderRadius: '20px',
                    pt: 8,
                    pb: 6,
                    width: '1000px',
                    display: 'flex',
                    margin: '0 auto',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif'
                }}
            >
                {data && (
                    <div key={data.name}>
                        <img src={data.flag} style={{ width: '300px' }} alt={data.cc3}></img>
                        <h1>{data.name}</h1>
                        <h2>Continente: {data.continents}</h2>
                        <h3>Capital: {data.capital}</h3>
                        <h3>População: {data.population.toLocaleString()}</h3>
                        <h3>Idiomas Oficiais:</h3>
                        <ul>
                            {Object.entries(data.languages).map(([code, language]) => (
                                <li key={code}>{language}</li>
                            ))}
                        </ul>
                        <h3>Fuso Horários:</h3>
                        <ul>
                            {data.timezones.map((timezone) => (
                                <li>{timezone}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Box>
        </>
    )
}

export default Country