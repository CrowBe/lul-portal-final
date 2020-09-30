import React, { useState } from "react";

const JobIndex = () => {
    const [ jobs, setJobs ] = useState([]);
    // Query jobs db
    return (
        <div>
            {jobs.map(job => {
                <p>{job.name}</p>
                
            })}
        </div>
    )
}

export default JobIndex;