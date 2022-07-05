import React, {useState} from 'react';
import '../styles/MainDevice.css';
import Lines from "../img/LINES.png";
import phase1 from '../img/Phase1.png';
import phase3 from '../img/Phase3.png';
import phase5 from '../img/Phase5.png';
import QF from '../img/MainDevQF.png';
import QW from '../img/MainDevQW.png';

const MainDevice = ({Imax}) => {

    let Np1 = phase3;
    let Np2 = phase5;
    let Device = QF;
    let N = 3;
    let CabSec = 2.5;
    let CableName = 'ВВГнг(А)-LS';
    let Cable = `${CableName} ${N+2}x${CabSec}`;
    const [Group, setGroup] = useState("от предыдущего щита");

    let Dev = {
            Name: 'QF',
            Mark: 'S203',
            Info1: 'C32/3P',
            Info2: ''
        };

    return (
        <div className="mainDeviceZone">
            <div className="mainLines">
                <img
                    style={{width: '100%', height: '100%', objectFit: 'fill'}}
                    src={Lines}
                    alt="ERROR"
                />
            </div>
                <div className="Mdevice">
                    <img
                        className="MdeviceImg"
                        src={Device}
                        alt="ERROR"
                    />
                    <img className="Mphase1" src={Np1} alt="ERROR"/>
                    <img className="Mphase2" src={Np2} alt="ERROR"/>
                    <div className="Mcable">
                        <p className="McableInfo">{Cable}</p>
                        <input
                            className="inputGrid"
                            type="text"
                            value={Group}
                            onChange={e => setGroup(e.target.value)}
                        />
                    </div>
                    <div className="mDevInfoZone">
                        <p className="mDEV"><b>{Dev.Name}</b></p>
                        <p className="mDEVinfo">{Dev.Mark}</p>
                        <p className="mDEVinfo">{Dev.Info1}</p>
                        <p className="mDEVinfo">{Dev.Info2}</p>
                    </div>
                </div>

        </div>
    );
};

export default MainDevice;