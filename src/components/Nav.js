import React from "react";
const styles = {
    navbar:{
        fontFamily:'Permanent Marker', 
    }
}



function Nav (){
    // eslint-disable-next-line no-unused-expressions
    return(
    <>
  <nav style={styles.navbar} className="nav-extended  bg-primary">
    <div className="nav-wrapper  grey darken-4"><div className="container">
      <div style={styles.navbar} className="row"><div className="col s12"><a href="/" className="brand-logo">Alexander Talberg</a></div></div>
      <br/>
      
      <div className="row"><div className="col s12"><ul id="nav-mobile" className="right ">
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        
        <li><a href="https://github.com/Talberg">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/alexander-talberg-33b65613a/">LinkedIn</a></li>
      </ul>
    </div>
    </div>
    </div>
    </div>
  </nav>
  </>)

  
}

export default Nav