import React from 'react';

const TeacherSignup = () => {
    return (
        <div>
         <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<form className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className="w-full h-10 border border-gray-600 rounded-md px-5 focus:outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full h-10 border border-gray-600 rounded-md px-5 focus:outline-none" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full h-10 border border-gray-600 rounded-md px-5 focus:outline-none" />
				</div>
				<div className="col-span-full">
					<label for="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="" className="w-full h-10 border border-gray-600 rounded-md px-5 " />
				</div>
                <button className='btn border-0 w-96 bg-blue-500 hover:bg-blue-700'>Signup</button>
			</form>
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default TeacherSignup;