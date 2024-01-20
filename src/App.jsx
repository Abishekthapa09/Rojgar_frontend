import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Header, Navbar,SignUp} from "./components";
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
    <Navbar />
    <main className='bg-Background' >
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/find-jobs' replace={true} />}/>
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/companies' element={<Companies />} />
          <Route path={user?.accountType === "seeker"? "/user-profile": "/user-profile/:id"}element={<UserProfile />}/>
          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
          
        </Route>
        <Route path={"/sign-up"} element={<AuthPage />} />
        {/* <Route path={"/login"} element={<AuthPage/>} /> */}
        <Route path={"/contact-us"} element={<ContactUs />} />
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
