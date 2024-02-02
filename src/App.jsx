import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Header, Navbar,SignUp} from "./components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import SignUp from "./Pages/Auth/Signup/Signup";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ContactUs from "./Pages/ContactUs";
import Search from "./Pages/Search";
import FraudAlert from "./pages/FraudAlert";
import CVUpload from "./Pages/CVUpload";
import SecurityAdvice from "./Pages/SecurityAdvice";
import Applicants from "./Pages/Applicants";
import CVView from "./Pages/CVView";
// import Footer2 from "./components/Footer/Footer2";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Navbar />
    <main className='bg-Background font-custom' >
      <Routes>
      <Route path='/' element={<><Home/></>} />
        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/find-jobs' replace={true} />}/>
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/user/upload-cv' element={<CVUpload />}/>
          <Route path="/user/:userId/view-cv" element={<CVView />} />
          <Route path={user?.accountType === "seeker"? "/user-profile": "/user-profile/:id"}element={<UserProfile />}/>
          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />}></Route>
          <Route path={"/job-detail/:id/applicants"} element={<Applicants />} />
          <Route path={"/search-result"} element={<Search />} />
        </Route>
        
        <Route path={"/sign-up"} element={<AuthPage />} />
        <Route path={"/login"} element={<AuthPage/>} />
        <Route path={"/contact-us"} element={<ContactUs />} />
        <Route path={"/fraudalert"} element={<FraudAlert />} />
        <Route path={"/security-advice"} element={<SecurityAdvice />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/user-auth' element={<AuthPage />} />
      </Routes>
      {user && <Footer />}
      {/* <Footer2/> */}
    </main>
    </>
  );
}

export default App;
