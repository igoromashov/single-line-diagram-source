import React from 'react';
import SecondDevice from "./SecondDevice";
import '../styles/App.css'

const SecondDeviseZone = (props) => {
    return (
            <div className="secDevicesZone">
                {props.Devices.map((Device, index) =>
                    <SecondDevice remove={props.remove} Device={Device} Param={props.Param} number={index + 1} key={Device.id}/>
                )}
            </div>
    );
};

export default SecondDeviseZone;