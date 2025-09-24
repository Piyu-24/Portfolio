import React, { useState, useRef, useEffect } from 'react';
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
  Divider,
  useTheme,
  Fade,
  Slide,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Send,
  Download,
  WhatsApp,
  Instagram,
  Twitter,
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'upekshabbc@gmail.com',
      action: 'mailto:piyumi.upeksha@example.com',
      color: theme.palette.primary.main,
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+94 704520551',
      action: 'tel:+94704520551',
      color: theme.palette.accent.main,
    },

  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      label: 'GitHub',
      url: 'https://github.com/Piyu-24',
      color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#333333',
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/piyumi-pathinayake/',
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
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setSnackbar({
      open: true,
      message: 'Thank you for your message!',
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

  const handleDownloadCV = () => {
    // New Google Drive file ID provided by user
    const driveFileId = '14A9WxxQgtZKQ8jyLvIdLy5MfttH-gVrM';
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    const viewUrl = `https://drive.google.com/file/d/${driveFileId}/view`;

    // Attempt direct download first
    const link = document.createElement('a');
    link.href = directDownloadUrl;
    link.download = 'Piyumi_Upeksha_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Provide snackbar with fallback action
    setSnackbar({
      open: true,
      message: 'If download did not start, it will open in a new tab.',
      severity: 'info',
    });

    // Open view link after short delay as fallback (not blocking)
    setTimeout(() => {
      window.open(viewUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <Box
      ref={contactRef}
      id="contact"
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
            ? 'radial-gradient(circle at 20% 80%, rgba(174, 125, 172, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(241, 145, 109, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(3, 18, 47, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(25, 48, 92, 0.06) 0%, transparent 50%)',
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
              Get In Touch
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
              Let's Work Together
            </Typography>

          </Box>
        </Fade>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Slide direction="right" in={isVisible} timeout={1000}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                  }}
                >
                  Contact Information
                </Typography>

                {/* Contact Details */}
                <Box sx={{ mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      sx={{
                        mb: 2,
                        background: theme.palette.mode === 'dark'
                          ? 'linear-gradient(145deg, #252525 0%, #1A1A1A 100%)'
                          : 'linear-gradient(145deg, #FFFFFF 0%, #F9F7F8 100%)',
                        border: `1px solid ${info.color}30`,
                        borderRadius: '16px',
                        transition: 'all 0.3s ease',
                        cursor: info.action ? 'pointer' : 'default',
                        '&:hover': info.action ? {
                          transform: 'translateX(8px)',
                          boxShadow: `0 8px 25px ${info.color}20`,
                        } : {},
                      }}
                      component={info.action ? 'a' : 'div'}
                      href={info.action || undefined}
                      onClick={!info.action ? undefined : (e) => {
                        if (info.action.startsWith('mailto:') || info.action.startsWith('tel:')) {
                          window.location.href = info.action;
                        }
                      }}
                    >
                      <CardContent sx={{ display: 'flex', alignItems: 'center', p: 2.5 }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '12px',
                            background: `linear-gradient(135deg, ${info.color} 0%, ${info.color}80 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            '& svg': {
                              color: '#FFFFFF',
                              fontSize: '1.5rem',
                            },
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
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
                      </CardContent>
                    </Card>
                  ))}
                </Box>

                {/* Social Links */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Connect With Me
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: 50,
                          height: 50,
                          background: `linear-gradient(135deg, ${social.color} 0%, ${social.color}80 100%)`,
                          color: '#FFFFFF',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px) scale(1.1)',
                            boxShadow: `0 10px 20px ${social.color}40`,
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>

                {/* Download CV Button */}
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  onClick={handleDownloadCV}
                  aria-label="Download CV"
                  sx={{
                    py: 1.2,
                    px: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent.main} 100%)`,
                    color: '#FFFFFF',
                    fontWeight: 600,
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    letterSpacing: '0.5px',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </Slide>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Slide direction="left" in={isVisible} timeout={1200}>
              <Card
                sx={{
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, #252525 0%, #1A1A1A 100%)'
                    : 'linear-gradient(145deg, #FFFFFF 0%, #F9F7F8 100%)',
                  borderRadius: '20px',
                  border: `1px solid ${theme.palette.divider}`,
                  p: 4,
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
                  Send Me a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
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
                            borderRadius: '12px',
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
                            borderRadius: '12px',
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
                            borderRadius: '12px',
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
                            borderRadius: '12px',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        endIcon={<Send />}
                        sx={{
                          py: 1.5,
                          px: 4,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent.main} 100%)`,
                          color: '#FFFFFF',
                          fontWeight: 600,
                          borderRadius: '12px',
                          textTransform: 'none',
                          fontSize: '1rem',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Slide>
          </Grid>
        </Grid>

        {/* Footer */}
        <Fade in={isVisible} timeout={1500}>
          <Box sx={{ mt: 8, pt: 4, borderTop: `1px solid ${theme.palette.divider}` }}>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: theme.palette.text.secondary,
                mb: 2,
              }}
            >
              Thank you for visiting my portfolio!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: theme.palette.text.secondary,
                opacity: 0.7,
              }}
            >
              © 2024 Piyumi Upeksha.
            </Typography>
          </Box>
        </Fade>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
