import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
function CustomBadge() {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
        <>
            <h1>Badge</h1>
            <h3>Basic badge</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Badge badgeContent={4} color="primary">
                    <MailIcon color="action" />
                </Badge>
            </Box>

            <h3>Color badge</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack spacing={2} direction="row">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={4} color="success">
                        <MailIcon color="action" />
                    </Badge>
                </Stack>
            </Box>

            <h3>Customization</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </Box>

            <h3>Badge visibility</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box
                    sx={{
                        color: 'action.active',
                        display: 'flex',
                        flexDirection: 'column',
                        '& > *': {
                            marginBottom: 2,
                        },
                        '& .MuiBadge-root': {
                            marginRight: 4,
                        },
                    }}
                >
                    <div>
                        <Badge color="secondary" badgeContent={count}>
                            <MailIcon />
                        </Badge>
                        <ButtonGroup>
                            <Button
                                aria-label="reduce"
                                onClick={() => {
                                    setCount(Math.max(count - 1, 0));
                                }}
                            >
                                <RemoveIcon fontSize="small" />
                            </Button>
                            <Button
                                aria-label="increase"
                                onClick={() => {
                                    setCount(count + 1);
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div>
                        <Badge color="secondary" variant="dot" invisible={invisible}>
                            <MailIcon />
                        </Badge>
                        <FormControlLabel
                            sx={{ color: 'text.primary' }}
                            control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
                            label="Show Badge"
                        />
                    </div>
                </Box>
            </Box>

            <h3>Maximum Value</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                    <Badge color="secondary" badgeContent={99}>
                        <MailIcon />
                    </Badge>
                    <Badge color="secondary" badgeContent={100}>
                        <MailIcon />
                    </Badge>
                    <Badge color="secondary" badgeContent={1000} max={999}>
                        <MailIcon />
                    </Badge>
                </Stack>
            </Box>
        </>
    );
}
export default CustomBadge