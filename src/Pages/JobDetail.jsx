import { useEffect, useState } from "react";
import { Linkedin } from "../assets";
import moment from "moment";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { jobs } from "../utils/data";
import { CustomButton, JobCard, Loading } from "../components";
import { useSelector } from "react-redux";
import { apiRequest } from "../utils";
import {toast} from "react-toastify";

const JobDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useSelector((state)=>state.user);
  
  const [job, setJob] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);

  const [selected, setSelected] = useState("0");
  const [isFetching, setIsFetching] = useState(false);

  const getJobDetails = async ()=>{
    setIsFetching(true);

    try{
      const res = await apiRequest({
        url: "/jobs/get-job-detail/" + id,
        method: "GET",
      });

      setJob(res?.data);
      setSimilarJobs(res?.similarJobs);
      setIsFetching(false);
    }
    catch (error){
      setIsFetching(false);
      console.log(error);
    }
  }

  const handleDeletePost = async ()=>{
    setIsFetching(true);

    try{
      if(window.confirm("Delete Job Post?")){
        const res = await apiRequest({
          url: "/jobs/delete-job/" + job?._id,
          token: user?.token,
          method: "DELETE",}
        );

        if(res?.success){
          alert(res?.message);
          window.location.replace("/");
        }
      }

      setIsFetching(false);
    }
    catch (error){
      setIsFetching(false);
      console.log(error);
    }
  }

  //apply for job
  const applyForJob = async ()=>{
    setIsFetching(true);

    if(user.cvUrl || user.cvDetails){

      //api request to apply for the job
      try {
        console.log("cv is already uploaded!");

        const res = await apiRequest({
          url: `/jobs/${job._id}/apply`,
          token: user?.token,
          data: {userId: user._id},
          method: "PUT",
        });

        //call api of job to update the applicants

        toast.success(res.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });

        setIsFetching(false);
        
      } catch (error) {
        console.log(error);
        setIsFetching(false);
      }

    }
    else{
      navigate("/user/upload-cv");
    }
  }

  useEffect(() => {
    id && getJobDetails();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className='container mx-auto'>
      <div className='w-full flex flex-col md:flex-row gap-10'>
        {/* LEFT SIDE */}
        {
        isFetching ? (
          <Loading />
        ):
        (<div className='w-full h-fit md:w-2/3 2xl:2/4 bg-white px-5 py-10 md:px-10 shadow-md'>
          <div className='w-full flex items-center justify-between'>
            <div className='w-3/4 flex gap-2'>
              <img
                src={job?.company?.profileUrl}
                alt={job?.company?.name}
                className='w-20 h-20 md:w-24 md:h-20 rounded'
              />

              <div className='flex flex-col'>
                <p className='text-xl font-semibold text-gray-600'>
                  {job?.jobTitle}
                </p>

                <span className='text-base'>{job?.location}</span>

                <span className='text-base text-primary'>
                  {job?.company?.name}
                </span>

                <span className='text-gray-500 text-sm'>
                  {moment(job?.createdAt).fromNow()}
                </span>
              </div>
            </div>

            <div className=''>
              <AiOutlineSafetyCertificate className='text-3xl text-primary' />
            </div>
          </div>

          <div className='w-full flex flex-wrap md:flex-row gap-1 items-center justify-between my-10'>
            <div className='bg-tertiary/15 w-32 h-16 rounded-lg flex flex-col items-center justify-center'>
              <span className='text-sm'>Salary</span>
              <p className='text-lg font-semibold text-gray-700'>
                $ {job?.salary}
              </p>
            </div>

            <div className='bg-primary/15 w-36 h-16 rounded-lg flex flex-col items-center justify-center'>
              <span className='text-sm'>Job Type</span>
              <p className='text-lg font-semibold text-gray-700'>
                {job?.jobType}
              </p>
            </div>

            <div className='bg-tertiary/15 w-36 h-16 px-4 rounded-lg flex flex-col items-center justify-center'>
              <span className='text-sm'>Applicants</span>
              <p className='text-lg font-semibold text-gray-700'>
                {job?.application?.length || 0}
              </p>
            </div>

            <div className='bg-primary/15 w-36 h-16 px-4 rounded-lg flex flex-col items-center justify-center'>
              <span className='text-sm'>Vacancies</span>
              <p className='text-lg font-semibold text-gray-700'>
                {job?.vacancies}
              </p>
            </div>

            <div className='bg-tertiary/15 w-36 h-16 px-4 rounded-lg flex flex-col items-center justify-center'>
              <span className='text-sm'>Experience(Year)</span>
              <p className='text-lg font-semibold text-gray-700'>
                {job?.experience}
              </p>
            </div>
          </div>

          {/*view applicants button*/}
          {
            user?.accountType !== "seeker" && job?.application?.length != 0 &&
              <Link to={"applicants"}>
                <CustomButton title={"View Applicants"} containerStyles={' text-primary px-6 py-3 border border-primary rounded-full hover:bg-primary duration-300 transition-all hover:text-white'}/>
              </Link>
          }

          <div className='w-full flex gap-4 py-5'>
            <CustomButton
              onClick={() => setSelected("0")}
              title='Job Description'
              containerStyles={`w-full flex items-center justify-center py-3 px-5 outline-none rounded-full text-sm ${
                selected === "0"
                  ? "bg-tertiary text-white"
                  : "bg-white text-black border border-tertiary"
              }`}
            />

            <CustomButton
              onClick={() => setSelected("1")}
              title='Company'
              containerStyles={`w-full flex items-center justify-center  py-3 px-5 outline-none rounded-full text-sm ${
                selected === "1"
                  ? "bg-tertiary text-white"
                  : "bg-white text-black border border-tertiary"
              }`}
            />
          </div>

          <div className='my-6'>
            {selected === "0" ? (
              <>
                <p className='text-xl font-semibold'>Job Decsription</p>

                <span className='text-base'>{job?.detail[0]?.desc}</span>

                {job?.detail[0]?.requirements && (
                  <>
                    <p className='text-xl font-semibold mt-8'>Requirement</p>
                    <span className='text-base'>
                      {job?.detail[0]?.requirements}
                    </span>
                  </>
                )}
              </>
            ) : (
              <>
                <div className='mb-6 flex flex-col'>
                  <p className='text-xl text-primary font-semibold'>
                    {job?.company?.name}
                  </p>
                  <span className='text-base'>{job?.company?.location}</span>
                  <span className='text-sm'>{job?.company?.email}</span>
                </div>

                <p className='text-xl font-semibold'>About Company</p>
                <span>{job?.company?.about}</span>
              </>
            )}
          </div>

          <div className='w-full'>
            {
              user?._id === job?.company?._id ? (
                <CustomButton
                  title='Delete Post'
                  onClick={handleDeletePost}
                  containerStyles={`w-full flex items-center justify-center text-white bg-red-900 py-3 px-5 outline-none rounded-full text-base`}
                />
              ):<>
              {
                isFetching ? 
                  <Loading /> 
                   :
                   job?.application.includes(user._id)?
                    <CustomButton
                      title={"Already Applied"}
                      containerStyles={`w-full flex items-center justify-center text-white bg-red-700 py-3 px-5 outline-none rounded-full text-base`}
                    />
                      :
                    <CustomButton
                      title={'Apply Now'}
                      containerStyles={`w-full flex items-center justify-center text-white bg-primary py-3 px-5 outline-none rounded-full text-base`}
                      onClick={applyForJob}
                    />
              }
              
              </>
            }
          </div>
        </div>)}

        {/* RIGHT SIDE */}
        <div className='w-full md:w-1/3 2xl:w-2/4 p-5 mt-20 md:mt-0'>
          <p className='text-gray-500 font-semibold'>Similar Job Post</p>

          <div className='w-full flex flex-wrap gap-4'>
            {similarJobs?.slice(0, 6).map((job, index) => {
              const data = {
                name: job?.company.name,
                logo: job?.company.profileUrl,
                ...job,
              };
              return <JobCard job={data} key={index} />
            }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
