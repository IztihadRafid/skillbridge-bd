
const JobItem = ({job}) => {
    const { _id, title, description, open_position, image, sector } = job
    return (
        <div>
            <div className="card bg-green-400 text-white w-full shadow-lg transition-transform duration-300 hover:-rotate-[-5deg] hover:translate-x-1 hover:translate-y-1 hover:scale-105 hover:bg-cyan-500 transform perspective-1000">
                <div className="card-body">

                    <img src="" alt="" />
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className="text-lg font-bold">Open Seat: <span className="mx-4">{open_position}</span></p>
                </div>
            </div>
        </div>
    );
};

export default JobItem;