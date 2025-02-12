import bannerImg from "../../../assets/banner.png"
import Marquee from "react-fast-marquee";
import google from "../../../assets/CompanyLogo/Google.png"
import fiver from "../../../assets/CompanyLogo/fiver.png"
import behance from "../../../assets/CompanyLogo/Behance.png"
import upwork from "../../../assets/CompanyLogo/upwork.png"
import linkedin from "../../../assets/CompanyLogo/LinkedIN.png"
const Banner = () => {
    return (
        <div>
            <div className="lg:flex justify-evenly items-center bg-[#e9f0ff]">
                <div className="my-8 ml-2 mr-2">
                    <p className="lg:text-6xl  text-4xl font-semibold">Fine Your <br /> Dream <button className="bg-blue-600 lg:text-5xl text-3xl px-5 py-2 text-white rounded-lg">JOBS</button><br /> Platform</p>
                    <p className="lg:text-4xl text-3xl mt-4 ">Your Dream Job is Waiting for You</p>
                </div>
                <div className="w-[500px]">
                    <img src={bannerImg} alt="" />
                </div>

            </div>
            <div>
                <div className="mx-auto max-w-6xl">
                    <Marquee>
                        <img className="w-36 md:m-6 m-3" src={google} alt="img" />
                        <img className="w-36 md:m-6 m-3" src={linkedin} alt="img" />
                        <img className="w-36 md:m-6 m-3" src={behance} alt="img" />
                        <img className="w-36 md:m-6 m-3" src={upwork} alt="img" />
                        <img className="w-36 md:m-6 m-3" src={fiver} alt="img" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Banner;