import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const styles = {    
    boldTxt:{fontWeight:'bold',fontSize:16}    
};

function createData(score, max, specifcTo, comment) {
    return {
        score,
        max,
        specifcTo,
        comment
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="left">
                    {row.score}
                </TableCell>
                <TableCell align="left">{row.max}</TableCell>
                <TableCell align="left">{row.specifcTo}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography sx={{ fontSize: 14 }} gutterBottom component="div">
                                {row.comment}
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        score: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        specifcTo: PropTypes.string.isRequired,
        comment: PropTypes.number.isRequired
    }).isRequired,
};

const rows = [
    createData(600, 1000, 'Meeting Participation', 'Actively participates in every meetings, but sometimes gets bit late to join morning SOD.'),
    createData(800, 1000, 'Task and Deadlines', 'Tries to completes tasks, However, he has not yet fully achieved his own set targets. The major challenge with him is a timely reminders to the clients, Which sometime he himself needs a reminders. This can be improved.'),
    createData(800, 1000, 'Interpersonal Behaviour', 'Cordial Behavior, Communicates, connects well and have a great relationship with everyone in the company'),
    createData(800, 1000, 'Above and Beyond', 'You have given suggestions optimizing work within the Marketing team! However expecting a implementation of the same.	'),
];

export default function ReviewTable() {
    return (
        <div>
            <TableContainer sx={{borderRadius:2}} component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor:'#d0d0d0' }}>
                            <TableCell sx={styles.boldTxt} >Scores </TableCell>
                            <TableCell sx={styles.boldTxt} align="left">Max</TableCell>
                            <TableCell sx={styles.boldTxt} align="left">Specific to areas</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.specifcTo} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
