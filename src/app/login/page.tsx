'use client';

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async () => {
    try {
      await axios.post('/api/auth/login', form);
      router.push('/admin/projects');
    } catch (err) {
      console.error(err);
      alert('Invalid login');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 6 }}>
        <Typography variant="h5" mb={2}>
          Login
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Email"
            fullWidth
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
