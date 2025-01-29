import bannerImg from "../../../assets/banner.png"
const Banner = () => {
    return (
        <div className="lg:flex justify-center items-center bg-[#e9f0ff]">
            <div className="my-8 ml-2 mr-2">
                <p className="lg:text-6xl  text-4xl font-semibold">Fine Your <br /> Dream <button className="bg-blue-600 lg:text-5xl text-3xl px-5 py-2 text-white rounded-lg">JOBS</button><br /> Platform</p>
                <p className="lg:text-4xl text-3xl mt-4 ">Your Dream Job is Waiting for You</p>
            </div>
            <div className="w-[400px]">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;