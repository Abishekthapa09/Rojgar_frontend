import React from "react";
import { Formik, Form } from "formik";
import { Input, Select } from "../_form";
import { LanguageSchema } from "../../../validations";
import { useDispatch, useSelector } from "react-redux";
import { setLanguages } from "../../../redux/form";
import { nanoid } from "nanoid";
import { Card, CardDetail, Buttons } from "../";
import { useWords } from "../../../hooks";

export const FormLanguage = ({ handleResetData }) => {
  const dispatch = useDispatch();
  const { languages } = useSelector((state) => state.form);
  const words = useWords();

  return (
    <Card title={words.languages}>
      <Formik
        validationSchema={LanguageSchema}
        initialValues={{
          name: "",
          level: "",
        }}
        onSubmit={(values, actions) => {
          dispatch(
            setLanguages([
              ...languages,
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
              placeholder={words.language}
            />
            <Select
              label="Level"
              name="level"
              options={[
                { key: "Beginner", value: "Beginner" },
                { key: "Skillful", value: "Skillful" },
                { key: "Experienced", value: "Experienced" },
                { key: "Expert", value: "Expert" },
              ]}
            />
            <Buttons
              dirty={dirty}
              handleReset={handleReset}
              handleResetData={handleResetData}
              setter={setLanguages}
              state={languages}
            />
          </Form>
        )}
      </Formik>
      <CardDetail
        data={languages}
        setter={setLanguages}
        print={["name", "level"]}
      />
    </Card>
  );
};
