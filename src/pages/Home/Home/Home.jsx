import React from 'react';
import Banner from '../Banner/Banner';

import PopularJobs from '../PopularJobs/PopularJobs';
import AllJobs from '../AllJobs/AllJobs';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllJobs></AllJobs>
          <PopularJobs></PopularJobs>
        </div>
    );
};

export default Home;