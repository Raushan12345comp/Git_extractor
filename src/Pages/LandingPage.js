import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import user from '../img/user.svg'
import commits from '../img/cimmits.svg'
import location from '../img/location.svg'
import date from "../img/date.svg"
import cont from '../img/contributer.svg'
import './landing.css'
import Footer from '../layout/Footer/Footer'



const LandingPage = () => {
    return (
        <div >
            <h1 className="Features_Landing_page">FEATURES</h1>
           
                
            <div className="Links_Landing" style={{marginBottom: "100px"}}>

            <div className="link_box">

            <li className="landing_items">
                <NavLink exact className="landing_links" to="/home">
                  <img src={user} className="link_img" alt="" />
                  Search By UserName
                </NavLink>
              </li>
         

              <li className="landing_items">
                <NavLink exact className="landing_links"  to="/userbyrepos">
                <img src={commits} className="link_img" alt="" />
                  Search By Repos Language
                </NavLink>
              </li>
              <li className="landing_items">
                <NavLink exact className="landing_links"  to="/userbylocation">
                <img src={location} className="link_img" alt="" />
                  Search By Location & Language
                </NavLink>
              </li>
              <li className="landing_items">
                <NavLink exact className="landing_links"  to="/repos">
                <img src={commits} className="link_img" alt="" />
                  Search User all Repos
                </NavLink>
              </li>

             

              <li className="landing_items">
                <NavLink exact className="landing_links"  to="/contributors">
                <img src={cont} className="link_img" alt="" />
                  Search contributor
                </NavLink>
              </li>

              

              <li className="landing_items">
                <NavLink exact className="landing_links"  to="/userbycommits">
                <img src={date} className="link_img" alt="" />
                  Search Commits
                </NavLink>
              </li>
            </div>
            


            </div>



                {/* <Link to="home">Search By username</Link>
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

                <div>
                  <Link to="repos">user all repos</Link>
                </div> */}
                <Footer />

        </div>
    )
}

export default LandingPage
