// components/Spinner.tsx
import React, { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const Spinner: FC = () => {
  return (
    <Backdrop
      open={true}
      sx={{
        color: '#1976d2', // spinner color
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Spinner;
