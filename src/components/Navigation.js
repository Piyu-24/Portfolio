import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Menu as MenuIcon,
  Close,
  Brightness4,
  Brightness7,
  Home,
  Person,
  Code,
  Work,
  EmojiEvents,
  Mail,
} from '@mui/icons-material';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { label: 'Home', href: '#home', icon: <Home /> },
    { label: 'About', href: '#about', icon: <Person /> },
    { label: 'Skills', href: '#skills', icon: <Code /> },
  { label: 'Portfolio', href: '#portfolio', icon: <Work /> },
  { label: 'Achievements', href: '#achievements', icon: <EmojiEvents /> },
    { label: 'Contact', href: '#contact', icon: <Mail /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0F0F0F 0%, #1A1A1A 100%)'
          : 'linear-gradient(180deg, #FEFEFE 0%, #F9F7F8 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Mobile Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #F3DADF 0%, #AE7DAC 100%)'
                : 'linear-gradient(135deg, #03122F 0%, #19305C 100%)',
              color: theme.palette.mode === 'dark' ? '#03122F' : '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 600,
            }}
          >
            PU
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            Piyumi
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <List sx={{ flex: 1, pt: 2 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item.href)}
              sx={{
                mx: 2,
                mb: 1,
                borderRadius: '12px',
                backgroundColor: activeSection === item.href.substring(1)
                  ? theme.palette.mode === 'dark'
                    ? 'rgba(243, 218, 223, 0.1)'
                    : 'rgba(3, 18, 47, 0.08)'
                  : 'transparent',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(243, 218, 223, 0.05)'
                    : 'rgba(3, 18, 47, 0.04)',
                },
              }}
            >
              <Box sx={{ mr: 2, color: theme.palette.accent.main }}>
                {item.icon}
              </Box>
              <ListItemText
                primary={item.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: activeSection === item.href.substring(1) ? 600 : 400,
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Theme Toggle & Social Links */}
      <Box sx={{ p: 3, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            Theme
          </Typography>
          <IconButton onClick={toggleDarkMode} size="small">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <IconButton
            href="https://github.com/Piyu-24"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: theme.palette.text.secondary }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/piyumi-pathinayake"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: theme.palette.text.secondary }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? theme.palette.mode === 'dark'
              ? 'rgba(15, 15, 15, 0.95)'
              : 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              sx={{
                width: 45,
                height: 45,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #F3DADF 0%, #AE7DAC 100%)'
                  : 'linear-gradient(135deg, #03122F 0%, #19305C 100%)',
                color: theme.palette.mode === 'dark' ? '#03122F' : '#FFFFFF',
                fontSize: '1.3rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => handleNavClick('#home')}
            >
              PU
            </Avatar>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                cursor: 'pointer',
                display: { xs: 'none', sm: 'block' },
              }}
              onClick={() => handleNavClick('#home')}
            >
              Piyumi Upeksha
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: activeSection === item.href.substring(1) ? 600 : 400,
                    mx: 1,
                    px: 2,
                    py: 1,
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    position: 'relative',
                    backgroundColor: activeSection === item.href.substring(1)
                      ? theme.palette.mode === 'dark'
                        ? 'rgba(243, 218, 223, 0.1)'
                        : 'rgba(3, 18, 47, 0.08)'
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'dark'
                        ? 'rgba(243, 218, 223, 0.08)'
                        : 'rgba(3, 18, 47, 0.05)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: activeSection === item.href.substring(1) ? '70%' : '0%',
                      height: '2px',
                      backgroundColor: theme.palette.accent.main,
                      transition: 'width 0.3s ease',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right Side Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Theme Toggle (Desktop) */}
            {!isMobile && (
              <IconButton
                onClick={toggleDarkMode}
                sx={{
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(243, 218, 223, 0.1)'
                    : 'rgba(3, 18, 47, 0.1)',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(243, 218, 223, 0.2)'
                      : 'rgba(3, 18, 47, 0.2)',
                  },
                }}
              >
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            )}

            {/* Social Links (Desktop) */}
            {!isMobile && (
              <>
                <IconButton
                  href="https://github.com/Piyu-24"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.accent.main,
                    },
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/piyumi-pathinayake"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.accent.main,
                    },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
