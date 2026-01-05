import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentListPage from "./pages/StudentListPage/StudentListPage";
import StudentReport from "./pages/StudentReportPage";

const candid = {
  StudentName: "John Doe",
  RollNo: "AM.SC.U5CSE24654",
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* YOUR PAGE */}
          <Route path="/" element={<StudentListPage />} />

          {/* REPORT PAGE */}
          <Route
            path="/student-report"
            element={
              <StudentReport
                StudentName={candid.StudentName}
                RollNo={candid.RollNo}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
