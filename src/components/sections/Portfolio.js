import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  useTheme,
  Fade,
  Slide,
  useMediaQuery,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Close,
  Code,
  Web,
  Storage,
  Group,
  Star,
  TrendingUp,
} from '@mui/icons-material';

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedProject, setSelectedProject] = useState(null);
  const portfolioRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true); // Changed to true initially

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    // Fallback to show content after a delay
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'HarvestSoftware',
      subtitle: 'Farm-to-Market Trading Platform',
      description: 'A comprehensive web-based platform designed to modernize the agricultural supply chain by directly connecting farmers, merchants, and transporters.',
      fullDescription: 'HarvestSoftware eliminates intermediaries, enabling transparent, fair, and efficient trading of agricultural produce. The system features real-time bidding, order management, and financial summaries with a modern, responsive UI/UX.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Material UI', 'Auth0', 'REST APIs'],
      category: 'Full Stack',
      status: 'Completed',
      teamProject: true,
      myRole: [
        'Designed and implemented merchant dashboard with real-time bid summaries',
        'Developed live bidding system and advanced search/filter features',
        'Created the platform\'s public homepage',
        'Delivered modern, responsive UI/UX with React and Material UI'
      ],
      githubUrl: 'https://github.com/Piyu-24',
      liveUrl: null,
      icon: <Web />,
      color: theme.palette.primary?.main || '#03122F',
    },
    {
      id: 2,
      title: 'Machinery Sales & Inventory System',
      subtitle: 'Enterprise Management Platform',
      description: 'A web-based platform developed for Pasan Enterprises, featuring inventory management, product listings, and customer interface for machinery sales.',
      fullDescription: 'Complete business solution with inventory management, product catalogs, customer interfaces for browsing and purchasing machinery, plus comprehensive admin tools for managing orders, stock, and customer inquiries.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'Full Stack',
      status: 'Ongoing',
      teamProject: true,
      myRole: [
        'Full-stack development with React and Node.js',
        'Database design and implementation',
        'API development and integration',
        'UI/UX design and implementation'
      ],
      githubUrl: 'https://github.com/Piyu-24',
      liveUrl: null,
      icon: <Storage />,
      color: theme.palette.accent?.main || '#AE7DAC',
    },
    {
      id: 3,
      title: 'Vehicle Rental Web',
      subtitle: 'Laravel-Based Transportation App',
      description: 'A transportation domain backend using Laravel in a two-tier architecture with RESTful API and SPA for vehicle rental services.',
      fullDescription: 'Complete vehicle rental system with user authentication, secure route access, vehicle listing and booking interface. Built with Laravel backend and modern frontend technologies.',
      technologies: ['Laravel', 'MySQL', 'RESTful API', 'XAMPP', 'Postman'],
      category: 'Backend',
      status: 'Completed',
      teamProject: false,
      myRole: [
        'Full backend development with Laravel',
        'Route protection logic implementation',
        'User authentication system',
        'UI design for vehicle listing and booking interface'
      ],
      githubUrl: 'https://github.com/Piyu-24',
      liveUrl: null,
      icon: <Code />,
      color: theme.palette.tertiary?.main || '#F1916D',
    },
    {
      id: 4,
      title: 'NovaNex',
      subtitle: 'Automated Weighing & Packing System',
      description: 'Microcontroller-based hardware project for automated grain dispensing, weighing, sealing, and inventory management in retail environments.',
      fullDescription: 'Smart, standalone retail management unit integrating multiple embedded systems and control mechanisms. Features automated processes for grain handling with temperature monitoring and GSM connectivity.',
      technologies: ['Arduino Mega', 'Load Cell', 'Servo Motor', 'Stepper Motors', 'Temperature Sensor', 'GSM Module'],
      category: 'Hardware/IoT',
      status: 'Completed',
      teamProject: true,
      myRole: [
        'System integration and architecture',
        'Load cell calibration and setup',
        'LCD/keypad user interface design',
        'Temperature sensor logic & relay control'
      ],
      githubUrl: 'https://github.com/Piyu-24',
      liveUrl: null,
      icon: <TrendingUp />,
      color: theme.palette.secondary?.main || '#F3DADF',
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      ref={portfolioRef}
      id="portfolio"
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
            ? 'radial-gradient(circle at 20% 30%, rgba(174, 125, 172, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(241, 145, 109, 0.06) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 30%, rgba(3, 18, 47, 0.04) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(174, 125, 172, 0.06) 0%, transparent 50%)',
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
              My Work
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
              Featured Projects
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
              A showcase of my technical projects spanning full-stack development, 
              IoT systems, and innovative solutions
            </Typography>
          </Box>
        </Fade>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.id}>
              <Slide
                direction="up"
                in={isVisible}
                timeout={1000 + index * 200}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                    },
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Header */}
                  <Box
                    sx={{
                      p: 3,
                      background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}25 100%)`,
                      borderBottom: `1px solid ${project.color}30`,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}80 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          '& svg': {
                            color: '#FFFFFF',
                            fontSize: '1.8rem',
                          },
                        }}
                      >
                        {project.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          {project.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Status & Type Badges */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip
                        label={project.status}
                        size="small"
                        sx={{
                          backgroundColor: project.status === 'Completed' 
                            ? theme.palette.mode === 'dark' ? '#2E7D32' : '#4CAF50'
                            : theme.palette.mode === 'dark' ? '#F57C00' : '#FF9800',
                          color: '#FFFFFF',
                          fontWeight: 600,
                        }}
                      />
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          backgroundColor: `${project.color}30`,
                          color: project.color,
                          fontWeight: 600,
                        }}
                      />
                      {project.teamProject && (
                        <Chip
                          icon={<Group sx={{ fontSize: '1rem !important' }} />}
                          label="Team"
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.mode === 'dark' 
                              ? 'rgba(243, 218, 223, 0.1)' 
                              : 'rgba(3, 18, 47, 0.1)',
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        />
                      )}
                    </Box>
                  </Box>

                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        mb: 3,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Technologies Used:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              fontSize: '0.75rem',
                              height: '24px',
                            }}
                          />
                        ))}
                        {project.technologies.length > 4 && (
                          <Chip
                            label={`+${project.technologies.length - 4} more`}
                            size="small"
                            sx={{
                              fontSize: '0.75rem',
                              height: '24px',
                              backgroundColor: theme.palette.mode === 'dark' 
                                ? 'rgba(243, 218, 223, 0.1)' 
                                : 'rgba(3, 18, 47, 0.1)',
                              color: theme.palette.text.secondary,
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      sx={{ mr: 1 }}
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<Star />}
                      sx={{
                        background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}80 100%)`,
                        color: '#FFFFFF',
                      }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '20px',
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, #1A1A1A 0%, #252525 100%)'
              : 'linear-gradient(145deg, #FFFFFF 0%, #F9F7F8 100%)',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 2,
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {selectedProject.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>
                  {selectedProject.subtitle}
                </Typography>
              </Box>
              <IconButton onClick={handleCloseDialog}>
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                {selectedProject.fullDescription}
              </Typography>

              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                My Contributions:
              </Typography>
              <Box component="ul" sx={{ mb: 3, pl: 2 }}>
                {selectedProject.myRole.map((role, index) => (
                  <Typography
                    component="li"
                    key={index}
                    variant="body2"
                    sx={{ mb: 1, color: theme.palette.text.secondary }}
                  >
                    {role}
                  </Typography>
                ))}
              </Box>

              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Technologies Used:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {selectedProject.technologies.map((tech) => (
                  <Chip key={tech} label={tech} />
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<GitHub />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Button>
                {selectedProject.liveUrl && (
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Portfolio;
