import "./GamingLibraryCard.css";
import { FaStar, FaDownload } from "react-icons/fa";
import {SecondaryButton} from "../../components/index";

export default function GamingLibraryCard(props) {
  return (
    <>
      <div className="gaming-library-card">
        <ul>
          <li>
            <img src={props.image} alt="" />
          </li>
          <li>
            <h4>{props.title}</h4>
            <span>{props.category}</span>
          </li>
          <li>
            <h4>Date Added</h4>
            <span>{props.date_added}</span>
          </li>
          <li>
            <h4>Hours Played</h4>
            <span>{props.hours_played}</span>
          </li>
          <li>
            <h4>Currently</h4>
            <span>{props.downloaded}</span>
          </li>
          <SecondaryButton>Download</SecondaryButton>
          {/* <div className="main-button">
            <a href="#">Download</a>
          </div> */}
        </ul>
      </div>
    </>
  );
}
