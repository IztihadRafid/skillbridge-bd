import React from 'react';

const AllJobsCards = ({ job }) => {
    const { _id, title, description, open_position, image, sector, salary } = job
    return (
        <div>
            <div className="card bg-green-400 text-white w-full shadow-lg transition-transform duration-300 hover:-rotate-[-5deg] hover:translate-x-1 hover:translate-y-1 hover:scale-105 hover:bg-cyan-500 transform perspective-1000  lg:mb-0 mb-4">
                <div className="card-body">

                    <img src="" alt="" />
                    <h2 className="card-title text-2xl">{title}</h2>
                    {/* <p className="text-lg font-bold">Open Seat: <span className="mx-4">{open_position}</span></p> */}
                    <p className="text-lg font-bold">Salary: <span className="mx-4">{salary} <span className="text-pink-600">(Negotiable)</span></span></p>
                    <button className='btn-block bg-purple-500 py-2 rounded-xl'>Apply</button>
                </div>
            </div>
        </div>

    );
};

export default AllJobsCards;