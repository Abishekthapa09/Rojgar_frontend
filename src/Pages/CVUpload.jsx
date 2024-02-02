import { useNavigate } from "react-router-dom";
import { CustomButton, Loading } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { apiRequest, handleFileUpload } from "../utils";
import { Login } from "../redux/userSlice";
import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { Form, Preview } from "../components/CVDetails";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function CVUpload() {
    const navigate = useNavigate();

    //call this method after successful creation or upload of cv
  const goBack = () => {
    navigate(-1); // This function navigates to the previous page in the history stack
  };

  const { user } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { ...user },
  });
  const dispatch = useDispatch();
  const [uploadCv, setUploadCv] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try{
      const newCvUrl = uploadCv && (await handleFileUpload(uploadCv));

      const res = await apiRequest({
        url: `/users/updateCVUrl/${user._id}`,
        token: user?.token,
        data: {newCvUrl},
        method: "PUT",
      });

      if (res){
        const newData = {token: res?.token, ...res?.user};
        dispatch(Login(newData));
        localStorage.setItem("userInfo", JSON.stringify(res));
        window.location.reload();
      }
      setIsSubmitting(false);
    }
    catch (error){
      setIsSubmitting(false);
      console.log(error);
    }
  };

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div>

        <h1>Please upload your cv first before you can apply for jobs!</h1>

        <div>

            {/*uploading pdf of cv file*/}
            <form
                className='w-full mt-2 flex flex-col gap-5'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='w-1/2'>
                    <label className='text-gray-600 text-sm mb-1'>
                        Choose your cv
                    </label>
                    <input
                        type='file'
                        onChange={(e) => setUploadCv(e.target.files[0])}
                    />
                </div>

                <div className='mt-4'>
                    {
                    isSubmitting ? (
                        <Loading />
                    ) : (
                        <CustomButton
                        type='submit'
                        containerStyles='inline-flex justify-center rounded-md border border-transparent bg-primary px-8 py-2 text-sm font-medium text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none '
                        title={"Upload cv"}
                        />
                        )
                    }
                </div>
            </form>

            <span className=" font-bold text-black py-2 block">OR</span>

            {/*entering all the details*/}
            <div className="h-auto lg:h-screen flex flex-wrap lg:flex-nowrap overflow-hidden">

                <Form handlePrint={handlePrint} className="bg-white"  />

                <div className="w-full lg:w-3/5">
                    <Preview ref={printRef}/>
                </div>

            </div>


        </div>

        <button onClick={goBack}>go back</button>

    </div>
  )
}
