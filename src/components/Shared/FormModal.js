import React from 'react';
import { Link } from 'react-router-dom';

const FormModal = () => {
    return (
        <div>
            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <h3 className='mb-5'>Who are you?</h3>
                <Link className='mx-5' to='/signup-teacher'>
                    <a href="#" className="btn">Teacher</a>
                </Link>

                <Link className='mx-5' to='/signup-student'>
                    <a href="#" className="btn">Student</a>
                </Link>

                    <div className="modal-action">
                    <a href="#" className="btn">x</a>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default FormModal;