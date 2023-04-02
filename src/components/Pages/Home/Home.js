import React from 'react';
import Banner from './Banner/Banner';
import SubjectWiseTeachers from '../SubjectWiseTeacher/SubjectWiseTeachers';

const Home = () => {
    return (
        <div>
            <Banner />
            <SubjectWiseTeachers />
        </div>
    );
};

export default Home;