import React from 'react';

const TestimonialModal = () => {
    return (
        <div>
            <input type="checkbox" id="TestimonialModal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                    <label htmlFor="TestimonialModal" className="btn">Yay!</label>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default TestimonialModal;