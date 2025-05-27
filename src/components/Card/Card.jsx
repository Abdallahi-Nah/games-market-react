import "./Card.css";
import { FaStar, FaDownload } from "react-icons/fa";

export default function Card(props) {
  return (
    <>
      <div className="most-popular-item">
        <div className="card-wrapper">
          <img
            className="most-popular-item-image"
            src={props.image}
            alt=""
            srcSet=""
          />
          <div className="most-popular-item-content">
            <h4 className="most-popular-item-title">
              {props.title} <br />
              <span>{props.category}</span>
            </h4>
            <ul>
              <li>
                <span style={{"color": "#CCCCCC"}}><FaStar /></span> <span>{props.rate}</span>
              </li>
              <li>
                <span style={{"color": "#E00"}}><FaDownload /></span> <span>{props.download}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
