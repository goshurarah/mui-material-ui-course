import React from 'react';
import Container from '@mui/material/Container';

import CustomBox from './CustomBox.jsx'
import CustomContainer from './CustomContainer.jsx'
import CustomGrid from './CustomGrid.jsx'
import CustomStack from './CustomStack.jsx'
import CustomImageList from './CustomImageList.jsx'

function LayoutApp() {
    return (
        <>
            <Container sx={{ bgcolor: 'darkorchid' }}>
                <CustomBox />
            </Container>
            <Container sx={{ bgcolor: 'darkorchid' }}>
                <CustomContainer />
            </Container>
            <Container sx={{ bgcolor: 'darkorchid' }}>
                <CustomGrid />
            </Container>
            <Container sx={{ bgcolor: 'darkorchid' }}>
                <CustomStack />
            </Container>
            <Container sx={{ bgcolor: 'darkorchid' }}>
                <CustomImageList />
            </Container>
        </>
    )
}
export default LayoutApp;