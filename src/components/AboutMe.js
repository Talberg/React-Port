import React from 'react'

function About() {
    return (

        <div className={'container'}>
        <div className="col s2">
             <img className="img-thumbnail float-left img-fluid  profile-pic  col-2 "
            src="https://avatars2.githubusercontent.com/u/29212256?s=400&u=f93769342973ba9b34cf252d195b8b679d13a72e&v=4"
            alt="Alexander Talberg"></img>
            </div>
            <div className="col s8">
                <h2>About Me:</h2>
                <p> <strong>Email: AlexanderMTalberg@gmail.com</strong></p>

                <p className="flow-text"> Hello! Welcome to my Portfolio. Recently I switched from my job as a Sous Chef to
                    web development. I am currently enrolled in a Bootcamp at DU. After living in Boulder,CO for the
                    past 3 years my wife and I have made the decision to stay in the Boulder Valley area. I am looking
    for the opportunity to grow and learn as a web developer while working on a team. </p>
            </div>
        </div>
        
    )
}

export default About;