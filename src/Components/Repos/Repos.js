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
                    <a target="_blank" href={repo.html_url}>
                    <div className="text-primary">{repo.name}</div>
                    </a>

                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                    <div >Size: {repo.size}</div>
                    <div >Open issues: {repo.open_issues}</div>
                    <div >Default branch: {repo.default_branch}</div>
                    <div>create date: {repo.created_at}</div>
                    <div >update date: {repo.updated_at}</div>
                    <div >pushed date: {repo.updated_at}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
        </div>
    )
}
