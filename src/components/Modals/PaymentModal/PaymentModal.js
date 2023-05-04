import React from 'react';

const PaymentModal = ({ modalData }) => {

    console.log(modalData);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const teacherName = form.teacherName.value;
        const teacherEmail = form.teacherEmail.value;
        const teacherPhone = form.teacherPhone.value;
        const teacherBackground = form.teacherBackground.value;
        const studentName = form.studentName.value;
        const studentEmail = form.studentEmail.value;
        const teacherFee = form.teacherFee.value;
        const teacherLocation = form.teacherLocation.value;

        const paymentInfo = {
            teacherName,
            teacherEmail,
            teacherPhone,
            teacherBackground,
            studentName,
            studentEmail,
            teacherFee,
            teacherLocation
        };

        console.log(paymentInfo);
        // need to post payment information -- 
        // fetch("http://localhost:5000/orders", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //         authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        //     },
        //     body: JSON.stringify(paymentInfo),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         window.location.replace(data.url);

        //     })
        //     .catch((er) => console.error(er));
    };

    return (
        <div>
            <input type="checkbox" id="PaymentModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">



                    <form onSubmit={handlePlaceOrder} className="flex items-center justify-between">

                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <input
                                    name="teacherName"
                                    type="text"
                                    placeholder="Name"
                                    defaultValue={modalData?.teachername}
                                    className="input input-ghost w-full  input-bordered"
                                />
                                <input
                                    name="teacherEmail"
                                    type="text"
                                    placeholder="Your email"
                                    defaultValue={modalData?.teacheremail}
                                    className="input input-ghost w-full  input-bordered"
                                    readOnly
                                />
                                <input
                                    name="teacherPhone"
                                    type="text"
                                    placeholder="Your Phone"
                                    defaultValue={modalData?.teacherphone}
                                    className="input input-ghost w-full  input-bordered"
                                    required
                                />
                                <input
                                    name="teacherBackground"
                                    type="text"
                                    placeholder="Your Phone"
                                    defaultValue={modalData?.teacherbackground}
                                    className="input input-ghost w-full  input-bordered"
                                    required
                                />
                                <input
                                    name="studentName"
                                    type="text"
                                    placeholder="Your Phone"
                                    defaultValue={modalData?.studentName}
                                    className="input input-ghost w-full  input-bordered"
                                    required
                                />
                                <input
                                    name="studentEmail"
                                    type="text"
                                    placeholder="Your Phone"
                                    defaultValue={modalData?.studentEmail}
                                    className="input input-ghost w-full  input-bordered"
                                    required
                                />
                                <input
                                    name="teacherFee"
                                    type="text"
                                    placeholder="Your Phone"
                                    defaultValue={modalData?.teacherfee}
                                    className="input input-ghost w-full  input-bordered"
                                    required
                                />

                                <input
                                    type="text"
                                    name="teacherLocation"
                                    placeholder="Your Location"
                                    defaultValue={modalData?.teacherlocation}
                                    className="input input-ghost w-full  input-bordered"
                                />
                            </div>



                            <input className="btn w-full mt-8" type="submit" value="Pay" />


                        </div>
                    </form>


                    <div className="modal-action">
                        <label htmlFor="PaymentModal" className="btn">X</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;