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
        <div style={{marginBottom: "80px"}}>
        <ListGroup className="mb-10">
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <a target="_blank" href={repo.html_url}>
                    <div className="text-primary">{repo.name}</div>
                    </a>

                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                    <div className="text-info">Size: {repo.size}</div>
                    <div className="text-info">Open issues: {repo.open_issues}</div>
                    <div className="text-info">Default branch: {repo.default_branch}</div>
                    <div className="text-info">create date: {repo.created_at}</div>
                    <div className="text-info">update date: {repo.updated_at}</div>
                    <div className="text-info">pushed date: {repo.updated_at}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
        </div>
    )
}
