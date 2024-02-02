import React from "react";
import { Formik, Form } from "formik";
import { Input, Select } from "../_form";
import { SkillsSchema } from "../../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../../redux/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";
import { useWords } from "../../../hooks";

export const FormSkills = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.form);
  const words = useWords();

  return (
    <Card title={words.skills}>
      <Formik
        validationSchema={SkillsSchema}
        initialValues={{
          name: "",
          level: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setSkills([
              ...skills,
              {
                _id: nanoid(),
                ...values,
              },
            ])
          );
          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleReset, handleChange, values, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off" role="presentation">
            <Input
              onChange={handleChange}
              value={values.name}
              name="name"
              placeholder={words.skill}
            />
            <Select
              label={words.level}
              name="level"
              options={[
                { key: "1", value: "Beginner" },
                { key: "2", value: "Intermediate" },
                { key: "3", value: "Skilled" },
                { key: "4", value: "Experienced" },
                { key: "5", value: "Expert" },
              ]}
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setSkills}
              state={skills}
            />
          </Form>
        )}
      </Formik>
      <CardDetail data={skills} setter={setSkills} print={["name", "level"]} />
    </Card>
  );
};
