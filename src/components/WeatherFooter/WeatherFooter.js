import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import React from 'react';
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  }

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

function WeatherFooter() {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return(

        <Box sx={{ 
            backgroundColor:'#3359b8',
            marginTop: 'auto',
            color:'white',
            padding: '5px 24px',
            display:'flex',
            justifyContent: 'space-between'
        }}> 
            <Box sx={{
                marginRight:'10px'
            }}>
                <Typography sx={{mb:'5px'}}>
                Join our newsletter for regular updates.
                </Typography>
                <TextField
                label="Enter your email:"
                placeholder="example@email.com"
                size="small"
                variant="outlined"
                sx={{
                    color:'white',
                    borderColor:'white'
                    }}
                />
                <Button 
                    variant="outlined" 
                    sx={{
                        color: 'white',
                        padding: '6px',
                        borderColor:'white'
                    }}
                    >Subscribe</Button>
            </Box>
            <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                    setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>)}
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                minWidth:'100px',
                justifyContent:'space-between',
                margin: '0 20px'
                }}>
                    <IconButton><Instagram/></IconButton>
                    <IconButton><Facebook/></IconButton>
                    <IconButton><Twitter/></IconButton>
            </Box>
        </Box>
    )
}

export default WeatherFooter