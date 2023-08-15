import { AppBar, Stack, TextField, Toolbar, Typography, IconButton, Autocomplete, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Search from '@mui/icons-material/Search';
import axios from 'axios';


const Navbar = () => {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!selectedCountry) return;

    navigate(`/country/${selectedCountry.cca3}`);
  };

  const dataCountries = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const url = 'https://countryinfoapi.com/api/countries';
    dataCountries(url);
  }, []);

  return (
    <AppBar position="relative">
        <Stack
          direction="row"
          marginLeft={20}
          spacing={150}
        >
          <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
                <Typography variant="h6" color="inherit" noWrap>
                    Países
                </Typography>
            </Link>
          </Toolbar>
          <form onSubmit={handleSubmit} style={{marginTop: "8px", marginBottom: "8px"}}>
              <Stack
                direction="row"
                spacing={1}
              >
                <Autocomplete
                  sx={{ backgroundColor: 'white', width: '200px' }}
                  freeSolo
                  disableClearable
                  options={data ? data.map((country) => ({ 
                      label: country.name, 
                      flag: country.flag, 
                      cca3: country.cca3 
                  })) : []}
                  renderOption={(props, country) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                      <img
                        loading="lazy"
                        width="20"
                        src={country.flag}
                        srcSet={country.flag}
                        alt=""
                      />
                      {country.label}
                    </Box>
                  )}
                  onChange={(event, newValue) => {
                    setSelectedCountry(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Pesquisar o país"
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                      }}
                    />
                  )}
                />
                <IconButton aria-label="search" type="submit" style={{ color: 'black' }}>
                  <Search />
                </IconButton>
              </Stack>
          </form>
        </Stack>
    </AppBar>
  )
}

export default Navbar