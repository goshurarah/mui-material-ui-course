import React from 'react';
import Container from '@mui/material/Container'

import CustomAutoComplete from './CustomAutoComplete.jsx'
import CustomButtons from './CustomButtons.jsx'
import CustomButtonGroups from './CustomButtonGroups.jsx'
import CustomCheckbox from './CustomCheckbox.jsx'
import CustomFloatingActionButton from './CustomFloatingActionButton.jsx'
import CustomRadioGroup from './CustomRadioGroup.jsx'
import CustomRating from './CustomRating.jsx'
import CustomSelect from './CustomSelect.jsx'
import CustomSlider from './CustomSlider.jsx'
import CustomTextField from './CustomTextField.jsx'
import CustomToggleButton from './CustomToggleButton.jsx'


function InputsApp() {
    return (
        <>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomAutoComplete />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomButtons />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomButtonGroups />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomCheckbox />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomFloatingActionButton />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomRadioGroup />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomRating />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomSelect />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomSlider />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomTextField />
            </Container>
            <Container sx={{ bgcolor: 'antiquewhite' }}>
                <CustomToggleButton />
            </Container>
        </>
    )
}
export default InputsApp;