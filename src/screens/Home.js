import { Avatar, Badge, Box, Button, styled, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";

import { Grid, Paper, Typography, FormControl, InputLabel, Select, MenuItem, Chip, SimpleDialog } from "@mui/material";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import TeamMemberCard from "../components/TeamMemberCard/TeamMemberCard";
import ReviewTable from "../components/ReviewTable/ReviewTable";
import Pie from "../components/circularRating";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import LinearProgressAnimated from '@mui/material/LinearProgress';
import { AreaChart, LineChart, Line, Area, XAxis, YAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Label } from 'recharts';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import TooltipNormal from '@mui/material/Tooltip';


import API from "../services/APIService";




const BorderLinearProgress = styled(LinearProgress)(({ theme, points }) => ({
  height: 6,
  borderRadius: 5,
  marginBottom: 5,
  marginTop: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    borderColor: points <= 400 ? '#ff2424' : points >= 800 ? '#31d11b' : '#ffa361',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: points <= 400 ? '#ff2424' : points >= 800 ? '#31d11b' : '#ffa361', //#ff963b

  },
}));

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 800) {
    return (
      <svg x={cx - 9} y={cy - 9} width={18} height={18} fill="#1bb816" viewBox="0 0 1024 1024">
        <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
      </svg>
    );
  } else if (value <= 400) {
    return (
      <svg x={cx - 9} y={cy - 9} width={18} height={18} fill="#ff2424" viewBox="0 0 1024 1024">
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    );
  } else {
    return null

  }


};

const data = [
  {
    name: 'Jan',
    attendance: 1000,
    meeting: 600,
    taskAndDeadline: 800,
    behaviour: 400,
    aboveAndBeyond: 1000,
  },
  {
    name: 'Feb',
    attendance: 1000,
    meeting: 800,
    taskAndDeadline: 700,
    behaviour: 400,
    aboveAndBeyond: 600,
  },
  {
    name: 'Mar',
    attendance: 800,
    meeting: 600,
    taskAndDeadline: 800,
    behaviour: 700,
    aboveAndBeyond: 600,
  },
  {
    name: 'Apr',
    attendance: 1000,
    meeting: 800,
    taskAndDeadline: 700,
    behaviour: 400,
    aboveAndBeyond: 600,
  },
  {
    name: 'May',
    attendance: 800,
    meeting: 600,
    taskAndDeadline: 800,
    behaviour: 700,
    aboveAndBeyond: 600,
  },
  {
    name: 'Jun',
    attendance: 800,
    meeting: 600,
    taskAndDeadline: 800,
    behaviour: 400,
    aboveAndBeyond: 600,
  },
  {
    name: 'Jul',
    attendance: 1000,
    meeting: 800,
    taskAndDeadline: 700,
    behaviour: 1000,
    aboveAndBeyond: 600,
  },
  {
    name: 'Aug',
    attendance: 400,
    meeting: 240,
    taskAndDeadline: 240,
    behaviour: 400,
    aboveAndBeyond: 600,
  },
  {
    name: 'Sep',
    attendance: 1000,
    meeting: 800,
    taskAndDeadline: 700,
    behaviour: 800,
    aboveAndBeyond: 600,
  },
  {
    name: 'Oct',
    attendance: 200,
    meeting: 980,
    taskAndDeadline: 500,
    behaviour: 900,
    aboveAndBeyond: 600,
  },
  {
    name: 'Nov',
    attendance: 800,
    meeting: 600,
    taskAndDeadline: 200,
    behaviour: 400,
    aboveAndBeyond: 600,
  },
  {
    name: 'Dec',
    attendance: 100,
    meeting: 480,
    taskAndDeadline: 600,
    behaviour: 700,
    aboveAndBeyond: 600,
  }
];

const radarData = [
  {
    que_text: 'Attendance',
    A: 800,
    B: 700,
    fullMark: 1000,
  },
  {
    que_text: 'Meeting Participation',
    A: 600,
    B: 800,
    fullMark: 1000,
  },
  {
    que_text: 'Task and Deadlines',
    A: 1000,
    B: 800,
    fullMark: 1000,
  },
  {
    que_text: 'Interpersonal Behaviour',
    A: 700,
    B: 900,
    fullMark: 1000,
  },
  {
    que_text: 'Above and Beyond',
    A: 600,
    B: 900,
    fullMark: 1000,
  }
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

function customTick({ payload, x, y, textAnchor, stroke, radius }) {
  return (
    <text
      radius={radius}
      stroke={stroke}
      x={x}
      y={y}
      style={{
        fontSize: 11
      }}
      text-anchor={textAnchor}
    >
      {payload.value}
    </text>

  );
}

function Home() {
  const user_obj = JSON.parse(localStorage.getItem("user_details"))
  const { uuid, first_name, last_name } = user_obj
  // console.log('--------------uuid', uuid);
  const [myScoreLoading, setMyScoreLoading] = useState(false);
  const [graphLoading, setGraphLoading] = useState(false);
  const [radarLoading, setRadarLoading] = useState(false);
  const [myName, setMyName] = useState(first_name + " " + last_name);
  const [contrastedWith, setContrastedWith] = useState("");
  const [scores, setScores] = useState([])
  const [colleagues, setColleagues] = useState([])
  const [radarArray, setRadarArray] = useState([])
  const [contrastedTo, setContrastedTo] = useState(null)
  const [lastMonth, setLastMonth] = React.useState("March");
  const [selectedMonth, setSelectedMonth] = React.useState('');
  const [openMonthDialog, setOpenMonthDialog] = React.useState(false);
  const [scoreFound, setScoreFound] = React.useState(200); // 404 not found 200 success 405 invalid


  useEffect(() => {
    getYourColleagues();
    getUserScores(3);
  }, []);

  const getYourColleagues = async () => {
    try {
      setRadarLoading(true)
      const response = await API.getColleagues(uuid);
      if (response.status === 200 && response.data.result) {
        let team_mates = response.data.data.filter((item) => item.uuid != uuid)
        setColleagues(team_mates)
        setContrastedTo(team_mates[0])
        setContrastedWith(team_mates[0].first_name + " " + team_mates[0].last_name)
        createRadarData(team_mates[0].uuid, uuid);
      }
      
    } catch (error) {
      console.log('catch err', error);
      setRadarLoading(false);
    }
  };


  const createRadarData = async (othersId, myId) => {
    let sample_arr = [];
    let month = 3;

    try {
      setRadarLoading(true);
      const response = await API.getUserScore(othersId, month);
      if (response.status === 200) {
        response.data.dbResponse.forEach((item, ind) => {
          if (myId) {
            sample_arr.push(
              {
                que_text: item.PMP_QUETION.quetion_text,
                A: 0,
                B: item.score ? item.score : 0,
                fullMark: item.PMP_QUETION.out_of,
              }
            )
          } else {
            let radar_arr_copy = radarArray;
            radar_arr_copy[ind].B = item.score ? item.score : 0
            setRadarArray(radar_arr_copy)
          }

        })
        if (myId) {
          try {
            setRadarLoading(true);
            const response = await API.getUserScore(myId, month);
            if (response.status === 200) {
              response.data.dbResponse.forEach((item, index) => {
                sample_arr[index].A = item.score ? item.score : 0;
              })
              setRadarArray(sample_arr)
            }
            setRadarLoading(false);
          } catch (error) {
            console.log('catch err', error);
            setRadarLoading(false);
          }
        }
      }
      setRadarLoading(false);
    } catch (error) {
      console.log('catch err', error);
      setRadarLoading(false);
    }
  }

  const getUserScores = async (month) => {

    try {
      setMyScoreLoading(true);
      const response = await API.getUserScore(uuid, month);
      if (response.status === 200) {
        if (response.data.dbResponse?.length > 0) {
          setScoreFound(200)
          let arr = response.data.dbResponse
          setScores(arr);
        }else{
          setScoreFound(404)
          setScores([]);
        }
      }
      setMyScoreLoading(false);
    } catch (error) {
      console.log('catch err', error);
      setMyScoreLoading(false);
    }
  };

  const handleChange = (event) => {

    let upcoming_month = months;
    upcoming_month = upcoming_month.filter((month, index) => index >= 3)
    console.log('upcoming_month', upcoming_month);
    if (upcoming_month.includes(event.target.value)) {
      setScoreFound(405)
      setScores([]);
    } else {
      getUserScores(months.indexOf(event.target.value) + 1);
    }    
    setLastMonth(event.target.value);
  };


  const handleChangeContrastWith = (event) => {

    console.log('handleChangeContrastWith', event);
    setContrastedTo(event.target.value)
    setContrastedWith(event.target.value.first_name + " " + event.target.value.last_name)
    createRadarData(event.target.value.uuid);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Paper elevation={3} sx={{ ...styles.singleScoreCard, marginBottom: 2 }}>
      {myScoreLoading ? <LinearProgressAnimated sx={{marginTop:-1,marginBottom:1}}/> : null}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
            {lastMonth != null && lastMonth != "" &&
              <Chip
                icon={scoreFound == 200
                  ? <CheckCircleOutlinedIcon sx={{ height: 18 }} />
                  : scoreFound == 405 ? <ReportProblemOutlinedIcon sx={{ height: 18 }} />
                    : <DangerousOutlinedIcon sx={{ height: 18 }} />}
                label={scoreFound == 200
                  ? ("Monthly Score : " + lastMonth)
                  : scoreFound == 405 ? ("Invalid month")
                    : ("Sorry !! No record found")
                }
                variant="outlined"
                color={scoreFound == 200
                  ? 'success'
                  : scoreFound == 405 ? 'warning'
                    : 'error'}
                fullWidth
                sx={{
                  marginBottom: 0, height: 27,
                  fontWeight: 'bold'
                }}
              />
            }


            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel sx={{ fontSize: 14 }}>Month</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lastMonth}
                  label="Month"
                  onChange={handleChange}
                  size="small"
                  sx={{ height: 27, fontSize: 14, fontWeight: 'bold' }}
                >
                  {months.map((item, index) => {
                    return (
                      <MenuItem value={item}>{item}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        <Grid container spacing={1}>
          {scores.map((item, index) => {
            return (
              <Grid item xs={12 / 5} >
                <Box sx={styles.singleScoreCardBox}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 15 }}>{item.PMP_QUETION.quetion_text}</Typography>
                    <TooltipNormal title="Weightage" placement="top">
                      <Typography sx={{ fontSize: 15, fontWeight: 'bold' }}>{item.PMP_QUETION.eval_percentage}{'%'}</Typography>
                    </TooltipNormal>
                  </Box>
                  <Box>
                    <BorderLinearProgress variant="determinate" value={item.score / 10} points={item.score} />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 15 }}>Score</Typography>
                    <Typography sx={{ fontSize: 15 }}>{item.score}</Typography>
                  </Box>
                </Box>
              </Grid>
            )
          }
          )}
        </Grid>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper elevation={6} sx={styles.singleScoreCard}>
            <Box>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>Your progress for this year</Typography>
            </Box>
            <ResponsiveContainer width={850} height={400}>
              <LineChart
                width={850}
                height={400}
                data={data}
                margin={{
                  top: 30,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="1 5" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, 1000]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="attendance" stroke="violet" />
                <Line type="monotone" dataKey="meeting" stroke="brown"
                // dot={<CustomizedDot />}
                />
                <Line type="monotone" dataKey="taskAndDeadline" stroke="green" />
                <Line type="monotone" dataKey="behaviour" stroke="orange" />
                <Line type="monotone" dataKey="aboveAndBeyond" stroke="blue" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={6} sx={styles.singleScoreCard}>
          {radarLoading ? <LinearProgressAnimated sx={{marginTop:-1,marginBottom:1}}/> : null}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>Contrast with</Typography>


              <Box sx={{ width: 150 }}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={contrastedTo}
                    onChange={handleChangeContrastWith}
                    size="small"
                    sx={{ height: 27, fontSize: 14, fontWeight: 'bold' }}
                  >
                    {colleagues.map((item, index) => {
                      return (
                        <MenuItem
                          key={item.uuid} value={item}
                        // value={item.uuid}
                        >{item.first_name + " " + item.last_name}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              </Box>

            </Box>
            <ResponsiveContainer width={400} height={250}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarArray}>
                <PolarGrid />
                <PolarAngleAxis dataKey='que_text' tick={customTick} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name={myName} dataKey="A" stroke="brown" fill="rgba(165, 42, 42, 0.5)" fillOpacity={0.6} />
                <Radar name={contrastedWith} dataKey="B" stroke="blue" fill="rgba(0,0,255, 0.5)" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            <Box sx={{ borderWidth: 2, borderStyle: 'solid', borderColor: '#d2d2d2', borderRadius: 2, marginTop: 3 }}>
              <Box sx={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#d2d2d2', paddingRight: 1, paddingLeft: 1,
                borderTopLeftRadius: 6, borderTopRightRadius: 6
              }}>
                <Typography sx={{ width: 200, fontSize: 15, fontWeight: 'bold', }}>{'Specific to area'}</Typography>
                <Typography sx={{ width: 80, fontSize: 15, fontWeight: 'bold', textAlign: 'right' }}>{myName}</Typography>
                <Typography sx={{ width: 80, fontSize: 15, fontWeight: 'bold', textAlign: 'right' }}>{contrastedWith}</Typography>
              </Box>
              {radarArray.map((item, index) => (
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 1, paddingLeft: 1 }}>
                  <Typography sx={{ width: 200, fontSize: 13 }}>{item.que_text}</Typography>
                  <Typography sx={{ width: 80, fontSize: 13, textAlign: 'right' }}>{item.A}</Typography>
                  <Typography sx={{ width: 80, fontSize: 13, textAlign: 'right' }}>{item.B}</Typography>
                </Box>
              ))}
            </Box>

          </Paper>
        </Grid>
      </Grid>
    </div>

  );
}

const styles = {
  singleScoreCard: {
    height: "auto",
    borderRadius: 2,
    padding: 2
  },
  singleScoreCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 1,
    marginBottom: 2,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#d2d2d2',
    borderRadius: 2,
    boxShadow: 1
  },
  singleScoreCardBox: {
    padding: 1,
    // marginTop: 2,
    borderStyle: 'solid',
    borderWidth: 0.1,
    borderColor: '#d2d2d2',
    borderRadius: 2,
    boxShadow: 1
  }
};

export default Home;
