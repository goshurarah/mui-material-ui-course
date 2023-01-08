import React from 'react';
import Container from '@mui/material/Container'

import CustomDateAndTime from './CustomDateAndTime.jsx'
function DateAndTimeApp() {
    return (
        <>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomDateAndTime />
            </Container>
        </>
    )
}
export default DateAndTimeApp;