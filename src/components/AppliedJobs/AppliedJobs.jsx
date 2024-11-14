import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../Utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobFilter = (filter) => {
    if(filter === 'all'){
      setDisplayJobs(appliedJobs);
    }
    else if(filter === 'remote'){
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
      setDisplayJobs(remoteJobs)
    }
    else if (filter === 'onsite'){
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs)
    }
  }


  console.log(appliedJobs)
  useEffect(() => {
    const storedJobIds = getStoredJobApplications();
    const jobsApplied = [];
    for (const id of storedJobIds) {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        jobsApplied.push(job);
      }
    }
    setAppliedJobs(jobsApplied);
    setDisplayJobs(jobsApplied)
    console.log(jobsApplied);
  }, [jobs]);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl"> Applied Jobs {appliedJobs.length}</h1>
      </div>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=>{handleJobFilter('all')}}>
            <a>All</a>
          </li>
          <li onClick={()=>{handleJobFilter('remote')}}>
            <a>Remote</a>
          </li>
          <li onClick={()=>{handleJobFilter('onsite')}}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            {job.job_title} {job.company_name}{job.remote_or_onsite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
// console.log(storedJobIds);
// if(jobs.length > 0){
//     const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
//     console.log(jobsApplied)
// }

// const storedJobIds = getStoredJobApplications();
// const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
// console.log(jobsApplied);
