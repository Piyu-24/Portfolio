import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Download,
  ContactMail,
  GitHub,
  LinkedIn,
} from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    // Add resume download logic here
    console.log('Download resume clicked');
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      ref={heroRef}
      id="home"
      sx={{
        width: '100%',
        py: { xs: 4, sm: 5, md: 6, lg: 7 },
        px: { xs: 1, sm: 2 },
        mb: { xs: 2, sm: 3, md: 4 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1f2937 0%, #374151 25%, #4b5563 50%, #6b7280 75%, #9ca3af 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)',
        color: theme.palette.mode === 'dark' ? 'white' : '#1f2937',
        borderRadius: { xs: 1, sm: 2 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 20px 60px rgba(31, 41, 55, 0.4)'
          : '0 20px 60px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: { xs: '95%', md: '90%', lg: '85%' },
          maxWidth: '1400px',
          minHeight: { md: '500px' },
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Left Side: Text Content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
            mt: { xs: 2, md: 0 },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.mode === 'dark' 
                ? '#d4b896' 
                : '#1f2937',
              fontWeight: 500,
              mb: 2,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Welcome to my portfolio
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              mb: { xs: 2, md: 3 },
              fontWeight: '700',
              fontSize: { xs: '2rem', sm: '2.4rem', md: '2.8rem', lg: '3.2rem' },
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #d4b896, #c8a882)'
                : 'linear-gradient(135deg, #1f2937, #374151)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
              textAlign: { xs: 'center', md: 'left' },
              lineHeight: { xs: 1.1, md: 1.2 },
            }}
          >
            IT & Management
            <br />
            Professional
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
              lineHeight: '1.7',
              color: theme.palette.mode === 'dark'
                ? 'rgba(229, 231, 235, 0.95)'
                : 'rgba(31, 41, 55, 0.8)',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
              textAlign: { xs: 'center', md: 'left' },
              fontWeight: '400',
              maxWidth: '650px',
            }}
          >
            Combining technical expertise with strategic thinking to drive
            innovation and deliver exceptional results in today's digital landscape.
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: theme.palette.mode === 'dark'
                ? 'rgba(229, 231, 235, 0.8)'
                : 'rgba(31, 41, 55, 0.7)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.05)',
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: '600px',
            }}
          >
            BSc Honors graduate from University of Moratuwa with expertise in
            software development, project management, and digital solutions.
            Passionate about creating technology that makes a difference.
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 2, md: 3 }, 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'center' },
            mb: 4,
          }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Download />}
              onClick={handleDownloadResume}
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #c8a882, #d4b896)'
                  : 'linear-gradient(135deg, #1f2937, #374151)',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #d4b896, #e2c4a0)'
                    : 'linear-gradient(135deg, #374151, #4b5563)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Download Resume
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<ContactMail />}
              onClick={handleContactClick}
              sx={{
                borderColor: theme.palette.mode === 'dark' ? '#d4b896' : '#1f2937',
                color: theme.palette.mode === 'dark' ? '#d4b896' : '#1f2937',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '12px',
                borderWidth: '2px',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(212, 184, 150, 0.1)' : 'rgba(31, 41, 55, 0.1)',
                  borderColor: theme.palette.mode === 'dark' ? '#e2c4a0' : '#374151',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get in Touch
            </Button>
          </Box>

          {/* Social Links */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            justifyContent: { xs: 'center', md: 'flex-start' },
            flexWrap: 'wrap',
          }}>
            <Button
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHub />}
              sx={{
                color: theme.palette.mode === 'dark'
                  ? 'rgba(229, 231, 235, 0.7)'
                  : 'rgba(31, 41, 55, 0.7)',
                fontSize: '1rem',
                fontWeight: 500,
                '&:hover': {
                  color: theme.palette.mode === 'dark' ? '#d4b896' : '#1f2937',
                  transform: 'translateY(-2px)',
                  backgroundColor: 'transparent',
                },
                transition: 'all 0.3s ease',
              }}
            >
              GitHub
            </Button>
            <Button
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LinkedIn />}
              sx={{
                color: theme.palette.mode === 'dark'
                  ? 'rgba(229, 231, 235, 0.7)'
                  : 'rgba(31, 41, 55, 0.7)',
                fontSize: '1rem',
                fontWeight: 500,
                '&:hover': {
                  color: theme.palette.mode === 'dark' ? '#d4b896' : '#1f2937',
                  transform: 'translateY(-2px)',
                  backgroundColor: 'transparent',
                },
                transition: 'all 0.3s ease',
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>

        {/* Right Side: Profile Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
            mt: { xs: 0, md: '32px' },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
          }}
        >
          <Avatar
            src="/path-to-your-photo.jpg"
            alt="Profile Photo"
            sx={{
              width: { xs: 250, sm: 300, md: 350, lg: 400 },
              height: { xs: 250, sm: 300, md: 350, lg: 400 },
              border: theme.palette.mode === 'dark'
                ? `4px solid rgba(212, 184, 150, 0.6)`
                : `4px solid rgba(31, 41, 55, 0.3)`,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #4b5563, #6b7280)'
                : 'linear-gradient(135deg, #cbd5e1, #94a3b8)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 25px 60px rgba(75, 85, 99, 0.5)'
                : '0 25px 60px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.4s ease',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              fontWeight: 600,
              color: theme.palette.mode === 'dark' ? '#d4b896' : '#1f2937',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 30px 80px rgba(107, 114, 128, 0.6)'
                  : '0 30px 80px rgba(0, 0, 0, 0.25)',
                borderColor: theme.palette.mode === 'dark'
                  ? 'rgba(212, 184, 150, 0.8)'
                  : 'rgba(31, 41, 55, 0.5)',
              },
            }}
          >
            Your Photo
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
