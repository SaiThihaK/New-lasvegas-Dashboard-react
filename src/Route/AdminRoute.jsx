import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdvertisementList, Campus, Commission, CreateMaster, CreatePaymentProvider, CreateUnit, Deposite, EditPaymentAccount, EditPaymentProvider, Football, FourD, FourDList, FourDResult, GeneralSetting, Master, PaymentAccount, PaymentAnnouncement, PaymentProvider, PaymentType, Setting2d, Setting3d, Summary, ThreeD, ThreeDList, ThreeDResult, TwoD, TwoDList, TwoDResult, UnitHistory, UnitValue, Users, Withdraw } from '../Page'

const AdminRoute = () => {
  return (
    <Routes>
    <Route exact path="/dashboard/summary" element={<Summary />} />
    <Route exact path='/dashboard/campus' element={<Campus />} />
    <Route exact path="/dashboard/createUnit" element={<CreateUnit />} />
    <Route exact path="/dashboard/unitValue"  element={<UnitValue />}/>
    <Route exact path="/dashboard/unitHistory" element={<UnitHistory />} />
    <Route exact path="/dashboard/paymentType" element={<PaymentType />} />
    <Route exact path="/dashboard/paymentProvider" element={<PaymentProvider />} />
    <Route exact path='/dashboard/paymentAccount' element={<PaymentAccount />} />
    <Route exact path="/dashboard/editPaymentAccount/:id" element={<EditPaymentAccount />} />
    <Route exact path="/dashboard/paymentAnnouncement" element={<PaymentAnnouncement />} />
    <Route exact path="/dashboard/master" element={<Master />} />
    <Route exact path='/dashboard/createMaster' element={<CreateMaster />} />
    <Route exact path='/dashboard/commission' element={<Commission />} />
    <Route exact path="/dashboard/users" element={<Users />} />
    <Route exact path='/dashboard/football' element={<Football />} />
    <Route exact path="/dashboard/2d" element={<TwoD />} />
    <Route exact path="/dashboard3d" element={<ThreeD />} />
    <Route exact path='/dashboard/4d' element={<FourD />} />
    <Route exact path='/dashboard/result2d' element={<TwoDResult />} />
    <Route exact path='/dashboard/result3d' element={<ThreeDResult />} />
    <Route exact path='/dashboard/result4d' element={<FourDResult />} />
    <Route exact path='/dashboard/list2d' element={<TwoDList />} />
    <Route exact path='/dashboard/list3d' element={<ThreeDList />} />
    <Route exact path='/dashboard/list4d' element={<FourDList/>} />
    <Route exact path='/dashboard/advertisementList' element={<AdvertisementList />} />
    <Route exact path='/dashboard/3d-setting' element={<Setting3d />} />
    <Route exact path="/dashboard/2d-setting" element={<Setting2d />} />
    <Route exact path="/dashboard/create-paymentProvider" element={<CreatePaymentProvider />} />
    <Route exact path="/dashboard/edit-paymentProvider/:id" element={<EditPaymentProvider />} />
    <Route exact path="/dashboard/deposite" element={<Deposite />} />
    <Route exact path="/dashboard/Withdraw" element={<Withdraw />} />
    <Route exact path="/dashboard/general-setting" element={<GeneralSetting />} />
    </Routes>
  )
}

export default AdminRoute