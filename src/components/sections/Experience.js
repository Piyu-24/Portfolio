import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  useTheme,
  Fade,
  Slide,
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/material';
import {
  Work,
  School,
  Code,
  Business,
  TrendingUp,
  Engineering,
  Computer,
  Group,
} from '@mui/icons-material';

const Experience = () => {
  const theme = useTheme();
  const experienceRef = useRef(null);
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

    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'University of Moratuwa',
      period: '2024 - Present',
      type: 'Internship',
      description: 'Working on innovative software solutions and contributing to university research projects. Gaining hands-on experience in full-stack development and modern software engineering practices.',
      skills: ['React', 'Node.js', 'Database Design', 'Software Engineering', 'Project Management'],
      icon: <School />,
      color: theme.palette.primary?.main || '#03122F',
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'Freelance Projects',
      period: '2023 - Present',
      type: 'Freelance',
      description: 'Developing custom web applications for various clients including e-commerce platforms, inventory management systems, and business automation tools.',
      skills: ['React', 'Laravel', 'MongoDB', 'Express.js', 'UI/UX Design'],
      icon: <Code />,
      color: theme.palette.accent?.main || '#AE7DAC',
    },
    {
      id: 3,
      title: 'IoT Developer',
      company: 'Personal Projects',
      period: '2023 - 2024',
      type: 'Project',
      description: 'Designed and developed NovaNex - an automated weighing and packing system using microcontrollers, sensors, and embedded systems programming.',
      skills: ['Arduino', 'Embedded Systems', 'Sensor Integration', 'Hardware Design', 'System Architecture'],
      icon: <Engineering />,
      color: theme.palette.tertiary?.main || '#F1916D',
    },
    {
      id: 4,
      title: 'Computer Science Student',
      company: 'University of Moratuwa',
      period: '2022 - Present',
      type: 'Education',
      description: 'Pursuing Bachelor of Science in Computer Science and Engineering. Maintaining strong academic performance while participating in competitive programming and hackathons.',
      skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Computer Networks'],
      icon: <Computer />,
      color: theme.palette.secondary?.main || '#F3DADF',
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Internship':
        return <Work />;
      case 'Education':
        return <School />;
      case 'Freelance':
        return <Business />;
      case 'Project':
        return <TrendingUp />;
      default:
        return <Work />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship':
        return theme.palette.mode === 'dark' ? '#4CAF50' : '#2E7D32';
      case 'Education':
        return theme.palette.mode === 'dark' ? '#2196F3' : '#1565C0';
      case 'Freelance':
        return theme.palette.mode === 'dark' ? '#FF9800' : '#F57C00';
      case 'Project':
        return theme.palette.mode === 'dark' ? '#9C27B0' : '#7B1FA2';
      default:
        return theme.palette.primary?.main || '#03122F';
    }
  };

  return (
    <Box
      ref={experienceRef}
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #1A1A1A 0%, #0F0F0F 50%, #1A1A1A 100%)'
          : 'linear-gradient(180deg, #F9F7F8 0%, #FEFEFE 50%, #F3DADF 100%)',
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
            ? 'radial-gradient(circle at 30% 20%, rgba(3, 18, 47, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(174, 125, 172, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 20%, rgba(243, 218, 223, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(25, 48, 92, 0.1) 0%, transparent 50%)',
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
                color: theme.palette.accent?.main || '#AE7DAC',
                fontWeight: 600,
                mb: 2,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Career Journey
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
              Experience & Education
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text?.secondary || '#666666',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              My professional journey from academic excellence to industry experience, 
              building innovative solutions and expanding technical expertise
            </Typography>
          </Box>
        </Fade>

        {/* Experience Timeline - Simplified for now */}
        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {experiences.map((experience, index) => (
            <Slide
              key={experience.id}
              direction={index % 2 === 0 ? "right" : "left"}
              in={isVisible}
              timeout={1000 + index * 200}
            >
              <Card
                sx={{
                  mb: 4,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, #252525 0%, #1A1A1A 100%)'
                    : 'linear-gradient(145deg, #FFFFFF 0%, #F9F7F8 100%)',
                  border: `1px solid ${experience.color}30`,
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${experience.color}20`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${experience.color} 0%, ${experience.color}80 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 3,
                        '& svg': {
                          color: '#FFFFFF',
                          fontSize: '1.8rem',
                        },
                      }}
                    >
                      {experience.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text?.primary || '#000000',
                          mb: 1,
                        }}
                      >
                        {experience.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: experience.color,
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {experience.company}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.text?.secondary || '#666666',
                          fontWeight: 500,
                        }}
                      >
                        {experience.period}
                      </Typography>
                    </Box>
                    <Chip
                      icon={getTypeIcon(experience.type)}
                      label={experience.type}
                      sx={{
                        backgroundColor: getTypeColor(experience.type),
                        color: '#FFFFFF',
                        fontWeight: 600,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text?.secondary || '#666666',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {experience.description}
                  </Typography>

                  {/* Skills */}
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.text?.primary || '#000000',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Key Skills & Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {experience.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: `${experience.color}20`,
                            color: experience.color,
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;