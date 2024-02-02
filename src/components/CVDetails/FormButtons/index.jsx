import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWords } from "../../../hooks";
import {
  setCourses,
  setEducation,
  setExperience,
  setHobbies,
  setLanguages,
  setPersonal,
  setProjects,
  setReferences,
  setSkills,
  setSocial,
} from "../../../redux/form";
import { Button } from "../_form";
import { apiRequest } from "../../../utils";
import Loading from "../../Loading";
import { updateCvDetails } from "../../../redux/userSlice";


export const FormButtons = ({ handlePrint }) => {
  const dispatch = useDispatch();
  const words = useWords();
  const { user, cvDetails } = useSelector((state) => state.user);
  
  const LOCAL_STORAGE_APP = `cvDetails`;

  const [isLoading, setIsLoading] = useState(false);

  const inputFile = useRef(null);

  const {
    personal,
    languages,
    hobbies,
    education,
    experience,
    skills,
    projects,
    courses,
    references,
    social,
  } = useSelector((state) => state.form);

  const updateUserCVDetails = async () =>{

    setIsLoading(true);

    try{
      const res = await apiRequest({
        url: `/users/${user._id}/cvdetails`,
        token: user?.token,
        data: {cvDetails: cvDetails},
        method: "POST",
      });
      setIsLoading(false);

      // console.log(res);

      if(!res.user){
        //error toastify here
      }
      else{

        localStorage.setItem(LOCAL_STORAGE_APP, JSON.stringify(cvDetails));

        console.log(res.message, "user = ", res.user);

        // setTimeout(()=>{
        //   window.location.reload();
        // }, 1500);
      }
    }
    catch (error){
      console.log(error);
      setIsLoading(false);
    }

    //use toastify library for error or success show case above

  }

  useEffect(() => {
    const cvDetails = {
      personal: personal,
      languages: languages,
      hobbies: hobbies,
      education: education,
      experience: experience,
      skills: skills,
      projects: projects,
      courses: courses,
      references: references,
      social: social,
    };

    dispatch(updateCvDetails(cvDetails));
    console.log(cvDetails);
  }, [
    personal,
    languages,
    hobbies,
    education,
    experience,
    skills,
    projects,
    courses,
    references,
    social,
  ]);

  const clearData = () => {
    if (window.confirm(words.confirm)) {
      dispatch(setCourses([]));
      dispatch(setEducation([]));
      dispatch(setExperience([]));
      dispatch(setHobbies([]));
      dispatch(setLanguages([]));
      dispatch(setPersonal({}));
      dispatch(setProjects([]));
      dispatch(setReferences([]));
      dispatch(setSkills([]));
      dispatch(setSocial([]));
    }
  };

  const exportData = () => {
    const json = {
      personal: personal,
      languages: languages,
      hobbies: hobbies,
      education: education,
      experience: experience,
      skills: skills,
      projects: projects,
      courses: courses,
      references: references,
      social: social,
    };

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(json, null, 2)
    )}`;

    const link = document.createElement("a");
    const date = new Date().toLocaleDateString().replace(/\//g, "-");

    link.href = jsonString;
    link.download = `${personal.nameSurname
      .split(" ")
      .join("-")}-CV-Data-${date}.json`;
    link.click();
  };

  const importData = (data) => {
    dispatch(setCourses(data.courses));
    dispatch(setEducation(data.education));
    dispatch(setExperience(data.experience));
    dispatch(setHobbies(data.hobbies));
    dispatch(setLanguages(data.languages));
    dispatch(setPersonal(data.personal));
    dispatch(setProjects(data.projects));
    dispatch(setReferences(data.references));
    dispatch(setSkills(data.skills));
    dispatch(setSocial(data.social));
  };

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      importData(JSON.parse(e.target.result));
    };
  };

  return (
    <div className="w-full flex flex-wrap justify-end gap-x-0 md:gap-x-2 lg:gap-x-0 xl:gap-x-0 2xl:gap-x-0 items-center pb-2 pt-2 pr-2 mb-2 lg:mb-4 ">
      {/* export json file  */}
      <Button 
        onClick={updateUserCVDetails}
        variant="info"
        disabled={Object.keys(personal).length === 0}
      >
        {
          isLoading ? <Loading /> : words.export
        }
      </Button>
      {/* Save Pdf  */}
      <Button
        onClick={handlePrint}
        variant="info"
        disabled={Object.keys(personal).length === 0}
      >
        {words.pdf}
      </Button>
      {/* live edit  */}
      {/* <Button
        onClick={() => dispatch(setContentEditable(!isContentEditable))}
        variant={isContentEditable ? "info" : "warning"}
        disabled={Object.keys(personal).length === 0}
      >
        {words.live_edit}
      </Button> */}


      {/* Sample */}
      {/* <Button
        onClick={uploadSample}
        variant="success"
        disabled={Object.keys(personal).length !== 0}
      >
        {words.sample}
      </Button> */}
      {/* clear all data */}
      {/* <Button
        onClick={clearData}
        variant="danger"
        disabled={Object.keys(personal).length === 0}
      >
        {words.clear_all}
      </Button> */}


      <input
        type="file"
        id="file"
        ref={inputFile}
        onChange={handleChange}
        accept=".json"
        style={{ display: "none" }}
      />
    </div>
  );
};
