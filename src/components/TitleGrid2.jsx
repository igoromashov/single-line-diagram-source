import React, {useState} from 'react';
import '../styles/SecondDevice.css';
import '../styles/Grids.css';

const TitleGrid2 = (props) => {
    let Pp = 0;
    let Imax = 0;
    const [Kc, setKc] = useState(1);
    Pp = Kc*props.P
    Imax = Kc*props.Imax
    return (
        <div className="titleGrid2">
        <table
            className="tg"
            style={{width: 'inherit'}}
        >
            <colgroup>
                <col style={{width: '40mm'}}/>
                <col style={{width: '12mm'}}/>
                <col style={{width: '16mm'}}/>
                <col style={{width: '12mm'}}/>
                <col style={{width: '46mm'}}/>
            </colgroup>
            <thead>
            <tr>
                <td style={{height: '25mm', fontSize: '7mm', borderLeftWidth: 0}} className="tg-c3ow" rowSpan="5">ЩК-1</td>
                <td className="tg-c3ow">Pуст</td>
                <td className="tg-c3ow">{props.P>0 ? props.P.toFixed(2) : "-"}</td>
                <td className="tg-c3ow">кВт</td>
                <td style={{padding: 0}} className="tg-c3ow" rowSpan="5">
                    <textarea className="inputGrid" defaultValue={'Щит пластиковый'} rows={1}/>
                </td>
            </tr>
            <tr style={{height: '4mm'}}>
                <td className="tg-c3ow">Кс</td>
                <td className="tg-c3ow">
                    <input
                        className="inputGrid"
                        type="number"
                        value={Kc}
                        min={0}
                        max={1}
                        onChange={e => setKc(e.target.value)}
                    />
                </td>
                <td className="tg-c3ow">-</td>
            </tr>
            <tr>
                <td className="tg-c3ow">Pр</td>
                <td className="tg-c3ow">{Pp>0 ? Pp.toFixed(2) : "-"}</td>
                <td className="tg-c3ow">кВт</td>
            </tr>
            <tr>
                <td className="tg-c3ow">Cosfi</td>
                <td className="tg-c3ow">{props.Cosfi ? props.Cosfi.toFixed(2) : "-"}</td>
                <td className="tg-c3ow">-</td>
            </tr>
            <tr>
                <td className="tg-c3ow">Iр</td>
                <td className="tg-c3ow">{props.P>0 ? Imax.toFixed(2) : "-"}</td>
                <td className="tg-c3ow">А</td>
            </tr>
            </thead>
        </table>
        </div>
    );
};

export default TitleGrid2;