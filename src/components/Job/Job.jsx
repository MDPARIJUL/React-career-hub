import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {id, logo,job_title,company_name,remote_or_onsite, location, job_type, salary, job_description} = job;
  console.log(logo);
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            src={logo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title} </h2>
          <p>{company_name} </p>
          <div className="">
            <button className="btn btn-outline font-extrabold text-base py-3 px-5 from-[#7E90FEFF] to-[#9873FFFF] rounded-lg">{remote_or_onsite}</button>
            <button className="btn btn-outline font-extrabold text-base py-3 px-5 from-[#7E90FEFF] to-[#9873FFFF] rounded-lg">{job_type}</button>
          </div>
          <div>
              <h3 className="text-2xl flex items-center gap-2"><CiLocationOn /> {location}</h3>
              {/* <h3></h3> */}
          </div>
          <div className="card-actions">
              <Link to={`job/${id}`}> <button className="btn btn-success text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
