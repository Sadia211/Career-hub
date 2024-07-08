import React, { useState } from 'react';
import { useEffect } from 'react';
import Job from '../Job/Job';
const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);//the data isin array format. so default array is[]
    //as thedata will be loaded fromotherplace so it is side effetc, so useeffect
    const[dataLength,setDataLength]=useState(4);//show upto 4 data. rest will be in seemore
     useEffect(()=>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data => setJobs(data))//setjobs toload data

     },[])

    return (
        <div>
            <div className='text-center'>
            <h2 className='text-5xl text-center'>Featured Jobs</h2>
            <p>Explore thousands of jobs</p>
        </div>
        <div className='grid grid-cols-1 gap-6'>
            {
            jobs.slice(0,dataLength).map(jobs =><Job key={jobs.id} job={jobs}></Job>)
            }
        </div>
        <div className={dataLength===jobs.length ? 'hidden':" "}>{/*the number of jobs is datalength and after showing all jobs hide the button*/}
            <button onClick={()=>setDataLength(jobs.length)} className='btn btn-primary'>
                Show all jobs</button>
        </div>
        
        </div>
    );
};

export default FeaturedJobs;