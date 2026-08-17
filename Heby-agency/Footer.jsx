import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        border: "2px solid #da23e0",
        backgroundColor: '#fdfdfd', 
        color: '#131010', 
        py: '60px', 
        px: 2, 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'flex-start' }, 
          gap: '40px',
          maxWidth: '1200px'
        }}
      >
        {/* Left Brand Area */}
        <Box sx={{ maxWidth: '250px' }}>
          <Typography 
            variant="h4" 
            sx={{ fontWeight: 800, fontSize: '1.8rem', mb: 1, letterSpacing: '-0.5px' }}
          >
            hedy<span style={{ color: '#a855f7' }}>.</span>
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: '#888888', fontSize: '0.9rem', mb: 3 }}
          >
            agence .
          </Typography>
        </Box>

        {/* Links Column 1: Offres */}
        <Box>
          <Typography 
            variant="subtitle2" 
            sx={{ fontWeight: 600, color: '#888888', mb: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}
          >
            Espace team
          </Typography>
          <Stack spacing={1.5}>
            <Link href="#" underline="none" sx={{ color: '#131010', fontSize: '0.95rem', '&:hover': { color: '#a855f7' } }}>
              Offre wrap 🌯
            </Link>
            <Link href="#" underline="none" sx={{ color: '#131010', fontSize: '0.95rem', '&:hover': { color: '#a855f7' } }}>
              Offre toast 🍞
            </Link>
            <Link href="#" underline="none" sx={{ color: '#131010', fontSize: '0.95rem', '&:hover': { color: '#a855f7' } }}>
              Offre club 🍹
            </Link>
            <Link href="#" underline="none" sx={{ color: '#131010', fontSize: '0.95rem', '&:hover': { color: '#a855f7' } }}>
              Accompagnement
            </Link>
          </Stack>
        </Box>

        {/* Links Column 2: Legal / Info */}
        <Box>
          <Typography 
            variant="subtitle2" 
            sx={{ fontWeight: 600, color: '#888888', mb: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}
          >
            Ressources
          </Typography>
          <Stack spacing={1.5}>
            <Link href="#" underline="none" sx={{ color: '#131010', fontSize: '0.95rem', '&:hover': { color: '#a855f7' } }}>
              Mentions légales
            </Link>
            <Link href="#" underline="none" sx={{ color: '#131010', fontSize: '0.95rem', '&:hover': { color: '#a855f7' } }}>
              Politique de confidentialité
            </Link>
            <Link href="#" underline="none" sx={{ color: '#131010', fontSize: '0.95rem', '&:hover': { color: '#a855f7' } }}>
              Contact
            </Link>
          </Stack>
        </Box>

        {/* Right Info Area */}
        <Box>
          <Typography 
            variant="subtitle2" 
            sx={{ fontWeight: 600, color: '#888888', mb: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}
          >
            France 🇫🇷
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: '#131010', fontSize: '0.95rem', mb: 1 }}
          >
            contact@hedyagency.com
          </Typography> 
          <Typography 
            variant="body2" 
            sx={{ color: '#131010', fontSize: '0.9rem', mb: 3 }}
          >
            Workspace : Notion
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" sx={{ color: '#131010', fontSize: '0.9rem', '&:hover': { color: '#a855f7' } }}>LinkedIn</Link>
            <Link href="#" sx={{ color: '#131010', fontSize: '0.9rem', '&:hover': { color: '#a855f7' } }}>Twitter</Link>
            <Link href="#" sx={{ color: '#131010', fontSize: '0.9rem', '&:hover': { color: '#a855f7' } }}>Instagram</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}