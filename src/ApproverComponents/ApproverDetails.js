import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getDetails } from '../api/api';

const ApproverDetails = ({ clickID, setClickID }) => {
  // console.log(clickID);
  const [getData, setGetData] = useState({});

  const inpContainer = {
    borderRadius: '8px',
    backgroundColor: 'rgba(239, 241, 249, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    padding: '10px',
    width: '100%',
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

  async function getAllDetails() {
    let response = await getDetails();
    // console.log(response.data.data[clickID]);
    setGetData(response.data.data[clickID]);
  }
  useEffect(() => {
    getAllDetails();
  }, [clickID]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px',
        width: '70%',
        // marginLeft: '20px',
        padding: '20px',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '32px',
        }}
      >
        {getData.summary}
      </Typography>
      <Box>
        <Box sx={{ borderBottom: '2px solid grey' }}>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '20px',
              color: 'blue',
            }}
          >
            Details
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            // border: '1px solid green',
            height: '450px',
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'row',
            columnGap: '5%',
            paddingTop: '20px',
            // width: '50%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '15px',
              width: '46%',
            }}
          >
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Summary</Typography>
              <TextField
                multiline={true}
                placeholder="NCR Summary"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.summary}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Impact</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.impact}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Dept Responsible</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.deptResponsible}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Identified In</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.identifiedIn}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Item ID</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.itemId}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Job Number</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.jobNo}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Product Type</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.productType}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Action - 1</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.action1}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Action - 1 Status</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.act1Status}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Date Completed</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.act1Date}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Assigned To</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.act1Assign}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Action - 3</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.action3}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Action - 3 Status</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.act3Status}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Date Completed</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.act3Date}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Assigned To</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.act3Assign}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Part Description MRI</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.partDescMRI}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>COPQ Value</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.copqValue}
                sx={inputField}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '15px',
              width: '46%',
            }}
          >
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Location</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.location}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Customer</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.customer}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Raised By</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.raisedBy}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Supplier Name</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.supplierName}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Issue Type</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.issueType}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Attachments</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.attachments}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Action - 2</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.action2}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Action - 2 Status</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.act2Status}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Date Completed</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.act2Date}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Assigned To</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.act2Assign}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Vendor MRI</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.vendorMRI}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>PO MRI</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.poMRI}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>QTY MRI</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.qtyMRI}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>Part No. MRI</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.partnoMRI}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>COPQ Cost Desc</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.copqCostDesc}
                sx={inputField}
              />
            </Box>
            <Box sx={inpContainer}>
              <Typography sx={inputTypo}>COPQ Notes</Typography>
              <TextField
                multiline={true}
                placeholder=""
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                value={getData.copqNotes}
                sx={inputField}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '32px',
            marginBottom: '10px',
          }}
        >
          Description
        </Typography>
        <TextField
          multiline={true}
          placeholder="NCR description here in detail"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            width: '99%',
            height: '100px',
            padding: '5px',
            fontSize: '18px',
            backgroundColor: ' rgba(244, 244, 246, 1)',
            border: '2px solid rgba(136, 145, 170, 1)',
            borderRadius: '10px',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '4%',
          justifyContent: 'end',
          marginRight: '2%',
        }}
      >
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="contained">Contained</Button>
      </Box>
    </Box>
  );
};

export default ApproverDetails;
