import React from 'react';

const SoglGrid = () => {
    return (
        <div className="soglGrid">
            <table className="tg" style={{tableLayout: 'fixed', width: '20mm'}}>
                <colgroup>
                    <col style={{width: '5mm'}}/>
                    <col style={{width: '5mm'}}/>
                    <col style={{width: '5mm'}}/>
                    <col style={{width: '5mm'}}/>
                </colgroup>
                <thead>
                <tr style={{height: '10mm'}}>
                    <td className="deg90" rowSpan="4" style={{borderLeft: 0}}>Согласовано</td>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                <tr style={{height: '15mm'}}>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                <tr style={{height: '20mm'}}>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                <tr style={{height: '20mm'}}>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                </thead>
            </table>
            <div style={{position: 'absolute', bottom: 0, right: 0}}>
                <table className="tg" style={{tableLayout: 'fixed', width: '12mm'}}>
                    <colgroup>
                        <col style={{width: '5mm'}}/>
                        <col style={{width: '7mm'}}/>
                    </colgroup>
                    <thead>
                    <tr style={{height: 'calc(25mm - 1px)'}}>
                        <th className="deg90">Взам. инв. N</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{height: '35mm'}}>
                        <td className="deg90">Подп. и дата</td>
                        <td/>
                    </tr>
                    <tr style={{height: '25mm'}}>
                        <td className="deg90">Инв. N подл.</td>
                        <td/>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SoglGrid;