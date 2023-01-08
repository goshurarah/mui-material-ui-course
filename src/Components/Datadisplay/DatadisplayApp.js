import React from 'react';
import Container from '@mui/material/Container'

import CustomAvatar from './CustomAvatar.jsx'
import CustomBadge from './CustomBadge.jsx'
import CustomChip from './CustomChip.jsx'
import CustomDivider from './CustomDivider.jsx'
import CustomIcons from './CustomIcons.jsx'
import CustomLists from './CustomLists.jsx'
import CustomTable from './CustomTable.jsx'
import CustomTooltip from './CustomTooltip.jsx'
import CustomTypography from './CustomTypography.jsx'

function DatadisplayApp() {
    return (
        <>
            <Container sx={{ bgcolor: 'burlywood' }}>
                <CustomAvatar />
            </Container>
            <Container sx={{ bgcolor: 'burlywood' }}>
                <CustomBadge />
            </Container>
            <Container sx={{ bgcolor: 'burlywood' }}>
                <CustomChip />
            </Container>
            <Container sx={{ bgcolor: 'burlywood' }}>
                <CustomDivider />
            </Container>
            <Container sx={{ bgcolor: 'burlywood' }}>
                <CustomIcons />
            </Container>
            <Container sx={{ bgcolor: 'burlywood' }}>
                <CustomLists />
            </Container>
            <Container sx={{ bgcolor: 'burlywood' }}>
                <CustomTable />
            </Container>
            <Container sx={{ bgcolor: 'burlywood' }}>
                <CustomTooltip />
            </Container>
             <Container sx={{ bgcolor: 'burlywood' }}>
                <CustomTypography />
            </Container>
        </>
    )
}
export default DatadisplayApp;