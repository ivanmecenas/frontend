import "./header.css";
import { FaCalendarAlt, FaChevronLeft, FaHome } from "react-icons/fa";

function HeaderMain(titulo) {
  return (
    <div className="cabecalho">
      <div className="iconBack">
        <FaChevronLeft className="icon" />
      </div>
      <div className="iconCalendar">
        <FaCalendarAlt className="icon" />
        <label className="dataLabel">data</label>
      </div>
      <div className="titulo">
        <label>{titulo}</label>
      </div>
      <div className="iconHome">
        <FaHome className="icon" />
      </div>
    </div>
  );
}

export default HeaderMain;
