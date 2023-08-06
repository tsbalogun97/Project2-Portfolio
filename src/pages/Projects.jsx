import React from "react";

function Projects(props) {
  console.log("props", props);

  return (
    <div className="projWrapper">
      <h1 className="Title">
        <u>My Projects</u>
      </h1>
      <div className="project">
        <div className="pname">{props.data[1].projectName}</div>

        <div className="pdesc">{props.data[1].desc}</div>

        <div className="purl">
          <a href={props.data[1].Url}> click here to GithubRepo</a>
        </div>
      </div>
      <div className="project">
        <div className="pname">{props.data[2].projectName}</div>

        <div className="pdesc">{props.data[2].desc}</div>

        <div className="purl">
          <a href={props.data[2].Url}> click here to GithubRepo</a>
        </div>
      </div>
      <div className="project">
        <div className="pname">{props.data[3].projectName}</div>

        <div className="pdesc">{props.data[3].desc}</div>

        <div className="purl">
          <a href={props.data[3].Url}> click here to GithubRepo</a>
        </div>
      </div>
      <div className="project">
        <div className="pname">{props.data[4].projectName}</div>

        <div className="pdesc">{props.data[4].desc}</div>

        <div className="purl">
          <a href={props.data[4].Url}> click here to GithubRepo</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
