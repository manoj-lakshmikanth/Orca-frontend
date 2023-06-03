import { Box, Typography } from '@mui/material';
import React from 'react';
import Profileimg from '../Images/Profileimg.jpeg';

const Header = () => {
  return (
    <Box
      sx={{
        width: '98%',
        height: '102px',
        borderBottom: '2px solid rgba(226, 226, 226, 1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '24px',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: 'Manrope',
            fontSize: '32px',
            fontWeight: '600',
            lineHeight: '36px',
            marginBottom: '5px',
          }}
        >
          NCR Approver
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Manrope',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '36px',
            color: 'rgba(96, 96, 96, 1)',
          }}
        >
          View, Manage and Act on NCR assigned to you
        </Typography>
      </Box>
      <img
        src={Profileimg}
        alt=""
        style={{ maxWidth: '63px', maxHeight: '63px' }}
      />
    </Box>
  );
};

export default Header;
