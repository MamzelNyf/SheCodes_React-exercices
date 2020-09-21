import React from "react";

// import scissors from "./img/scissors.jpg";
// import paper from "./img/paper.jpg";
// import rock from "./img/rock.jpg";

// function PlayTool(props) {
  // const [addClass, addClassValue] = useState(false);
  // move useState outside of the button

  // const toggleClass = () => {
  //   addClassValue(!addClass);
  // };

  // {/* src={tool === "scissors" ? scissors : tool === "paper" ? paper : rock} */}


// use the variables and functions props from the parent
function PlayTool ({ tool, toolPicked, onClick}){
  //use require to avoid importing images in the component
  const image = require(`./img/${tool}.jpg`);
  return (
    //Don't need to use props. because we detailed the prop.elements in the function Playtool;

    <div className={`card ${tool === toolPicked ? " active" : ""}`}>
      <h3>{tool}</h3>
      <img 
        src ={image}
        alt={tool}
        onClick={onClick}
      />
    </div>
  );
}

export default PlayTool;
