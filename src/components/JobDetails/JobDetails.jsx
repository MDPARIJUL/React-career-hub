import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from '../../Utility/localStorage';

const JobDetails = () => {
    const {id} = useParams();
    const datas = useLoaderData();
    console.log(datas, id)
    const userId = parseInt(id);
    console.log (userId)
    const data = datas.find(data => data.id === userId);
    // console.log(data)

    const handleApplyJob = () => {
        saveJobApplications(userId)
        toast('You Have Applied Successfully')
    }
    return (
        <div className='my-5'>
            <h1> job Details:  </h1>
            <div className="grid lg:grid-cols-4 gap-6 ">
                <div className='lg:col-span-3 border p-5 '>
                    <p>{data.job_description} </p>
                    <p>{data.job_responsibility} </p>
                    <div >
                        <h3>Educational Requirments</h3>
                        <h3>{data.educational_requirements} </h3>
                    </div>
                    <div>
                        <h3></h3>
                        <p>{data.experiences} </p>
                    </div>
                </div>
                <div className='p-5 border col-span-1 ml-5'>
                <div>
                    <div>
                        <h1>Job Details:</h1>
                        <p> Salary: {data.salary} </p>
                    </div>
                    <div>
                        <h3>job_title</h3>
                        <p>{data.job_title} </p>
                    </div>
                    <p>Contact Information</p>
                    <div>
                        <h3>Phone: {data.contact_information.phone} </h3>
                        <h3>Email:{data.contact_information.email}  </h3>
                        <h3>Address: {data.contact_information.address} </h3>
                    </div>
                    <button  onClick={handleApplyJob} className='btn btn-success px-6 py-3 w-full'> Apply Now</button>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;