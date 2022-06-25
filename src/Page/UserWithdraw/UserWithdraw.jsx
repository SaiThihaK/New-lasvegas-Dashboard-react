import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import "./UserWithdraw.css";
import { useSelector } from "react-redux";
import { CustomGetFunction } from "../../services";
import PaymentGroup from "./PaymentGroup";
const UserWithdraw = ({ type }) => {
    const [tag, setTag] = useState(1);


    const { data: payment, loading } = CustomGetFunction(`api/available-payment-providers`, []);
    console.log("heo", payment);

    // api/vegas-withdraw







    return (
        <div className="deposit_container">
            <ToastContainer autoClose={3000} />
            {/* <h3>ACCOUNT 375085289</h3>
      <p className="select_payment">
        Select payment method to top up your account:
      </p>
      <div className="payment_checkbox">
        <input type="checkbox" name="" id="" />
        <p>Payment systems in your region</p>
      </div> */}

            <>

                <div className="payment_method">
                    <div className="lef_payment">

                        {payment?.map((el, index) => {
                            return (
                                <div
                                    className={`payment_item ${el.id === tag && "payment_item_active"
                                        } `}
                                    onClick={() => {
                                        setTag(el.id);
                                    }}
                                >
                                    <p>{el.name}</p>
                                    <p>{el.payment_providers.length}</p>
                                </div>
                            );
                        })

                        }
                    </div>
                    <div className="bank_container">
                        <div id="payment1" className="payment">

                            {payment.map((el, key) => {
                                return (
                                    <PaymentGroup
                                        key={key}
                                        type={type}
                                        show={el.id === tag}
                                        name={el.name}
                                        data={el.payment_providers}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
};

export default UserWithdraw;
