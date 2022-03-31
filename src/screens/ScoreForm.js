import { Avatar, Card, CardContent, Grid, Paper, Typography, TextField, Chip } from "@mui/material";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

const styles = {
    paperHeight: { height: "auto" },
    teamRowStyle: { display: 'flex', flexDirection: 'row' },
    boldTxt: { fontWeight: 'bold', fontSize: 16, marginBottom: 1 },
    boldTxtPrimary: { fontWeight: 'bold', fontSize: 16, marginBottom: 1, color: 'blue' },

};
const team_mem_name = [
    { id: 1, name: 'Victor Samson' },
    { id: 2, name: 'Akshay Arekar' },
    { id: 3, name: 'Siddhant Sanadhaya' },
    { id: 4, name: 'Varsha' }]


function ScoreForm() {
    const [attendanceScore, setAttendanceScore] = useState(null);
    const [attendanceReview, setAttendanceReview] = useState("");
    const [meetingScore, setMeetingScore] = useState(null);
    const [meetingReview, setMeetingReview] = useState("");
    const [taskDeadlineScore, setTaskDeadlineScore] = useState(null);
    const [taskDeadlineReview, setTaskDeadlineReview] = useState("");
    const [behaviourScore, setBehaviourScore] = useState(null);
    const [behaviourReview, setBehaviourReview] = useState("");
    const [aboveAndBeyondScore, setAboveAndBeyondScore] = useState(null);
    const [aboveAndBeyondReview, setAboveAndBeyondReview] = useState("");
    const [attError, setAttError] = useState(false);
    const [meetError, setMeetError] = useState(false);
    const [taskError, setTaskError] = useState(false);
    const [behaveError, setBehaveError] = useState(false);
    const [beyondError, setBeyondError] = useState(false);
    const [attErrorRev, setAttErrorRev] = useState(false);
    const [meetErrorRev, setMeetErrorRev] = useState(false);
    const [taskErrorRev, setTaskErrorRev] = useState(false);
    const [behaveErrorRev, setBehaveErrorRev] = useState(false);
    const [beyondErrorRev, setBeyondErrorRev] = useState(false);
    const [activeEmpFormId, setActiveEmpFormId] = useState(null);
    const [activeEmpFormName, setActiveEmpFormName] = useState("");

    const validate = (e) => {
        e.preventDefault();
        if (isNaN(attendanceScore) || attendanceScore < 0 || attendanceScore > 1000 || attendanceScore == null) {
            setAttError(true),
                setMeetError(false),
                setTaskError(false),
                setBehaveError(false),
                setBeyondError(false),
                setAttErrorRev(false),
                setMeetErrorRev(false),
                setTaskErrorRev(false),
                setBehaveErrorRev(false),
                setBeyondErrorRev(false)
        } else if (isNaN(meetingScore) || meetingScore < 0 || meetingScore > 1000 || meetingScore == null) {
            setAttError(false),
                setMeetError(true),
                setTaskError(false),
                setBehaveError(false),
                setBeyondError(false),
                setAttErrorRev(false),
                setMeetErrorRev(false),
                setTaskErrorRev(false),
                setBehaveErrorRev(false),
                setBeyondErrorRev(false)
        } else if (isNaN(taskDeadlineScore) || taskDeadlineScore < 0 || taskDeadlineScore > 1000 || taskDeadlineScore == null) {
            setAttError(false),
                setMeetError(false),
                setTaskError(true),
                setBehaveError(false),
                setBeyondError(false),
                setAttErrorRev(false),
                setMeetErrorRev(false),
                setTaskErrorRev(false),
                setBehaveErrorRev(false),
                setBeyondErrorRev(false)
        } else if (isNaN(behaviourScore) || behaviourScore < 0 || behaviourScore > 1000 || behaviourScore == null) {
            setAttError(false),
                setMeetError(false),
                setTaskError(false),
                setBehaveError(true),
                setBeyondError(false),
                setAttErrorRev(false),
                setMeetErrorRev(false),
                setTaskErrorRev(false),
                setBehaveErrorRev(false),
                setBeyondErrorRev(false)
        } else if (isNaN(aboveAndBeyondScore) || aboveAndBeyondScore < 0 || aboveAndBeyondScore > 1000 || aboveAndBeyondScore == null) {
            setAttError(false),
                setMeetError(false),
                setTaskError(false),
                setBehaveError(false),
                setBeyondError(true),
                setAttErrorRev(false),
                setMeetErrorRev(false),
                setTaskErrorRev(false),
                setBehaveErrorRev(false),
                setBeyondErrorRev(false)
        } else if (attendanceReview.replace(/\s/g, "").length < 1) {
            setAttError(false),
                setMeetError(false),
                setTaskError(false),
                setBehaveError(false),
                setBeyondError(false),
                setAttErrorRev(true),
                setMeetErrorRev(false),
                setTaskErrorRev(false),
                setBehaveErrorRev(false),
                setBeyondErrorRev(false)
        } else if (meetingReview.replace(/\s/g, "").length < 1) {
            setAttError(false),
                setMeetError(false),
                setTaskError(false),
                setBehaveError(false),
                setBeyondError(false),
                setAttErrorRev(false),
                setMeetErrorRev(true),
                setTaskErrorRev(false),
                setBehaveErrorRev(false),
                setBeyondErrorRev(false)
        } else if (taskDeadlineReview.replace(/\s/g, "").length < 1) {
            setAttError(false),
                setMeetError(false),
                setTaskError(false),
                setBehaveError(false),
                setBeyondError(false),
                setAttErrorRev(false),
                setMeetErrorRev(false),
                setTaskErrorRev(true),
                setBehaveErrorRev(false),
                setBeyondErrorRev(false)
        } else if (behaviourReview.replace(/\s/g, "").length < 1) {
            setAttError(false),
                setMeetError(false),
                setTaskError(false),
                setBehaveError(false),
                setBeyondError(false),
                setAttErrorRev(false),
                setMeetErrorRev(false),
                setTaskErrorRev(false),
                setBehaveErrorRev(true),
                setBeyondErrorRev(false)
        } else if (aboveAndBeyondReview.replace(/\s/g, "").length < 1) {
            setAttError(false),
                setMeetError(false),
                setTaskError(false),
                setBehaveError(false),
                setBeyondError(false),
                setAttErrorRev(false),
                setMeetErrorRev(false),
                setTaskErrorRev(false),
                setBehaveErrorRev(false),
                setBeyondErrorRev(true)
        } else {
            saveUserApiCall();
        }
    };

    const saveUserApiCall = () => {

        alert('api call ' + activeEmpFormId)
    }


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={6} sx={styles.paperHeight}>
                        <CardContent>
                            <div style={styles.teamRowStyle}>
                                {team_mem_name.map((item, index) => (
                                    <Button
                                        onClick={() => {
                                            setActiveEmpFormId(item.id)
                                            setActiveEmpFormName(item.name)
                                        }}
                                    >
                                        <Avatar alt="Travis Howard" src="pa.jpg"
                                            sx={{
                                                width: 55, height: 55,
                                                borderStyle: 'solid',
                                                borderWidth: activeEmpFormId == item.id ? 4 : 0,
                                                borderColor: 'primary'
                                            }} />

                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={6} sx={styles.paperHeight}>
                        <CardContent>
                            {activeEmpFormName != null && activeEmpFormName != "" &&
                                <Chip label={activeEmpFormName} color="primary" sx={{ marginBottom: 3 }} />}
                            <form noValidate autoComplete="off" onSubmit={validate}>
                                <Typography sx={styles.boldTxt}>Scores (Out of 1000)</Typography>
                                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between', }}>
                                    <TextField
                                        onChange={(e) => setAttendanceScore(e.target.value)}
                                        label="Attendance (Manually filled by HR)"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        style={{ marginRight: 10 }}
                                        required
                                        error={attError}
                                    />
                                    <TextField
                                        onChange={(e) => setMeetingScore(e.target.value)}
                                        label="Meeting Participation"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        style={{ marginRight: 10 }}
                                        required
                                        error={meetError}
                                    />
                                    <TextField
                                        onChange={(e) => setTaskDeadlineScore(e.target.value)}
                                        label="Task & Deadlines"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        style={{ marginRight: 10 }}
                                        required
                                        error={taskError}
                                    />
                                    <TextField
                                        onChange={(e) => setBehaviourScore(e.target.value)}
                                        label="Inter-Personal Behaviour"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        style={{ marginRight: 10 }}
                                        required
                                        error={behaveError}
                                    />
                                    <TextField
                                        onChange={(e) => setAboveAndBeyondScore(e.target.value)}
                                        label="Above & Beyond"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        required
                                        error={beyondError}
                                    />
                                </div>

                                <Typography sx={styles.boldTxt}>Reviews</Typography>

                                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                                    <TextField
                                        onChange={(e) => setAttendanceReview(e.target.value)}
                                        label="Attendance"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        rows={2}
                                        required
                                        error={attErrorRev}
                                    />
                                </div>


                                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                                    <TextField
                                        onChange={(e) => setMeetingReview(e.target.value)}
                                        label="Meeting Participation"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        rows={2}
                                        required
                                        error={meetErrorRev}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                                    <TextField
                                        onChange={(e) => setTaskDeadlineReview(e.target.value)}
                                        label="Task & Deadlines"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        // rows={2}
                                        multiline
                                        required
                                        error={taskErrorRev}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                                    <TextField
                                        onChange={(e) => setBehaviourReview(e.target.value)}
                                        label="Inter-Personal Behaviour"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        rows={4}
                                        required
                                        error={behaveErrorRev}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                                    <TextField
                                        onChange={(e) => setAboveAndBeyondReview(e.target.value)}
                                        label="Above & Beyond"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        rows={2}
                                        required
                                        error={beyondErrorRev}
                                    />
                                </div>


                                <Button
                                    variant="contained"
                                    type="submit"
                                    endIcon={<ArrowForwardIosTwoToneIcon />}
                                >
                                    Submit
                                </Button>
                            </form>
                        </CardContent>
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
}

export default ScoreForm;
