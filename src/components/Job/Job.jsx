import React from 'react';
import {CiLocationOn} from "react-icons/ci"
import {Link} from "react-router-dom"
const Job = ({job}) => { //{job} is the props
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;//to show the logo
    
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{remote_or_onsite}</button>
      <button className="btn btn-primary">{job_type}</button>
      <div><h2><CiLocationOn className="text-2xl ml-0"></CiLocationOn>{location}</h2></div>
      
    </div>
    <div className='card-actions'>
      <Link to={`/job/${id}`}>
      <button className='btn btn-primary'>View details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Job;