'use client';

import React, { useState } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Box,
  SpeedDial,
  SpeedDialAction,
  Popper,
  Paper,
  Typography,
} from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';

import {
  charcoalDarkTheme,
  coralPinkTheme,
  goldenAmberTheme,
  midnightBlueDarkTheme,
  softBlueTheme,
  softGreenTheme,
  warmGrayTheme,
  softTealTheme,
  slateBlueTheme,
  slateBlueDarkishTheme,
  slateBlueDarkerTheme2,
  neutralGreyTheme,
} from './theme';

interface RootLayoutProps {
  children: React.ReactNode;
}

const themes = {
  charcoalDarkTheme,
  coralPinkTheme,
  goldenAmberTheme,
  midnightBlueDarkTheme,
  softBlueTheme,
  softGreenTheme,
  warmGrayTheme,
  softTealTheme,
  slateBlueTheme,
  slateBlueDarkishTheme,
  slateBlueDarkerTheme2,
  neutralGreyTheme,
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [currentTheme, setCurrentTheme] = useState(neutralGreyTheme);
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);


  const themeActions = Object.keys(themes).map((key) => ({
    name: key,
    theme: themes[key as keyof typeof themes],
    color: themes[key as keyof typeof themes].palette.primary.main,
  }));

  const handleHover = (event: React.MouseEvent<HTMLElement>, themeName: string) => {
    setHoveredTheme(themeName);
    setAnchorEl(event.currentTarget);
  };

  const handleLeave = () => {
    setHoveredTheme(null);
    setAnchorEl(null);
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          {children}

          {/* Floating Theme Selector */}
          <SpeedDial
            ariaLabel="Select Theme"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={<ColorLensIcon />}
            direction="up"
          >
            {themeActions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      bgcolor: action.color,
                      borderRadius: '50%',
                    }}
                  />
                }
                onClick={() => setCurrentTheme(action.theme)}
                onMouseEnter={(e) => handleHover(e, action.name)}
                onMouseLeave={handleLeave}
              />
            ))}
          </SpeedDial>

          {/* Hover Preview Popper */}
          <Popper open={!!hoveredTheme && !!anchorEl} anchorEl={anchorEl} placement="left-start">
            {hoveredTheme && (
              <Paper sx={{ p: 1, display: 'flex', gap: 1, borderRadius: 2, boxShadow: 3 }}>
                {['primary', 'secondary', 'background'].map((key) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const palette = (themes as any)[hoveredTheme].palette;
                  const color =
                    key === 'background'
                      ? palette.background.default
                      : palette[key as 'primary' | 'secondary'].main;
                  return (
                    <Box
                      key={key}
                      sx={{
                        width: 30,
                        height: 30,
                        bgcolor: color,
                        borderRadius: 1,
                        border: '1px solid #ccc',
                      }}
                      title={key}
                    />
                  );
                })}
                <Typography variant="caption" sx={{ alignSelf: 'center', ml: 1 }}>
                  {hoveredTheme.replace(/Theme$/, '')}
                </Typography>
              </Paper>
            )}
          </Popper>
        </ThemeProvider>
      </body>
    </html>
  );
}
