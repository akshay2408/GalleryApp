import React, { useEffect, useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { GalleryCard } from './Styled';

function MediaCard({images}) {
  return (
    <>
    <Box>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
    <Grid item xs={12} container>
    <Grid container justifyContent="center">
        {images && images.map((img) => {
          return (
            <Grid item xs={4} md={4}>
                <GalleryCard>
              <CardMedia
                component="img"
                height="260"
                width="260"
                image={img.imgURL}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {img.title}
                </Typography>
              </CardContent>
            </GalleryCard>
          </Grid>
          )
        })
        }        
    </Grid>
    </Grid>
    </Grid>
    </Box>
    </>

  );
}

export default MediaCard;