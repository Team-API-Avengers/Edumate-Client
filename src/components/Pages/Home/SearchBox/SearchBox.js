import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const SearchBox = () => {


    const [data, setData] = useState()




       //! FIXME: ----- START ------ FIXME: 
  // By Clicking see all button display all categories data and by clicking close button hidden all categories data


//   const [categoryData, setCategoryData] = useState([]);



  const [showAll, setShowAll] = useState(false);

  
//   const getCategoryData = async () => {
//     const response = await fetch('https://edumate-second-server.vercel.app/api/v1/feedback');
//     const data = await response.json();
//     setCategoryData(data);
//   };

//   console.log('all', categoryData);


  const handleShowAllClick = () => {
    setShowAll(true);
    // data();
  };


  

  const handleCloseClick = () => {
    setShowAll(false);
    // data([]);
  };





  // FIXME: --------END------ FIXME:





    const handleSearch = e => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);



        fetch(`https://edumate-second-server.vercel.app/api/v1/tutor/location/${search}`)
        .then((res) => res.json())
        .then((result) => {
            if (result) {
            console.log(result);
            setData(result.data);
            e.target.reset();
            }
        });


    };


    return (
        <div>
            <form onSubmit={handleSearch}>
                <h5>Search a teacher by your location</h5>
                <input name='search' type="text" className='input input-bordered w-96' />
                <button className='btn btn-primary'>Search</button>
            </form>

            {/* {
                data?.map(value =>
                    <div key={value?._id}>
                        <h1>Hi</h1>
                    </div>
                    )
            } */}

            <div className="mt-10">
            {showAll ? (
        
        <div>
            <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10">
            {
                data?.map(value => 
            <div key={value?._id}>
                <h1>{value?.background}</h1>
            </div>
                    ) }
            </div>
          
          <button className='hover:underline group text-blue-700 text-2xl flex mx-auto w-sm mt-10' title='Hide' onClick={handleCloseClick}>Close <BsArrowRightShort className='group-hover:text-blue-700 text-white mt-2' /> </button>       
        </div>
      ) : (
        <button className='hover:underline group text-blue-700 text-2xl flex mx-auto w-sm mt-10' title='See all' onClick={handleShowAllClick}>See All Feedbacks<BsArrowRightShort className='group-hover:text-blue-700 text-white mt-2' /> </button>
      )}
            </div>
        </div>
    );
};

export default SearchBox;