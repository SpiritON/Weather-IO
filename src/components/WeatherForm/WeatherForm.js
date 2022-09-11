import {useState} from "react";
import {Box, Button, Input} from "@mui/material";

function WeatherForm({onSubmit}) {
    const [value, setValue] = useState('')

    const changeHandler = (event) => {
        setValue(event.target.value)
    }

    const onButtonSubmit = () => {
        onSubmit(value)
    }

    const handleEnterKeyPressed = (e) => {
        if(e.key === 'Enter') {
            onSubmit(value)
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px',
            marginBottom: '20px'
        }}>
            <Input
                sx={{
                    fontSize: '20px'
                }}
                type="text"
                placeholder={'Choice your city'}
                value={value}
                onChange={changeHandler}
                onKeyPress={handleEnterKeyPressed}
                />
            <Button
                sx={{backgroundColor: '#3359b8',
                '&:hover':{backgroundColor:'#486cc7'},
                whiteSpace: 'nowrap' 
                }}
                size={'small'}
                variant={"contained"}
                type={"submit"}
                onClick={onButtonSubmit}
            >Get info</Button>
        </Box>
    )
}

export default WeatherForm