import React, { useEffect, useState } from 'react';

const QuestionModal = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
  
    useEffect(() => {
      fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
        .then((res) => res.json())
        .then((data) => setData(data?.data))
        .finally(() => {});
    }, []);
  

    function handleFilter(event) {
        const query = event.target.value.toLowerCase();
        console.log(query);
        // console.log(data);
        const filtered = data?.filter((item) => {
          return (
            item?.name?.toLowerCase().includes(query) ||
            item?.location?.toLowerCase().includes(query) ||
            item?.background?.toLowerCase().includes(query)
          );
        });
        setFilteredData(filtered);
      }
    
      console.log(filteredData);




    return (
        <div>
            <input type="checkbox" id="QuestionModal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="QuestionModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                <div>
                        <label className="block">Background</label>
                         <select
                          name='background'
                          className="select  h-11 text-gray-800 border border-green-400 mt-1 rounded w-full bg-sky-50"
                          onChange={handleFilter}
                        >
                          <option disabled selected>
                            Choose your background
                          </option>
                          <option>Science</option>
                          <option>Commerce</option>
                          <option>Arts</option>
                        </select> 
                      </div>
            </div>
            </div>
        </div>
    );
};

export default QuestionModal;