import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdvertisementList, Campus, Commission, CreateMaster, CreatePaymentProvider, CreateUnit, Deposite, EditPaymentAccount, EditPaymentProvider, Football, FourD, FourDList, FourDResult, Master, PaymentAccount, PaymentAnnouncement, PaymentProvider, PaymentType, Setting2d, Setting3d, Summary, ThreeD, ThreeDList, ThreeDResult, TwoD, TwoDList, TwoDResult, UnitHistory, UnitValue, Users, Withdraw } from '../Page'
import MasterAgent from '../Page/MasterDashboard/MasterAgent'
import PersonalProfile from '../Page/MasterDashboard/Profile'
import Profit from '../Page/Profit/Profit'
import UserWithdraw from '../Page/UserWithdraw/UserWithdraw'




const MasterRoute = () => {
    return (
        <Routes >
            <Route exact path="/dashboard/master/profile" element={<PersonalProfile />} />
            <Route exact path="/dashboard/master/profit" element={<Profit />} />
            <Route exact path="/dashboard/master/withdraw" element={<UserWithdraw />} />
            <Route exact path="/dashboard/master/all-agent" element={<MasterAgent />} />
            <Route exact path="/dashboard/summary" element={<Summary />} />
            <Route exact path='/dashboard/campus' element={<Campus />} />
            <Route exact path="/dashboard/createUnit" element={<CreateUnit />} />
            <Route exact path="/dashboard/unitValue" element={<UnitValue />} />
            <Route exact path="/dashboard/unitHistory" element={<UnitHistory />} />
            <Route exact path="/dashboard/paymentType" element={<PaymentType />} />
            <Route exact path='/dashboard/master/createAgent' element={<CreateMaster />} />
        </Routes>
    )
}

export default MasterRoute