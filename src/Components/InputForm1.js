import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import Stepper from './Stepper';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const InputForm1 = ({ ncrDetails, setNcrDetails }) => {
  const fillContainer = {
    borderRadius: '8px',
    backgroundColor: 'rgba(239, 241, 249, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    padding: '10px',
  };

  const inputTypo = {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '14.5px',
  };

  const fillBigContainer = {
    borderRadius: '8px',
    backgroundColor: 'rgba(239, 241, 249, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    padding: '10px',
    width: '90%',
    height: '152px',
  };

  const inputField = {
    width: '100%',
    height: '152px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    fontSize: '18px',
  };

  return (
    <Box
      sx={{
        width: '90%',
        border: '2px solid rgba(226, 226, 226, 1)',
        borderRadius: '20px',
        padding: '30px',
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: 'Manrope',
            fontSize: '24px',
            fontWeight: '4 00',
            lineHeight: '29px',
            marginBottom: '5px',
          }}
        >
          NCR Input Form
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Manrope',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '50px',
            color: 'rgba(96, 96, 96, 1)',
          }}
        >
          Resolution Action Information
        </Typography>
        <Stepper />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '10px',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
            width: '30%',
          }}
        >
          <Box sx={fillBigContainer}>
            <Typography sx={inputTypo}>Action - 1</Typography>
            <TextField
              multiline={true}
              placeholder="Describe action 1"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              value={ncrDetails.action1}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, action1: e.target.value });
              }}
              sx={inputField}
            />
          </Box>
          <Box sx={fillContainer}>
            <Typography sx={inputTypo}>Action-1 Status</Typography>
            <div>
              <select
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'rgba(239, 241, 249, 0.6)',
                  color: 'rgba(171, 175, 177, 1)',
                  fontSize: '17px',
                }}
                value={ncrDetails.act1Status}
                onChange={(e) => {
                  setNcrDetails({ ...ncrDetails, act1Status: e.target.value });
                }}
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </Box>
          <Box sx={fillContainer}>
            <Typography sx={inputTypo}>Date Completed</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={['DatePicker', 'DatePicker', 'DatePicker']}
              >
                <DatePicker
                  label={'MM/DD/YYYY'}
                  views={['year', 'month', 'day']}
                  onChange={(e) => {
                    const monthNames = [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December',
                    ];

                    let monName = monthNames[e.$d.getMonth()];
                    let date = e.$d.getDate();
                    let year = e.$d.getFullYear();
                    setNcrDetails({
                      ...ncrDetails,
                      act1Date: `${date}/${monName}/${year}`,
                    });
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box sx={fillContainer}>
            <Typography sx={inputTypo}>Assigned to</Typography>
            <div>
              <select
                style={{
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'rgba(239, 241, 249, 0.6)',
                  color: 'rgba(171, 175, 177, 1)',
                  fontSize: '17px',
                }}
                value={ncrDetails.act1Assign}
                onChange={(e) => {
                  setNcrDetails({ ...ncrDetails, act1Assign: e.target.value });
                }}
              >
                <option value="">Select</option>
                <option value="Tony Stark">Tony Stark</option>
                <option value="Steve Rogers">Steve Rogers</option>
                <option value="Bruce Banner">Bruce Banner</option>
              </select>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
            width: '30%',
          }}
        >
          <Box sx={fillBigContainer}>
            <Typography sx={inputTypo}>Action - 2</Typography>
            <TextField
              sx={inputField}
              multiline={true}
              placeholder="Describe action 2"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              value={ncrDetails.action2}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, action2: e.target.value });
              }}
            />
          </Box>
          <Box sx={fillContainer}>
            <Typography sx={inputTypo}>Action-2 Status</Typography>
            <div>
              <select
                style={{
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'rgba(239, 241, 249, 0.6)',
                  color: 'rgba(171, 175, 177, 1)',
                  fontSize: '17px',
                }}
                value={ncrDetails.act2Status}
                onChange={(e) => {
                  setNcrDetails({ ...ncrDetails, act2Status: e.target.value });
                }}
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </Box>
          <Box sx={fillContainer}>
            <Typography sx={inputTypo}>Date Completed</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={['DatePicker', 'DatePicker', 'DatePicker']}
              >
                <DatePicker
                  label={'MM/DD/YYYY'}
                  views={['year', 'month', 'day']}
                  onChange={(e) => {
                    const monthNames = [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December',
                    ];

                    let monName = monthNames[e.$d.getMonth()];
                    let date = e.$d.getDate();
                    let year = e.$d.getFullYear();
                    setNcrDetails({
                      ...ncrDetails,
                      act2Date: `${date}/${monName}/${year}`,
                    });
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box sx={fillContainer}>
            <Typography sx={inputTypo}>Assigned to</Typography>
            <div>
              <select
                style={{
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'rgba(239, 241, 249, 0.6)',
                  color: 'rgba(171, 175, 177, 1)',
                  fontSize: '17px',
                }}
                value={ncrDetails.act2Assign}
                onChange={(e) => {
                  setNcrDetails({ ...ncrDetails, act2Assign: e.target.value });
                }}
              >
                <option value="">Select</option>
                <option value="Tony Stark">Tony Stark</option>
                <option value="Steve Rogers">Steve Rogers</option>
                <option value="Bruce Banner">Bruce Banner</option>
              </select>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
            // border: '1px solid blue',
            width: '30%',
          }}
        >
          <Box sx={fillBigContainer}>
            <Typography sx={inputTypo}>Action - 3</Typography>
            <TextField
              sx={inputField}
              multiline={true}
              placeholder="Describe action 3"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              value={ncrDetails.action3}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, action3: e.target.value });
              }}
            />
          </Box>
          <Box sx={fillContainer}>
            <Typography sx={inputTypo}>Action-3 Status</Typography>
            <div>
              <select
                style={{
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'rgba(239, 241, 249, 0.6)',
                  color: 'rgba(171, 175, 177, 1)',
                  fontSize: '17px',
                }}
                value={ncrDetails.act3Status}
                onChange={(e) => {
                  setNcrDetails({ ...ncrDetails, act3Status: e.target.value });
                }}
              >
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </Box>
          <Box sx={fillContainer}>
            <Typography sx={inputTypo}>Date Completed</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={['DatePicker', 'DatePicker', 'DatePicker']}
              >
                <DatePicker
                  label={'MM/DD/YYYY'}
                  views={['year', 'month', 'day']}
                  onChange={(e) => {
                    const monthNames = [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December',
                    ];

                    let monName = monthNames[e.$d.getMonth()];
                    let date = e.$d.getDate();
                    let year = e.$d.getFullYear();
                    // console.log(`${date}/${monName}/${year}`);
                    setNcrDetails({
                      ...ncrDetails,
                      act3Date: `${date}/${monName}/${year}`,
                    });
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box sx={fillContainer}>
            <Typography sx={inputTypo}>Assigned to</Typography>
            <div>
              <select
                style={{
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'rgba(239, 241, 249, 0.6)',
                  color: 'rgba(171, 175, 177, 1)',
                  fontSize: '17px',
                }}
                value={ncrDetails.act3Assign}
                onChange={(e) => {
                  setNcrDetails({ ...ncrDetails, act3Assign: e.target.value });
                }}
              >
                <option value="">Select</option>
                <option value="Tony Stark">Tony Stark</option>
                <option value="Steve Rogers">Steve Rogers</option>
                <option value="Bruce Banner">Bruce Banner</option>
              </select>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InputForm1;
