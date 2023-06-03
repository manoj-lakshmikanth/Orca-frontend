import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import Stepper from './Stepper';

const InputForm0 = ({ ncrDetails, setNcrDetails }) => {
  const inpContainer = {
    borderRadius: '8px',
    backgroundColor: 'rgba(239, 241, 249, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    padding: '10px',
    width: '90%',
    height: '50px',
  };

  const inputTypo = {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '14.5px',
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
        width: '80%',
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
          NCR Information - To be completed by Initiating individual
        </Typography>
        <Stepper />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            rowGap: '20px',
            width: '50%',
          }}
        >
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Summary *</Typography>
            <TextField
              multiline={true}
              placeholder="NCR Summary"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              value={ncrDetails.summary}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, summary: e.target.value });
              }}
              sx={inputField}
            />
          </Box>
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Impact</Typography>
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
                value={ncrDetails.impact}
                onChange={(e) => {
                  setNcrDetails({ ...ncrDetails, impact: e.target.value });
                }}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </Box>
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Dept Responsible</Typography>
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
                value={ncrDetails.deptResponsible}
                onChange={(e) => {
                  setNcrDetails({
                    ...ncrDetails,
                    deptResponsible: e.target.value,
                  });
                }}
              >
                <option value="Production">Production</option>
                <option value="Repairs">Repairs</option>
              </select>
            </div>
          </Box>
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Identified in</Typography>
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
                value={ncrDetails.identifiedIn}
                onChange={(e) => {
                  setNcrDetails({
                    ...ncrDetails,
                    identifiedIn: e.target.value,
                  });
                }}
              >
                <option value="">Select</option>
                <option value="Final Inspection">Final Inspection</option>
                <option value="Initial Inspection">Initial Inspection</option>
              </select>
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '2%' }}>
            <div style={{ width: '13%' }}>
              <select
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'rgba(239, 241, 249, 0.6)',
                  color: 'rgba(171, 175, 177, 1)',
                  fontSize: '17px',
                  height: '68px',
                  borderRadius: '10px',
                  paddingLeft: '10px',
                }}
                value={ncrDetails.itemId}
                onChange={(e) => {
                  setNcrDetails({
                    ...ncrDetails,
                    itemId: e.target.value,
                  });
                }}
              >
                <option value="">Item ID</option>
                <option value="AB">AB</option>
                <option value="BC">BC</option>
                <option value="CD">CD</option>
              </select>
            </div>
            <Box sx={{ ...inpContainer, width: '75%' }}>
              <Typography sx={inputTypo}>Job Number</Typography>
              <TextField
                multiline={true}
                placeholder="80298761"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={ncrDetails.jobNo}
                onChange={(e) => {
                  setNcrDetails({ ...ncrDetails, jobNo: e.target.value });
                }}
                sx={inputField}
              />
            </Box>
          </Box>
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Product Type</Typography>
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
                value={ncrDetails.productType}
                onChange={(e) => {
                  setNcrDetails({
                    ...ncrDetails,
                    productType: e.target.value,
                  });
                }}
              >
                <option value="">Select</option>
                <option value="Heat Exchanger">Heat Exchanger</option>
                <option value="Condensor">Condensor</option>
                <option value="Evaporator">Evaporator</option>
              </select>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            rowGap: '20px',
            width: '50%',
          }}
        >
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Location</Typography>
            <TextField
              multiline={true}
              placeholder="NCR issue location"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              value={ncrDetails.location}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, location: e.target.value });
              }}
              sx={inputField}
            />
          </Box>
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Customer</Typography>
            <TextField
              multiline={true}
              placeholder="Your last name"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              value={ncrDetails.customer}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, customer: e.target.value });
              }}
              sx={inputField}
            />
          </Box>
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Raised By</Typography>
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
                value={ncrDetails.raisedBy}
                onChange={(e) => {
                  setNcrDetails({ ...ncrDetails, raisedBy: e.target.value });
                }}
              >
                <option value="">Select</option>
                <option value="John Wick">John Wick</option>
                <option value="Jason Statham">Jason Statham</option>
                <option value="Dywane Johnson">Dywane Johnson</option>
              </select>
            </div>
          </Box>
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Supplier Name</Typography>
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
                value={ncrDetails.supplierName}
                onChange={(e) => {
                  setNcrDetails({
                    ...ncrDetails,
                    supplierName: e.target.value,
                  });
                }}
              >
                <option value="">Select</option>
                <option value="Zen Corporation">Zen Corporation</option>
                <option value="Multi Corporation">Multi Corporation</option>
              </select>
            </div>
          </Box>
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Issue Type</Typography>
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
                value={ncrDetails.issueType}
                onChange={(e) => {
                  setNcrDetails({
                    ...ncrDetails,
                    issueType: e.target.value,
                  });
                }}
              >
                <option value="">Select</option>
                <option value="Quality">Quality</option>
                <option value="Dimensional">Dimensional</option>
              </select>
            </div>
          </Box>
          <Box sx={inpContainer}>
            <Typography sx={inputTypo}>Attachments</Typography>
            <TextField
              multiline={true}
              placeholder="Description"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              value={ncrDetails.attachments}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, attachments: e.target.value });
              }}
              sx={inputField}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InputForm0;
