import { Box, Container } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react'
import CountryCard from './CountryCard';

const CountriesCards = ({data}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Número de itens por página

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : [];
  
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };

    return (
    <>
        <CountryCard currentItems={currentItems}/>
        <Container sx={{ py: 2 }} maxWidth="sm">
            <Box display="flex" justifyContent="center">
                {data && (
                    <Pagination
                        count={Math.ceil(data.length / itemsPerPage)} 
                        page={currentPage}
                        size="large"  
                        color="primary"
                        onChange={handlePageChange}
                    />
                )}
            </Box>
        </Container>
    </>
    )
}

export default CountriesCards