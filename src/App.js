import React, {useMemo, useState} from "react";
import './styles/App.css'
import MainNote from "./components/MainNote";
import TitleGrid1 from "./components/TitleGrid1";
import TitleGrid2 from "./components/TitleGrid2";
import SecondDeviseZone from "./components/SecondDeviceZone";
import SoglGrid from "./components/SoglGrid";
import MainDevice from "./components/MainDevice";


function App() {

  const [Devices, setDevice] = useState([
    {id: 1, P: 0, Nphase: 0, Cosfi: 0, Ir: 0},
  ])
  const [SumP, setSumP] = useState(0)
  const [SumCosfi, setSumCosfi] = useState(0)
  const [Imax, setImax] = useState(0)
  const [Trigger, setTrigger] = useState(0)
  const [ListFormat, setListFormat] = useState("A3")

  function addNewDevice(e) {
    e.preventDefault()
    const NewDevice = {
      id: Date.now(),
    }
    setDevice([...Devices, NewDevice])
  }

  function removeDevice(Device) {
    setDevice(Devices.filter(d => d.id !== Device.id))
    setTrigger(Trigger + 1); // нужно придумать что-то получше :D
  }

  function takeParam(i, Nphase, P, Cosfi, Ir) {
    Devices[i].P = Number(P);
    Devices[i].Nphase = Number(Nphase);
    Devices[i].Cosfi = Number(Cosfi);
    Devices[i].Ir = Number(Ir);
    setTrigger(Trigger + 1); // нужно придумать что-то получше :D
  }

  useMemo(() => {
    var P = 0;
    var CosfiP = 0;
    var I = [,0,0,0];
    for (var i=0; i<Devices.length; i++) {
      P += Devices[i].P
      CosfiP += Devices[i].P*Devices[i].Cosfi
      if (Devices[i].Nphase == 123) {
          for (var j=0; j<4; j++) {
            I[j] += Devices[i].Ir;
          }}
        else {
          I[Devices[i].Nphase]+=Devices[i].Ir;
        }
      }
    setSumP(P);
    setSumCosfi(CosfiP/P);
    setImax(Math.max.apply(null, [I[1], I[2], I[3]]))
    console.log("useMemo отработал P = ", SumP, " I = ", I, " Imax = ", Math.max.apply(null, [I[1], I[2], I[3]]))
  }, [Trigger])



  return (
    <div className="App">
      <div className="controls">
        <button className="button plus" onClick={addNewDevice}/>
        <p>Формат листа:</p>
        <select className="select" onChange={e => {setListFormat(e.target.value)}}>
          <option value="A3">A3</option>
          {/* <option value="A4">A4</option> */}
          <option value="A4x3">A4x3</option>
          <option value="A4x4">A4x4</option>
          <option value="A4x5">A4x5</option>
          <option value="A4x6">A4x6</option>
        </select>
      </div>
      <div className="main">
        <div className={"externalGrid1 " + ListFormat}>
          <SoglGrid/>
            <div className="externalGrid2">
              <MainNote/>
              <TitleGrid1/>
              <TitleGrid2 P={SumP} Cosfi={SumCosfi} Imax={Imax}/>
              <MainDevice/>
              <SecondDeviseZone Param={takeParam} Devices={Devices} remove={removeDevice}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
