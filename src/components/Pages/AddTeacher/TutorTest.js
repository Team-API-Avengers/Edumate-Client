import React, { useEffect, useState } from 'react';
import Loader from '../../Shared/Loader';

const TutorTest = () => {


    //! States
    const [data, setData] = useState([]);
    
    const [filteredData, setFilteredData] = useState([]);

    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);
        fetch(`https://edumate-second-server.vercel.app/api/v1/test`)
          .then((res) => res.json())
          .then((data) => {
            setData(data?.data)
            console.log(data?.data);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);




      const handleBackgroundOption = (e) => {
        const query = e.target.value;
        console.log(e.target.value);
    
        const filtered = data?.filter((item) => {
          return (
            item?.category?.includes(query)
          );
        });
    
        setFilteredData(filtered);
        // console.log(filtered);
      }



      if(loading){
        return <Loader />;
      }

    return (
        <div>
            <div>
                        <label className="block">Select Your Department</label>
                         <select
                          name='background'
                          className="select  h-11 text-gray-800 border border-green-400 mt-1 rounded   w-full bg-sky-50 "
                          onChange={handleBackgroundOption}
                        >
                          <option disabled selected>
                            Choose your background
                          </option>
                          <option>Science</option>
                          <option>Commerce</option>
                          <option>Arts</option>
                        </select> 






                        {
                            filteredData?.map((data, idx) => 
                            <>
                            <h1>{data?.question}</h1>
                            </>)
                        }






                      
                      </div>
        </div>
    );
};

export default TutorTest;