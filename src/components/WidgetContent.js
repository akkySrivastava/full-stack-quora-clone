import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
