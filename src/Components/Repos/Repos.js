import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {ListGroup, ListGroupItem} from "reactstrap";


export const Repos = ({repos_url}) => {

    const [repos, setRepos] = useState([])


    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }



    useEffect(() => {
        fetchRepos()
    }, [repos_url])


   
   
    


    return (
        <div style={{}}>
        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <a style={{textDecoration: 'none'}} target="_blank" href={repo.html_url}>
                    <div className="auth-card-header">{repo.name}</div>
                    </a>

                    <div className="auth-label">{repo.language}</div>
                    <div className="auth-label">{repo.description}</div>
                    <div className='auth-label'>Size: {repo.size}</div>
                    <div className='auth-label'>Open issues: {repo.open_issues}</div>
                    <div className='auth-label'>Default branch: {repo.default_branch}</div>
                    <div className='auth-label'>create date: {repo.created_at}</div>
                    <div className='auth-label'>update date: {repo.updated_at}</div>
                    <div className='auth-label'>pushed date: {repo.updated_at}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
        </div>
    )
}
