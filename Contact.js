import React from "react";
import { Grid, TextField, Button, Typography, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//--------------------------------------------------

// Define a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to 'dark'
    primary: {
      main: '#90caf9', // Customize primary color if needed
    },
    background: {
      default: '#121212', // Background for dark mode
      paper: '#1e1e1e', // Paper components' background in dark mode
    },
    text: {
      primary: '#fff', // Text color in dark mode
    },
  },
});

const Contact = () => {
    return (
        <ThemeProvider theme={darkTheme}> {/* Apply the dark theme */}
            <CssBaseline /> {/* Normalize the styles */}
            <Grid container spacing={2} sx={{ padding: 2, minHeight: '100vh' }}> {/* Remove backgroundColor: 'pink' */}
                {/* Right section for the form */}
                <Grid 
    item 
    xs={12} 
    sm={6} 
    sx={{ 
        border: '2px solid #90caf9',  // إضافة بوردر بسماكة 2 بكسل ولون مطابق للون الأساسي (primary)
        borderRadius: '30px',  // جعل الزوايا مستديرة قليلاً
        padding: '16px' , // إضافة مسافة داخلية لجعل البوردر يظهر بشكل أفضل
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
    }}
>
    <Typography variant="h4" gutterBottom>
        Contact Us ♥️🖥️
    </Typography>
    <form>
        <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
        />
        <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
        />
        <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
        />
        <Button variant="contained" color="primary" type="submit">
            Send Message
        </Button>
    </form>
</Grid>

                {/* Left section for contact info and video */}
                <Grid item xs={12} sm={6}>
                    {/* Video embedded instead of GIF */}
                    <div style={{ marginTop: '16px', position: 'relative', right: '-20px', border:"60%" }}> {/* Shift video slightly to the right */}
                    <video
    loop
    autoPlay  // تشغيل تلقائي عند تحميل الصفحة
    width="80%"
    style={{ display: 'block', margin: '0 auto' , border: '5px solid #000',  

        borderRadius: '30px'  }}
    src="/contactvideo.mp4"  // تأكد من أن الفيديو موجود في المجلد العام
>
    Your browser does not support the video tag.
</video>

                    </div>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Contact;
