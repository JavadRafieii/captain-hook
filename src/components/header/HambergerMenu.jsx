import Logo from "/Captain-Hook-Logo.png";
import DATA from "../../../data/data";
import { Link } from "react-scroll";

function HambergerMenu({ onClose, isClose }) {
    return (
        <div className={`hamberger-menu w-full h-[100vh] bg-[#0b1023e6] fixed top-0 left-0 z-[1050] p-5 ${isClose && `left-[-100%]`}`}>
            <div className="flex items-center justify-between">
                <figure className="w-[80px] h-[80px]">
                    <img src={Logo} alt="Capitan Hook" loading="lazy" className="w-[80px] h-[80px]" />
                </figure>
                <svg onClick={() => onClose(true)} xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256" width="25px" height="25px" fillRule="nonzero">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
                        strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
                        fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                        <g transform="scale(10.66667,10.66667)">
                            <path
                                d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
            <ul className="flex flex-col gap-4 open-sans-Medium text-white text-base mt-6">
                {DATA.HEADER_LEFT.map(item => (
                    <li key={item.id} className="cursor-pointer">
                        <Link
                            to={item.text === "$CAPT Token" ? "$CAPT-Token" : item.text}
                            spy={true}
                            smooth={true}
                            offset={item.text === "Team" ? -200 : item.text === "$CAPT Token" ? -200 : -80}
                            duration={1000}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center space-x-3 open-sans-Medium text-base my-6 border-t-[1px] border-[#42485C] pt-6">
                {DATA.HEADER_RIGHT.map(item => {
                    let styles;
                    if (item.text === "AUDIT") {
                        styles = "bg-sunset-yellow w-[75px] h-[30px] text-smoky-gray rounded-[8px] leading-[30px]";
                    } else if (item.text === "KYC") {
                        styles = "bg-sunset-yellow w-[59px] h-[30px] text-smoky-gray rounded-[8px] leading-[30px]";
                    } else {
                        styles = "text-sunset-yellow";
                    }
                    return (
                        <li key={item.id} className={styles} >
                            <a href={item.link} className="block w-full h-full text-center">{item.text}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className="flex items-center space-x-3">
                <li>
                    <a href="https://x.com/captainHookGame">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.94 4.49002C17.95 4.66002 17.95 4.84002 17.95 5.02002C17.95 10.36 13.83 16.51 6.28999 16.51C3.96999 16.51 1.81 15.85 0 14.7C0.33 14.74 0.650005 14.75 0.990005 14.75C2.91001 14.75 4.67 14.11 6.08 13.03C4.28 12.99 2.77 11.83 2.25 10.23C2.5 10.27 2.76 10.29 3.02 10.29C3.39 10.29 3.76001 10.24 4.10001 10.15C2.22001 9.77001 0.809998 8.15002 0.809998 6.19002V6.14001C1.36 6.44001 1.99 6.63001 2.66 6.65001C1.56 5.92001 0.830002 4.69001 0.830002 3.29001C0.830002 2.54001 1.03 1.85002 1.39 1.25002C3.41 3.70002 6.44 5.30001 9.84 5.48001C9.78 5.18001 9.74001 4.87001 9.74001 4.56001C9.74001 2.33001 11.57 0.52002 13.84 0.52002C15.02 0.52002 16.09 1.01001 16.83 1.79001C17.76 1.62001 18.64 1.28002 19.43 0.820023C19.13 1.76002 18.48 2.55001 17.63 3.04001C18.45 2.95001 19.25 2.73001 19.99 2.42001C19.43 3.22001 18.73 3.93001 17.93 4.51001L17.94 4.49002Z" fill="white"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/Captain_Hook_Game">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.23998 6.96001C6.06998 4.84001 9.28999 3.45 10.91 2.77C15.51 0.840004 16.47 0.51 17.09 0.5C17.23 0.5 17.53 0.530002 17.73 0.690002C17.9 0.830002 17.94 1.01 17.97 1.14C17.99 1.27 18.02 1.57 18 1.8C17.75 4.44 16.67 10.83 16.12 13.78C15.89 15.03 15.43 15.45 14.99 15.49C14.03 15.58 13.3 14.85 12.36 14.24C10.9 13.28 10.08 12.68 8.65999 11.74C7.01999 10.66 8.07998 10.06 9.01998 9.09C9.25998 8.84 13.51 4.96001 13.59 4.60001C13.6 4.56001 13.61 4.39 13.51 4.31C13.41 4.22 13.27 4.25 13.17 4.28C13.02 4.31 10.69 5.85999 6.17998 8.92999C5.51998 9.38999 4.91999 9.61001 4.37999 9.60001C3.78999 9.59001 2.64998 9.26001 1.79998 8.99001C0.759978 8.65001 -0.0600001 8.47 0.00999985 7.89C0.0499999 7.59 0.45998 7.28 1.23998 6.97V6.96001Z" fill="white"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default HambergerMenu;