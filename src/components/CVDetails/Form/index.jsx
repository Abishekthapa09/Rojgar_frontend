import React from "react";
import { useDispatch } from "react-redux";
import {
  FormButtons,
  FormPersonal,
  FormLanguage,
  FormHobbies,
  FormEducation,
  FormExperience,
  FormSkills,
  FormProjects,
  FormCourses,
  FormReferences,
  FormSocial,
} from "../index";

export const Form = ({ handlePrint }) => {
  const dispatch = useDispatch();

  const handleResetData = (setter) => {
    dispatch(setter([]));
  };

  return (
    <div className=" bg-gray-100 w-full lg:w-2/5 h-full flex flex-col items-start justify-start overflow-auto p-5 xl:p-10">
      <FormButtons handlePrint={handlePrint} />
      <FormPersonal />
      <FormSocial handleResetData={handleResetData} />
      <FormLanguage handleResetData={handleResetData} />
      <FormHobbies handleResetData={handleResetData} />
      <FormEducation handleResetData={handleResetData} />
      <FormExperience handleResetData={handleResetData} />
      <FormSkills handleResetData={handleResetData} />
      <FormProjects handleResetData={handleResetData} />
      <FormCourses handleResetData={handleResetData} />
      <FormReferences handleResetData={handleResetData} />
    </div>
  );
};
