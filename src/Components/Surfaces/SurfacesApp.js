import React from 'react';
import Container from '@mui/material/Container'

import CustomAccordion from './CustomAccordion.jsx'
import CustomAppbar, { AppbarWithResponsiveMenu, ResponsiveAppbarWithDrawer } from './CustomAppbar.jsx'
import CustomCard from './CustomCard.jsx'
import CustomPaper from './CustomPaper.jsx'

function SurfacesApp() {
    return (
        <>
            <Container sx={{ bgcolor: 'lightgrey' }}>
                <CustomAccordion />
            </Container>
            <Container sx={{ bgcolor: 'lightgrey' }}>
                <CustomAppbar />
                <AppbarWithResponsiveMenu />
                <ResponsiveAppbarWithDrawer />
            </Container>
            <Container sx={{ bgcolor: 'lightgrey' }}>
                <CustomCard />
            </Container>
            <Container sx={{ bgcolor: 'lightgrey' }}>
                <CustomPaper />
            </Container>
        </>
    )
}
export default SurfacesApp;