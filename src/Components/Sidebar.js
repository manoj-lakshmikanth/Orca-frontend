import React from 'react';
import { Box, Typography } from '@mui/material';
import { MdOutlineDashboard } from 'react-icons/md';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { FaSimCard, FaUserTie } from 'react-icons/fa';
import styled from '@emotion/styled';
import Unifin from '../Images/Unifin.jpeg';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigation = useNavigate();
  const ElementDesign = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    columnGap: '8%',
    alignItems: 'center',
    // border: '1px solid red',
  });

  const TypoFont = styled(Typography)({
    fontFamily: 'Manrope',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '36px',
    color: 'rgba(51, 51, 51, 1)',
    // letter-spacing: 0em;
    // text-align: left;
  });

  const SubTypoFont = styled(Typography)({
    fontFamily: 'Manrope',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '65px',
    color: 'rgba(51, 51, 51, 1)',
    // letter-spacing: 0em;
    // text-align: left;
  });

  return (
    <Box
      sx={{
        width: '17.5%',
        height: '100vh',
        backgroundColor: 'rgba(213, 196, 249, 0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          padding: '60px 0px 0px 30px',
          //   paddingTop: '60px',
          //   border: '1px solid green',
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '24px',
        }}
      >
        <ElementDesign>
          <MdOutlineDashboard size={24} color={'rgba(51, 51, 51, 1)'} />
          <TypoFont>DashBoard</TypoFont>
        </ElementDesign>
        <ElementDesign>
          <FiUsers size={24} color={'rgba(51, 51, 51, 1)'} />
          <TypoFont>Users</TypoFont>
        </ElementDesign>
        <Box>
          <Box
            sx={{
              backgroundColor: 'rgba(213, 196, 249, 1)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'row',
              columnGap: '8%',
              alignItems: 'center',
              //   justifyContent: 'center',
              //   color: 'rgb(73,0,228)',
              height: '57px',
              paddingLeft: '5px',
            }}
          >
            <FaSimCard size={20} color={'rgb(73,0,228)'} />
            <Typography
              sx={{
                fontFamily: 'Manrope',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '36px',
                color: 'rgba(73,0,228)',
              }}
            >
              NCR Entry
            </Typography>
          </Box>
          <Box sx={{ marginLeft: '20%' }}>
            <SubTypoFont>NCR Information</SubTypoFont>
            <SubTypoFont>Actions</SubTypoFont>
            <SubTypoFont>Material Information</SubTypoFont>
            <SubTypoFont>Financial Information</SubTypoFont>
            <SubTypoFont>Approver/Reviewer</SubTypoFont>
          </Box>
        </Box>
        <ElementDesign>
          <FiSettings size={24} color={'rgba(51, 51, 51, 1)'} />
          <TypoFont>Settings</TypoFont>
        </ElementDesign>
        <Box
          sx={{
            backgroundColor: 'rgba(213, 196, 249, 1)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'row',
            columnGap: '8%',
            alignItems: 'center',
            //   justifyContent: 'center',
            //   color: 'rgb(73,0,228)',
            height: '57px',
            paddingLeft: '5px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => {
            navigation('/approverhome');
          }}
        >
          <FaUserTie size={20} color={'rgb(73,0,228)'} />
          <Typography
            sx={{
              fontFamily: 'Manrope',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '36px',
              color: 'rgba(73,0,228)',
            }}
          >
            Approver Portal
          </Typography>
        </Box>
      </Box>

      <Box sx={{ margin: 'auto' }}>
        <img
          src={Unifin}
          alt=""
          style={{ maxWidth: '261px', maxHeight: '83px' }}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
