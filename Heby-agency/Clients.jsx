import React from 'react';
import { Box, Container, Typography } from '@mui/material';


import logoHaba from '../assets/logo-haba.png';
import logoAll from '../assets/logo-all.png';
import logoEvo from '../assets/logo-evo.png';
import logoCanva from '../assets/logo-canva.png';
import logoTride from '../assets/logo-tride.png';
import logoShape from '../assets/logo-shape.png';
import logoKiabi from '../assets/logo-kiabi.png';
import logoH from '../assets/logo-h.png';
import logoDark from '../assets/logo-dark.png';
import logoDot from '../assets/logo-dot.png';

const logos = [
  { src: logoHaba, alt: "Haba" },
  { src: logoAll, alt: "All" },
  { src: logoEvo, alt: "Evo" },
  { src: logoCanva, alt: "Canva" },
  { src: logoTride, alt: "Tride" },
  { src: logoShape, alt: "Shape" },
  { src: logoKiabi, alt: "Kiabi" },
  { src: logoH, alt: "H" },
  { src: logoDark, alt: "Dark" },
  { src: logoDot, alt: "Dot" }
];

export default function Clients() {
  return (
    <Box 
      component="section" 
      sx={{ 
        backgroundColor: '#f4f4f4', 
        pt: '40px', 
        pb: '100px', 
        px: 2, 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
      }}
    >
      <Container 
        maxWidth={false} 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '1440px' 
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontSize: { xs: '1.5rem', md: '1.8rem' }, 
            fontWeight: 700, 
            color: '#111111', 
            mb: '48px',
            textAlign: 'center'
          }}
        >
          Ils nous ont fait confiance
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: { xs: '24px', md: '40px' },
            maxWidth: '900px'
          }}
        >
          {logos.map((logo, index) => (
            <Box 
              key={index}
              sx={{ 
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                minWidth: '110px',
                height: '64px'
              }}
            >
              <Box 
                component="img" 
                src={logo.src} 
                alt={logo.alt} 
                sx={{ 
                  maxHeight: '48px', 
                  maxWidth: '200px', 
                  objectFit: 'cover' 
                }} 
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}