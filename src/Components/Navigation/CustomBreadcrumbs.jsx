import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});

function CustomBreadcrumbs() {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                Breadcrumbs
            </Typography>
            <Typography variant="h3" gutterBottom>
                Basic Breadcrumbs
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/">
                            MUI
                        </Link>
                        <Link
                            underline="hover"
                            color="secondary"
                            href="/material-ui/getting-started/installation/"
                        >
                            Core
                        </Link>
                        <Typography color="text.primary" >Breadcrumbs</Typography>
                    </Breadcrumbs>
                </div>
            </Box>

            <Typography variant="h3" gutterBottom>
                Custom separator
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack spacing={2}>
                    <Breadcrumbs aria-label="breadcrumb" separator="›">
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/">
                            MUI
                        </Link>
                        <Link
                            underline="hover"
                            color="secondary"
                            href="/material-ui/getting-started/installation/"
                        >
                            Core
                        </Link>
                        <Typography color="text.primary" >Breadcrumbs</Typography>
                    </Breadcrumbs>
                    <Breadcrumbs aria-label="breadcrumb" separator="-">
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/">
                            MUI
                        </Link>
                        <Link
                            underline="hover"
                            color="secondary"
                            href="/material-ui/getting-started/installation/"
                        >
                            Core
                        </Link>
                        <Typography color="text.primary" >Breadcrumbs</Typography>
                    </Breadcrumbs>
                    <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/">
                            MUI
                        </Link>
                        <Link
                            underline="hover"
                            color="secondary"
                            href="/material-ui/getting-started/installation/"
                        >
                            Core
                        </Link>
                        <Typography color="text.primary" >Breadcrumbs</Typography>
                    </Breadcrumbs>
                </Stack>
            </Box>

            <Typography variant="h3" gutterBottom>
                Styled breadcrumbs with icon
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Home"
                            icon={<HomeIcon fontSize="small" />}
                        />
                        <StyledBreadcrumb component="a" href="#" label="Catalog" />
                        <StyledBreadcrumb
                            label="Accessories"
                            deleteIcon={<ExpandMoreIcon />}
                            onDelete={handleClick}
                        />
                    </Breadcrumbs>
                </div>
            </Box>
        </>
    );
}
export default CustomBreadcrumbs