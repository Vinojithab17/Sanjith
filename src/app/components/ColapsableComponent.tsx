import { useState } from 'react';
import { Box, IconButton, Collapse, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CollapsibleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: 2,
        p: 2,
        mb: 2,
        bgcolor: 'background.paper',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(!open)}
      >
        <Typography variant="h6">{title}</Typography>

        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: '0.3s',
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      {/* Content */}
      <Collapse in={open} timeout={300} unmountOnExit>
        <Box sx={{ mt: 2 }}>{children}</Box>
      </Collapse>
    </Box>
  );
}
