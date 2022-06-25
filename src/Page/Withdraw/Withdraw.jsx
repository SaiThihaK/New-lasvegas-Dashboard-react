import React, { useState, useEffect } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import classes from './Withdraw.module.css';
import { Button, FormControl, MenuItem, Select, Stack } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CustomPagination, NormalTable, PageCard } from '../../Components';
import { CustomGetFunction } from '../../services';
import { userInfo } from '../../features/UserInfo';
import { useSelector } from 'react-redux';
import { PostMethod } from '../../services/api-services';
import { ChangeDate } from '../../Helper/ChangeDate';

const UserWithDrawTable = ({}) => {
  const [open, setOpen] = useState(false);
  const [cancelopen, setCancelOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [agent_action, setAgent_action] = useState('');

  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);
  const CancelopenHandler = () => setCancelOpen(true);
  const CancelcloseHandler = () => setCancelOpen(false);
  const [userWithDraw, setUserWithDraw] = useState([]);
  const [id, setId] = useState(0);
  const [num, setNum] = useState(0);
  const userData = useSelector(userInfo);
  const [remark, setRemark] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const { data, loading, pagination } = CustomGetFunction(
    `api/user-withdraw?sortDirection=desc&receiver_user_id=${userData.id}&page=${page}`,
    [page, num]
  );
  console.log(data);
  const [userId, setUserId] = useState('');
  const handleClose = () => {
    setOpenModal(false);
  };

  // console.log("userWithdraw", data);
  const submitHandler = async (id) => {
    setOpenModal(false);
    if (agent_action === 0) {
      try {
        const response = await axios.request(
          PostMethod(`api/agent/user-withdraw/action/rejected/${id}`, {
            remark,
          })
        );
        if (response.data.status === 'success') {
          toast.success(response.data.message);
          setNum(num + 1);
          setId(0);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const confirmHandler = async (id) => {
    setUserId(id);
    if (agent_action === 1) {
      try {
        const response = await axios.request(
          PostMethod(`api/agent/user-withdraw/action/approve/${id}`)
        );

        if (response.data.status === 'success') {
          toast.success(response.data.message);
          setNum(num + 1);
          setId(0);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
    setOpenModal(true);
  };
  useEffect(() => {}, [userId]);

  const differStatus = (user) => {
    if (user.status === 'pending') {
      return (
        <TableCell align='left'>
          {id !== user.id ? (
            <Button
              sx={{ fontSize: '0.7rem' }}
              onClick={() => setId(user.id)}
              style={{ width: 120 }}
              color='success'
              variant='contained'
            >
              Pending
            </Button>
          ) : (
            <FormControl className={classes['form-control']}>
              <Select
                size='small'
                sx={{ width: 120 }}
                value={agent_action}
                onChange={(e) => setAgent_action(e.target.value)}
              >
                {/* <MenuItem value="pending">Pending</MenuItem> */}
                <MenuItem value={1}>Approve</MenuItem>
                <MenuItem value={0}>Reject</MenuItem>
              </Select>
              <Button
                onClick={() => {
                  confirmHandler(user.id);
                }}
              >
                Confirm
              </Button>
            </FormControl>
          )}
        </TableCell>
      );
    }
    if (user.status !== ('pending' && 'receiver-rejected')) {
      return (
        <TableCell align='left'>
          <p
            className={classes['btn']}
            style={{ backgroundColor: 'blue', fontSize: '0.7rem' }}
          >
            Approve
          </p>
        </TableCell>
      );
    }
    if (user.status === 'receiver-rejected') {
      return (
        <TableCell align='left'>
          <p
            className={classes['btn']}
            style={{ backgroundColor: 'red', fontSize: '0.7rem' }}
          >
            Reject
          </p>
        </TableCell>
      );
    }
  };
  const columns = [
    'No',
    'user-ID',
    'User Name',
    'Payment Provider',
    'Amount',
    'Phone/Account',
    'Payment Date',
    'User Action',
    'Action',
  ];
  return (
    <PageCard title='ငွေထုတ်'>
      <NormalTable columns={columns} data={data}>
        {data?.map((user, index) => (
          <TableRow key={index}>
            <TableCell component='th' scope='row'>
              {index + 1}
            </TableCell>
            <TableCell align='left'>{user.user.id}</TableCell>
            <TableCell align='left'>{user.user.name}</TableCell>
            <TableCell align='left'>{user.payment_provider.name}</TableCell>
            <TableCell align='left'>{user.amount}</TableCell>
            <TableCell align='left'>{user.account_no}</TableCell>

            <TableCell align='left'>{ChangeDate(user?.created_at)}</TableCell>
            <TableCell align='left'>
              <p
                className={classes['btn']}
                style={{
                  backgroundColor:
                    user.user_action === 'Complete' ? 'green' : 'red',
                }}
              >
                {user.user_action}
              </p>
            </TableCell>

            <TableCell align='right'>{differStatus(user)}</TableCell>
          </TableRow>
        ))}
      </NormalTable>
      {/* <CancelModal open={openModal} userId={userId} handleClose={handleClose} setOpen={setOpenModal} remark={remark} setRemark={setRemark} submitHandler={submitHandler} /> */}
      {data.length !== 0 && (
        <CustomPagination
          setPage={setPage}
          totalPage={pagination?.meta?.last_page}
        />
      )}

      {/* <ApproveActionModal
        open={open}
        handleClose={closeHandler}
        id={id}
        AlertToast={AlertToast}
        num={num}
        setNum={setNum}
      /> */}
      {/* <RejectActionModal
        open={cancelopen}
        handleClose={CancelcloseHandler}
        id={id}
        AlertToast={AlertToast}
        num={num}
        setNum={setNum}
      /> */}
    </PageCard>
  );
};

export default UserWithDrawTable;

// import React, { useState, useEffect } from 'react';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
// import classes from './Withdraw.module.css';
// import { Button, FormControl, MenuItem, Select, Stack } from '@mui/material';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { CustomPagination, NormalTable, PageCard } from '../../Components';
// import { CustomGetFunction } from '../../services';
// import { userInfo } from '../../features/UserInfo';
// import { useSelector } from 'react-redux';
// import { PostMethod } from '../../services/api-services';

// const UserWithDrawTable = ({}) => {
//   const [open, setOpen] = useState(false);
//   const [cancelopen, setCancelOpen] = useState(false);
//   const [page, setPage] = useState(1);
//   const [agent_action, setAgent_action] = useState('');

//   const openHandler = () => setOpen(true);
//   const closeHandler = () => setOpen(false);
//   const CancelopenHandler = () => setCancelOpen(true);
//   const CancelcloseHandler = () => setCancelOpen(false);
//   const [userWithDraw, setUserWithDraw] = useState([]);
//   const [id, setId] = useState(0);
//   const [num, setNum] = useState(0);
//   const userData = useSelector(userInfo);
//   const [remark, setRemark] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const { data, loading, pagination } = CustomGetFunction(
//     `api/user-withdraw?sortDirection=desc&receiver_user_id=${userData.id}&page=${page}`,
//     [page, num]
//   );
//   console.log(data);
//   const [userId, setUserId] = useState('');
//   const handleClose = () => {
//     setOpenModal(false);
//   };

//   // console.log("userWithdraw", data);
//   const submitHandler = async (id) => {
//     setOpenModal(false);
//     if (agent_action === 0) {
//       try {
//         const response = await axios.request(
//           PostMethod(`api/agent/user-withdraw/action/rejected/${id}`, {
//             remark,
//           })
//         );
//         if (response.data.status === 'success') {
//           toast.success(response.data.message);
//           setNum(num + 1);
//           setId(0);
//           return;
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };
//   const confirmHandler = async (id) => {
//     setUserId(id);
//     if (agent_action === 1) {
//       try {
//         const response = await axios.request(
//           PostMethod(`api/agent/user-withdraw/action/approve/${id}`)
//         );

//         if (response.data.status === 'success') {
//           toast.success(response.data.message);
//           setNum(num + 1);
//           setId(0);
//           return;
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     setOpenModal(true);
//   };
//   useEffect(() => {}, [userId]);

//   const differStatus = (user) => {
//     if (user.status === 'pending') {
//       return (
//         <TableCell align='left'>
//           {id !== user.id ? (
//             <Button
//               sx={{ fontSize: '0.7rem' }}
//               onClick={() => setId(user.id)}
//               style={{ width: 120 }}
//               color='success'
//               variant='contained'
//             >
//               Pending
//             </Button>
//           ) : (
//             <FormControl className={classes['form-control']}>
//               <Select
//                 size='small'
//                 sx={{ width: 120 }}
//                 value={agent_action}
//                 onChange={(e) => setAgent_action(e.target.value)}
//               >
//                 {/* <MenuItem value="pending">Pending</MenuItem> */}
//                 <MenuItem value={1}>Approve</MenuItem>
//                 <MenuItem value={0}>Reject</MenuItem>
//               </Select>
//               <Button
//                 onClick={() => {
//                   confirmHandler(user.id);
//                 }}
//               >
//                 Confirm
//               </Button>
//             </FormControl>
//           )}
//         </TableCell>
//       );
//     }
//     if (user.status !== ('pending' && 'receiver-rejected')) {
//       return (
//         <StyledTableCell align='left'>
//           <p
//             className={classes['btn']}
//             style={{ backgroundColor: 'blue', fontSize: '0.7rem' }}
//           >
//             Approve
//           </p>
//         </StyledTableCell>
//       );
//     }
//     if (user.status === 'receiver-rejected') {
//       return (
//         <StyledTableCell align='left'>
//           <p
//             className={classes['btn']}
//             style={{ backgroundColor: 'red', fontSize: '0.7rem' }}
//           >
//             Reject
//           </p>
//         </StyledTableCell>
//       );
//     }
//   };
//   const columns = [
//     'No',
//     'user-ID',
//     'User Name',
//     'Payment Provider',
//     'Amount',
//     'Phone/Account',
//     'Payment Date',
//     'User Action',
//     'Action',
//   ];
//   return (
//     <PageCard title='ငွေထုတ်'>
//       <NormalTable columns={columns} data={data}>
//         {data?.map((user, index) => (
//           <TableRow key={index}>
//             <TableCell component='th' scope='row'>
//               {index + 1}
//             </TableCell>
//             <TableCell align='left'>{user.user.id}</TableCell>
//             <TableCell align='left'>{user.user.name}</TableCell>
//             <TableCell align='left'>{user.payment_provider.name}</TableCell>
//             <TableCell align='left'>{user.amount}</TableCell>
//             <TableCell align='left'>{user.account_no}</TableCell>

//             <TableCell align='left'>{ChangeDate(user?.created_at)}</TableCell>
//             <TableCell align='left'>
//               <p
//                 className={classes['btn']}
//                 style={{
//                   backgroundColor:
//                     user.user_action === 'Complete' ? 'green' : 'red',
//                 }}
//               >
//                 {user.user_action}
//               </p>
//             </TableCell>

//             <TableCell align='right'>{differStatus(user)}</TableCell>
//           </TableRow>
//         ))}
//       </NormalTable>
//       {/* <CancelModal open={openModal} userId={userId} handleClose={handleClose} setOpen={setOpenModal} remark={remark} setRemark={setRemark} submitHandler={submitHandler} /> */}
//       {data.length !== 0 && (
//         <CustomPagination
//           setPage={setPage}
//           totalPage={pagination?.meta?.last_page}
//         />
//       )}

//       {/* <ApproveActionModal
//         open={open}
//         handleClose={closeHandler}
//         id={id}
//         AlertToast={AlertToast}
//         num={num}
//         setNum={setNum}
//       /> */}
//       {/* <RejectActionModal
//         open={cancelopen}
//         handleClose={CancelcloseHandler}
//         id={id}
//         AlertToast={AlertToast}
//         num={num}
//         setNum={setNum}
//       /> */}
//     </PageCard>
//   );
// };

// export default UserWithDrawTable;
