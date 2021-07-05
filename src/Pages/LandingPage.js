import React from 'react'
import { Link } from 'react-router-dom'


const LandingPage = () => {
    return (
        <div style={{marginTop: "100px", marginLeft: "50px"}}>
            <h1 className="text-white">This is the landing Page</h1>
            <p
                  style={{ marginTop: "150px"}}
                  className="text-white text-center"
                >
                  To be decided what we show to our users in default page when
                  they visit...
                </p>

                <Link to="home">Search By username</Link>
                <div>
                  <Link to="userbyrepos">User By Repos</Link>
                </div>
                <div>
                  <Link to="userbylocation">User By location</Link>
                </div>

                <div>
                  <Link to="userbycommits">commits</Link>
                </div>

                <div>
                  <Link to="contributors">contributor</Link>
                </div>

        </div>
    )
}

export default LandingPage
