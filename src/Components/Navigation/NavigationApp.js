import React from 'react';
import Container from '@mui/material/Container'

import CustomBottomNavigation from './CustomBottomNavigation.jsx'
import CustomBreadcrumbs from './CustomBreadcrumbs.jsx'
import CustomDrawer from './CustomDrawer.jsx'
import CustomLink from './CustomLink.jsx'
import CustomMenu from './CustomMenu.jsx'
import CustomPagination from './CustomPagination.jsx'
import CustomSpeeddial from './CustomSpeeddial.jsx'
import CustomStepper from './CustomStepper.jsx'
import CustomTabs from './CustomTabs.jsx'

function NavigationApp() {
    return (
        <>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomBottomNavigation />
            </Container>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomBreadcrumbs />
            </Container>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomDrawer />
            </Container>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomLink />
            </Container>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomMenu />
            </Container>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomPagination />
            </Container>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomSpeeddial />
            </Container>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomStepper />
            </Container>
            <Container sx={{ bgcolor: '#37BC9B' }}>
                <CustomTabs />
            </Container>
        </>
    )
}
export default NavigationApp;