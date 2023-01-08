import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';




function CustomRadioGroup() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    
    return (
        <>
            <h1>Radio Group</h1>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <h3>Direction</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio />}
                            label="other"
                        />
                    </RadioGroup>
                </FormControl>
            </Box>

            <h3>Color</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <div>
                    <Radio {...controlProps('a')} />
                    <Radio {...controlProps('b')} color="secondary" />
                    <Radio {...controlProps('c')} color="success" />
                    <Radio {...controlProps('d')} color="default" />
                    <Radio
                        {...controlProps('e')}
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}
                    />
                </div>
            </Box>


        </>
    );
}
export default CustomRadioGroup