import offerPic from "../../assets/joboffer.jpg"
import choosePic from "../../assets/chooseus.jpg"
const AboutUs = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl text-center my-7 font-bold text-blue-600">Who We Are</h1>
                <p className="text-2xl">
                    We are a passionate team committed to bridging the gap between employers and job seekers. Our platform is designed to serve as a one-stop solution for discovering career opportunities across a variety of sectors, including Technology, Marketing, Design, Media, Data, Management, and Security.
                </p>
            </div>

            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl text-center my-7 font-bold text-teal-600">Our Mission</h1>
                <p className="text-2xl">To empower individuals by connecting them with meaningful job opportunities and helping companies find the right talent faster and easier.</p>
            </div>

            <div className="flex mx-auto max-w-5xl md:mt-24 lg:mt-28 mt-16">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-green-700 font-bold my-6">What We Offer</h1>
                    <ol className="text-left text-lg">
                        <li>1. Curated job listings across top industries</li>
                        <li>2. User-friendly interface for easy job search and applications</li>
                        <li>3. Real-time notifications and updates</li>
                        <li>4. Resume-building and career guidance resources</li>
                    </ol>
                </div>
                <div>
                    <img className="rounded-3xl" src={offerPic} alt="" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-10 md:mt-28">
                <h1 className="text-4xl text-center my-7 font-bold text-blue-600"> Why Choose Us</h1>
                <p className="text-2xl">We’re more than just a job board — we’re a career partner. Our platform ensures quality listings, reliable employers, and a supportive environment for job seekers.</p>
            </div>


            <div className="flex flex-row-reverse mx-auto space-x-3  max-w-5xl md:mt-24 lg:mt-28 mt-16 mb-32">
                <div className="flex flex-col  justify-center items-center mx-5">
                    <h1 className="text-3xl text-red-600 font-bold my-6"> Industries We Serve</h1>
                    <ol className="text-left text-lg">
                        <li>1. Technology: Software development, IT support, DevOps, and more</li>
                        <li>2. Marketing: Digital marketing, SEO, content creation</li>
                        <li>3. Design: UI/UX, graphic design, product design</li>
                        <li>4. Data: Data science, analytics, data engineering</li>
                        <li>5. Media: Journalism, video production, social media</li>
                        <li>6. Management: Project management, operations, HR</li>
                        <li>7. Security: Cybersecurity, network security, compliance</li>
                    </ol>
                </div>
                <div className="flex justify-center items-center">
                    <img className="rounded-3xl w-[800px]" src={choosePic} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;