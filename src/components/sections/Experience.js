import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  Work,
  School,
  VolunteerActivism,
  Business,
} from '@mui/icons-material';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [
    {
      title: 'Intern - IT Department',
      organization: 'Bank of Ceylon',
      period: '2023 - Present',
      type: 'internship',
      description: 'Gained hands-on experience in banking IT systems, worked on digital transformation projects, and contributed to system optimization initiatives.',
      responsibilities: [
        'Assisted in system maintenance and troubleshooting',
        'Participated in software development projects',
        'Collaborated with cross-functional teams',
        'Contributed to process improvement initiatives',
      ],
      icon: <Work />,
      color: theme.palette.secondary.main,
    },
    {
      title: 'BSc Honors Student',
      organization: 'University of Moratuwa',
      period: '2020 - 2024',
      type: 'education',
      description: 'Pursued comprehensive education in technology and engineering with focus on software development, project management, and system design.',
      responsibilities: [
        'Completed coursework in software engineering',
        'Participated in research projects',
        'Developed team collaboration skills',
        'Built strong technical foundation',
      ],
      icon: <School />,
      color: theme.palette.primary.main,
    },
    {
      title: 'Volunteer Activities',
      organization: 'Various Organizations',
      period: '2019 - Present',
      type: 'volunteer',
      description: 'Actively participated in community service projects and technology education initiatives.',
      responsibilities: [
        'Organized technology workshops for students',
        'Participated in community development projects',
        'Mentored junior students in programming',
        'Contributed to open-source projects',
      ],
      icon: <VolunteerActivism />,
      color: theme.palette.accent?.main || theme.palette.secondary.light,
    },
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintained high academic standards throughout university education',
      icon: <School />,
    },
    {
      title: 'Technical Innovation',
      description: 'Developed innovative solutions for complex technical challenges',
      icon: <Business />,
    },
    {
      title: 'Team Leadership',
      description: 'Led multiple project teams and collaborated effectively in diverse environments',
      icon: <Work />,
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`
          : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 100%)`,
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
              Experience
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                color: theme.palette.text.primary,
                fontWeight: 'bold',
              }}
            >
              Professional Journey
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
              My professional experience spans internships, academic achievements,
              and volunteer contributions that have shaped my expertise and perspective.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={6}>
          {/* Timeline */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Fade in timeout={1200}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                >
                  Career Timeline
                </Typography>
                
                <Timeline position={isMobile ? 'right' : 'alternate'}>
                  {experiences.map((experience, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{
                            backgroundColor: experience.color,
                            color: 'white',
                            width: 60,
                            height: 60,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {experience.icon}
                        </TimelineDot>
                        {index < experiences.length - 1 && (
                          <TimelineConnector
                            sx={{
                              backgroundColor: theme.palette.primary.light,
                              width: 3,
                            }}
                          />
                        )}
                      </TimelineSeparator>
                      
                      <TimelineContent>
                        <Grow in timeout={1000 + (index * 300)}>
                          <Card
                            sx={{
                              p: 3,
                              mb: 3,
                              backgroundColor: theme.palette.background.paper,
                              border: `1px solid ${theme.palette.primary.light}`,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                                borderColor: experience.color,
                              },
                            }}
                          >
                            <CardContent sx={{ p: 0 }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  mb: 1,
                                  color: theme.palette.text.primary,
                                  fontWeight: 600,
                                }}
                              >
                                {experience.title}
                              </Typography>
                              
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  mb: 1,
                                  color: experience.color,
                                  fontWeight: 500,
                                }}
                              >
                                {experience.organization}
                              </Typography>
                              
                              <Typography
                                variant="body2"
                                sx={{
                                  mb: 2,
                                  color: theme.palette.text.secondary,
                                  fontStyle: 'italic',
                                }}
                              >
                                {experience.period}
                              </Typography>
                              
                              <Typography
                                variant="body2"
                                sx={{
                                  mb: 3,
                                  color: theme.palette.text.secondary,
                                  lineHeight: 1.6,
                                }}
                              >
                                {experience.description}
                              </Typography>

                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  sx={{
                                    mb: 1,
                                    color: theme.palette.text.primary,
                                    fontWeight: 600,
                                  }}
                                >
                                  Key Contributions:
                                </Typography>
                                {experience.responsibilities.map((responsibility, respIndex) => (
                                  <Box
                                    key={respIndex}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      mb: 0.5,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: '50%',
                                        backgroundColor: experience.color,
                                        mt: 1,
                                        mr: 2,
                                        flexShrink: 0,
                                      }}
                                    />
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.5,
                                      }}
                                    >
                                      {responsibility}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </CardContent>
                          </Card>
                        </Grow>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Box>
            </Fade>
          </Grid>

          {/* Key Achievements */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Fade in timeout={1500}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                >
                  Key Achievements
                </Typography>
                
                <Grid container spacing={3}>
                  {achievements.map((achievement, index) => (
                    <Grid size={{ xs: 12 }} key={index}>
                      <Grow in timeout={1200 + (index * 200)}>
                        <Card
                          sx={{
                            p: 3,
                            backgroundColor: theme.palette.background.paper,
                            border: `1px solid ${theme.palette.primary.light}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                              borderColor: theme.palette.secondary.main,
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                backgroundColor: theme.palette.secondary.main,
                                color: 'white',
                                mr: 2,
                                flexShrink: 0,
                              }}
                            >
                              {achievement.icon}
                            </Box>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  mb: 1,
                                  color: theme.palette.text.primary,
                                  fontWeight: 600,
                                  fontSize: '1rem',
                                }}
                              >
                                {achievement.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  lineHeight: 1.5,
                                }}
                              >
                                {achievement.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Card>
                      </Grow>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
