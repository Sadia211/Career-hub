import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../Localstorage/Localstorage';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const[appliedJobs,setAppliedJobs]=useState([]);
    useEffect(()=>{
        const storedJobIds=getStoredJobApplication();
        if(jobs.length>0){
           const jobsApplied=[];
           for(const id of storedJobIds){
            const job=jobs.find(job=>job.id===id);
            if(job){
                jobsApplied.push(job)
            }
           }
           setAppliedJobs(jobsApplied);
        }
    },[])
    return (
        <div>
            <h2 className='text-2xl'>Jobs I applied {appliedJobs.length}</h2>
            <details className='dropdown'>
                <summary className='m-1 btn'>open or close</summary>
<ul>
    <li><a>All</a></li>
    <li><a>remote</a></li>
    <li><a>onsite</a></li>
</ul>

            </details>
            <ul>{appliedJobs.map(jobs=> <li key={jobs.id}>
            <span>{jobs.job_title}{jobs.company_name}</span>
            </li>)

            }

            </ul>
        </div>
    );
};

export default AppliedJobs;