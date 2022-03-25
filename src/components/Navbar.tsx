import { Box, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface NavbarProps {
  hasArrow?: boolean;
}

const Navbar: FC<NavbarProps> = ({ hasArrow = false }) => {
  return (
    <Typography variant="h4" py={2} alignSelf="start" ml={5}>
      <Box display="flex" alignItems="center">
        {hasArrow && (
          <IconButton component={Link} to="/">
            <BiArrowBack />
          </IconButton>
        )}
        <Box ml={1}>Inventory Management System</Box>
      </Box>
    </Typography>
  );
};

export default Navbar;
