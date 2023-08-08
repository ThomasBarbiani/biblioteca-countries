import { AppBar, Stack, TextField, Toolbar, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from '@mui/icons-material/Search';


const Navbar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <AppBar position="relative">
        <Stack
          direction="row"
          marginLeft={20}
          spacing={150}
        >
          <Toolbar>
            <Link to="/">
                <Typography variant="h6" color="inherit" noWrap>
                    Países
                </Typography>
            </Link>
          </Toolbar>
          <form onSubmit={handleSubmit} style={{marginTop: "8px"}}>
              <Stack
                direction="row"
                spacing={1}
              >
                <TextField
                  sx={{backgroundColor: 'white'}}
                  id="filled-multiline-flexible"
                  label="Pesquise o país"
                  variant="filled"
                  size="small"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
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