import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function userCards(props) {
    const { userData, idx } = props;
    return <Card key = {idx} sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={userData.avatar}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {userData.name}
        </Typography>
        <Typography>{userData.jobTitle}</Typography> <br />
        <Typography variant="body2" color="text.secondary">
          Email : {userData.email} <br />
          Phone : {userData.phoneNumber}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

}

export default userCards;