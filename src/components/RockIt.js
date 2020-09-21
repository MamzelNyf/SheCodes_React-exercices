import React, { useState } from "react";
import PlayTool from "./PlayTool/PlayTool";

function RockIt() {
  const [toolPicked, setToolPicked] = useState("");
  // console.log(toolPicked);
  // function handleClick(tool) {
  //   setToolPicked(tool);
  // }
  console.log({toolPicked});
  return (
    <div className="container">
      <div id="list-tools">
        {/* <PlayTool tool="scissors" onClick={setToolPicked("scissors")} /> */}
        {/* <PlayTool tool="paper" onClick={handleClick("paper")} /> */}
        {/* These functions are fired on Render not on Click */}

        {/* <PlayTool tool="paper" onClick={() => handleClick("paper")} /> */}
        {/* onClick prop on the PlayTool component isn’t actually getting passed to anything */}
        <PlayTool tool="scissors" onClick={() => setToolPicked("scissors")} toolPicked={toolPicked}/>
        <PlayTool tool="paper" onClick={() => setToolPicked("paper")} toolPicked={toolPicked}/>
        <PlayTool 
          tool="rock" 
          onClick={() => setToolPicked("rock")} 
          toolPicked={toolPicked}/>
      </div>

      <div id="your-pick">
        <h3>Your pick:</h3>
      </div>
      <div id="my-pick">
        
        {toolPicked && <><h3>My pick:</h3> <PlayTool tool={toolPicked} /></>}
      </div>
    </div>
  );
}

export default RockIt;
