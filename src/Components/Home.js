import React, { useContext, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import InputForm0 from './InputForm0';
import InputForm1 from './InputForm1';
import InputForm2 from './InputForm2';
import { Box, Button } from '@mui/material';
import userContext from '../Context';
import axios from 'axios';

const Home = () => {
  const { stepCount, setStepCount } = useContext(userContext);
  const [ncrDetails, setNcrDetails] = useState({
    summary: '',
    location: '',
    impact: '',
    customer: '',
    deptResponsible: '',
    raisedBy: '',
    identifiedIn: '',
    supplierName: '',
    itemId: '',
    jobNo: '',
    issueType: '',
    productType: '',
    attachments: '',
    action1: '',
    act1Status: 'Not Started',
    act1Date: '',
    act1Assign: '',
    action2: '',
    act2Status: 'Not Started',
    act2Date: '',
    act2Assign: '',
    action3: '',
    act3Status: 'Not Started',
    act3Date: '',
    act3Assign: '',
    vendorMRI: 'Not Started',
    poMRI: 'Not Started',
    qtyMRI: 'Not Started',
    partnoMRI: '',
    partDescMRI: '',
    copqCostDesc: '',
    copqValue: '',
    copqNotes: '',
  });

  async function continueHandler() {
    if (stepCount <= 2) {
      setStepCount(stepCount + 1);
    }
    if (stepCount === 3) {
      console.log(ncrDetails);
      let options = {
        url: 'http://localhost:8000/nrcDetails',
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        data: ncrDetails,
      };
      try {
        await axios(options);
        setNcrDetails({
          summary: '',
          location: '',
          impact: '',
          customer: '',
          deptResponsible: '',
          raisedBy: '',
          identifiedIn: '',
          supplierName: '',
          itemId: '',
          jobNo: '',
          issueType: '',
          productType: '',
          attachments: '',
          action1: '',
          act1Status: 'Not Started',
          act1Date: '',
          act1Assign: '',
          action2: '',
          act2Status: 'Not Started',
          act2Date: '',
          act2Assign: '',
          action3: '',
          act3Status: 'Not Started',
          act3Date: '',
          act3Assign: '',
          vendorMRI: 'Not Started',
          poMRI: 'Not Started',
          qtyMRI: 'Not Started',
          partnoMRI: '',
          partDescMRI: '',
          copqCostDesc: '',
          copqValue: '',
          copqNotes: '',
        });
        setStepCount(1);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '3%',
      }}
    >
      <Sidebar />
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '30px',
        }}
      >
        <Header />
        {stepCount === 1 ? (
          <InputForm0 ncrDetails={ncrDetails} setNcrDetails={setNcrDetails} />
        ) : stepCount === 2 ? (
          <InputForm1 ncrDetails={ncrDetails} setNcrDetails={setNcrDetails} />
        ) : stepCount === 3 ? (
          <InputForm2 ncrDetails={ncrDetails} setNcrDetails={setNcrDetails} />
        ) : (
          <div></div>
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            margin: 'auto',
            justifyContent: 'space-between',
            width: '70%',
          }}
        >
          <Button
            variant="outlined"
            sx={{ borderRadius: '8px', width: '25%', height: '50px' }}
            onClick={() => {
              if (stepCount >= 2) {
                setStepCount(stepCount - 1);
              }
            }}
          >
            Back
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: '8px', width: '25%', height: '50px' }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: '8px', width: '25%', height: '50px' }}
            onClick={continueHandler}
          >
            Continue
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Home;
