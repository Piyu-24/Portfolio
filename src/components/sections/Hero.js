import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Avatar,
  useTheme,
  Container,
  Grid,
  IconButton,
  Fade,
  Slide,
  useMediaQuery,
} from '@mui/material';
import {
  Download,
  ContactMail,
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  KeyboardArrowDown,
} from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const heroRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  const [textAnimationDelay, setTextAnimationDelay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setTextAnimationDelay(true), 300);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    // Direct download link from Google Drive
    // Replace FILE_ID with your actual Google Drive file ID
    const driveFileId = '1M2lVjet-nmuTKdlJyc3myEcIThBA_8d6'; // Your Google Drive file ID
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    
    // Create download link
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Piyumi_Upeksha_CV.pdf';
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollDown = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      ref={heroRef}
      id="home"
      sx={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 25%, #252525 50%, #19305C 75%, #03122F 100%)'
          : 'linear-gradient(135deg, #FEFEFE 0%, #F9F7F8 25%, #F3DADF 50%, #AE7DAC 75%, #413B61 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 20% 80%, rgba(174, 125, 172, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(241, 145, 109, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(3, 18, 47, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(174, 125, 172, 0.08) 0%, transparent 50%)',
          zIndex: 1,
        },
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          pt: { xs: 8, md: 4 },
        }}
      >
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
          {/* Left Side: Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Fade in={isVisible} timeout={800}>
              <Box>
                <Slide direction="right" in={textAnimationDelay} timeout={800}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.accent.main,
                      fontWeight: 600,
                      mb: 2,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontSize: { xs: '0.85rem', sm: '0.95rem' }, // Decreased font size slightly
                      mt: 1.5, // Added top margin for more spacing
                    }}
                  >
                    Welcome to my portfolio
                  </Typography>
                </Slide>
                
                <Slide direction="right" in={textAnimationDelay} timeout={1000}>
                  <Typography
                    variant="h1"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                      fontSize: { xs: '2.3rem', sm: '3.3rem', md: '3.8rem', lg: '4.2rem' }, // Decreased font size slightly
                      lineHeight: { xs: 1.1, md: 1.2 },
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #F3DADF 0%, #AE7DAC 50%, #F1916D 100%)'
                        : 'linear-gradient(135deg, #03122F 0%, #19305C 50%, #413B61 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: 'none',
                    }}
                  >
                    Piyumi Upeksha
                  </Typography>
                </Slide>

                <Slide direction="right" in={textAnimationDelay} timeout={1200}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: theme.palette.tertiary.main,
                      fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' },
                    }}
                  >
                    Software Engineer Intern
                  </Typography>
                </Slide>

                <Slide direction="right" in={textAnimationDelay} timeout={1400}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 4,
                      fontWeight: 500,
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    }}
                  >
                    B.Sc. Honors in Information Technology & Management
                    <br />
                    University of Moratuwa
                  </Typography>
                </Slide>
                
                <Slide direction="right" in={textAnimationDelay} timeout={1600}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 5,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      lineHeight: 1.7,
                      color: theme.palette.text.muted,
                      maxWidth: '600px',
                    }}
                  >
                    Ambitious and self-motivated undergraduate passionate about leveraging 
                    technology to solve real-world problems. Proven ability to collaborate 
                    effectively in high-pressure environments with strong adaptability.
                  </Typography>
                </Slide>

                {/* Action Buttons */}
                <Slide direction="up" in={textAnimationDelay} timeout={1800}>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 3, 
                    flexDirection: { xs: 'column', sm: 'row' },
                    mb: 5,
                  }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Download />}
                      onClick={handleDownloadResume}
                      sx={{
                        py: 1.8,
                        px: 4,
                        fontSize: '1.1rem',
                        borderRadius: '15px',
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
                        py: 1.8,
                        px: 4,
                        fontSize: '1.1rem',
                        borderRadius: '15px',
                      }}
                    >
                      Get in Touch
                    </Button>
                  </Box>
                </Slide>

                {/* Contact Info */}
                <Slide direction="up" in={textAnimationDelay} timeout={2000}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 2, sm: 4 },
                    mb: 5,
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Email sx={{ color: theme.palette.accent.main, fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                         upekshabbc@gmail.com
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Phone sx={{ color: theme.palette.accent.main, fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                         +94 704520551
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOn sx={{ color: theme.palette.accent.main, fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Moratuwa, Colombo
                      </Typography>
                    </Box>
                  </Box>
                </Slide>

                {/* Social Links */}
                <Slide direction="up" in={textAnimationDelay} timeout={2200}>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2,
                  }}>
                    <IconButton
                      href="https://github.com/Piyu-24"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.text.secondary,
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(243, 218, 223, 0.1)' 
                          : 'rgba(3, 18, 47, 0.1)',
                        '&:hover': {
                          color: theme.palette.accent.main,
                          backgroundColor: theme.palette.mode === 'dark' 
                            ? 'rgba(243, 218, 223, 0.2)' 
                            : 'rgba(3, 18, 47, 0.2)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      href="https://linkedin.com/in/piyumi-pathinayake"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.text.secondary,
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(243, 218, 223, 0.1)' 
                          : 'rgba(3, 18, 47, 0.1)',
                        '&:hover': {
                          color: theme.palette.accent.main,
                          backgroundColor: theme.palette.mode === 'dark' 
                            ? 'rgba(243, 218, 223, 0.2)' 
                            : 'rgba(3, 18, 47, 0.2)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                  </Box>
                </Slide>
              </Box>
            </Fade>
          </Grid>

          {/* Right Side: Profile Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Fade in={isVisible} timeout={1000}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  mt: { xs: 4, md: 0 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-20px',
                      left: '-20px',
                      right: '-20px',
                      bottom: '-20px',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(174, 125, 172, 0.2) 0%, rgba(241, 145, 109, 0.2) 100%)'
                        : 'linear-gradient(135deg, rgba(3, 18, 47, 0.1) 0%, rgba(174, 125, 172, 0.15) 100%)',
                      borderRadius: '50%',
                      zIndex: -1,
                      animation: 'pulse 3s ease-in-out infinite',
                    },
                    '@keyframes pulse': {
                      '0%, 100%': {
                        transform: 'scale(1)',
                        opacity: 0.7,
                      },
                      '50%': {
                        transform: 'scale(1.05)',
                        opacity: 0.9,
                      },
                    },
                  }}
                >
                  <Avatar
                    alt="Piyumi Upeksha"
                    src="/profile-photo.jpg"
                    sx={{
                      width: { xs: 280, sm: 350, md: 400 },
                      height: { xs: 280, sm: 350, md: 400 },
                      border: `4px solid ${theme.palette.accent.main}`,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #252525 0%, #19305C 100%)'
                        : 'linear-gradient(135deg, #F3DADF 0%, #AE7DAC 100%)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 25px 50px rgba(0, 0, 0, 0.3)'
                        : '0 25px 50px rgba(3, 18, 47, 0.15)',
                      transition: 'all 0.4s ease',
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 30px 60px rgba(0, 0, 0, 0.4)'
                          : '0 30px 60px rgba(3, 18, 47, 0.2)',
                      },
                    }}
                  >
                    PU
                  </Avatar>
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* Scroll Down Indicator */}
        <Fade in={textAnimationDelay} timeout={2500}>
          <Box
            sx={{
              position: 'absolute',
              bottom: 30,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={handleScrollDown}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 1,
                fontSize: '0.9rem',
              }}
            >
              Scroll Down
            </Typography>
            <IconButton
              sx={{
                color: theme.palette.accent.main,
                animation: 'bounce 2s infinite',
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '40%': {
                    transform: 'translateY(-10px)',
                  },
                  '60%': {
                    transform: 'translateY(-5px)',
                  },
                },
              }}
            >
              <KeyboardArrowDown />
            </IconButton>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Hero;
