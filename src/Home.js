import React, { useState } from 'react';
import { Button, Fab, Modal, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import DataTable from './Table';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
};

const Home = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Home Page</h1>
            <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 16, right: 16 }} onClick={handleOpen}>
                <AddIcon />
            </Fab>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                        {/* <Button onClick={handleClose} style={{ position: 'absolute', top: 10, right: 10, background: 'blue', color: 'white' }}>Close</Button> */}
                        <Fab color="primary" aria-label="close" style={{ position: 'absolute', top: 7, right: 2, background: 'blue', color: 'white', width: '35px', height: '1px' }} onClick={handleClose}>
                            <Close sx={{ fontSize: 20 }} />
                        </Fab>
                    <DataTable />
                </Box>
            </Modal>
        </div>
    );
};

export default Home;