import "./DashboardAddMoney.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const logo = require("./home/se-logogphotoaidcomcropped-1@2x.png");
const background = require("./home/bg01-1@2x.png");
const topbar = require("./home/topbar.svg");

// stored in DashoardAddMoney.css
function App() {
  const navigate = useNavigate();

  const handleSaveChanges = () => {
    navigate("/home");
  };

  return (
    <div className="dashboard-add-money">
      <img className="top-bar-icon" alt="" src={topbar} />
      <img className="bg-01-1-icon" alt="" src={background} />
      <div className="dashboard-add-money-child" />
      <b className="add-money">Help</b>
      <div className="dashboard-add-money-item1" />
      <button className="dashboard-add-money-inner" />

      <div className="add-money2">
        <>
          This repository will contain all the relevant files for the PlanIt Pro
          application. The budgeting part web application for students can help
          them manage their finances more effectively by providing a platform to
          track their income, expenses, set budgets, and monitor their spending
          habits.
          <br></br><br></br>
          The scope of such an application includes features such as
          categorizing expenses into different categories such as food, rent,
          transportation, and entertainment. It can also provide suggestions on
          saving money and setting financial goals such as saving for textbooks
          or reducing debt.
          <br></br><br></br>
          The application may also include features such as
          alerts for upcoming bill payments, automatic data entry, and
          customized reports to help students visualize their spending patterns.
          With a budgeting web application, students can learn to manage their
          money responsibly, avoid unnecessary spending, and build a solid
          financial foundation for their future. The to-do list part of our web
          application designed for students would aim to provide a simple and
          effective tool to help students organize and manage their tasks and
          assignments.
          <br></br><br></br>
          The application would provide a user-friendly interface
          for students to input their assignment's due dates and exam dates to
          track their progress in completing these tasks. The scope of the
          application would include features such as prioritization of tasks,
          categorization by subject or class, notifications and reminders, and
          the ability to add notes or comments to tasks. Additionally, the
          application could provide analytics and insights to help students
          better understand their productivity and time management habits. The
          ultimate goal of the to-do list web application would be to help
          students stay on top of their workload and reduce stress by providing
          a clear and organized view of their tasks and deadlines.
        </>
      </div>

      <div className="add-money1">
        <button
          style={{
            textDecoration: "none",
            color: "white",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "25px"
          }}
          onClick={handleSaveChanges}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default App;
