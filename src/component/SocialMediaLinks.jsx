import React from 'react';


function SocialMediaLinks() {
    const social={
    
        borderRadius: '50%',   // جعل الشكل دائري
        width: '2rem',         // تحديد حجم الدائرة
        height: '2rem',        // تحديد ارتفاع الدائرة
        fontSize: '1.1rem',    // تصغير حجم الأيقونة
        display: 'flex',
        justifyContent: 'center', // توسيط الأيقونة داخل الدائرة
        alignItems: 'center',
        
    }
  return (
    <div className="social-media-links"
    style={{
        display:'flex',
        justifyContent:'flex-start',
        gap:9
    }}>
      <a href="https://facebook.com" target="_blank"  className="social-icon btn btn-outline-light btn-social mx-1" 
      style={social}
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="https://instagram.com" target="_blank" className="social-icon  btn btn-outline-light btn-social mx-1" 
      style={social}>
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https://twitter.com" target="_blank" className="social-icon  btn btn-outline-light btn-social mx-1" style={social}>
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="https://github.com" target="_blank" className="social-icon  btn btn-outline-light btn-social mx-1" style={social}>
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
}

export default SocialMediaLinks;
