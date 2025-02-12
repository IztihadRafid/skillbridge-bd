import { CiLocationOn, CiMail, CiMobile1 } from "react-icons/ci";
import backgroundimg from "../../assets/backgroundImg.jpg"
import contactImg from "../../assets/contactImg.jpg"
import mail from "../../assets/mail.jpg"
const GetSupport = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${backgroundimg})`,
                }}>
                <div className="hero-overlay bg-blue-100  bg-opacity-50 "></div>
                <div className="hero-content text-blue-950 text-center">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">We are here For You</h1>
                        <p className="mb-5 text-4xl font-semibold">
                            Customer Care Support for our valued Clients.
                        </p>
                    </div>
                </div>

            </div>
            <div className="border-cyan-300 md:max-w-7xl  m-16 p-10 rounded-3xl  mx-auto border-2 bg-cyan-50 w-full">
                <div className="md:flex justify-evenly items-center">
                    <div className="">
                        <div className="text-center mb-10">
                            <h1 className="md:text-5xl text-4xl font-bold my-5">Contact us</h1>
                            <p className="md:text-4xl text-2xl m-10">If you have any queries, feel free to reach us.</p>
                        </div>
                        <div className="md:text-2xl text-lg m-5">
                            <div className="flex  items-center my-3">
                                <CiLocationOn />
                                <p className="ml-5">Uttara, Dhaka. 1230</p>
                            </div>
                            <div className="flex  items-center my-3">
                                <CiMail />
                                <p className="ml-5">iztihadrafid10@gmail.com</p>
                            </div>
                            <div className="flex  items-center my-3">
                                <CiMobile1 />
                                <p className="ml-5">+880 1234567891</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:p-10 p-6">
                        <img className="border-2 border-cyan-200 rounded-2xl md:w-[700px]" src={contactImg} alt="" />
                    </div>
                </div>
            </div>



            {/* contact form */}
            <div
                className="hero min-h-screen "
                style={{
                    backgroundImage: `url(${mail})`,
                }}>
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content  text-center ">
                    <div className="">
                        <div className="p-10 rounded-2xl hero-overlay bg-opacity-60 border-2 shrink-0 shadow-2xl">
                            <h2 className="text-white p-5 text-3xl">Send us a Message</h2>
                            <form className="card-body ">
                            <div className="form-control">
                                    
                                    <input type="name" placeholder="Your Name" className="input input-bordered  hero-overlay bg-opacity-60 bg-black text-white" required />
                                </div>
                                <div className="form-control">
                                    
                                    <input type="email" placeholder="Email" className="input input-bordered hero-overlay bg-opacity-60 bg-black text-white" required />
                                </div>
                                <div className="form-control">
                                    
                                    <textarea className="border-2 border-black hero-overlay p-2 rounded-lg bg-opacity-60 bg-black text-white" name="message" placeholder="Message" id=""></textarea>
                                   
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-ghost bg-black text-white">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetSupport;