import { Box, Card, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { HiOutlineSearch } from 'react-icons/hi';
import { getDetails } from '../api/api';
import userContext from '../Context';

const ApproverSection = ({ clickID, setClickID }) => {
  const { setShowSpec } = useContext(userContext);

  const [getData, setGetData] = useState([]);

  async function getAllDetails() {
    let response = await getDetails();
    // console.log(response.data.data);
    setGetData(response.data.data);
  }

  function clickHandler(id) {
    setShowSpec(true);
    setClickID(id);
  }

  useEffect(() => {
    getAllDetails();
  }, []);

  return (
    <Box
      sx={{ width: '25%', height: '83.5vh', borderRight: '2px dotted blue' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '97%',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '32px',
              fontWeight: '700',
              lineHeight: '39px',
            }}
          >
            NCRs
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '20px',
              paddingTop: '10px',
            }}
          >
            {getData.length} Total
          </Typography>
        </Box>
        <AiFillPlusCircle size={36} color={'rgba(2, 99, 224, 1)'} />
      </Box>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '36px',
          marginTop: '30px',
          // marginBottom: '20px',
          width: '97%',
        }}
      >
        <Box
          sx={{
            width: '5%',
            backgroundColor: 'rgba(136, 145, 170, 1)',
            padding: '10px',
          }}
        >
          <HiOutlineSearch />
        </Box>
        <TextField
          multiline={true}
          placeholder="Search"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ display: 'flex', justifyContent: 'center', paddingLeft: '5px' }}
        />
      </Card>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
        }}
      >
        {getData.map((item, id) => {
          return (
            <div
              key={id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '10px',
                borderBottom: '1px solid grey',
                height: '72px',
                alignItems: 'center',
                justifyContent: 'start',
                paddingLeft: '5%',
                width: '95%',
                marginTop: '0px',
                cursor: 'pointer',
              }}
              onClick={() => {
                clickHandler(id);
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(200, 175, 240, 1)',
                  borderRadius: '15px',
                  width: '32px',
                  height: '32px',
                  position: 'relative',
                }}
              >
                <p
                  style={{
                    position: 'relative',
                    top: '-25%',
                    left: '25%',
                    fontFamily: 'Inter',
                    fontSize: '12px',
                    fontWeight: '700',
                    lineHeight: '32px',
                  }}
                >
                  BT
                </p>
              </div>
              <div>
                <div>
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '18px',
                      fontWeight: '400',
                      lineHeight: '20px',
                      // border: '1px solid red',
                      margin: '0px',
                    }}
                  >
                    {item.summary}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '20px',
                      color: 'rgba(96, 107, 133, 1)',
                      margin: '0px',
                      paddingTop: '5px',
                    }}
                  >
                    Contacted: {item.act1Date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default ApproverSection;
