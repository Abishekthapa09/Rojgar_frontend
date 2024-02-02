import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-tertiary text-white">
      <aside className=" -translate-y-4">
        <Link to="/">
          <img src="/WhiteLogo.png" className="pl-8" alt="White Logo" width={240}></img></Link>
        <header className=" text-white font-bold mx-auto text-base">Follow Us On</header>
        <div className="grid grid-flow-col gap-4 mx-auto">
          <a href="https://www.facebook.com"><FaFacebook size={28} /></a>
          <a href="https://www.twitter.com"><FaTwitter size={28} /></a>
          <a href="https://www.instagram.com"><FaInstagram size={28} /></a>
        </div>
        <p className=" text-sm pl-6">&copy;2024.All right reserved by Rojgar.com</p>
      </aside>
      <nav className="">
        <header className="footer-title">Company</header>
        <a href="/about-us" className="link link-hover">About Us</a>
        <a href="/terms-of-use" className="link link-hover">Terms of Use</a>
        <a href="/contact-us" className="link link-hover">Contact Us</a>
        <a href="/fraudalert" className="link link-hover">Fraud Alert</a>
        <a href="/security-advice" className="link link-hover">Security Advice</a>
      </nav>
      <nav>
        <header className="footer-title">Jobs By Location</header>
        <Link to='/find-jobs' className=" hover:underline">Jobs in Pokhara</Link>
        <Link to='/find-jobs' className=" hover:underline">Jobs in Kathmandu</Link>
        <Link to='/find-jobs' className=" hover:underline">Jobs in Butwal</Link>
        <Link to='/find-jobs' className=" hover:underline">Jobs in Chitwan</Link>
        <Link to='/find-jobs' className=" hover:underline">All location</Link>
      </nav>
      <nav>
        <header className="footer-title">Jobs By Function</header>
        <Link to='/find-jobs' className=" hover:underline">IT Software Jobs</Link>
        <Link to='/find-jobs' className=" hover:underline">Sales Jobs</Link>
        <Link to='/find-jobs' className=" hover:underline">Bank Jobs</Link>
        <Link to='/find-jobs' className=" hover:underline">Freshers Jobs</Link>
        <Link to='/find-jobs' className=" hover:underline">All Functional Areas</Link>
        {/* <a className="link link-hover">IT Software Jobs</a>
        <a className="link link-hover">Sales Jobs</a>
        <a className="link link-hover">Bank Jobs</a>
        <a className="link link-hover">Freshers Job</a>
        <a className="link link-hover">All Functional Areas</a> */}
      </nav>
      <nav>
        <header className="footer-title">Jobs By Role</header>
        <Link to='/find-jobs' className=" hover:underline">Developer Jobs</Link>
        <Link to='/find-jobs' className=" hover:underline">Accountant Jobs</Link>
        <Link to='/find-jobs' className=" hover:underline">Branch Manager Role</Link>
        <Link to='/find-jobs' className=" hover:underline">Chief Marketing Officer Jobs</Link>
      </nav>
    </footer>
  );
};

export default Footer;
