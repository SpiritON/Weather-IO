import {Box, Icon, Typography} from "@mui/material"
import GlovalSvgSelector from "../../assets/global/GlobalSvgSelector"



function WeatherResult(props) {
    const pressureMC = props.data.pressure * 0.75
    return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '0'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '2px 5px 25px -3px rgba(180, 180, 180, 0.5)',
                    padding: '10px 15px',
                    borderRadius: '10px',
                    justifyContent: 'space-between',
                    marginRight: '20px'
                    
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent:'space-between',
                        marginBottom: '10px'
                        }}>
                        <Box>
                            <Typography sx={{
                                fontWeight:'bold',
                                color: '#277ad9',
                                fontSize: '30px'
                            }}>
                            {Math.round(props.data.temp)}°C
                            </Typography>
                            <Typography 
                            sx={{
                                fontSize: '25px'
                            }}>
                            {props.data.condition}
                            </Typography>
                        </Box>
                        <img
                        src={props.data.conditionIcon} 
                        alt='Condition' 
                        width="80px" 
                        height="80px">
                        </img>
                    </Box>
                    <Box sx={{
                        color: '#a5acb5'
                    }}>
                        <Typography>City: {props.data.city}</Typography>
                        <Typography>Region: {props.data.region}</Typography>
                        <Typography>Country: {props.data.country}</Typography>
                        <Typography>Time: {props.data.time}</Typography>
                    </Box>            
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '2px 5px 25px -3px rgba(180, 180, 180, 0.3)',
                    padding: '10px 15px',
                    borderRadius: '10px',
                    width: '500px'
                    }}>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        marginBottom:'10px'
                        }}>
                        <Icon sx={{
                        width: '38px',
                        height: '38px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#fff',
                        boxShadow: '1px 4px 10px -1px rgba(71, 147, 255, 0.3)',
                        borderRadius: '50%',
                        marginRight: '10px'
                         }}>
                        <GlovalSvgSelector id='temp'/></Icon>
                        Temp: {props.data.temp}°C, feelslike {props.data.feelslike}°C</Typography>
                        
                        <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        marginBottom:'10px'
                        }}>
                        <Icon sx={{
                        width: '38px',
                        height: '38px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#fff',
                        boxShadow: '1px 4px 10px -1px rgba(71, 147, 255, 0.3)',
                        borderRadius: '50%',
                        marginRight: '10px'
                         }}>
                        <GlovalSvgSelector id='pressure'/></Icon>
                        Pressure: {Math.round(pressureMC)} millimeters of mercury column </Typography>   

                        <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        marginBottom:'10px'
                        }}>
                        <Icon sx={{
                        width: '38px',
                        height: '38px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#fff',
                        boxShadow: '1px 4px 10px -1px rgba(71, 147, 255, 0.3)',
                        borderRadius: '50%',
                        marginRight: '10px'
                         }}>
                        <GlovalSvgSelector id='wind'/></Icon>
                        Wind: {props.data.wind} kilometers per hour, direction {props.data.windDir}</Typography> 
                        
                </Box>
            </Box>
        
    )

}
export default WeatherResult