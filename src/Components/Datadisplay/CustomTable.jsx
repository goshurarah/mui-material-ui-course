import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function createData(name, age, city, gender) {
    return { name, age, city, gender };
}

const rows = [
    createData('hurarah', 45, 'fsd', 'male'),
    createData('ali', 45, 'fsd', 'male'),
    createData('akbar', 45, 'fsd', 'male'),
    createData('akram', 45, 'fsd', 'male')
];

export default function CustomTable() {
    return (
        <>
            <h1>Table</h1>
            <h3>Basic table</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Name </TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Age</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>City</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Gender</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.age}</TableCell>
                                    <TableCell align="right">{row.city}</TableCell>
                                    <TableCell align="right">{row.gender}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}