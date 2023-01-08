import React from 'react';
import Container from '@mui/material/Container'


import CustomModal from './CustomModal.jsx'
import CustomPopover from './CustomPopover.jsx'
import CustomPopper from './CustomPopper.jsx'
import CustomTransitions from './CustomTransitions.jsx'

function UtilsApp() {
    return (
        <>
            <Container sx={{ bgcolor: 'lightgrey' }}>
                <CustomModal />
            </Container>
            <Container sx={{ bgcolor: 'lightgrey' }}>
                <CustomPopover />
            </Container>
            <Container sx={{ bgcolor: 'lightgrey' }}>
                <CustomPopper />
            </Container>
            <Container sx={{ bgcolor: 'lightgrey' }}>
                <CustomTransitions />
            </Container>
        </>
    )
}
export default UtilsApp;