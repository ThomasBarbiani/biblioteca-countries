import {  CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Banner from '../components/Banner';
import CountriesCards from '../components/CountriesCards';

const defaultTheme = createTheme();

const Countries = () => {

    const [data, setData] = useState(null);

    const dataCountries = async (url) => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const url = 'https://countryinfoapi.com/api/countries'
        dataCountries(url);
    }, []);

    
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                <Banner />
                <CountriesCards data={data}/>
            </main>
        </ThemeProvider>
    )
}

export default Countries