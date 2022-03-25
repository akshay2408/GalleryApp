import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import MilkShake from '../assets/images/MilkShake.jpg';
import { GalleryCard } from './Styled';

function MediaCard() {
  return (
    <Box sx={{
      display: 'flex'
    }}>
      <GalleryCard>
        <CardMedia
          component="img"
          height="260"
          image={MilkShake}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gallery
          </Typography>
        </CardContent>
      </GalleryCard>

      <GalleryCard>
        <CardMedia
          component="img"
          height="260"
          image={MilkShake}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gallery
          </Typography>
        </CardContent>
      </GalleryCard>
      <GalleryCard>
        <CardMedia
          component="img"
          height="260"
          image={MilkShake}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gallery
          </Typography>
        </CardContent>
      </GalleryCard>
    </Box>
  );
}

export default MediaCard;