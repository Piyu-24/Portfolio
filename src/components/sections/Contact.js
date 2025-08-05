import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
  Fade,
  Grow,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Send,
  Download,
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'your.email@example.com',
      action: 'mailto:your.email@example.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+94 XX XXX XXXX',
      action: 'tel:+94XXXXXXXXX',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      action: null,
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      color: '#333',
    },
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      color: '#0077B5',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      severity: 'success',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleDownloadResume = () => {
    // Add resume download logic here
    setSnackbar({
      open: true,
      message: 'Resume download started!',
      severity: 'info',
    });
  };

  return (
    <Box
      id="contact"
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
              Get In Touch
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                color: theme.palette.text.primary,
                fontWeight: 'bold',
              }}
            >
              Let's Work Together
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
              I'm always interested in new opportunities, challenging projects,
              and meaningful collaborations. Feel free to reach out if you'd like
              to discuss potential work or just want to connect!
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid size={{ xs: 12, lg: 4 }}>
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
                  Contact Information
                </Typography>

                {contactInfo.map((info, index) => (
                  <Grow in timeout={1000 + (index * 200)} key={index}>
                    <Card
                      sx={{
                        mb: 3,
                        p: 3,
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.primary.light}`,
                        transition: 'all 0.3s ease',
                        cursor: info.action ? 'pointer' : 'default',
                        '&:hover': info.action ? {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                          borderColor: theme.palette.secondary.main,
                        } : {},
                      }}
                      onClick={info.action ? () => window.open(info.action) : undefined}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                            mr: 3,
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: theme.palette.text.primary,
                              fontWeight: 600,
                              mb: 0.5,
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grow>
                ))}

                {/* Social Links */}
                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                    }}
                  >
                    Connect With Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: social.color,
                          color: 'white',
                          width: 50,
                          height: 50,
                          '&:hover': {
                            backgroundColor: social.color,
                            transform: 'translateY(-2px)',
                            opacity: 0.9,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>

                {/* Resume Download */}
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    onClick={handleDownloadResume}
                    fullWidth
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: 'white',
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.dark,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Download Resume
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Fade in timeout={1500}>
              <Card
                sx={{
                  p: 4,
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.primary.light}`,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                >
                  Send Me a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: theme.palette.secondary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.secondary.main,
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: theme.palette.secondary.main,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: theme.palette.secondary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.secondary.main,
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: theme.palette.secondary.main,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: theme.palette.secondary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.secondary.main,
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: theme.palette.secondary.main,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: theme.palette.secondary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: theme.palette.secondary.main,
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: theme.palette.secondary.main,
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          backgroundColor: theme.palette.secondary.main,
                          color: 'white',
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: theme.palette.secondary.dark,
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Fade>
          </Grid>
        </Grid>

        {/* Footer */}
        <Fade in timeout={2000}>
          <Box sx={{ mt: 8, textAlign: 'center', pt: 4, borderTop: `1px solid ${theme.palette.primary.light}` }}>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2,
              }}
            >
              Thank you for visiting my portfolio. Looking forward to connecting with you!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                opacity: 0.7,
              }}
            >
              © 2024 Portfolio. Built with React & Material-UI.
            </Typography>
          </Box>
        </Fade>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
