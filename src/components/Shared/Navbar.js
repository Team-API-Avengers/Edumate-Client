import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { AuthContext } from '../Context/AuthProvider';
// import SearchResultDisplayModal from '../Modals/SearchResultDisplayModal';

const Navbar = () => {
  // const { filteredData, setFilteredData } = useContext(AuthContext);

  //     const [showModal, setShowModal] = useState(false);

  //   const handleInputFocus = () => {
  //     console.log('on');
  //     setShowModal(true);
  //   };

  //   const handleModalClose = () => {
  //     console.log('off');
  //     setShowModal(false);
  //   };

  //   const [data, setData] = useState([]);

  //   const [hasSearched, setHasSearched] = useState(false);
  //   console.log('hasSearched', hasSearched);

  //   useEffect(() => {
  //     fetch(`https://edumate-second-server.vercel.app/api/v1/tutor`)
  //       .then((res) => res.json())
  //       .then((data) => setData(data?.data))
  //       .finally(() => {});
  //   }, []);

  //       //! Data Query
  //   function handleFilter(event) {
  //     const query = event.target.value.toLowerCase();
  //     console.log(query);
  //     // console.log(data);
  //     const filtered = data?.filter((item) => {
  //       return (
  //         item?.name?.toLowerCase().includes(query) ||
  //         item?.location?.toLowerCase().includes(query) ||
  //         item?.background?.toLowerCase().includes(query)
  //       );
  //     });
  //     setFilteredData(filtered);
  //     setHasSearched(true);
  //   }

  //   console.log(filteredData);

  return (
    <div>
      {/* <!-- component --> */}
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        {/* Nav Logo */}
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <span className="font-semibold text-xl tracking-tight">My Navbar</span>
          </div>
          <div className="block lg:hidden ">
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Nav Menu */}
        <div className="flex justify-between">
          <div className="text-md font-bold text-blue-700 lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Menu 1
            </a>
            <a
              href="#responsive-header"
              className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Menu 2
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Menu 3
            </a>
          </div>
          {/* <!-- Input field --> */}
          <div className="relative mx-4 text-gray-600 lg:block hidden">
            <a href="#searchBox" type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <BsSearch />
            </a>
          </div>
          {/* {showModal && (
                <SearchResultDisplayModal 
                filteredData={filteredData} onClose={handleModalClose} />
            )} */}
          <div className="flex ">
            {/* <a href="#"
                   className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Sign
                    in</a> */}
            <Link
              to=""
              className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Login
            </Link>
            <Link
              to=""
              className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Signup
            </Link>

            {/* <a href="#"
                   className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">login</a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
