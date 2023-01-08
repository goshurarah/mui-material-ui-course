import React from 'react';
import Container from '@mui/material/Container'

import CustomAlert from './CustomAlert.jsx'
import CustomBackdrop from './CustomBackdrop.jsx'
import CustomDialog from './CustomDialog.jsx'
import CustomProgress from './CustomProgress.jsx'
import CustomSkeleton from './CustomSkeleton.jsx'
import CustomSnackbar from './CustomSnackbar.jsx'

function FeedbackApp() {
    return (
        <>
            <Container sx={{ bgcolor: 'khaki' }}>
                <CustomAlert />
            </Container>
            <Container sx={{ bgcolor: 'khaki' }}>
                <CustomBackdrop />
            </Container>
            <Container sx={{ bgcolor: 'khaki' }}>
                <CustomDialog />
            </Container>
            <Container sx={{ bgcolor: 'khaki' }}>
                <CustomProgress />
            </Container>
            <Container sx={{ bgcolor: 'khaki' }}>
                <CustomSkeleton />
            </Container>
            <Container sx={{ bgcolor: 'khaki' }}>
                <CustomSnackbar />
            </Container>
        </>
    )
}
export default FeedbackApp;