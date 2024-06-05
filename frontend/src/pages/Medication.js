import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import './Medication.scss';

const prescriptions = [
    { id: 'A348', title: 'Prescription 1', createdBy: 'Dr. Jacob Ryan', date: '12/05/2016', disease: 'Fever' },
    { id: 'A645', title: 'Prescription 2', createdBy: 'Dr. Rajesh', date: '12/05/2016', disease: 'Cholera' },
    { id: 'A873', title: 'Prescription 3', createdBy: 'Dr. Jay Soni', date: '12/05/2016', disease: 'Jaundice' },
    { id: 'A927', title: 'Prescription 4', createdBy: 'Dr. John Deo', date: '12/05/2016', disease: 'Typhoid' },
    { id: 'A228', title: 'Prescription 5', createdBy: 'Dr. Megha Trivedi', date: '12/05/2016', disease: 'Malaria' },
    { id: 'A345', title: 'Prescription 6', createdBy: 'Dr. Sarah Smith', date: '12/05/2016', disease: 'Infection' },
    { id: 'A765', title: 'Prescription 7', createdBy: 'Dr. Jacob Ryan', date: '12/05/2016', disease: 'Fever' },
    { id: 'A125', title: 'Prescription 8', createdBy: 'Dr. Rajesh', date: '12/05/2016', disease: 'Cholera' },
];

const Medication = () => {
    const [alarms, setAlarms] = useState([]);
    const [alarmTime, setAlarmTime] = useState('');
    const [alarmNote, setAlarmNote] = useState('');
    const [toDo, setToDo] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const addAlarm = (e) => {
        e.preventDefault();
        if (alarmTime && alarmNote) {
            setAlarms([...alarms, { time: alarmTime, note: alarmNote }]);
            setAlarmTime('');
            setAlarmNote('');
        }
    };

    const addToDo = (e) => {
        e.preventDefault();
        if (toDo) {
            setToDoList([...toDoList, toDo]);
            setToDo('');
        }
    };

    const options = {
        chart: {
            type: 'bar',
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
            },
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
        legend: {
            position: 'top',
        },
        fill: {
            opacity: 1,
        },
    };

    const series = [
        {
            name: 'Medication Taken',
            data: [30, 40, 45, 50, 49, 60],
        },
        {
            name: 'Medication Missed',
            data: [10, 15, 12, 10, 12, 8],
        },
    ];

    return (
        <div className='medication'>
            <h1>Medication</h1>
            
            <div className='alarm-section'>
                <h2>Set Medication Alarm</h2>
                <form onSubmit={addAlarm}>
                    <input
                        type='time'
                        value={alarmTime}
                        onChange={(e) => setAlarmTime(e.target.value)}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Medication note'
                        value={alarmNote}
                        onChange={(e) => setAlarmNote(e.target.value)}
                        required
                    />
                    <button type='submit'>Set Alarm</button>
                </form>
                <div className='alarm-list'>
                    <h3>Set Alarms</h3>
                    <ul>
                        {alarms.map((alarm, index) => (
                            <li key={index}>
                                <span>{alarm.time}</span> - <span>{alarm.note}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='todo-section'>
                <h2>To-Do List for Medication</h2>
                <form onSubmit={addToDo}>
                    <input
                        type='text'
                        placeholder='Add a to-do'
                        value={toDo}
                        onChange={(e) => setToDo(e.target.value)}
                        required
                    />
                    <button type='submit'>Add To-Do</button>
                </form>
                <div className='todo-list'>
                    <h3>To-Do List</h3>
                    <ul>
                        {toDoList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='chart-section'>
                <h2>Medication Progress</h2>
                <ApexCharts options={options} series={series} type="bar" height={350} />
            </div>

            <table className='prescription-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Created by</th>
                        <th>Date</th>
                        <th>Diseases</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptions.map((prescription, index) => (
                        <tr key={prescription.id}>
                            <td>{prescription.id}</td>
                            <td>{prescription.title}</td>
                            <td>{prescription.createdBy}</td>
                            <td>{prescription.date}</td>
                            <td className={`disease ${prescription.disease.toLowerCase()}`}>{prescription.disease}</td>
                            <td className='actions'>
                                <button className='download' onClick={() => alert(`Downloading ${prescription.title}`)}>Download</button>
                                <button className='delete' onClick={() => alert(`Deleting ${prescription.title}`)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Medication;
