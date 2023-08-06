import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiKeys from "../ApiKeys/ApiKeys";
import Projects from "./Projects";
// import MyInfoPage from "./MyInfoPage";


function ProjectLoading() {
  const [data, setData] = useState(null);
  const getGitHubData = async () => {
    let res = await axios.get(
      "https://api.github.com/users/tsbalogun97/repos?per_page=100&sort=created",
      {
        method: "GET",
        headers: {
          Authorization: ApiKeys.REACT_APP_GITHUB_API_KEY,
        },
      }
    );
    setData(res.data);
  };
  useEffect(() => {
    getGitHubData();
  }, []);
  let githubInfo = [
    {
      projectName: "WK6MiniProject"
    },
    {
      projectName: "WK6MiniProject"
    },
    {
      projectName: "keyFramesMockUp"
    },
    {
      projectName: "MovieApi"
    },
    {
      projectName: "TheDartGame",
      liveUrl: "https://tsbalogun97.github.io/TheDartGame/"
    },
  ];

  if (data) {
    for (let i = 0; i < githubInfo.length; i++) {
      data.map((current) => {
        if (current.name === githubInfo[i].projectName) {
          githubInfo[i].desc = current.description;
          githubInfo[i].Url = current.html_url;
          
        }
      });
    }
  }
  console.log('data', data);
  if (data){
  return (<div>
    <Projects data ={githubInfo}/>
  </div>)
  }else{
    <h1>
      textloading
    </h1>
  }
}

export default ProjectLoading;
