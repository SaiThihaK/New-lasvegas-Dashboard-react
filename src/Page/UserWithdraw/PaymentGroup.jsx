import React, { useState } from 'react'


import classes from "./PaymentGroup.module.css"
import WithdrawModal from './WithdrawModal';


const PaymentGroup = ({ type, show, name, data }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const ModalHandler = (data) => {
        setShowModal(data);
    }
    const ShowModalHandler = (data) => {
        setShowModal(true);
        setModalData({ data });
    }

    return (
        <div className={` ${classes["bank_payment"]} ${!show && classes["d-none"]}`}>
            <p className={classes["bank_header"]}> {name} </p>
            <div className={classes["bank_item_container"]}>
                {data.map((el, key) => {
                    return (<div className={classes[`bank_item`]} key={key} onClick={() => { ShowModalHandler(el) }}  >
                        <div className={classes[`bank_img`]}>
                            <image src={el.logo} height="40px" width="70px" style={{
                                height: "40px",
                                transition: ".3s",
                            }} />
                        </div>
                        <div className={classes["bank_btn"]} >
                            {el.name}
                        </div>
                    </div>)
                })}
                {/* {showModal && (type === "deposit" ? <DepositModal ModalHandler={ModalHandler} bankData={modalData} /> : <WithdrawModal ModalHandler={ModalHandler} bankData={modalData} />)} */}
                {showModal && <WithdrawModal ModalHandler={ModalHandler} datas={modalData.data} />}
                {/* {showModal && type === "deposit" ? () : ()} */}




            </div>
        </div>
    )
}

export default PaymentGroup