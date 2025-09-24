import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  Fade,
  Slide,
  useMediaQuery,
} from '@mui/material';
import {
  Code,
  Web,
  Storage,
  CloudQueue,
  DeviceHub,
  Security,
  Language,
  Build,
  Palette,
  TrendingUp,
} from '@mui/icons-material';

const Skills = () => {
  const theme = useTheme();
  const skillsRef = useRef(null);
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
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  // New skills design: simple grid, no levels or project numbers
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Language />,
      items: ['JavaScript', 'Python', 'Java', 'C'],
    },
    {
      category: 'Frontend',
      icon: <Web />,
      items: ['React.js', 'Material UI', 'HTML/CSS', 'Responsive Design'],
    },
    {
      category: 'Backend & Database',
      icon: <Storage />,
      items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Laravel', 'REST APIs'],
    },
    {
      category: 'Development Tools',
      icon: <Build />,
      items: ['Git/GitHub', 'XAMPP', 'Postman', 'VS Code'],
    },
    {
      category: 'Design & Creativity',
      icon: <Palette />,
      items: ['Figma', 'Canva', 'Photoshop', 'UI/UX Principles'],
    },
    {
      category: 'Professional Skills',
      icon: <TrendingUp />,
      items: ['Project Management', 'Team Leadership', 'Problem Solving', 'Communication'],
    },
  ];

  const certifications = [
    'CODL UOM - Python for Beginners',
    'Bank of Ceylon - Internship (8 months)',
  ];

  return (
    <Box
      ref={skillsRef}
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #252525 0%, #1A1A1A 50%, #0F0F0F 100%)'
          : 'linear-gradient(180deg, #F3DADF 0%, #F9F7F8 50%, #FEFEFE 100%)',
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
            ? 'radial-gradient(circle at 70% 30%, rgba(174, 125, 172, 0.08) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(241, 145, 109, 0.06) 0%, transparent 50%)'
            : 'radial-gradient(circle at 70% 30%, rgba(3, 18, 47, 0.04) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(174, 125, 172, 0.06) 0%, transparent 50%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              My Skills
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
              Skills Overview
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
              A summary of my technical and professional skills as a student seeking internship opportunities.
            </Typography>
          </Box>
        </Fade>

        {/* New Skills Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skills.map((cat, idx) => (
            <Grid item xs={12} md={6} lg={4} key={cat.category}>
              <Fade in={isVisible} timeout={1000 + idx * 200}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 3,
                    borderRadius: '16px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{cat.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}>
                    {cat.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {cat.items.map(skill => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          fontSize: '1rem',
                          py: 1,
                          px: 2,
                          height: 'auto',
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(243, 218, 223, 0.08)' : 'rgba(3, 18, 47, 0.05)',
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Certifications Section */}
        <Fade in={isVisible} timeout={1500}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontWeight: 600,
                color: theme.palette.text.primary,
              }}
            >
              Certifications & Training
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                mb: 4,
              }}
            >
              {certifications.map((cert, index) => (
                <Chip
                  key={cert}
                  label={cert}
                  sx={{
                    fontSize: '1rem',
                    py: 3,
                    px: 2,
                    height: 'auto',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                />
              ))}
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              Continuously learning and adapting to new technologies to stay at the 
              forefront of software development and deliver innovative solutions.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Skills;
