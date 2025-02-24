import React from 'react';
import { Container, Box, Typography, Button, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppTheme from '../shared-theme/AppTheme';
import icon from '../components/NoPage/404.svg';
import style from '../components/NoPage/404.css';

export default function NoPage(props) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            mb: 4,
          }}
        >
          <img src={icon} className="App-logo" alt="404" />
          <Typography variant="h5" component="div" gutterBottom>
            Error 404: Page not found
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            The page you are looking for does not exist.
          </Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Go to Home
        </Button>
      </Container>
    </AppTheme>
  );
}