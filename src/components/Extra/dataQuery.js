import React, { useState } from 'react';

const dataQuery = () => {

  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  // // const [filteredData, setFilteredData] = useState([]);
  // // //https://edumate-second-server.vercel.app/api/v1/tutor

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://edumate-second-server.vercel.app/api/v1/user/dash/student`)
  //     .then((res) => res.json())
  //     .then((data) => {})
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // function handleFilter(event) {
  //   const query = event.target.value.toLowerCase();
  //   const filtered = data.filter(item => {
  //     return item.name.toLowerCase().includes(query) ||
  //            item.description.toLowerCase().includes(query);
  //   });
  //   setFilteredData(filtered);
  // }

   
    return (
        <div>
            {/* <div>
    <input type="text" onChange={handleFilter} />
    <ul>
      {filteredData.map(item => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  </div> */}
        </div>
    );
};

export default dataQuery;