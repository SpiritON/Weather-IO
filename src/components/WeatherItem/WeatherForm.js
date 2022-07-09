import React from "react";

function WeatherForm({onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name={'city'} placeholder={'Choice your city'}/>
            <button type={'submit'}>Get info</button>
        </form>
    )
}

export default WeatherForm