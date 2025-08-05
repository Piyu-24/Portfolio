import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Close,
  Code,
  Web,
  Smartphone,
} from '@mui/icons-material';

const Portfolio = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const portfolioRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (portfolioRef.current) observer.observe(portfolioRef.current);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'HarvestSoftware',
      category: 'Web Application',
      description: 'A comprehensive agricultural management system designed to help farmers optimize their crop production and resource management.',
      fullDescription: 'HarvestSoftware is a complete agricultural management platform that provides farmers with tools to track crop cycles, manage resources, monitor weather conditions, and optimize yields. The system includes features for inventory management, financial tracking, and data analytics to help farmers make informed decisions.',
      image: '/placeholder-project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Material-UI', 'Chart.js'],
      features: [
        'Crop cycle tracking and management',
        'Resource optimization algorithms',
        'Weather integration and forecasting',
        'Financial tracking and reporting',
        'Inventory management system',
        'Data analytics dashboard'
      ],
      githubUrl: 'https://github.com/yourusername/harvestsoftware',
      liveUrl: 'https://harvestsoftware-demo.com',
      icon: <Web />,
    },
    {
      id: 2,
      title: 'Vehicle Rental Backend',
      category: 'Backend System',
      description: 'A robust backend API system for vehicle rental management with advanced booking algorithms and payment integration.',
      fullDescription: 'This comprehensive backend system powers vehicle rental operations with features including real-time vehicle availability, dynamic pricing, booking management, user authentication, and payment processing. Built with scalability and security in mind.',
      image: '/placeholder-project2.jpg',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Stripe API', 'Docker'],
      features: [
        'RESTful API architecture',
        'Real-time vehicle availability',
        'Dynamic pricing algorithms',
        'Secure payment processing',
        'User authentication and authorization',
        'Booking management system'
      ],
      githubUrl: 'https://github.com/yourusername/vehicle-rental-backend',
      liveUrl: 'https://rental-api-docs.com',
      icon: <Code />,
    },
    {
      id: 3,
      title: 'NovaNex',
      category: 'Mobile Application',
      description: 'An innovative mobile application providing next-generation solutions for modern business challenges.',
      fullDescription: 'NovaNex is a cutting-edge mobile application that combines AI-powered insights with intuitive user experience design. The app provides businesses with tools for data analysis, process automation, and strategic decision making.',
      image: '/placeholder-project3.jpg',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'TensorFlow.js', 'AWS'],
      features: [
        'AI-powered business insights',
        'Cross-platform mobile support',
        'Real-time data synchronization',
        'Advanced analytics dashboard',
        'Process automation tools',
        'Cloud-based data storage'
      ],
      githubUrl: 'https://github.com/yourusername/novanex',
      liveUrl: 'https://novanex-app.com',
      icon: <Smartphone />,
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
          ? 'linear-gradient(135deg, #1f2937 0%, #374151 25%, #4b5563 50%, #6b7280 75%, #9ca3af 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)',
        color: theme.palette.mode === 'dark' ? 'white' : '#1f2937',
        borderRadius: { xs: 1, sm: 2 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 20px 60px rgba(31, 41, 55, 0.4)'
          : '0 20px 60px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: { xs: 2, md: 3 },
              fontWeight: '700',
              fontSize: { xs: '2rem', sm: '2.4rem', md: '2.8rem', lg: '3.2rem' },
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #d4b896, #c8a882)'
                : 'linear-gradient(135deg, #1f2937, #374151)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
              lineHeight: '1.7',
              color: theme.palette.mode === 'dark'
                ? 'rgba(229, 231, 235, 0.95)'
                : 'rgba(31, 41, 55, 0.8)',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
              fontWeight: '400',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Explore my latest projects showcasing expertise in full-stack development,
            system architecture, and innovative problem-solving approaches.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.id}>
              <Box
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transition: `opacity 1s ease-out ${index * 0.2}s, transform 1s ease-out ${index * 0.2}s`,
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(200, 168, 130, 0.3)'
                      : '1px solid rgba(31, 41, 55, 0.1)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-15px) scale(1.02)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 25px 60px rgba(75, 85, 99, 0.5)'
                        : '0 25px 60px rgba(0, 0, 0, 0.15)',
                      borderColor: theme.palette.mode === 'dark'
                        ? 'rgba(212, 184, 150, 0.7)'
                        : 'rgba(31, 41, 55, 0.3)',
                    },
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  <CardMedia
                    sx={{
                      height: 220,
                      position: 'relative',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #4b5563, #6b7280)'
                        : 'linear-gradient(135deg, #cbd5e1, #94a3b8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover .project-icon': {
                        transform: 'scale(1.2) rotate(10deg)',
                      },
                    }}
                  >
                    <Box
                      className="project-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #c8a882, #d4b896)'
                          : 'linear-gradient(135deg, #1f2937, #374151)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '2rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {project.icon}
                    </Box>
                    
                    <Chip
                      label={project.category}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: theme.palette.mode === 'dark'
                          ? 'rgba(200, 168, 130, 0.9)'
                          : 'rgba(31, 41, 55, 0.9)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  </CardMedia>
                  
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: theme.palette.mode === 'dark' ? '#f5f5f5' : '#1f2937',
                        fontSize: '1.25rem',
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: theme.palette.mode === 'dark'
                          ? 'rgba(229, 231, 235, 0.8)'
                          : 'rgba(31, 41, 55, 0.7)',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              background: theme.palette.mode === 'dark'
                                ? 'rgba(75, 85, 99, 0.5)'
                                : 'rgba(148, 163, 184, 0.2)',
                              color: theme.palette.mode === 'dark' ? '#e5e7eb' : '#374151',
                              fontSize: '0.7rem',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3}`}
                            size="small"
                            sx={{
                              background: theme.palette.mode === 'dark'
                                ? 'rgba(200, 168, 130, 0.3)'
                                : 'rgba(31, 41, 55, 0.1)',
                              color: theme.palette.mode === 'dark' ? '#d4b896' : '#1f2937',
                              fontSize: '0.7rem',
                              fontWeight: 600,
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                      <Button
                        size="small"
                        startIcon={<GitHub />}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                          flex: 1,
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(75, 85, 99, 0.5)'
                            : 'rgba(148, 163, 184, 0.2)',
                          color: theme.palette.mode === 'dark' ? '#e5e7eb' : '#374151',
                          '&:hover': {
                            background: theme.palette.mode === 'dark'
                              ? 'rgba(107, 114, 128, 0.7)'
                              : 'rgba(148, 163, 184, 0.3)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Launch />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                          flex: 1,
                          background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #c8a882, #d4b896)'
                            : 'linear-gradient(135deg, #1f2937, #374151)',
                          color: 'white',
                          '&:hover': {
                            background: theme.palette.mode === 'dark'
                              ? 'linear-gradient(135deg, #d4b896, #e2c4a0)'
                              : 'linear-gradient(135deg, #374151, #4b5563)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Live
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Project Detail Dialog */}
        <Dialog
          open={Boolean(selectedProject)}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              backgroundColor: theme.palette.background.paper,
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
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseDialog} size="large">
                  <Close />
                </IconButton>
              </DialogTitle>
              
              <DialogContent>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" paragraph>
                    {selectedProject.fullDescription}
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                  {selectedProject.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>

                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  Key Features
                </Typography>
                <Grid container spacing={1} sx={{ mb: 3 }}>
                  {selectedProject.features.map((feature, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: theme.palette.secondary.main,
                            mr: 2,
                          }}
                        />
                        <Typography variant="body2">
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  <Button
                    variant="outlined"
                    startIcon={<GitHub />}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ flex: 1 }}
                  >
                    View Code
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ flex: 1 }}
                  >
                    Live Demo
                  </Button>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Portfolio;
