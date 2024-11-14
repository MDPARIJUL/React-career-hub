import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Features = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)
    console.log(jobs)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(datas => setJobs(datas))
    },[])
    
    // useEffect(() =>{
    //     fetch('jobs.json')
    //     .then(res => res.json())
    //     .then(features => setJobs(features))
    // }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl'>Features {jobs.length} </h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future </p>

                <div className='grid lg:grid-cols-2 gap-6'>
                    {jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job> )}
                </div>
                <div className={dataLength === jobs.length ? 'hidden': ''}>
                     <button onClick={()=>setDataLength(jobs.length)} className='btn btn-success '>See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Features;