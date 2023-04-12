import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const MyStudents = () => {
  const { user, loading } = useContext(AuthContext);
	const [students, setStudents] = useState([{}]);

	useEffect(() => {
		fetch(
				`https://car-house-server-omega.vercel.app/mystudent?email=${user?.email}`
			)
			.then((data) => {
				if (data.data !== undefined) {
					console.log(typeof data.data);
					console.log(data.data);
					setStudents(data.data);
				}
			});
	}, [user?.email]);

	console.log(students);



  if(loading){
    return <Loader />
  }



  return (
    <div className=" dark:bg-[#350573]">
      		<div className='mx-12 bg-transparent'>
			<h1 className='my-5'>My Total student : {students?.length}</h1>

			{students?.map((student) => (
				<div key={student?._id} className='card  bg-base-100 shadow-xl'>
					<div className='card lg:card-side my-5 bg-base-100 shadow-xl'>
						<img src={student?.productImg} className='lg:w-[50%]' alt='Album' />

						<div className='card-body'>
							<div className='card-body '>
								<h2 className='card-title'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Name :
									</span>
									{student?.image}
								</h2>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Email :
									</span>
									{student?.email}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Location :
									</span>
									{student?.sellerLocation}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 lg:text-lg'>
										Number :
									</span>
									{student?.buyerNumber}
								</p>
								<div className='card-actions justify-end'>
									{student?.resellPrice && !student?.paid && (
										<Link to={`/dashboard/mystudent/${student?._id}`}>
											<button className='btn bstudent-0 bg-blue-500 hover:bg-blue-600 text-white'>
												Pay
											</button>
										</Link>
									)}
									{student?.resellPrice && student?.paid && (
										<button className='btn bstudent-0 cursor-default bg-green-500 hover:bg-green-500 text-white'>
											Paid
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
    </div>
  );
};

export default MyStudents;
