import React, { useEffect } from "react";

const statusPage = () => {
  window.open("https://medium.statuspage.io/" ,"_blank") ;
};

function Status() {
  useEffect(() => {
    document.title = "Site Status";
  });
  statusPage();
  return <div>Redirecting to Status Page...</div>;
}

export default Status;
