import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import {
  Code,
  Web,
  Storage,
  CloudQueue,
  DeviceHub,
  Security,
} from '@mui/icons-material';

const Skills = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      icon: <Code />,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'TypeScript', level: 85 },
      ],
    },
    {
      icon: <Web />,
      title: 'Web Development',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Node.js', level: 88 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Express.js', level: 85 },
        { name: 'Material-UI', level: 90 },
      ],
    },
    {
      icon: <Storage />,
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 82 },
      ],
    },
    {
      icon: <CloudQueue />,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 70 },
        { name: 'Linux', level: 78 },
      ],
    },
    {
      icon: <DeviceHub />,
      title: 'Frameworks & Tools',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Next.js', level: 82 },
        { name: 'Django', level: 80 },
        { name: 'Spring Boot', level: 75 },
        { name: 'Vue.js', level: 70 },
      ],
    },
    {
      icon: <Security />,
      title: 'Management & Others',
      skills: [
        { name: 'Project Management', level: 88 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Team Leadership', level: 82 },
        { name: 'Problem Solving', level: 92 },
        { name: 'Communication', level: 90 },
      ],
    },
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB',
    'MySQL', 'AWS', 'Docker', 'Git', 'Material-UI', 'Express.js',
    'Next.js', 'Django', 'Java', 'C++', 'PostgreSQL', 'Redis',
    'Firebase', 'Linux', 'Agile', 'Scrum', 'CI/CD', 'REST APIs',
  ];

  return (
    <Box
      id="skills"
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
              Skills & Expertise
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                color: theme.palette.text.primary,
                fontWeight: 'bold',
              }}
            >
              Technical Proficiency
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
              A comprehensive overview of my technical skills, tools, and technologies
              I work with to create innovative solutions and drive project success.
            </Typography>
          </Box>
        </Fade>

        {/* Skill Categories */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <Grow in timeout={1000 + (index * 200)}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
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
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex} sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 500,
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontWeight: 500,
                            }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: theme.palette.primary.light,
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              backgroundColor: theme.palette.secondary.main,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Technology Tags */}
        <Fade in timeout={1500}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: theme.palette.text.primary,
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Technologies I Work With
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              {technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    px: 2,
                    py: 1,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Fade>

        {/* Skills Summary */}
        <Fade in timeout={1800}>
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
                variant="h6"
                sx={{
                  mb: 3,
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                }}
              >
                Continuous Learning & Growth
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
                I believe in staying current with emerging technologies and industry trends.
                My skill set continues to evolve as I take on new challenges and explore
                innovative solutions. I'm always eager to learn new technologies and
                apply them to create better user experiences and more efficient systems.
              </Typography>
            </Card>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Skills;
