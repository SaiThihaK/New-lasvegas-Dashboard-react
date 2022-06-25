import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import "./WithdrawModal.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { render } from '../../../../redux/slices/TransferSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import { logoutHandler } from '../../Helper/LogoutHandler';
import { ltoken } from '../../services/Token';
const WithdrawModal = ({ ModalHandler, datas, tags }) => {

    const [paymentAccount, setPaymentAccount] = useState("");

    const [validationError, setValidationError] = useState("");
    const [submitLoading, setSubmitLoading] = useState(false);
    const amount = useRef("");
    const accountName = useRef("");
    const dispatch = useDispatch();
    const accountNumber = useRef("");
    const { VITE_APP_DOMAIN } = import.meta.env;
    const paymentSubmitHandler = async (event) => {
        event.preventDefault();
        setSubmitLoading(true);
        const payment = {
            amount: parseInt(amount.current.value),
            account_no: accountNumber.current.value,
            account_name: accountName.current.value,
            payment_provider_name: datas.name,
            // payment_provider_name: datas.name,
        }
        // console.log(payment);

        try {
            const data = await axios.post(`${VITE_APP_DOMAIN}api/vegas-withdraw`, payment, { headers: { authorization: ltoken, Accept: "application/json" } });
            console.log(data);
            setSubmitLoading(false);
            if (data.data.status === "success") {
                // dispatch(render({ render: !reRender }));
                toast.success(data.data.message);
                ModalHandler(false);
                return;
            } else {

                toast.error(data.data.message);
                return;
            }
        } catch (error) {
            setSubmitLoading(false);

            if ((error.response.status) === 401) {
                logoutHandler();
                return;
            }
            toast.error(error.response.data.message);
            if (error?.response?.data?.errors) {

                setValidationError(error?.response?.data?.errors);
                return;
            }

            setValidationError({});
        }
    }
    return (
        <div>
            <ToastContainer />
            <div class="bank-backdrop modal-none" onClick={() => { ModalHandler(false) }}>
            </div>
            <div className="k-card" style={{ width: "380px" }}>
                <div className="k-card-header">
                    <img src={datas?.logo} alt=""
                        className="kpayImg" />
                </div>
                <form onSubmit={paymentSubmitHandler} className="k-card-body">
                    <div className="k-card-d">

                        <p className="k-amount-text">Amount (Min. 1 000.00 MMK):</p>
                        <div>
                            <input type="number" placeholder="1000.00" className="kInp" ref={amount} />
                            {validationError.hasOwnProperty('amount') && <small className={"error"}>{validationError.amount[0]}</small>}

                        </div>

                    </div>
                    <div className="k-card-d">
                        <p className="k-card-text">{datas.name} Account Number </p>
                        <div>
                            <input type="text" placeholder={`${datas.name} Number `} ref={accountNumber} className="kInp" />
                            {validationError.hasOwnProperty('account_no') && <small className={"error"}>{validationError.account_no[0]}</small>}
                        </div>

                    </div>
                    <div className="k-card-d">
                        <p className="k-card-text">{paymentAccount.payment_provider} Account Name</p>
                        <div>
                            <input type="text" placeholder={`${datas.name} Number `} ref={accountName} className="kInp" />
                            {validationError.hasOwnProperty('account_name') && <small className={"error"}>{validationError.account_name[0]}</small>}
                        </div>

                    </div>

                    {/* <div className="k-card-text-box">
            <p className="k-danger-text">Before requesting a deposit, please make a transfer using the payment
                details stated below.</p>
            
        </div> */}
                    <br />

                    <br />
                    {/* <p className="k-code-text">*Code: <span className="wave-message-txt">d3965f24b2</span> <i
                className="far fa-copy k-icn" title="Copy"></i> </p>
        <p className="k-long-para">*Enter this code in the Comments field when you make a deposit. If you do not
            enter the
            code, your payment may not be
            identified or credited to your account.</p> */}
                    <button type="submit" disabled={submitLoading} className="k-confirm-button" style={{ marginBottom: "20px" }} > {submitLoading ? <Loading width={30} color="white" /> : "Comfirm"}</button>
                </form>
            </div>
        </div>
    )
}

export default WithdrawModal