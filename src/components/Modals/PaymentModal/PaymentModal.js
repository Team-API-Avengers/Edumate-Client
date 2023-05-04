import React from 'react';

const PaymentModal = ({modalData}) => {
    return (
        <div>
            <input type="checkbox" id="PaymentModal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{modalData?._id}</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                <label htmlFor="PaymentModal" className="btn">Yay!</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PaymentModal;