import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box'

import top100FilmsApi from './CustomAutoCompleteApi/FilmsApi';
import countriesApi from './CustomAutoCompleteApi/CountriesApi';

function CustomAutoComplete() {
    return (
        <>
            <h1>Auto Complete</h1>
            <h3>Films</h3>
            <Autocomplete sx={{ width: '50%', margin: 'auto' }}
                disablePortal
                autoHighlight
                id="combo-box-demo"
                options={top100FilmsApi}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />

            <h3>Countries</h3>
            <Autocomplete
                id="country-select-demo"
                sx={{ width: '50%', margin: 'auto' }}
                options={countriesApi}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 4, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                        />
                        {option.label} ({option.code}) +{option.phone}
                    </Box>
                )}
                renderInput={(params) => (<TextField {...params} label="Choose a country" inputProps={{
                    ...params.inputProps, autoComplete: 'new-password', // disable autocomplete and autofill
                }}
                />
                )}
            />

        </>
    );
}

export default CustomAutoComplete;
