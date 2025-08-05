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
  School,
  Business,
  Code,
  Psychology,
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  const highlights = [
    {
      icon: <School />,
      title: 'Education',
      description: 'BSc Honors from University of Moratuwa, focusing on technology and innovation',
    },
    {
      icon: <Business />,
      title: 'Management',
      description: 'Strategic thinking and leadership skills with experience in project coordination',
    },
    {
      icon: <Code />,
      title: 'Technology',
      description: 'Full-stack development expertise with modern frameworks and tools',
    },
    {
      icon: <Psychology />,
      title: 'Problem Solving',
      description: 'Analytical mindset with a passion for creating efficient solutions',
    },
  ];

  return (
    <Box
      id="about"
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
              About Me
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                color: theme.palette.text.primary,
                fontWeight: 'bold',
              }}
            >
              Professional Summary
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={6} alignItems="center">
          {/* Content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Fade in timeout={1200}>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  I am a dedicated IT and Management professional with a strong foundation
                  in both technical excellence and strategic thinking. My journey began at
                  the prestigious University of Moratuwa, where I developed a passion for
                  technology and its potential to transform businesses and lives.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  With a unique blend of technical skills and management acumen, I bridge
                  the gap between complex technology solutions and business objectives.
                  My approach focuses on understanding user needs, implementing efficient
                  systems, and driving digital transformation initiatives.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  I believe in continuous learning, collaborative teamwork, and creating
                  technology solutions that not only meet current needs but also anticipate
                  future challenges. My goal is to contribute to projects that make a
                  meaningful impact while fostering innovation and growth.
                </Typography>

                {/* Personal Approach */}
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: theme.palette.primary.light,
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                    }}
                  >
                    My Approach to Technology
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                    }}
                  >
                    "Technology should serve people, not the other way around. I focus on
                    creating intuitive, efficient, and scalable solutions that enhance
                    user experiences and drive business success."
                  </Typography>
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Highlights Cards */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid container spacing={3}>
              {highlights.map((highlight, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Grow in timeout={1000 + (index * 200)}>
                    <Card
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        p: 2,
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.primary.light}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                          borderColor: theme.palette.secondary.main,
                        },
                      }}
                    >
                      <CardContent>
                        <Avatar
                          sx={{
                            backgroundColor: theme.palette.secondary.main,
                            color: 'white',
                            width: 60,
                            height: 60,
                            mx: 'auto',
                            mb: 2,
                          }}
                        >
                          {highlight.icon}
                        </Avatar>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 2,
                            color: theme.palette.text.primary,
                            fontWeight: 600,
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
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Educational Background */}
        <Fade in timeout={1500}>
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
                Educational Background
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      Bachelor of Science (Honors)
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontWeight: 500,
                      }}
                    >
                      University of Moratuwa
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      Comprehensive education in technology, engineering principles, and
                      management practices. Developed strong analytical skills, project
                      management capabilities, and technical expertise through rigorous
                      coursework and practical applications.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default About;
