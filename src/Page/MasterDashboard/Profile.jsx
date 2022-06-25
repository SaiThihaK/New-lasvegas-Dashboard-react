import './Profile.css';

import React, { useEffect } from 'react';

import { CustomGetFunction } from '../../services';
const PersonalProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [userData, setUserData] = useState({});

  // useEffect(async() => {
  //     try {
  //         const data= await axios.get(`${REACT_APP_DOMAIN}api/get-login-user`,{ headers: { Authorization : key, Accept: "application/json" }} );
  //         if(data.data.status==="success"){
  //             setUserData(data.data.data)
  //             console.log(data.data.data);
  //         }else{
  //             console.log(data);
  //         }
  //     } catch (error) {
  //         console.log(error);
  //     //  if((error.response.status)=== 401 ){
  //     //     logoutHandler();
  //     //  }
  //     }
  // }, []);
  const { data: userData, loading } = CustomGetFunction(
    `api/get-login-user`,
    []
  );
  console.log(userData);
  return (
    <div className='profile'>
      <h1>Personal Information </h1>
      {loading && (
        <>
          {' '}
          <div className='p-img'>
            {userData.avatar ? (
              <img alt='imisaif' src={userData.avatar} />
            ) : (
              <img
                src='https://www.thesoynutritioninstitute.com/wp-content/uploads/2016/03/Blank-Person-Image.png'
                alt=''
              />
            )}
          </div>
          <div className='table-container'>
            <table>
              <tr>
                <td>Name</td>
                <td>
                  <span className='ml-10'>:</span>
                  {userData.name ? userData.agent.name : 'User'}{' '}
                </td>
              </tr>
              <tr>
                <td>User Id</td>
                <td>
                  <span className='ml-10'>:</span> {userData.id}{' '}
                </td>
              </tr>
              <tr>
                <td>Date Of Birth</td>
                <td>
                  <span className='ml-10'>:</span>
                  {userData?.customer?.dob || '-'}{' '}
                </td>
              </tr>
              <tr>
                <td>National Indenity Card Number</td>

                <td>
                  <span className='ml-10'>
                    <span className='ml-10'>:</span>
                    {userData?.customer?.nrc_card_no || '-'}
                  </span>{' '}
                </td>
              </tr>
            </table>
            <table className='table-left'>
              <tr>
                <td>Password</td>
                <td>
                  <span className='ml-10'>:</span> *********{' '}
                </td>
              </tr>
              <tr>
                <td>Phone Number</td>

                <td>
                  <span className='ml-10'>:</span> {userData?.phone || '-'}{' '}
                </td>
              </tr>
              <tr>
                <td>Email Address</td>

                <td>
                  <span className='ml-10'>:</span>
                  {userData?.email || '-'}
                </td>
              </tr>
              {/* <tr>
                <td>Nationality</td>
               
                <td><span className="ml-10">:</span>{userData?.country_name}</td>
            </tr> */}
              <tr>
                <td>Country</td>

                <td>
                  <span className='ml-10'>:</span>
                  {userData?.agent?.country || '-'}
                </td>
              </tr>
              {/* <tr>
                <td>Region</td>
               
                <td><span className="ml-10">:</span>{userData?.country_name}</td>
            </tr> */}
              <tr>
                <td>Currency Type</td>

                <td>
                  <span className='ml-10'>:</span>
                  {userData?.agent?.currency_code || '-'}
                </td>
              </tr>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalProfile;
