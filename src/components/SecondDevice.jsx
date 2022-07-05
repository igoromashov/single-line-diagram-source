import React, {useMemo, useState} from 'react';
import '../styles/SecondDevice.css'
import '../styles/App.css'
import AVVDT from '../img/AV-VDT.png'
import AV from '../img/AV.png'
import AVDT from '../img/AVDT.png'
import Phase3 from '../img/Phase3.png'
import Phase1 from '../img/Phase1.png'
import Lines from '../img/LINES.png'

const SecondDevice = (props) => {

    const DRC = [
        0.5, 1, 1.6, 2, 3, 4, 6, 8, 10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125,
        160, 200, 250, 320, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3200,
        4000, 5000, 6300,
    ]; //DevicesRowCurrent

    const CCS =  [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240]; //CableCrossSection
    const CCuA = [19, 25, 35, 42, 55, 75, 95, 120, 145, 180, 220, 260, 305, 350, NaN]; //CurrentCuprumAir

    let Up = 0.22;
    let Ul = (Math.sqrt(3) * Up).toPrecision(2);
    const [Ir, setCurrent] = useState(0);
    const [P, setP] = useState(0);
    const [Method, setMethod] = useState('в лотке');
    const [Cosfi, setCosfi] = useState(1);
    const [Nphase, setNphase] = useState(123);
    const [Device, setDevice] = useState(AVVDT);
    let N, Np, DevIn, VDTIn;
    const Fider =  + props.number;

    let DevList = [,['S201', 'F202', 'DS202'],,['S203', 'F204', 'DS204']];

    let Dev = [,
        {
            Name: '',
            Mark: '',
            Info1: '',
            Info2: ''
        },{
            Name: '',
            Mark: '',
            Info1: '',
            Info2: ''
        }]

    if (Nphase == 123) {
        N=3; Np=Phase3;
    } else {
        N=1; Np=Phase1;
    }

        for (var i = 0; Ir > DRC[i]; i++) {
        }
        DevIn = DRC[i];
        VDTIn = DRC[i+1];

         let ArrCurCab = CCuA;

         i = 0;
         while (DevIn > ArrCurCab[i]) {
         i++;
           }
           let CabIn = ArrCurCab[i];
            let CabSec = CCS[i];



    if (Device == AVVDT) {
        Dev[1].Name = 'QF' + Fider;
        Dev[1].Mark = (DevList[N])[0];
        Dev[1].Info1 = `C${DevIn}/${N}P`
        Dev[1].Info2 = '';
        Dev[2].Name = 'FD' + Fider;
        Dev[2].Mark = (DevList[N])[1];
        Dev[2].Info1 = `${VDTIn}А/${N+1}P`
        Dev[2].Info2 = `AC30`
    } else if (Device == AVDT) {
        Dev[1].Name = 'QFD' + Fider;
        Dev[1].Mark = (DevList[N])[2];
        Dev[1].Info1 = `C${DevIn}/${N+1}P`
        Dev[1].Info2 = `AC30`
        Dev[2].Name = '';
        Dev[2].Mark = '';
        Dev[2].Info1 = '';
        Dev[2].Info2 = '';
    } else if (Device == AV) {
        Dev[1].Name = 'QF' + Fider;
        Dev[1].Mark = (DevList[N])[0];
        Dev[1].Info1 = `C${DevIn}/${N}P`;
        Dev[1].Info2 = '';
        Dev[2].Name = '';
        Dev[2].Mark = '';
        Dev[2].Info1 = '';
        Dev[2].Info2 = '';
    }

    function calculate(P, N, Cosfi) {
        setCurrent(P/(N*Cosfi*Up));
    }

        let CableName = 'ВВГнг(А)-LS';
        let Cable = `гр.${Fider} - ${CableName} ${N+2}x${CabSec}`;

        useMemo(() => {
            props.Param(props.number-1, Nphase, P, Cosfi, Ir);
        }, [Ir, Nphase])

    return (
            <div className="deviceBlock">
                <div className="lines">
                    <img
                        style={{width: '100%', height: '100%', objectFit: 'fill'}}
                        src={Lines}
                        alt="ERROR"
                    />
                </div>
                <div className="device">
                    <img
                        style={{height: '117mm', marginTop: '1.5mm'}}
                        src={Device}
                        alt="ERROR"
                    />
                    <img className="phase" src={Np} alt="ERROR"/>
                    <div className="cable">
                        <p className="cableInfo">{Cable}</p>
                        <input
                            className="inputGrid"
                            type="text"
                            value={Method}
                            onChange={e => setMethod(e.target.value)}
                        />
                    </div>
                    <div className="QFdev">
                        <p className="DEV"><b>{Dev[1].Name}</b></p>
                        <p className="DEVinfo">{Dev[1].Mark}</p>
                        <p className="DEVinfo">{Dev[1].Info1}</p>
                        <p className="DEVinfo">{Dev[1].Info2}</p>
                    </div>
                    <div className="FDdev">
                        <p className="DEV"><b>{Dev[2].Name}</b></p>
                        <p className="DEVinfo">{Dev[2].Mark}</p>
                        <p className="DEVinfo">{Dev[2].Info1}</p>
                        <p className="DEVinfo">{Dev[2].Info2}</p>
                    </div>
                </div>
                <div className="nPhase">
                    <select className="select" onChange={e => {setNphase(e.target.value); calculate(P, (e.target.value === "123" ? 3 : 1), Cosfi)}}>
                        <option value="123">L1,L2,L3</option>
                        <option value="1"  >L1</option>
                        <option value="2"  >L2</option>
                        <option value="3"  >L3</option>
                    </select>
                </div>
                <div className="setDevice">
                    <select className="select" onChange={e => setDevice(e.target.value)}>
                        <option value={AVVDT}>АВ+ВДТ</option>
                        <option value={AVDT}>АВДТ</option>
                        <option value={AV}>АВ</option>
                    </select>
                </div>
                <div className="delButton">
                    <button className="button minus" onClick={() => props.remove(props.Device)}/>
                </div>
                <div className="deviceTable">
                    <div className="deviceTable1">
                        <input className="inputGrid" type="text"/>
                    </div>
                    <div className="deviceTable2">
                        <input
                            className="inputGrid"
                            type="number"
                            value={P}
                            onChange={e => {setP(e.target.value); calculate(e.target.value, N, Cosfi)}}
                        />
                    </div>
                    <div className="deviceTable2">
                        <input
                            className="inputGrid"
                            type="number"
                            value={Cosfi}
                            min={0}
                            max={1}
                            onChange={e => {setCosfi(e.target.value); calculate(P, N, e.target.value)}}
                        />
                    </div>
                    <div className="deviceTable2">
                        {Ir.toFixed(3)}
                    </div>
                    <div className="deviceTable2">
                        <input className="inputGrid" type="text"/>
                    </div>
                </div>
            </div>
    );
};

export default SecondDevice;