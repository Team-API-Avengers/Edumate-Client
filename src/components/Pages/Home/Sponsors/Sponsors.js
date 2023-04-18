import React from 'react';
import one from '../../../Assets/sponsors/one.png'
import two from '../../../Assets/sponsors/two.png'
import three from '../../../Assets/sponsors/three.png'
import four from '../../../Assets/sponsors/four.jpg'
import five from '../../../Assets/sponsors/five.jpg'
import six from '../../../Assets/sponsors/six.jpg'
import seven from '../../../Assets/sponsors/seven.jpg'
import eight from '../../../Assets/sponsors/eight.png'
import nine from '../../../Assets/sponsors/nine.jpg'
import ten from '../../../Assets/sponsors/ten.jpg'
import eleven from '../../../Assets/sponsors/eleven.jpg'

const Sponsors = () => {
    return (
        <div>
            <marquee>
            <div className="flex">
                <img className='w-20 mx-5' src={one} alt="logo" />
                <img className='w-20 mx-5' src={two} alt="logo" />
                <img className='w-20 mx-5' src={three} alt="logo" />
                <img className='w-20 mx-5' src={four} alt="logo" />
                <img className='w-20 mx-5' src={five} alt="logo" />
                <img className='w-20 mx-5' src={six} alt="logo" />
                <img className='w-20 mx-5' src={seven} alt="logo" />
                <img className='w-20 mx-5' src={eight} alt="logo" />
                <img className='w-20 mx-5' src={nine} alt="logo" />
                <img className='w-20 mx-5' src={ten} alt="logo" />
                <img className='w-20 mx-5' src={eleven} alt="logo" />
            </div>
        </marquee>
        </div>
    );
};

export default Sponsors;