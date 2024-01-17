// import React from "react";
// import { FaFacebook, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
// import { useModal } from "@/context/ModalContext";
// function Footer2() {
//   const { setModalOpen } = useModal();
//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };
//   return (
//     <div className="relative bg-cover bg-center bg-pale-blue border-t mt-24">
//       <div className=" h-1/2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around items-start mx-auto pt-12 px-4 sm:px-6 lg:px-8">
//         <div className="p-5 ">
//           <ul>
//             <p className=" font-bold text-3xl pb-6">
//               Nep<span className=""> Tech Pal</span>
//             </p>
//             <span className="text-base pb-2 font-semibold ">
//               Nep Tech Pal is a leading technology company that specializes in
//               creating innovative solutions for clients across various sectors
//               and is committed to delivering exceptional results that drive real
//               business value.
//             </span>
//             <div className="flex gap-6 pb-5 pt-4">
//               <Link href="https://www.facebook.com/neptechpal" target="_blank">
//                 <FaFacebook className="text-2xl cursor-pointer " />
//               </Link>
//               <Link href="">
//                 <FaXTwitter className="text-2xl cursor-pointer hover:text-primary" />
//               </Link>
//               <Link href="https://www.linkedin.com/company/nep-tech-pal-pvt-ltd/">
//                 <FaLinkedin className="text-2xl cursor-pointer hover:text-primary" />
//               </Link>
//               <Link href="">
//                 <FaYoutube className="text-2xl cursor-pointer " />
//               </Link>
//             </div>
//           </ul>
//         </div>
//         <div className="p-5">
//           <ul >
//             <p className=" font-bold text-2xl pb-4">Product</p>
//             <Link href={"https://www.footstepeducation.com/"} className=" text-base pb-2 font-semibold hover:text-primary cursor-pointer block">
//               Aasha ko paila
//             </Link>
//             <Link href={""} className=" text-base pb-2 font-semibold hover:text-primary cursor-pointer block">
//               A & B International Hospital
//             </Link>
//             <Link href={""} className=" text-base pb-2 font-semibold hover:text-primary cursor-pointer block">
//               FootStep Education Consultancy
//             </Link>
//             <Link href={"https://loksewa.neptechpal.com/"} className=" text-base pb-2 font-semibold hover:text-primary cursor-pointer block">
//               Loksewa Tayari
//             </Link>
//             <Link href={""} className=" text-base pb-2 font-semibold hover:text-primary cursor-pointer block">
//               Sorha Aana Developers
//             </Link>
//           </ul>
//         </div>
//         <div className="p-5">
//           <ul>
//             <p className="font-bold text-2xl pb-4">Company</p>
//             <li className="text-base pb-2 font-semibold hover:text-primary cursor-pointer">
//               <Link href="/">
//                 <span>Home</span>
//               </Link>
//             </li>
//             <li className=" text-base pb-2 font-semibold hover:text-primary cursor-pointer">
//               <Link href="/about">
//                 <span>About Us</span>
//               </Link>
//             </li>
//             <li className=" text-base pb-2 font-semibold hover:text-primary cursor-pointer">
//               <Link href="/service">
//                 <span>Service</span>
//               </Link>
//             </li>
//             <li className="text-base  pb-2 font-semibold hover:text-primary cursor-pointer">
//               <Link href="/blog">
//                 <span>Blog</span>
//               </Link>
//             </li>
//             <li className="text-base pb-2 font-semibold hover:text-primary cursor-pointer">
//               <Link href="/">
//                 <span>Privacy Policy</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="p-5">
//           <ul>
//             <p className=" font-bold text-2xl pb-4">Our Address</p>
//             <li className="text-base pb-2 font-semibold hover:text-primary cursor-pointer">
//               JalpaRoad, Pokhara-8
//             </li>
//             <li className="  text-base pb-2 font-semibold hover:text-primary cursor-pointer">
//               <a href="mailto:info@neptechpal.com">info@neptechpal.com</a>
//             </li>
//             <li className=" text-base pb-2 font-semibold  cursor-pointer">
//               <a href="tel:9815126740" className="hover:text-primary">
//                 <span className="">9815126740</span>
//               </a>
//               <a href="tel:+9779860385877" className="hover:text-primary">
//                 <span className="mx-2">9860385877</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-center text-center  p-5">
//         <h1 className=" font-semibold">
//           © 2023 All rights reserved{" "}
//           <span className="hover:text-primary font-semibold cursor-pointer">
//             Nep Tech Pal
//           </span>
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Footer2;