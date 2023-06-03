import { Box, Typography } from '@mui/material';
import React from 'react';
import Stepper from './Stepper';
import styled from '@emotion/styled';

const InputForm2 = ({ ncrDetails, setNcrDetails }) => {
  const FillContainer = styled(Box)({
    borderRadius: '8px',
    backgroundColor: 'rgba(239, 241, 249, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    padding: '10px',
  });

  const InputTypo = styled(Typography)({
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '14.5px',
  });

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
          Material Related Information
        </Typography>
        <Stepper />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          columnGap: '20px',
          rowGap: '20px',
          marginTop: '20px',
        }}
      >
        <FillContainer>
          <InputTypo>Vendor MRI</InputTypo>
          <div>
            <select
              style={{
                width: '100%',
                border: 'none',
                backgroundColor: 'rgba(239, 241, 249, 0.6)',
                color: 'rgba(171, 175, 177, 1)',
                fontSize: '18px',
              }}
              value={ncrDetails.vendorMRI}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, vendorMRI: e.target.value });
              }}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </FillContainer>
        <FillContainer>
          <InputTypo>PO MRI</InputTypo>
          <div>
            <select
              style={{
                width: '100%',
                border: 'none',
                backgroundColor: 'rgba(239, 241, 249, 0.6)',
                color: 'rgba(171, 175, 177, 1)',
                fontSize: '18px',
              }}
              value={ncrDetails.poMRI}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, poMRI: e.target.value });
              }}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </FillContainer>
        <FillContainer>
          <InputTypo>QTY MRI</InputTypo>
          <div>
            <select
              style={{
                width: '100%',
                border: 'none',
                backgroundColor: 'rgba(239, 241, 249, 0.6)',
                color: 'rgba(171, 175, 177, 1)',
                fontSize: '18px',
              }}
              value={ncrDetails.qtyMRI}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, qtyMRI: e.target.value });
              }}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </FillContainer>
        <FillContainer>
          <InputTypo>Part no. MRI</InputTypo>
          <div>
            <select
              style={{
                width: '100%',
                border: 'none',
                backgroundColor: 'rgba(239, 241, 249, 0.6)',
                color: 'rgba(171, 175, 177, 1)',
                fontSize: '18px',
              }}
              value={ncrDetails.partnoMRI}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, partnoMRI: e.target.value });
              }}
            >
              <option value="">Select</option>
              <option value="Production">Production</option>
              <option value="Repairs">Repairs</option>
            </select>
          </div>
        </FillContainer>
        <FillContainer>
          <InputTypo>Part Description MRI</InputTypo>
          <div>
            <select
              style={{
                width: '100%',
                border: 'none',
                backgroundColor: 'rgba(239, 241, 249, 0.6)',
                color: 'rgba(171, 175, 177, 1)',
                fontSize: '18px',
              }}
              value={ncrDetails.partDescMRI}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, partDescMRI: e.target.value });
              }}
            >
              <option value="">Select</option>
              <option value="Zen Corporation">Zen Corporation</option>
              <option value="Multi Corporation">Multi Corporation</option>
            </select>
          </div>
        </FillContainer>
        <FillContainer>
          <InputTypo>COPQ Cost Desc</InputTypo>
          <div>
            <select
              style={{
                width: '100%',
                border: 'none',
                backgroundColor: 'rgba(239, 241, 249, 0.6)',
                color: 'rgba(171, 175, 177, 1)',
                fontSize: '18px',
              }}
              value={ncrDetails.copqCostDesc}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, copqCostDesc: e.target.value });
              }}
            >
              <option value="">Select</option>
              <option value="Zen Corporation">Zen Corporation</option>
              <option value="Multi Corporation">Multi Corporation</option>
            </select>
          </div>
        </FillContainer>
        <FillContainer>
          <InputTypo>COPQ Value</InputTypo>
          <div>
            <select
              style={{
                width: '100%',
                border: 'none',
                backgroundColor: 'rgba(239, 241, 249, 0.6)',
                color: 'rgba(171, 175, 177, 1)',
                fontSize: '18px',
              }}
              value={ncrDetails.copqValue}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, copqValue: e.target.value });
              }}
            >
              <option value="">Select</option>
              <option value="Chris Tucker">Chris Tucker</option>
              <option value="Michael Jordan">Michael Jordan</option>
              <option value="Alastair Cook">Alastair Cook</option>
            </select>
          </div>
        </FillContainer>
        <FillContainer>
          <InputTypo>COPQ Notes</InputTypo>
          <div>
            <select
              style={{
                width: '100%',
                border: 'none',
                backgroundColor: 'rgba(239, 241, 249, 0.6)',
                color: 'rgba(171, 175, 177, 1)',
                fontSize: '18px',
              }}
              value={ncrDetails.copqNotes}
              onChange={(e) => {
                setNcrDetails({ ...ncrDetails, copqNotes: e.target.value });
              }}
            >
              <option value="">Select</option>
              <option value="Alvin">Alvin</option>
              <option value="Minion">Minion</option>
              <option value="Bean">Bean</option>
            </select>
          </div>
        </FillContainer>
      </Box>
    </Box>
  );
};

export default InputForm2;
