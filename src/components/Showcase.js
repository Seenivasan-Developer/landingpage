import React from 'react';

export function Showcase({sData}) {
  return (
      <div className="row g-0">
        <div className={sData.shclass ?"col-lg-6 order-lg-2 text-white showcase-img" :"col-lg-6 text-white showcase-img"} style={{ backgroundImage: sData.backImage }}></div>
        <div className={sData.shclass ?"col-lg-6 order-lg-1 my-auto showcase-text" : "col-lg-6 my-auto showcase-text"}>
          <h2>{sData.shhead}</h2>
          <p className="lead mb-0">{sData.shcontent}</p>
        </div>
      </div>
     
  );
}
