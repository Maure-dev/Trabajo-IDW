import LogoFooter from "../../assets/logos/logo_footer.svg";
import Facebook from "../../assets/logos/facebook.svg";
import Instagram from "../../assets/logos/instagram.svg";
import Twitter from "../../assets/logos/twitter.svg";
import { Link } from "react-router-dom";

export default function MainFooterInterface() {
  const networks = [
    { logo: Facebook, href: "https://www.facebook.com/" },
    { logo: Instagram, href: "https://www.instagram.com/" },
    { logo: Twitter, href: "https://www.x.com/" },
  ];

  return (
    <footer className="flex items-center justify-between bg-[#7b9fad] px-4 py-4 lg:px-24">
      <span className="hidden lg:block"></span>
      <a href="/">
        <img src={LogoFooter} alt="Logo Footer" />
      </a>
      <div className="flex items-center">
        {networks.map((network, index) => {
          const isLastNetwork = networks.length - 1;
          return (
            <Link
              key={index}
              to={network.href}
              target="_blank"
              className={`${!(isLastNetwork === index) ? "mr-4" : ""} `}
            >
              <img src={network.logo} alt="Logo Facebook" />
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
