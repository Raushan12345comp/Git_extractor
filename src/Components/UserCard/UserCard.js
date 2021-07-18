import React from 'react';
import {Card, CardBody}  from "reactstrap";
import {Link} from 'react-router-dom'

const UserCard = ({user}) => {
    return (
       <Card className="text-center mt-3 mb-4">
       <a target="_blank" href={user.html_url}>
       <img src={user.avatar_url ? user.avatar_url : "Images/github-logo.png"} className="img-thumbnail" />
       </a>
           <CardBody>
               <div className="auth-card-header">{user.login}</div>
               <div className="auth-label">{user.name}</div>
               <div className="auth-label">{user.location}</div>
               <div className="auth-label">{user.bio}</div>
               <div className="auth-label">Public Repositories: {user.public_repos}</div>
               <div className="auth-label">Followers: {user.followers}</div>
               

               <div className="auth-label"> Available for hire: {user.hireable ? 'YES' : 'NOPE'}</div>
               {/* <div className="text-info"> Followers: {user.followers ? 'YES' : 'NOPE'}</div> */}
           </CardBody>

       </Card>
    )
}

export default UserCard

