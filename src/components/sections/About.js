import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Fade,
  Slide,
  Chip,
  useMediaQuery,
} from '@mui/material';
import {
  School,
  Business,
  Code,
  Psychology,
  EmojiEvents,
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const aboutRef = useRef(null);
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

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <School />,
      title: 'Education Excellence',
      description: 'BSc Honors from University of Moratuwa with CGPA 3.33/4.00, specializing in Information Technology & Management',
      color: theme.palette.primary.main,
    },
    {
      icon: <Code />,
      title: 'Technical Expertise',
      description: 'Full-stack development with React, Node.js, Python, Java, and modern database technologies',
      color: theme.palette.accent.main,
    },
    {
      icon: <Business />,
      title: 'Leadership Skills',
      description: 'Senior Prefect experience and project management capabilities with proven team collaboration',
      color: theme.palette.tertiary.main,
    },
    {
      icon: <Psychology />,
      title: 'Problem Solving',
      description: 'Strategic thinking and analytical mindset with passion for innovative technology solutions',
      color: theme.palette.secondary.main,
    },
  ];

  const achievements = [
    'SLIoT Challenge 2025 - Finalists',
    'HackElite 1.0 - 2nd Runner up',
    'AlgoXplore 1.0 - Top 15',
    'Hackmoral7.0 - Rank 7',
  ];

  return (
    <Box
      ref={aboutRef}
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0F0F0F 0%, #1A1A1A 50%, #252525 100%)'
          : 'linear-gradient(180deg, #FEFEFE 0%, #F9F7F8 50%, #F3DADF 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 30% 20%, rgba(174, 125, 172, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(241, 145, 109, 0.08) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 20%, rgba(3, 18, 47, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(174, 125, 172, 0.05) 0%, transparent 50%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6}>
          {/* Section Header */}
          <Grid size={{ xs: 12 }}>
            <Fade in={isVisible} timeout={800}>
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.accent.main,
                    fontWeight: 600,
                    mb: 2,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Get to know me
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 4,
                    fontWeight: 700,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #F3DADF 0%, #AE7DAC 100%)'
                      : 'linear-gradient(135deg, #03122F 0%, #19305C 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  About Me
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.secondary,
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  Passionate about leveraging technology to solve real-world problems with 
                  strategic thinking and innovative solutions
                </Typography>
              </Box>
            </Fade>
          </Grid>

          {/* Main Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Slide direction="right" in={isVisible} timeout={1000}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
                >
                  My Journey
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: theme.palette.text.secondary,
                  }}
                >
                  As an ambitious and self-motivated undergraduate at the University of Moratuwa, 
                  I'm passionate about bridging the gap between technology and business through 
                  innovation and strategic thinking.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: theme.palette.text.secondary,
                  }}
                >
                  My experience spans from leadership roles as Senior Prefect to hands-on 
                  software development projects. I thrive in high-pressure environments and 
                  excel in both individual and collaborative settings, always focusing on 
                  delivering exceptional results.
                </Typography>

                {/* Achievements */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
                >
                  Recent Achievements
                </Typography>
                <Box>
                  {achievements.map((achievement, index) => (
                    <Box
                      key={achievement}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5,
                        p: 2,
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(243, 218, 223, 0.05)'
                          : 'rgba(3, 18, 47, 0.03)',
                        borderRadius: '12px',
                        border: theme.palette.mode === 'dark'
                          ? '1px solid rgba(243, 218, 223, 0.1)'
                          : '1px solid rgba(3, 18, 47, 0.08)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(243, 218, 223, 0.08)'
                            : 'rgba(3, 18, 47, 0.05)',
                        },
                      }}
                    >
                      <EmojiEvents
                        sx={{
                          color: theme.palette.tertiary.main,
                          mr: 2,
                          fontSize: '1.4rem',
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: '1rem',
                        }}
                      >
                        {achievement}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Slide>
          </Grid>

          {/* Highlights Cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              {highlights.map((highlight, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={highlight.title}>
                  <Fade in={isVisible} timeout={1200 + index * 200}>
                    <Card
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        p: 3,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${highlight.color}20 0%, ${highlight.color}40 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3,
                            '& svg': {
                              color: highlight.color,
                              fontSize: '2rem',
                            },
                          }}
                        >
                          {highlight.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 2,
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                          }}
                        >
                          {highlight.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            lineHeight: 1.6,
                          }}
                        >
                          {highlight.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
