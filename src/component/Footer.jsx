import React from 'react'
import SocialMediaLinks from './SocialMediaLinks';

export default function Footer() {
    const heading={
    color:'white',
        fontSize:22,
        textTransform:'uppercase'
    
  };
  const divinside={
    display:'flex',
    flexDirection:'column',
    gap:5,
   // width:'33%',
    color:'white',
  }
  return (
    <footer style={{
        display:'flex',
       flexDirection:'column',
       
    }}
    >
<div style={{
    display:'flex',
    flexDirection:'row',
    gap:5,
    justifyContent: "space-around",
    
    backgroundColor:'#2c3e50',
    padding:50
}}

><div
style={divinside}>

<h3 style={heading}>Location</h3>
<p style={{width:'200px'}}>2215 John Daniel Drive
Clark, MO 65243</p>
</div>
<div style={divinside}>

<h3
style={heading}>Around the Web
</h3>
<SocialMediaLinks/>
</div>
<div style={divinside}>
    <h3 style={heading}>About Freelancer
    </h3>
    <p style={{width:220,}}>
    Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .
    </p>
</div>

</div>
<div style={{ textAlign:'center', padding:9,backgroundColor:'#1a252f',color:'white'}}>         <i className="fa-regular fa-copyright"></i> 2024 Your Company Name
</div>
    </footer>
  )
 
  
}
