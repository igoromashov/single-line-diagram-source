import React from 'react';
import '../styles/Grids.css';

const TitleGrid1 = () => {
    return (
        <div className="titleGrid1">
        <table className="tg" style={{width: '100%'}}>
            <colgroup>
                <col style={{width: '10mm'}}/>
                <col style={{width: '10mm'}}/>
                <col style={{width: '38mm'}}/>
            </colgroup>
            <thead>
            <tr>
                <th
                    style={{height: '25mm', fontSize: '5mm'}}
                    className="tbCenter"
                    colSpan="3"
                >
                    <p style={{lineHeight: 1}}>Щит, характеристики, корпус</p>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td rowSpan="4">
                    <p className="deg90">ЩИТ РАСПРЕДЕЛИТЕЛЬНЫЙ, НАИМЕНОВАНИЕ</p>
                </td>
                <td className="deg90" rowSpan="3">Вводной защитный аппарат</td>
                <td style={{height: '18mm'}} className="tbLeft">
                    <div>
                        <p>Маркировка, тип,</p>
                        <p>и сечение кабеля</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style={{height: '29.5mm'}} className="tbLeft">
                    <p>Вводной аппарат</p>
                    <p>Тип аппарата</p>
                    <p>Iном., А / кол. полюсов</p>
                    <p>Iном., дифф. расцеп., А</p>
                </td>
            </tr>
            <tr>
                <td style={{height: '13.5mm'}} className="tbLeft">
                    <p>Фаза (L1, L2, L3)</p>
                    <p>Рабочий нулевой (N)</p>
                    <p>Защитный нулевой (PE)</p>
                </td>
            </tr>
            <tr>
                <td className="deg90">Аппарат отходящей линии</td>
                <td style={{height: '40mm'}} className="tbLeft">
                    <p>Выкл. автоматический</p>
                    <p>(Диф. автомат. вык-ль)</p>
                    <p>Тип. авт. выкл. (диф)</p>
                    <p>Iном., А / Кол. полюсов</p>
                    <p>Iном. дифф. расцеп., мА</p>
                    <p>Тип УЗО</p>
                    <p>Iном., А / Кол. полюсов</p>
                    <p>Iном., дифф. расцеп., мА</p>
                </td>
            </tr>
            <tr>
                <td style={{height: '56mm'}} className="deg90" colSpan="3">
                    <p>Наим. каб. - тип кабеля - L каб.</p>
                    <p>Способ монтажа</p>
                </td>
            </tr>
            </tbody>
        </table>
    <div className="titleDeviceTable">
        <div className="titleDeviceTable1">Наименование</div>
        <div className="titleDeviceTable2">Ном. мощность, кВт</div>
        <div className="titleDeviceTable2">Cos(fi)</div>
        <div className="titleDeviceTable2">Расч. ток, А</div>
        <div className="titleDeviceTable2">Помещение</div>
    </div>
        </div>
    );
};

export default TitleGrid1;