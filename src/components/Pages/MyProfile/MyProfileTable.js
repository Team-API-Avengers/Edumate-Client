import React from 'react';

const MyProfileTable = () => {
	return (
		<div className='card lg:w-full w-96 shadow-xl'>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr className='border-2'>
							<th className='border'></th>
							<th className='bg-slate-100'>Job</th>
							<th className='bg-slate-100'>Name</th>
							<th className='bg-slate-100'>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						<tr className='hover'>
							<th className='border'>1</th>
							<td className='bg-slate-100'>*****</td>
							<td className='bg-slate-100'>*****</td>
							<td className='bg-slate-100'>*****</td>
						</tr>

						<tr className='hover'>
							<th className='border'>2</th>
							<td className='bg-slate-100'>*****</td>
							<td className='bg-slate-100'>*****</td>
							<td className='bg-slate-100'>*****</td>
						</tr>

						<tr className='hover'>
							<th className='border'>3</th>
							<td className='bg-slate-100'>*****</td>
							<td className='bg-slate-100'>*****</td>
							<td className='bg-slate-100'>*****</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyProfileTable;