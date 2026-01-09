import React, { useState } from 'react';
import './Attendance.css';

export default function Attendance() {
  const [klass, setKlass] = useState('CSE-A');
  const [facultyCode, setFacultyCode] = useState('');

  
  const [students, setStudents] = useState([
    { id: 1, roll: '01', name: 'AM.SC.U4CSE24208', present: true },
    { id: 2, roll: '02', name: 'AM.SC.U4CSE24209', present: true },
    { id: 3, roll: '03', name: 'AM.SC.U4CSE24210', present: true },
    { id: 4, roll: '04', name: 'AM.SC.U4CSE24211', present: true },
    { id: 5, roll: '05', name: 'AM.SC.U4CSE24212', present: true },
  ]);


  function toggleAttendance(id) {
    setStudents((prev) =>
      prev.map((st) =>
        st.id === id ? { ...st, present: !st.present } : st
      )
    );
  }


  const absentees = students.filter((s) => !s.present);

  function handleSubmit() {
    console.log('Faculty Code:', facultyCode);
    console.log('Class:', klass);
    console.log('Absentees:', absentees);
    alert('Attendance Submitted!');
  }

  return (
    <div className="attendance-page">
      <div className="topbar">Logbook</div>

      <div className="attendance-wrapper">
        
        <div className="left-panel">
          <div className="title">TIMETABLE</div>

          <div className="table-wrapper">
            <table className="stu-table">
              <thead>
                <tr>
                  <th>Roll</th>
                  <th>Student Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((st) => (
                  <tr
                    key={st.id}
                    className={st.present ? 'row present' : 'row absent'}
                    onClick={() => toggleAttendance(st.id)}
                    title="Click to mark absent/present"
                  >
                    <td>{st.roll}</td>
                    <td>{st.name}</td>
                    <td>{st.present ? '✔ Present' : '✖ Absent'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="right-panel">
          
          <label className="label">
            Faculty Code
            <input
              type="text"
              placeholder="Enter faculty code"
              value={facultyCode}
              onChange={(e) => setFacultyCode(e.target.value)}
              className="input"
            />
          </label>

          
          <label className="label">
            Select Class
            <select value={klass} onChange={(e) => setKlass(e.target.value)}>
              <option>CSE-A</option>
              <option>CSE-B</option>
              <option>ECE-A</option>
            </select>
          </label>
          <label className="label">
            Class Status
            <select value={klass} onChange={(e) => setKlass(e.target.value)}>
              <option>taken</option>
              <option>no class</option>
              <option>substitute</option>
            </select>
          </label>


          
          <div className="absentees">
            <h4>Absentees</h4>
            {absentees.length === 0 ? (
              <p className="none">No absentees 🎉</p>
            ) : (
              absentees.map((s) => (
                <div key={s.id} className="absent-name">
                  {s.name.slice(-3)}
                </div>
              ))
            )}
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
}
