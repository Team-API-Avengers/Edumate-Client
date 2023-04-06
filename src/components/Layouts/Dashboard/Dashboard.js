import React from "react";
import { Link, Outlet } from "react-router-dom";
// import { AuthContext } from '../../Context/AuthProvider';
// import Loader from '../../Loader/Loader';
import Header from "../../Shared/Header/Header";
// import { useQuery } from '@tanstack/react-query';

const DashBoard = () => {
  // const { loading, user } = useContext(AuthContext);
  // const [logUser, setLogUser] = useState();
  //! fetch for getting users data from mongodb.....
  // const { data: users } = useQuery({
  // 	queryKey: ['users'],
  // 	queryFn: async () => {
  // 		try {
  // 			const res = await fetch(`https://car-house-server-omega.vercel.app/users/${user?.email}`);
  // 			const data = await res.json();
  // 			return data;
  // 		} catch (err) {
  // 			console.error(err);
  // 		}
  // 	},
  // });

  // useEffect(() => {
  // 	fetch(`https://car-house-server-omega.vercel.app/users/${user?.email}`)
  // 		.then((res) => res.json())
  // 		.then((result) => {
  // 			setLogUser(result[0]);
  // 		});
  // }, [user?.email]);

  // if (loading) {
  // 	return <Loader></Loader>;
  // }
  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button hidden"
          >
            Open drawer
          </label>
        </div>

        <div className="drawer-side border">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 bg-base-100 text-base-content">
            <Link to="/home" className="flex lg:hidden mb-10">
              <img
                src="PremiCar.png"
                className="mr-3 h-6 sm:h-9 rounded-lg"
                alt="PremiCar Logo"
              />
              <span className="self-center text-xl font-semibold  ">
                PremiCar
              </span>
            </Link>
            <li className=" ">
              <Link to="/dashboard/My-Profile">My Profile</Link>
            </li>

            <>
              <li className="">
                <Link to="/dashboard/add-Teacher">Be a teacher</Link>
              </li>
              <li className="">
                <Link to="/all-Teachers">All Teacher</Link>
              </li>
              <li className="">
                <Link to="/dashboard/all-students">All Students</Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
