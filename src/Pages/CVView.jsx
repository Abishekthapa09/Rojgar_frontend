import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../utils';
import { setCourses, setEducation, setExperience, setHobbies, setLanguages, setPersonal, setProjects, setReferences, setSkills, setSocial } from '../redux/form';
import { Preview } from '../components/CVDetails';

export default function CVView() {
    const { userId } = useParams();
    const [cvDetails, setCvDetails] = useState(null);

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user);

    const getCVDetails = async ()=>{
        if(userId){
            try{
                const res = await apiRequest({
                    url: `/users/${userId}/cvdetails`,
                    token: user?.token,
                    method: "GET",
                });

                setCvDetails(res.cvDetails);
            }
            catch (error){
                console.log(error);
            }
        }
    }

    useEffect(()=>{
        getCVDetails();
    }, []);

    useEffect(()=>{
        if(cvDetails){
            dispatch(setPersonal(cvDetails.personal));
            dispatch(setLanguages(cvDetails.languages));
            dispatch(setSkills(cvDetails.skills));
            dispatch(setHobbies(cvDetails.hobbies));
            dispatch(setEducation(cvDetails.education));
            dispatch(setExperience(cvDetails.experience));
            dispatch(setProjects(cvDetails.projects));
            dispatch(setCourses(cvDetails.courses));
            dispatch(setReferences(cvDetails.references));
            dispatch(setSocial(cvDetails.social));
        }
    }, [cvDetails]);

    if (cvDetails){
        return (
          <div className="flex flex-wrap lg:flex-nowrap overflow-hidden justify-center border-2">
                <div className="w-full lg:w-3/5">
                    <Preview />
                </div>

            </div>
        )
    }
    else{
        return <div>
            Fetching Details...
        </div>
    }
}
