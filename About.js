import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import img1 from './images/abpout6.jpg';
import img2 from './images/ABOUT3.jpg';
import vid1 from "./images/icon1.mp4";
import img3 from "./images/img2.jpg";
import StarIcon from '@mui/icons-material/Star';
import img4 from "./images/img4.jpg";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const About = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', minHeight: '150vh' }}>
      <Box
        sx={{
          width: '100%',
          height: '50vh',
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: 'ellipse(100% 80% at 50% 0%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
          }}
        >
          ABOUT US
        </Typography>
      </Box>

      <Box sx={{ padding: '40px 20px', backgroundColor: '#121212' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={img2}
              alt="Description"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                clipPath: 'ellipse(100% 80% at 50% 100%)',
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff' }}>
            <Typography variant="h3" sx={{ marginBottom: '10px', color: '#fff' }}>
              Over 30 years of experience.
            </Typography>

            <Grid item xs={12} md={6}>
              <video
                src={vid1}
                autoPlay
                loop
                style={{
                  width: '40%',
                  borderRadius: '20px',
                }}
              />
            </Grid>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ color: '#ddd' }}>
                In the heart of a bustling city, a small café serves as a sanctuary for those seeking solace. The aroma of freshly brewed coffee fills the air, mingling with the sweet scent of pastries. Customers sit at rustic wooden tables, lost in their thoughts or engaged in quiet conversations. The barista, with a warm smile, crafts each drink with care, ensuring that every cup tells a story. It’s a place where time slows down, allowing patrons to savor not just their drinks but also the moments spent together.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: '40px 20px', backgroundColor: '#121212' }}>
        <Typography variant="h4" align="center" sx={{ color: '#fff', marginBottom: '60px', marginTop: '60px' }}>
          Our Professional expert team members
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ backgroundColor: '#1f1f1f' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={img3}
                  alt="James Baker"
                />
                <CardContent>
                  <Typography variant="h6" align="center" sx={{ color: '#fff' }}>
                    James Baker
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ padding: '40px 20px', backgroundColor: '#121212' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={img4}
              alt="Specific Description"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '25px',
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff', textAlign: 'center', position: 'relative', left: '20%' }}>
            <Typography variant="h4" sx={{ marginBottom: '60px', paddingBottom: '80px' }}>
              What People say about our creative service
            </Typography>
            <Typography variant="body1" sx={{ color: '#ddd' }}>
              <StarIcon sx={{ marginRight: '5px' }} /> 4.5
              We are always looking for talented individuals to join our growing team.
            </Typography>
            <Typography variant="body1" sx={{ color: '#ddd' }}>
              We are always looking for talented individuals to join our growing team. If you are passionate about your work and want to make a difference, we would love to hear from you!
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            {/* يمكنك إضافة محتوى إضافي هنا إذا لزم الأمر */}
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: '40px 20px', backgroundColor: '#121212' ,marginTop:"50px", marginBottom:"20px"}}>
        <Typography variant="h4" align="center" sx={{ color: '#fff', marginBottom: '40px' }}></Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                backgroundColor: '#1f1f1f',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  '& .MuiSvgIcon-root': { // تغيير لون الأيقونات عند الهوفر
                    color: '#1E90FF', // الأزرق الداكن
                  },
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', color: '#fff' }}>
                <ThumbUpIcon sx={{ fontSize: 50, color: '#fff', marginBottom: '10px' }} />
                <Typography variant="h6">
                  Responsibility
                  we are serious people
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                backgroundColor: '#1f1f1f',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  '& .MuiSvgIcon-root': { // تغيير لون الأيقونات عند الهوفر
                    color: '#1E90FF', // الأزرق الداكن
                  },
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', color: '#fff' }}>
                <VisibilityIcon sx={{ fontSize: 50, color: '#fff', marginBottom: '10px' }} />
                <Typography variant="h6">
                  Quality
                  we are determined
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                backgroundColor: '#1f1f1f',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  '& .MuiSvgIcon-root': { // تغيير لون الأيقونات عند الهوفر
                    color: '#1E90FF', // الأزرق الداكن
                  },
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', color: '#fff' }}>
                <LightbulbIcon sx={{ fontSize: 50, color: '#fff', marginBottom: '10px' }} />
                <Typography variant="h6">
                  Creativity
                  we are passionate
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
