import faker from '@faker-js/faker';
import faker_ko from '@faker-js/faker/locale/ko';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './App.css';

function App() {
  const userDatas = [];

  while(userDatas.length < 5){
    userDatas.push({
      avatar: faker.image.avatar(),
      name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      phoneNumber: faker_ko.phone.phoneNumber()
    })
  }

  const userCards = userDatas.map((userData,idx) => {
    return <Card sx={{ maxWidth: 345 }}>
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
    
    
    /*
    <div key={idx}>
    <h4>{userData.jobTitle}</h4>
    <img src={userData.avatar} alt="유저 아바타" />
    <h5>{userDatas.name}</h5>
    {userData.email} <br/>
    {userData.phoneNumber}
  </div> */
  })

  return (
    <div className="App">
      {userCards}
    </div>
  );
}

export default App;