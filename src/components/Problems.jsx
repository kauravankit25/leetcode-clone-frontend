import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/problems.css"
import { problemsApiCall } from "../utils/ApiCall";


// const problems = [{
//     id: "201.",
//     title: "Bitwise AND of Numbers Range",
//     difficulty: "Medium",
//     acceptance: "42%"
// }, {
//     id: "202.",
//     title: "Bitwise AND of Numbers Range",
//     difficulty: "Medium",
//     acceptance: "412%"
// },
// {
//     id: "203.",
//     title: "Happy Number",
//     difficulty: "Easy",
//     acceptance: "54.9%"
// },
// {
//     id: "204.",
//     title: "Remove Linked List Elements",
//     difficulty: "Hard",
//     acceptance: "42%"
// }];



const ProblemRow = (props) => {
    const navigate = useNavigate();
    return (
        <tr>
            <td>{props.id}</td>
            
            <td><button className="problem-title-button" onClick={() => navigate(`/problemSubmission/${props.id}`)}>{props.title}</button></td>
            
            <td>{props.acceptance}</td>
            <td style={{
                color: (props.difficulty == "Easy"?"#00B8A3" : (props.difficulty == "Medium"?"#FFC01E" : "#FF375F"))
            }}>{props.difficulty}</td>
        </tr>
    )
}

const Problems = () => {
    const [problems, setProblems] = useState([]);
    
    React.useEffect(() => {
        problemsApiCall().then((response) => {

            console.log("questions response: ",response)
            if (response && response.data) {
                setProblems(response.data)
            }
        }).catch((err) => {
            console.log("questions error: ",err)
        })
        
    }, [])
    return (
        <div className="problem-table-container">
            <table className="styled-table">
                <thead>
                <tr>
                    <th>S No.</th>
                    <th>Title</th>
                    <th>Acceptance</th>
                    <th>Difficulty</th>
                </tr>
                </thead>
                <tbody>
                {problems.map((item) => {
                    
                    return <ProblemRow id={item.id} title={item.title} acceptance={item.acceptance} difficulty={item.difficulty}></ProblemRow>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Problems;