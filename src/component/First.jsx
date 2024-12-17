import React from "react";
import LineStart from "./LineStart";

export default function First() {
  return (
    <section
      className="bg-info d-flex flex-column text-center pt-5 " 
       style={{ padding:'100px', height:'100%',display: "flex",flexDirection: "column",   gap: "5px",}} // تحديد المسافة بين العناصر}}
    >
     <div><img src="./avetar.png" alt="avetar"  width={200}/></div>
   <div className="fs-1 fw-bolder fs-1  pBT-0" > 
     <h1 style={{ textTransform: "uppercase ",color:'white'   }}>
      Start Bootstrap</h1>
</div>
  <LineStart color="white" />
      <p className="fw-bolder fs-3" style={{
        color:'white'
      }}>Graphic Artist - Web Designer - Illustrator

</p>
    </section>
  );
}
