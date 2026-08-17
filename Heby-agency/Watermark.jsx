import React from 'react'
import Box from '@mui/material/Box'
import watermark from'../assets/div.png'

export default function Watermark() {
  return (
    <>
    <Box component='img' src={watermark}  sx={{
        width:{xs:'100%', md:'100%'},
        height:{xs:'100%' , md:'70%'}
    
    }} >
        
    </Box>
    </>
  )
}
