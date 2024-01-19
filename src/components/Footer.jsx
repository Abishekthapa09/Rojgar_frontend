import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-tertiary text-white">
      <aside className=" -translate-y-4">
        <img src="/public/WhiteLogo.png" className="pl-8" alt="White Logo" width={240}></img>
        <header class=" text-white font-bold mx-auto text-base">Follow Us On</header>
        <div class="grid grid-flow-col gap-4 mx-auto">
          <a href="https://www.facebook.com"><FaFacebook size={28}/></a>
          <a href="https://www.twitter.com"><FaTwitter size={28}/></a>
          <a href="https://www.instagram.com"><FaInstagram size={28}/></a>
        </div>
        <p className=" font-mono text-sm pl-6">2024.All right reserved by Rojgar.com</p>
      </aside>
      <nav>
        <header className="footer-title">Company</header>
        <a href="" className="link link-hover">About Us</a>
        <a href="" className="link link-hover">Terms of Use</a>
        <a href="" className="link link-hover">Contact Us</a>
        <a href="" className="link link-hover">Security Advice</a>
      </nav>
      <nav>
        <header className="footer-title">Jobs By Location</header>
        <a className="link link-hover">Jobs in Pokhara</a>
        <a className="link link-hover">Jobs in Kathmandu</a>
        <a className="link link-hover">Jobs in Butwal</a>
        <a className="link link-hover">Jobs in Chitwan</a>
        <a className="link link-hover">All location</a>
      </nav>
      <nav>
        <header className="footer-title">Jobs By Function</header>
        <a className="link link-hover">IT Software Jobs</a>
        <a className="link link-hover">Sales Jobs</a>
        <a className="link link-hover">Bank Jobs</a>
        <a className="link link-hover">Freshers Job</a>
        <a className="link link-hover">All Functional Areas</a>
      </nav>
      <nav>
        <header className="footer-title">Jobs By Role</header>
        <a className="link link-hover">Developer Jobs</a>
        <a className="link link-hover">Accountant Jobs</a>
        <a className="link link-hover">Branch Manager Role</a>
        <a className="link link-hover">Chief Marketing Officer Jobs</a>
      </nav>
   
    </footer>
  );
};

export default Footer;
