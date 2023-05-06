import React from 'react';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const FAQBanner = () => {
    return (
        <div className=''>
					
					<div className='grid grid-cols-1 md:grid-cols-2'>
						<div className='content py-5'>
							<div className='dark:text-[#bb86fc] text-green-600 font-semibold text-start '>
								<div className='heading-content'>
									
									<h2 className='text-start py-2 text-xl'>
									
									<AutoTyping
									  active // <boolean>
									  textRef='Frequently Asked Questions' // <string>
									  writeSpeed={150} // <number>
									  deleteSpeed={150} // <number>
									  delayToWrite={1000} // <number>
									  delayToDelete={2000} // <number>
									/>
									<BlinkCursor
									  active // <boolean>
									  blinkSpeed={500} // <number>
									/>
								  
									</h2>
								</div>
							</div>
					</div>
					

					<div className=''></div>
					

					
					</div>
				</div>
    );
};

export default FAQBanner;