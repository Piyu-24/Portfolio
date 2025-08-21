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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

  const skillCategories = [
    {
      icon: <Language />,
      title: 'Programming Languages',
      color: theme.palette.primary.main,
      skills: [
        { name: 'JavaScript', level: 'Advanced', projects: '8+ projects' },
        { name: 'Python', level: 'Advanced', projects: '6+ projects' },
        { name: 'Java', level: 'Intermediate', projects: '4+ projects' },
        { name: 'C', level: 'Intermediate', projects: 'Academic' },
      ],
    },
    {
      icon: <Web />,
      title: 'Frontend Development',
      color: theme.palette.accent.main,
      skills: [
        { name: 'React.js', level: 'Expert', projects: '10+ projects' },
        { name: 'Material UI', level: 'Expert', projects: 'Professional' },
        { name: 'HTML/CSS', level: 'Advanced', projects: '15+ projects' },
        { name: 'Responsive Design', level: 'Advanced', projects: 'Professional' },
      ],
    },
    {
      icon: <Storage />,
      title: 'Backend & Database',
      color: theme.palette.tertiary.main,
      skills: [
        { name: 'Node.js', level: 'Advanced', projects: '8+ projects' },
        { name: 'Express.js', level: 'Advanced', projects: '6+ projects' },
        { name: 'MongoDB', level: 'Advanced', projects: '5+ projects' },
        { name: 'MySQL', level: 'Advanced', projects: '8+ projects' },
        { name: 'Laravel', level: 'Intermediate', projects: '3+ projects' },
        { name: 'REST APIs', level: 'Advanced', projects: 'Professional' },
      ],
    },
    {
      icon: <Build />,
      title: 'Development Tools',
      color: theme.palette.secondary.main,
      skills: [
        { name: 'Git/GitHub', level: 'Advanced', projects: 'Daily use' },
        { name: 'XAMPP', level: 'Advanced', projects: 'Development' },
        { name: 'Postman', level: 'Advanced', projects: 'API Testing' },
        { name: 'VS Code', level: 'Expert', projects: 'Primary IDE' },
      ],
    },
    {
      icon: <Palette />,
      title: 'Design & Creativity',
      color: theme.palette.accent.main,
      skills: [
        { name: 'Figma', level: 'Advanced', projects: 'UI/UX Design' },
        { name: 'Canva', level: 'Advanced', projects: 'Graphics' },
        { name: 'Photoshop', level: 'Intermediate', projects: 'Design' },
        { name: 'UI/UX Principles', level: 'Advanced', projects: 'Professional' },
      ],
    },
    {
      icon: <TrendingUp />,
      title: 'Professional Skills',
      color: theme.palette.primary.main,
      skills: [
        { name: 'Project Management', level: 'Advanced', projects: 'Leadership' },
        { name: 'Team Leadership', level: 'Advanced', projects: 'Prefect Role' },
        { name: 'Problem Solving', level: 'Expert', projects: 'Competitions' },
        { name: 'Communication', level: 'Advanced', projects: 'Professional' },
      ],
    },
  ];

  const certifications = [
    'CODL UOM - Python for Beginners',
    'Udemy - JavaScript Course',
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
        {/* Section Header */}
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
              My Expertise
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
              Skills & Expertise
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
              Professional competencies spanning full-stack development, modern frameworks,
              and proven project experience across multiple domains
            </Typography>
          </Box>
        </Fade>

        {/* Skills Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={category.title}>
              <Slide
                direction="up"
                in={isVisible}
                timeout={1000 + categoryIndex * 200}
              >
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    {/* Category Header */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}40 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          '& svg': {
                            color: category.color,
                            fontSize: '1.8rem',
                          },
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    {/* Skills List */}
                    <Box>
                      {category.skills.map((skill, skillIndex) => (
                        <Slide
                          key={skill.name}
                          direction="right"
                          in={isVisible}
                          timeout={1200 + categoryIndex * 100 + skillIndex * 50}
                        >
                          <Box 
                            sx={{ 
                              mb: 2.5,
                              p: 2,
                              backgroundColor: theme.palette.mode === 'dark'
                                ? 'rgba(243, 218, 223, 0.03)'
                                : 'rgba(3, 18, 47, 0.02)',
                              borderRadius: '10px',
                              border: theme.palette.mode === 'dark'
                                ? '1px solid rgba(243, 218, 223, 0.08)'
                                : '1px solid rgba(3, 18, 47, 0.05)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                backgroundColor: theme.palette.mode === 'dark'
                                  ? 'rgba(243, 218, 223, 0.06)'
                                  : 'rgba(3, 18, 47, 0.04)',
                                transform: 'translateX(4px)',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                mb: 0.5,
                              }}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 600,
                                  color: theme.palette.text.primary,
                                  fontSize: '0.95rem',
                                }}
                              >
                                {skill.name}
                              </Typography>
                              <Chip
                                label={skill.level}
                                size="small"
                                sx={{
                                  backgroundColor: `${category.color}20`,
                                  color: category.color,
                                  fontWeight: 600,
                                  fontSize: '0.75rem',
                                  height: '24px',
                                  '& .MuiChip-label': {
                                    px: 1.5,
                                  },
                                }}
                              />
                            </Box>
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.secondary,
                                fontSize: '0.85rem',
                                fontStyle: 'italic',
                              }}
                            >
                              {skill.projects}
                            </Typography>
                          </Box>
                        </Slide>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Slide>
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
