import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import HomeIcon from '@mui/icons-material/Home';

function AdminHeader() {
  const router = useRouter();

  const doLogout = async () => {
    await axios.get('/api/auth/logout');
    router.push('/login');
  };
  const handleBackToHome = () => {
    router.push('/'); // navigate to home
  };
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar>
        {/* Home icon */}
        <IconButton edge="start" color="inherit" onClick={handleBackToHome} sx={{ mr: 2 }}>
          <HomeIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button onClick={doLogout}>← Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AdminHeader;
