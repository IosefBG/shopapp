// ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Button
} from '@mui/material';
import useAxiosInterceptor from "../../helpers/apiHelper.ts";

const ProfilePage = () => {
    const [sessions, setSessions] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc');
    const [orderBy, setOrderBy] = useState('created_date_at'); // Default sort by creation date
    const api = useAxiosInterceptor();

    useEffect(() => {
        // Fetch active sessions from the API
        const fetchSessions = async () => {
            try {
                const response = await api.get('/auth/activeSessions'); // Replace with your API endpoint
                setSessions(response.data);
            } catch (error) {
                console.error('Error fetching sessions:', error);
            }
        };

        fetchSessions();
    }, []);

    const handleSort = (property) => {
        const isAscending = orderBy === property && sortDirection === 'asc';
        setSortDirection(isAscending ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedSessions = [...sessions].sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
            return sortDirection === 'asc' ? -1 : 1;
        }
        if (a[orderBy] > b[orderBy]) {
            return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
    });

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Profile Page
            </Typography>
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <TableSortLabel
                                        active={orderBy === 'created_date_at'}
                                        onClick={() => handleSort('created_date_at')}
                                    >
                                        Created Date
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={orderBy === 'id'}
                                        onClick={() => handleSort('id')}
                                    >
                                        Session ID
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={orderBy === 'is_active'}
                                        onClick={() => handleSort('is_active')}
                                    >
                                        Status
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>IP Address</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Device Connected</TableCell>
                                <TableCell>Browser Used</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedSessions.map((session) => (
                                <TableRow key={session.id}>
                                    <TableCell>{new Date(session.created_date_at).toLocaleString()}</TableCell>
                                    <TableCell>{session.id}</TableCell>
                                    <TableCell>{session.is_active ? 'Active' : 'Inactive'}</TableCell>
                                    <TableCell>{session.ip_address}</TableCell>
                                    <TableCell>{session.location}</TableCell>
                                    <TableCell>{session.device_connected}</TableCell>
                                    <TableCell>{session.browser_used}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary">
                                            Logout
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};

export default ProfilePage;
