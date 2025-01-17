import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from "@mui/material/colors";

const textColor = grey[700];

export default function ProjectCard({project}) {
  return (
    <Card sx={{ width:'45%'}}>
      <CardMedia
        component="img"
        alt="Project Image"
        image={project.img}
        sx={{height:'50%'}}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {project.role}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {project.description}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button variant="contained" size="small" sx={{backgroundColor: textColor}}>Learn More</Button>
        <Typography>{project.time}</Typography>
      </CardActions>
    </Card>
  );
}