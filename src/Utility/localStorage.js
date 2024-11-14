// import { parse } from "postcss";

const getStoredJobApplications = () =>{
    const jobApplications = localStorage.getItem('job-applications');
    if(jobApplications){
        return JSON.parse(jobApplications);
    }
    else{
        return [];
    }
};

const saveJobApplications = (id) =>{
    console.log(typeof id)
    const storedJobApplications = getStoredJobApplications();
    const exits = storedJobApplications.find(jobId => jobId === id);
    if(!exits){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export {getStoredJobApplications, saveJobApplications}