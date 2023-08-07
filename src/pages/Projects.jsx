import React from "react";

function Projects(props) {
  console.log("props", props);

  return (
    <div className="projWrapper">
      <h1 className="Title">
        <u>My Projects</u>
      </h1>
      <div className="midWrapper">
        <div className="leftDiv">
          <img src="https://www.cloudimax.com/assets/custom/images/research/data-aquisition.gif" alt="" className="gifImg" />
        </div>
        <div className="mDiv">
          <div className="project">
          <div className="pname">{props.data[1].projectName}</div>

          <div className="pdesc">{props.data[1].desc}</div>

          <div className="purl">
          <a href={props.data[1].Url}> click here to GithubRepo</a>
          </div>
          <div className="purl">
          <a href={props.data[1].liveUrl}> click here</a>
          </div>
          </div>
          <div className="project">
          <div className="pname">{props.data[2].projectName}</div>

          <div className="pdesc">{props.data[2].desc}</div>

          <div className="purl">
          <a href={props.data[2].Url}> click here to GithubRepo</a>
          </div>
          <div className="purl">
          <a href={props.data[2].liveUrl}> click here</a>
          </div>
          </div>
          <div className="project">
          <div className="pname">{props.data[3].projectName}</div>

          <div className="pdesc">{props.data[3].desc}</div>

          <div className="purl">
          <a href={props.data[3].Url}> click here to GithubRepo</a>
          </div>
          <div className="purl">
          <a href={props.data[3].liveUrl}> click here</a>
          </div>
          </div>
          <div className="project">
          <div className="pname">{props.data[4].projectName}</div>

          <div className="pdesc">{props.data[4].desc}</div>

          <div className="purl">
          <a href={props.data[4].Url}> click here to GithubRepo</a>
          </div>
          <div className="purl">
          <a href={props.data[4].liveUrl}> click here</a>
          </div>
          </div>
          </div>
        <div className="rightDiv">
          <img src="https://static.wixstatic.com/media/c28ae8_0f6486e3f02840fa8962f83d39894ca0~mv2.gif" alt="" className="gifImg" /> 
          
        </div>
      </div>
    </div>
  );
}
        
        

export default Projects;



