
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center w-4/12 mx-auto mb-14">
           <h3 className="text-4xl border-y-2 py-2 text-lime-500 hover:text-lime-600 font-bold">{heading}</h3> 
           <p className="text-2xl">{subHeading}</p> 
        </div>
    );
};

export default SectionTitle;