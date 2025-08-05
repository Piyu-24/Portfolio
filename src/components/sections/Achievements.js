import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import {
  EmojiEvents,
  Star,
  School,
  Code,
  Group,
  Lightbulb,
} from '@mui/icons-material';

const Achievements = () => {
  const theme = useTheme();

  const achievements = [
    {
      title: 'Academic Excellence Award',
      organization: 'University of Moratuwa',
      year: '2023',
      description: 'Recognized for outstanding academic performance and consistent high grades throughout the degree program.',
      category: 'Academic',
      icon: <School />,
      color: theme.palette.secondary.main,
    },
    {
      title: 'Programming Competition Winner',
      organization: 'National Tech Symposium',
      year: '2023',
      description: 'First place in university-level programming competition with innovative algorithm solution.',
      category: 'Competition',
      icon: <Code />,
      color: theme.palette.accent?.main || '#00A8E8',
    },
    {
      title: 'Best Innovation Project',
      organization: 'University Research Fair',
      year: '2022',
      description: 'Awarded for developing an innovative solution addressing real-world agricultural challenges.',
      category: 'Innovation',
      icon: <Lightbulb />,
      color: '#FFA726',
    },
    {
      title: 'Team Leadership Recognition',
      organization: 'Bank of Ceylon Internship',
      year: '2023',
      description: 'Recognized for exceptional leadership skills and successful coordination of IT projects.',
      category: 'Leadership',
      icon: <Group />,
      color: '#66BB6A',
    },
    {
      title: 'Dean\'s List',
      organization: 'University of Moratuwa',
      year: '2022-2023',
      description: 'Consistently maintained top 10% academic standing for outstanding scholastic achievement.',
      category: 'Academic',
      icon: <Star />,
      color: theme.palette.secondary.main,
    },
    {
      title: 'Outstanding Contribution Award',
      organization: 'Tech Community Volunteer',
      year: '2022',
      description: 'Recognized for significant contributions to community technology education initiatives.',
      category: 'Community',
      icon: <EmojiEvents />,
      color: '#AB47BC',
    },
  ];

  const stats = [
    {
      number: '3.8+',
      label: 'GPA',
      description: 'Academic Average',
    },
    {
      number: '15+',
      label: 'Projects',
      description: 'Completed Successfully',
    },
    {
      number: '5+',
      label: 'Awards',
      description: 'Recognition Received',
    },
    {
      number: '100+',
      label: 'Hours',
      description: 'Volunteer Service',
    },
  ];

  const getIconBackground = (category) => {
    switch (category) {
      case 'Academic': return theme.palette.secondary.main;
      case 'Competition': return theme.palette.accent?.main || '#00A8E8';
      case 'Innovation': return '#FFA726';
      case 'Leadership': return '#66BB6A';
      case 'Community': return '#AB47BC';
      default: return theme.palette.primary.main;
    }
  };

  return (
    <Box
      id="achievements"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? theme.palette.background.default
          : theme.palette.background.paper,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 500,
                mb: 2,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Achievements
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                color: theme.palette.text.primary,
                fontWeight: 'bold',
              }}
            >
              Recognitions & Awards
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: '1.1rem',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              A collection of achievements that reflect my commitment to excellence,
              innovation, and continuous learning in both academic and professional settings.
            </Typography>
          </Box>
        </Fade>

        {/* Statistics */}
        <Fade in timeout={1200}>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, sm: 3, md: 3 }} key={index}>
                <Grow in timeout={1000 + (index * 200)}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 1,
                        color: theme.palette.secondary.main,
                        fontWeight: 'bold',
                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: { xs: '0.8rem', md: '0.875rem' },
                      }}
                    >
                      {stat.description}
                    </Typography>
                  </Box>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Fade>

        {/* Achievements Grid */}
        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 6 }} key={index}>
              <Grow in timeout={1200 + (index * 200)}>
                <Card
                  sx={{
                    height: '100%',
                    p: { xs: 2, sm: 3 },
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.primary.light}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                      borderColor: achievement.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      mb: 3,
                      flexDirection: { xs: 'column', sm: 'row' },
                      textAlign: { xs: 'center', sm: 'left' }
                    }}>
                      <Avatar
                        sx={{
                          backgroundColor: achievement.color,
                          color: 'white',
                          width: { xs: 50, sm: 60 },
                          height: { xs: 50, sm: 60 },
                          mr: { xs: 0, sm: 3 },
                          mb: { xs: 2, sm: 0 },
                          mx: { xs: 'auto', sm: 0 },
                        }}
                      >
                        {achievement.icon}
                      </Avatar>
                      <Box sx={{ flexGrow: 1, width: '100%' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            mb: 1,
                            flexDirection: { xs: 'column', sm: 'row' },
                            textAlign: { xs: 'center', sm: 'left' }
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 600,
                              lineHeight: 1.3,
                              fontSize: { xs: '1.1rem', sm: '1.25rem' },
                              mb: { xs: 1, sm: 0 },
                            }}
                          >
                            {achievement.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: theme.palette.text.secondary,
                              backgroundColor: theme.palette.primary.light,
                              px: 2,
                              py: 0.5,
                              borderRadius: 1,
                              fontWeight: 500,
                              ml: { xs: 0, sm: 2 },
                              fontSize: { xs: '0.7rem', sm: '0.75rem' },
                            }}
                          >
                            {achievement.year}
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: achievement.color,
                            fontWeight: 500,
                            mb: 1,
                            fontSize: { xs: '0.95rem', sm: '1rem' },
                          }}
                        >
                          {achievement.organization}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        mb: 2,
                        fontSize: { xs: '0.85rem', sm: '0.875rem' },
                        textAlign: { xs: 'center', sm: 'left' }
                      }}
                    >
                      {achievement.description}
                    </Typography>

                    <Box
                      sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        backgroundColor: `${achievement.color}20`,
                        border: `1px solid ${achievement.color}40`,
                        mx: { xs: 'auto', sm: 0 },
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: achievement.color,
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontSize: { xs: '0.65rem', sm: '0.75rem' },
                        }}
                      >
                        {achievement.category}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Achievements Summary */}
        <Fade in timeout={2000}>
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Card
              sx={{
                p: 4,
                backgroundColor: theme.palette.mode === 'dark'
                  ? theme.palette.background.paper
                  : theme.palette.primary.light,
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                }}
              >
                Commitment to Excellence
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7,
                  maxWidth: 700,
                  mx: 'auto',
                }}
              >
                These achievements represent my dedication to continuous improvement,
                innovation, and making meaningful contributions to both academic and
                professional communities. Each recognition has strengthened my resolve
                to pursue excellence and create positive impact through technology.
              </Typography>
            </Card>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Achievements;
