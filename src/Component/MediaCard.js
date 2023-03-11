import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard( {whether,description,main,img,date}) {

  const icon = `http://openweathermap.org/img/wn/${img}@2x.png`
  const  setdate = (fulldate) => {
   return fulldate.slice(0,10)
  }


  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://as1.ftcdn.net/v2/jpg/05/51/95/26/1000_F_551952602_vp8d4v2nDYo8UExEpxFOtMMv8uOzPaq9.jpg"
        title="Wheather Report"
      />
      <CardContent>
        <div style={{display:'flex'}}>
          <div>
        <Typography gutterBottom variant="h6" component="div">
          {whether ? whether:"empty"}F
        </Typography>
        <Typography variant='h4'>{main}</Typography>
        <Typography variant="body2" color="text.secondary">
        {description ? description : "empty" }
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {date ? setdate(date) : "empty" }
        </Typography>
        </div>
        <div>
          <img src={icon} alt="icon" />
        </div>
        </div>

      </CardContent>
  
    </Card>
  );
}