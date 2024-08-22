import React from "react";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();
  const moveadd = () => {
    navigate("/newnote");
  };
  const moveview = () => {
    navigate("/viewnotes");
  };

  return (
    <div className="fl-c box-wrapper">
      <h6>Tap to Add or View Notes</h6>
      <div className="fl-r button-box">
        <div onClick={moveadd} className="add-box">
          {" "}
          <button>Add Notes</button>
        </div>
        <div onClick={moveview} className="view-box">
          {" "}
          <button>View Notes</button>
        </div>

        {/* <Notes showalert={props.showalert} /> */}
      </div>
    </div>
  );
};

export default Home;
