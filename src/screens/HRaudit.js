import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  TextField,
  Chip,
  Snackbar,
  Alert,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import API from "../services/APIService";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const styles = {
  paperHeight: { height: "auto" },
  // teamRowStyle: { display: "flex", flexDirection: "row" },
  boldTxt: { fontWeight: "bold", fontSize: 16, marginBottom: 1 },
  boldTxtPrimary: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 1,
    color: "blue",
  },
};
const team_mem_name = [
  { id: 1, name: "Victor Samson" },
  { id: 2, name: "Akshay Arekar" },
  { id: 3, name: "Siddhant Sanadhaya" },
  { id: 4, name: "Varsha" },
];

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
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberLoading, setMemberLoading] = useState(false);
  const [projectLoading, setProjectLoading] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [teamMembersCopy, setTeamMembersCopy] = useState([]);

  const [formLoading, setFormLoading] = useState(false);

  const getChildList = async () => {
    setMemberLoading(true);
    try {
      const response = await API.getChildList();
      setTeamMembers(response?.data?.data);
      console.log("child list called", response);
      setMemberLoading(false);
    } catch (error) {
      console.log(error);
      setMemberLoading(false);
    }
  };

  const getAllUsersWithScore = async () => {
    setMemberLoading(true);
    try {
      const response = await API.getAllUserScore(3, 2022);
      console.log(response);
      setTeamMembers(response?.data?.data);
      setTeamMembersCopy(response?.data?.data)
      setMemberLoading(false);
    } catch (error) {
      console.log(error);
      setMemberLoading(false);
    }
  };

  const getAllProjectsList = async () => {

    setProjectLoading(true);
    try {
      const response = await API.getProjectsList();

      console.log("getProjectsList -------", response);
      if (response.status && response.data.result) {
        setProjectList(response.data.data)
        setProjectListCopy(response.data.data)
      }
      setProjectLoading(false);
    } catch (error) {
      console.log(error);
      setProjectLoading(false);
    }
  };



  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    // getChildList();
    getAllProjectsList();
    getAllUsersWithScore();
  }, []);


  const handleClose = () => {
    setOpen(false);
  };

  const validate = (e) => {
    e.preventDefault();
    console.log("test");
    if (
      isNaN(attendanceScore) ||
      attendanceScore < 0 ||
      attendanceScore > 1000 ||
      attendanceScore == null
    ) {
      setAttError(true),
        setMeetError(false),
        setTaskError(false),
        setBehaveError(false),
        setBeyondError(false),
        setAttErrorRev(false),
        setMeetErrorRev(false),
        setTaskErrorRev(false),
        setBehaveErrorRev(false),
        setBeyondErrorRev(false);
    }
    if (!activeEmpFormId) {
      setMessage("please select employee");
      setType("error");
      setOpen(true);
      return;
    }
    //  else if (
    //   isNaN(meetingScore) ||
    //   meetingScore < 0 ||
    //   meetingScore > 1000 ||
    //   meetingScore == null
    // ) {
    //   setAttError(false),
    //     setMeetError(true),
    //     setTaskError(false),
    //     setBehaveError(false),
    //     setBeyondError(false),
    //     setAttErrorRev(false),
    //     setMeetErrorRev(false),
    //     setTaskErrorRev(false),
    //     setBehaveErrorRev(false),
    //     setBeyondErrorRev(false);
    // } else if (
    //   isNaN(taskDeadlineScore) ||
    //   taskDeadlineScore < 0 ||
    //   taskDeadlineScore > 1000 ||
    //   taskDeadlineScore == null
    // ) {
    //   setAttError(false),
    //     setMeetError(false),
    //     setTaskError(true),
    //     setBehaveError(false),
    //     setBeyondError(false),
    //     setAttErrorRev(false),
    //     setMeetErrorRev(false),
    //     setTaskErrorRev(false),
    //     setBehaveErrorRev(false),
    //     setBeyondErrorRev(false);
    // } else if (
    //   isNaN(behaviourScore) ||
    //   behaviourScore < 0 ||
    //   behaviourScore > 1000 ||
    //   behaviourScore == null
    // ) {
    //   setAttError(false),
    //     setMeetError(false),
    //     setTaskError(false),
    //     setBehaveError(true),
    //     setBeyondError(false),
    //     setAttErrorRev(false),
    //     setMeetErrorRev(false),
    //     setTaskErrorRev(false),
    //     setBehaveErrorRev(false),
    //     setBeyondErrorRev(false);
    // } else if (
    //   isNaN(aboveAndBeyondScore) ||
    //   aboveAndBeyondScore < 0 ||
    //   aboveAndBeyondScore > 1000 ||
    //   aboveAndBeyondScore == null
    // ) {
    //   setAttError(false),
    //     setMeetError(false),
    //     setTaskError(false),
    //     setBehaveError(false),
    //     setBeyondError(true),
    //     setAttErrorRev(false),
    //     setMeetErrorRev(false),
    //     setTaskErrorRev(false),
    //     setBehaveErrorRev(false),
    //     setBeyondErrorRev(false);
    // }
    //    else if (attendanceReview.replace(/\s/g, "").length < 1) {
    //     setAttError(false),
    //       setMeetError(false),
    //       setTaskError(false),
    //       setBehaveError(false),
    //       setBeyondError(false),
    //       setAttErrorRev(true),
    //       setMeetErrorRev(false),
    //       setTaskErrorRev(false),
    //       setBehaveErrorRev(false),
    //       setBeyondErrorRev(false);
    //   }
    // else if (meetingReview.replace(/\s/g, "").length < 1) {
    //   setAttError(false),
    //     setMeetError(false),
    //     setTaskError(false),
    //     setBehaveError(false),
    //     setBeyondError(false),
    //     setAttErrorRev(false),
    //     setMeetErrorRev(true),
    //     setTaskErrorRev(false),
    //     setBehaveErrorRev(false),
    //     setBeyondErrorRev(false);
    // }
    else if (attendanceReview.replace(/\s/g, "").length < 1) {
      setAttError(false),
        setMeetError(false),
        setTaskError(false),
        setBehaveError(false),
        setBeyondError(false),
        setAttErrorRev(false),
        setMeetErrorRev(false),
        setTaskErrorRev(true),
        setBehaveErrorRev(false),
        setBeyondErrorRev(false);
    }
    // else if (behaviourReview.replace(/\s/g, "").length < 1) {
    //   setAttError(false),
    //     setMeetError(false),
    //     setTaskError(false),
    //     setBehaveError(false),
    //     setBeyondError(false),
    //     setAttErrorRev(false),
    //     setMeetErrorRev(false),
    //     setTaskErrorRev(false),
    //     setBehaveErrorRev(true),
    //     setBeyondErrorRev(false);
    // } else if (aboveAndBeyondReview.replace(/\s/g, "").length < 1) {
    //   setAttError(false),
    //     setMeetError(false),
    //     setTaskError(false),
    //     setBehaveError(false),
    //     setBeyondError(false),
    //     setAttErrorRev(false),
    //     setMeetErrorRev(false),
    //     setTaskErrorRev(false),
    //     setBehaveErrorRev(false),
    //     setBeyondErrorRev(true);
    // }
    else {
      saveUserApiCall();
    }
  };

  const saveUserApiCall = async () => {
    setFormLoading(true);
    try {
      const response = await API.postScore([
        {
          uuid: activeEmpFormId,
          month: moment().month(),
          year: moment().year(),
          que_idx: 1,
          score: attendanceScore,
          que_comment: attendanceReview,
        },
        {
          uuid: activeEmpFormId,
          month: moment().month(),
          year: moment().year(),
          que_idx: 2,
          score: meetingScore,
          que_comment: meetingReview,
        },
        {
          uuid: activeEmpFormId,
          month: moment().month(),
          year: moment().year(),
          que_idx: 3,
          score: taskDeadlineScore,
          que_comment: taskDeadlineReview,
        },
        {
          uuid: activeEmpFormId,
          month: moment().month(),
          year: moment().year(),
          que_idx: 4,
          score: behaviourScore,
          que_comment: behaviourReview,
        },
        {
          uuid: activeEmpFormId,
          month: moment().month(),
          year: moment().year(),
          que_idx: 5,
          score: aboveAndBeyondScore,
          que_comment: aboveAndBeyondReview,
        },
      ]);
      console.log(response);
      if (response.status === 200) {
        setMessage("successfully updated");
        setType("success");
        setOpen(true);
        setFormLoading(false);
      } else {
        setMessage("something went wrong");
        setType("error");
        setOpen(true);
        setFormLoading(false);
      }
    } catch (error) {
      console.log(error);
      setMessage("something went wrong");
      setType("error");
      setOpen(true);
      setFormLoading(false);
    }
  };

  const filterByProject = (event) => {

    console.log('eventeventeventevent', event);

    let arr = teamMembersCopy;
    // arr = arr.filter((item) => {
    //   return item.user.project_name == event.target.value
    // })

    arr = arr.filter((item) => { return item.user.project_name == event.target.value })

    console.log('arrarrarrarr', arr);
    setTeamMembers(arr)
    setActiveEmpFormId(null);
    setActiveEmpFormName("");
    setAttendanceScore(null)
    setAttendanceReview("")
    setMeetingScore(null)
    setMeetingReview("")
    setTaskDeadlineScore(null)
    setTaskDeadlineReview("")
    setBehaviourScore(null)
    setBehaviourReview("")
    setAboveAndBeyondScore(null)
    setAboveAndBeyondReview("")
  }

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={6} sx={styles.paperHeight}>
            {memberLoading ? <LinearProgress /> : null}

            {/* select */}
            <CardContent>
              <FormControl sx={{ width: "20%" }}>
                <InputLabel>Team</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={lastMonth}
                  label="team"
                  onChange={filterByProject}
                  size="small"
                >
                  {projectList.map(item => {
                    return (
                      <MenuItem value={item.project_name}>{item.project_name} </MenuItem>
                    )
                  })}
                  {/* <MenuItem value="drclobo">drclobo </MenuItem>
                  <MenuItem value="i Craft">i Craft</MenuItem> */}
                </Select>
              </FormControl>
            </CardContent>
            {/* select end */}

            <CardContent>
              <div style={styles.teamRowStyle}>
                {teamMembers?.map((item, index) => (
                  <Button
                    disableRipple
                    style={{ textTransform: "none" }}
                    onClick={() => {
                      // alert('item.user.uuid :: ' + item.user.uuid)
                      setActiveEmpFormId(item.user.uuid);
                      setActiveEmpFormName(
                        `${item.user.first_name} ${item.user.last_name}`
                      );
                      setAttendanceScore(item.score[0].score)
                      setAttendanceReview(item.score[0].que_comment)
                      setMeetingScore(item.score[1].score)
                      setMeetingReview(item.score[1].que_comment)
                      setTaskDeadlineScore(item.score[2].score)
                      setTaskDeadlineReview(item.score[2].que_comment)
                      setBehaviourScore(item.score[3].score)
                      setBehaviourReview(item.score[3].que_comment)
                      setAboveAndBeyondScore(item.score[4].score)
                      setAboveAndBeyondReview(item.score[4].que_comment)
                    }}
                  >
                    <Accordion
                      expanded={expanded === index}
                      onChange={handleChange(index)}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Avatar
                          alt={item.user.first_name}
                          src={item.user.image_url}
                          sx={{
                            width: 55,
                            height: 55,
                            borderStyle: "solid",
                            borderWidth: activeEmpFormId == item.user.uuid ? 4 : 0,
                            borderColor: "primary",
                          }}
                        />
                        <Typography
                          sx={{ width: "25%", flexShrink: 0, margin: "auto" }}
                        >
                          {item.user.first_name + " " + item.user.last_name}
                        </Typography>
                        <Typography
                          sx={{ width: "25%", flexShrink: 0, margin: "auto" }}
                        >
                          {item.user.project_name}
                        </Typography>

                        <Typography sx={{ color: "lightgray", margin: "auto" }}>
                          {item.user.emp_id}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <CardContent>
                          {activeEmpFormName != null &&
                            activeEmpFormName != "" && (
                              <Chip
                                label={activeEmpFormName}
                                color="primary"
                                sx={{ marginBottom: 3 }}
                              />
                            )}
                          <form
                            noValidate
                            autoComplete="off"
                            onSubmit={validate}
                          >
                            <Typography sx={styles.boldTxt}>
                              Scores (Out of 1000)
                            </Typography>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: 10,
                                justifyContent: "space-between",
                              }}
                            >
                              <TextField
                                onChange={(e) =>
                                  setAttendanceScore(e.target.value)
                                }
                                // placeholder="Attendance (Manually filled by HR)"
                                label={attendanceScore == null ? "Attendance (Manually filled by HR)" : ""}
                                // label="Attendance (Manually filled by HR)"
                                variant="outlined"
                                size="small"
                                value={attendanceScore}
                                // defaultValue={attendanceScore}
                                fullWidth
                                type="text"
                                style={{ marginRight: 10 }}
                                required
                                error={attError}
                              />
                              <TextField
                                onChange={(e) =>
                                  setMeetingScore(e.target.value)
                                }
                                // placeholder="Meeting Participation"
                                label={meetingScore == null ? "Meeting Participation" : ""}
                                // label="Meeting Participation"
                                variant="outlined"
                                size="small"
                                value={meetingScore}
                                fullWidth
                                style={{ marginRight: 10 }}
                                required
                                error={meetError}
                                disabled
                              />
                              <TextField
                                onChange={(e) =>
                                  setTaskDeadlineScore(e.target.value)
                                }
                                placeholder="Task & Deadlines"
                                variant="outlined"
                                size="small"
                                value={taskDeadlineScore}
                                fullWidth
                                style={{ marginRight: 10 }}
                                required
                                error={taskError}
                                disabled
                              />
                              <TextField
                                onChange={(e) =>
                                  setBehaviourScore(e.target.value)
                                }
                                placeholder="Inter-Personal Behaviour"
                                variant="outlined"
                                size="small"
                                value={behaviourScore}
                                fullWidth
                                style={{ marginRight: 10 }}
                                required
                                error={behaveError}
                                disabled
                              />
                              <TextField
                                onChange={(e) =>
                                  setAboveAndBeyondScore(e.target.value)
                                }
                                placeholder="Above & Beyond"
                                variant="outlined"
                                size="small"
                                value={aboveAndBeyondScore}
                                fullWidth
                                required
                                error={beyondError}
                                disabled
                              />
                            </div>

                            <Typography sx={styles.boldTxt}>Reviews</Typography>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: 10,
                              }}
                            >
                              <TextField
                                onChange={(e) =>
                                  setAttendanceReview(e.target.value)
                                }
                                label="Attendance"
                                variant="outlined"
                                size="small"
                                value={attendanceReview}
                                fullWidth
                                rows={2}
                                required
                                error={attErrorRev}
                              />
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: 10,
                              }}
                            >
                              <TextField
                                onChange={(e) =>
                                  setMeetingReview(e.target.value)
                                }
                                label="Meeting Participation"
                                variant="outlined"
                                size="small"
                                value={meetingReview}
                                fullWidth
                                rows={2}
                                required
                                disabled
                                error={meetErrorRev}
                              />
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: 10,
                              }}
                            >
                              <TextField
                                onChange={(e) =>
                                  setTaskDeadlineReview(e.target.value)
                                }
                                label="Task & Deadlines"
                                variant="outlined"
                                size="small"
                                value={taskDeadlineReview}
                                fullWidth
                                // rows={2}
                                multiline
                                required
                                disabled
                                error={taskErrorRev}
                              />
                            </div>

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: 10,
                              }}
                            >
                              <TextField
                                onChange={(e) =>
                                  setBehaviourReview(e.target.value)
                                }
                                label="Inter-Personal Behaviour"
                                variant="outlined"
                                size="small"
                                value={behaviourReview}
                                fullWidth
                                rows={4}
                                required
                                disabled
                                error={behaveErrorRev}
                              />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: 10,
                              }}
                            >
                              <TextField
                                onChange={(e) =>
                                  setAboveAndBeyondReview(e.target.value)
                                }
                                label="Above & Beyond"
                                variant="outlined"
                                size="small"
                                value={aboveAndBeyondReview}
                                fullWidth
                                rows={2}
                                required
                                disabled
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

                        {/* end */}
                      </AccordionDetails>
                    </Accordion>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ScoreForm;
