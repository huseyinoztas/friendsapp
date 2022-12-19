import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import React from 'react'

const Post = () => {
  return (
    <Box>
            <Card sx={{margin:"5"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Food from everywhere"
        subheader="November 19, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://cdn.yeniakit.com.tr/images/news/625/pratik-degisik-yemek-tarifleri-en-sevilen-tarifler-h1581081558-3ff37b.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
        <ShareIcon />    
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Post
