import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentNotification = () => {
    const [notification, setNotification] = useState({});
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const transactionId = query.get("transactionId");


    useEffect(() => {
        // fetch(`http://localhost:5000/orders/by-transaction-id/${transactionId}`)
        fetch(`http://localhost:5000/api/v1/payment/ssl-payment-notification/${transactionId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNotification(data)
            });
    }, [transactionId])


    console.log(notification);

    // if (!notification?._id) {
    //     return (
    //         <div>
    //             No order found
    //         </div>
    //     )
    // }


    return (
        <div>
            <div>
                <h2>Congrats! Successfully Paid.</h2>

                <h2>Your Order Summary</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Shipping Address</th>
                                <th>transactionId</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                {/* <td>{order.serviceName}</td>
                                <td>{order.price}</td>
                                <td>{order.address}</td>
                                <td>{transactionId}</td> */}
                            </tr>
                        </tbody>
                    </table>

                    <button className="btn btn-primary ml-auto mt-5 block print:hidden" onClick={() => window.print()}>Print</button>
                </div>
            </div>

        </div>
    );
};

export default PaymentNotification;