import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
  Fade,
  Slide,
  IconButton,
} from '@mui/material';
import {
  EmojiEvents,
  Star,
  School,
  Code,
  Group,
  Lightbulb,
  TrendingUp,
  Psychology,
  Engineering,
  Computer,
  Award,
} from '@mui/icons-material';

const Achievements = () => {
  const theme = useTheme();
  const achievementsRef = useRef(null);
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

    if (achievementsRef.current) observer.observe(achievementsRef.current);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      id: 1,
      title: 'SLIoT Challenge 2025 Finalist',
      organization: 'IEEE Sri Lanka Section',
      year: '2025',
      type: 'Competition',
      description: 'Selected as finalist in Sri Lanka Internet of Things Challenge 2025, one of the most prestigious IoT competitions in the country.',
      details: 'Advanced to finals with innovative IoT solution demonstrating technical excellence and practical implementation.',
      icon: <Computer />,
      color: theme.palette.primary.main,
      rank: '🏅 Finalist',
      image: '/SLIOT.jpg', // Corrected path - remove ./public/
    },
    {
      id: 2,
      title: 'HackElite 1.0 - 2nd Runner Up',
      organization: 'National Hackathon',
      year: '2024',
      type: 'Hackathon',
      description: 'Achieved 2nd Runner Up position in HackElite 1.0, a premier national hackathon competition.',
      details: 'Developed innovative software solution within 48-hour timeframe, demonstrating rapid prototyping and problem-solving skills.',
      icon: <Code />,
      color: theme.palette.accent.main,
      rank: '🥉 2nd Runner Up',
      image: '/achievements/hackelite.jpg', // Add your image here
    },
    {
      id: 3,
      title: 'Full-Stack Development Excellence',
      organization: 'Personal Projects Portfolio',
      year: '2023-2024',
      type: 'Technical',
      description: 'Successfully delivered multiple complex full-stack applications including HarvestSoftware and enterprise management systems.',
      details: 'Demonstrated proficiency in React, Node.js, Laravel, and modern web technologies with production-ready applications.',
      icon: <Engineering />,
      color: theme.palette.tertiary.main,
      rank: '⭐ Excellence',
      image: '/achievements/fullstack-projects.jpg', // Add your image here
    },
    {
      id: 4,
      title: 'IoT Innovation Project',
      organization: 'University Research',
      year: '2023',
      type: 'Innovation',
      description: 'Designed and developed NovaNex automated weighing & packing system using advanced embedded systems.',
      details: 'Integrated multiple sensors, motors, and control systems to create autonomous retail solution with temperature monitoring.',
      icon: <Lightbulb />,
      color: theme.palette.secondary.main,
      rank: '🚀 Innovation',
      image: '/achievements/iot-project.jpg', // Add your image here
    },
    {
      id: 5,
      title: 'Academic Performance',
      organization: 'University of Moratuwa',
      year: '2022-Present',
      type: 'Academic',
      description: 'Maintaining strong academic performance in Computer Science and Engineering program.',
      details: 'Consistent high achievement in core subjects including Data Structures, Algorithms, Database Systems, and Software Engineering.',
      icon: <School />,
      color: theme.palette.primary.main,
      rank: '📚 Academic',
      image: '/achievements/academic.jpg', // Add your image here
    },
    {
      id: 6,
      title: 'Open Source Contribution',
      organization: 'GitHub Portfolio',
      year: '2023-Present',
      type: 'Community',
      description: 'Active contribution to open-source projects and maintaining comprehensive project portfolio.',
      details: 'Regular code contributions, documentation, and sharing knowledge through well-documented repositories.',
      icon: <Group />,
      color: theme.palette.accent.main,
      rank: '🌟 Community',
      image: '/achievements/opensource.jpg', // Add your image here
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Competition':
        return theme.palette.mode === 'dark' ? '#FFD700' : '#F57F17';
      case 'Hackathon':
        return theme.palette.mode === 'dark' ? '#FF6B35' : '#E65100';
      case 'Technical':
        return theme.palette.mode === 'dark' ? '#4CAF50' : '#2E7D32';
      case 'Innovation':
        return theme.palette.mode === 'dark' ? '#9C27B0' : '#7B1FA2';
      case 'Academic':
        return theme.palette.mode === 'dark' ? '#2196F3' : '#1565C0';
      case 'Community':
        return theme.palette.mode === 'dark' ? '#FF9800' : '#F57C00';
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box
      ref={achievementsRef}
      id="achievements"
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
            ? 'radial-gradient(circle at 70% 30%, rgba(241, 145, 109, 0.08) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(174, 125, 172, 0.06) 0%, transparent 50%)'
            : 'radial-gradient(circle at 70% 30%, rgba(25, 48, 92, 0.04) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(3, 18, 47, 0.06) 0%, transparent 50%)',
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
              Recognition
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
              Awards & Achievements
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
              A collection of milestones, competitions, and recognitions that reflect 
              my dedication to excellence in technology and innovation
            </Typography>
          </Box>
        </Fade>

        {/* Achievements Grid */}
        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={achievement.id}>
              <Slide
                direction="up"
                in={isVisible}
                timeout={1000 + index * 150}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, #252525 0%, #1A1A1A 100%)'
                      : 'linear-gradient(145deg, #FFFFFF 0%, #F9F7F8 100%)',
                    border: `1px solid ${achievement.color}30`,
                    borderRadius: '20px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 25px 50px ${achievement.color}25`,
                      border: `1px solid ${achievement.color}60`,
                    },
                  }}
                >
                  {/* Achievement Header */}
                  <Box
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      background: 'transparent', // Completely transparent background
                      borderRadius: '20px 20px 0 0',
                      borderBottom: `1px solid ${achievement.color}20`,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${achievement.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.8, // Much more visible background image
                        zIndex: 0,
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      {/* Achievement Image */}
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          mx: 'auto',
                          mb: 2,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${achievement.color}20 0%, ${achievement.color}40 100%)`,
                          border: `3px solid ${achievement.color}60`,
                          overflow: 'hidden',
                          position: 'relative',
                          boxShadow: `0 8px 20px ${achievement.color}30`,
                        }}
                      >
                        <Box
                          component="img"
                          src={achievement.image}
                          alt={achievement.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                          onError={(e) => {
                            // If image fails to load, hide it and show the Avatar
                            const imgElement = e.target;
                            const avatarElement = imgElement.parentNode.querySelector('.fallback-avatar');
                            if (avatarElement) {
                              imgElement.style.display = 'none';
                              avatarElement.style.display = 'flex';
                            }
                          }}
                        />
                        {/* Fallback Avatar with Icon */}
                        <Avatar
                          className="fallback-avatar"
                          sx={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            display: 'none',
                            background: `linear-gradient(135deg, ${achievement.color} 0%, ${achievement.color}80 100%)`,
                            '& svg': {
                              fontSize: '2.5rem',
                              color: '#FFFFFF',
                            },
                          }}
                        >
                          {achievement.icon}
                        </Avatar>
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 1,
                          lineHeight: 1.3,
                          position: 'relative',
                          zIndex: 1,
                          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          display: 'inline-block',
                        }}
                      >
                        {achievement.title}
                      </Typography>
                      
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: achievement.color,
                          fontWeight: 600,
                          mb: 2,
                          position: 'relative',
                          zIndex: 1,
                          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                          backgroundColor: 'rgba(255,255,255,0.8)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          display: 'inline-block',
                        }}
                      >
                        {achievement.organization}
                      </Typography>

                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: 1,
                        position: 'relative',
                        zIndex: 1,
                      }}>
                        <Chip
                          label={achievement.year}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            color: theme.palette.text.secondary,
                            fontWeight: 600,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          }}
                        />
                        <Chip
                          label={achievement.type}
                          size="small"
                          sx={{
                            backgroundColor: getTypeColor(achievement.type),
                            color: '#FFFFFF',
                            fontWeight: 600,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  <CardContent sx={{ flex: 1, p: 3 }}>
                    {/* Rank Badge */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          background: `linear-gradient(135deg, ${achievement.color}20 0%, ${achievement.color}30 100%)`,
                          color: achievement.color,
                          px: 2,
                          py: 0.5,
                          borderRadius: '20px',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                        }}
                      >
                        {achievement.rank}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      {achievement.description}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.5,
                        fontStyle: 'italic',
                        opacity: 0.8,
                      }}
                    >
                      {achievement.details}
                    </Typography>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>

        {/* Summary Stats */}
        <Fade in={isVisible} timeout={1500}>
          <Box
            sx={{
              mt: 8,
              p: 4,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(145deg, #1A1A1A 0%, #252525 100%)'
                : 'linear-gradient(145deg, #FFFFFF 0%, #F9F7F8 100%)',
              borderRadius: '20px',
              border: `1px solid ${theme.palette.divider}`,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: theme.palette.text.primary,
              }}
            >
              Achievement Summary
            </Typography>
            <Grid container spacing={4}>
              <Grid size={{ xs: 6, md: 3 }}>
                <Typography variant="h3" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                  2
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  Competition Awards
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <Typography variant="h3" sx={{ color: theme.palette.accent.main, fontWeight: 700 }}>
                  4+
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  Projects Completed
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <Typography variant="h3" sx={{ color: theme.palette.tertiary.main, fontWeight: 700 }}>
                  3+
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  Years Experience
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <Typography variant="h3" sx={{ color: theme.palette.secondary.main, fontWeight: 700 }}>
                  10+
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  Technologies Mastered
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Achievements;
