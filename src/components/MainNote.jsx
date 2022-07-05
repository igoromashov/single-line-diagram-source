import React from 'react';
import '../styles/Grids.css';

const MainNote = () => {
    return (
        <div className="mainNote">
        <table className="tg" style={{width: '185mm', height: '55mm'}}>
            <colgroup>
                <col style={{width: '7mm'}}/>
                <col style={{width: '10mm'}}/>
                <col style={{width: '23mm'}}/>
                <col style={{width: '15mm'}}/>
                <col style={{width: '10mm'}}/>
                <col style={{width: '70mm'}}/>
                <col style={{width: '5mm'}}/>
                <col style={{width: '5mm'}}/>
                <col style={{width: '5mm'}}/>
                <col style={{width: '5mm'}}/>
                <col style={{width: '10mm'}}/>
                <col style={{width: '19.75mm'}}/>
            </colgroup>
            <thead>
            <tr>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky" colSpan="7" rowSpan="3"></th>
            </tr>
            <tr>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
            </tr>
            <tr>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky" rowSpan="5"></td>
                <td className="tg-c3ow" colSpan="3">Стадия</td>
                <td className="tg-c3ow" colSpan="2">Масса</td>
                <td className="tg-c3ow">Масштаб</td>
            </tr>
            <tr>
                <td className="tg-3dm3">Изм</td>
                <td className="tg-c3ow">Лист</td>
                <td className="tg-c3ow">№ докум.</td>
                <td className="tg-c3ow">Подп.</td>
                <td className="tg-c3ow">Дата</td>
                <td className="tg-0pky" rowSpan="3"></td>
                <td className="tg-0pky" rowSpan="3"></td>
                <td className="tg-0pky" rowSpan="3"></td>
                <td className="tg-0pky" colSpan="2" rowSpan="3"></td>
                <td className="tg-0pky" colSpan="2" rowSpan="3"></td>
            </tr>
            <tr>
                <td className="tg-0pky" colSpan="2">Разраб.</td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
            </tr>
            <tr>
                <td className="tg-0pky" colSpan="2">Пров.</td>
                <td className="tg-0pky">--//--</td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
            </tr>
            <tr>
                <td className="tg-0pky" colSpan="2">Т.контр.</td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky" colSpan="4">Лист 1</td>
                <td className="tg-0pky" colSpan="2">Листов 1</td>
            </tr>
            <tr>
                <td className="tg-0pky" colSpan="2"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-c3ow" rowSpan="3">Схема однолинейная</td>
                <td className="tg-0pky" colSpan="6" rowSpan="3"></td>
            </tr>
            <tr>
                <td className="tg-0pky" colSpan="2">Н.контр.</td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
            </tr>
            <tr>
                <td className="tg-0pky" colSpan="2">Утв.</td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
                <td className="tg-0pky"></td>
            </tr>
            </tbody>
        </table>
        </div>
    );
};

export default MainNote;