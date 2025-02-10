import React from 'react';
import Banner from '../Banner/Banner';

import PopularJobs from '../PopularJobs/PopularJobs';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
        
          <PopularJobs></PopularJobs>
        </div>
    );
};

export default Home;