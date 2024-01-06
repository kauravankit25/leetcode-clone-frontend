import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "../css/problemSubmission.css"
import Editor from "./Editor";
import { getProblemApiCall } from "../utils/ApiCall";

import {SubmitButton} from "./FormFields";

// const problem1 = {
//     id: "1",
//     title: "Two Sum",
//     description: `<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code>
//     </em>. </p>\n\n <p>You may assume that each input would have <strong>
//       <em>exactly</em> one solution </strong>, and you may not use the <em>same</em> element twice. </p>\n\n <p>You can return the answer in any order.`,
//     testCases: [
//         {
//             input: "nums = [2,7,11,15], target = 9",
//             output: "[0,1]",
//             explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
//         },
//         {
//             input: "nums = [3,2,4], target = 6",
//             output: "[1,2]",
//         },
//         {
//             input: "nums = [3,3], target = 6",
//             output: "[0,1]",
//         }
//     ],
//     constraints: [
//         "2 <= nums.length <= 104",
//         "-109 <= nums[i] <= 109",
//         "-109 <= target <= 109",
//         "Only one valid answer exists."
//     ],
//     acceptance: "54%",
//     difficulty: "Medium"
// }


const ProblemSubmission = () => {
    const [code, setCode] = useState('// Type your code here');
    const [problem, setProblem] = useState({
        id: null,
        title: null,
        description: null,
        testCases: [],
        constraints: [],
        acceptance: null,
        difficulty: null
    });

    const { id } = useParams();

    React.useEffect(() => {
        getProblemApiCall(id).then((response) => {

            console.log("questions response: ",response)
            if (response.status == 200 && response.data) {
                setProblem(response.data)
            }
        }).catch((err) => {
            console.log("questions error: ",err)
        })
        
    }, [])

    const handleChange = (value) => {
        setCode(value);
    }

    const renderTestCases = () => {
        return problem.testCases.map((item, index) => {
            return (
                    <p>Example {index + 1}: <br />
                        <div className="example-container">
                        <div className="vertical-line"></div>
                        <div className="input-output-container">
                        <strong>Input:</strong> {item.input}<br />
                        {item.output &&<div><strong>Output:</strong> {item.output}<br /> </div>}
                        {item.explanation &&<div><strong>Explanation:</strong> {item.explanation}<br /> </div>}
                        </div>
                        
                        </div>
                    </p>
            )
        })
    };
    const renderConstraints = () => {
        return problem.constraints.map((constraint, index) => (
            <p key={index}>{constraint}</p>
        ));
    };
    return (
        <div className="flex-code-container">
            <div className="problem-description" >
                <h2>{problem.id}. {problem.title}</h2>
                <div className="description-div" dangerouslySetInnerHTML={{ __html: problem.description }}></div>
                <div className="testcases-container">
                {renderTestCases()}
                </div>
                
                <div className="constraint-container">
                    <p>Constraints:</p>
                    <div className="constriants">{renderConstraints()}</div>
                    
                </div>


            </div>
            
            <Editor code={code} id={problem.id} onChange={handleChange}></Editor>
           
        </div>
    );
}

export default ProblemSubmission;