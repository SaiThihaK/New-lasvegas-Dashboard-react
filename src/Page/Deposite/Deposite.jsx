import {
  FormControl,
  MenuItem,
  Select,
  TableRow,
  TableCell,
  Button,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  NormalTable,
  PageCard,
  CustomLoading,
  CustomPagination,
} from '../../Components';
import { ChangeDate } from '../../Helper/ChangeDate';
import { CustomGetFunction } from '../../services';
import { PostMethod } from '../../services/api-services';
import classes from './Deposite.module.css';
const columns = [
  'No',
  'User-ID',
  'Account Name',
  'Phone/Account No',
  'Transition ID',
  'Payment Provider',
  'Amount',
  'Status',
  'Payment Date',
];

const Deposite = () => {
  const [num, setNum] = useState(0);
  const [filterStatus, setFilterStatus] = useState('');
  // const type = localStorage.getItem('type');
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [ID, setID] = useState(null);
  const { data, loading, pagination } = CustomGetFunction(
    `api/deposit-receive?sortColumn=id&sortDirection=desc&limit=20&page=${page}${filterStatus}`,
    [num, page, filterStatus]
  );
  console.log(data);
  const onChangeValue = (e) => setValue(e.target.value);
  useEffect(() => {}, [num]);
  const handleClick = (id) => {
    setID(id);
    // if (id === ID) {
    //   setToggle(true);
    // }
  };
  const differStatus = (user) => {
    if (user.status === 'pending') {
      return (
        <TableCell align='left'>
          {ID !== user.id ? (
            <Button
              onClick={() => handleClick(user.id)}
              style={{ width: 80 }}
              color='success'
              variant='contained'
            >
              {user.status}
            </Button>
          ) : (
            <FormControl className={classes['form-control']}>
              <Select value={value} onChange={onChangeValue} size='small'>
                {/* <MenuItem value="pending">Pending</MenuItem> */}
                <MenuItem value='approve'>Approve</MenuItem>
                <MenuItem value='rejected'>Reject</MenuItem>
              </Select>
              <Button onClick={confirmHandler}>Confirm</Button>
            </FormControl>
          )}
        </TableCell>
      );
    }
    if (user.status === 'approve') {
      return (
        <TableCell align='left'>
          <p className={classes['btn']} style={{ backgroundColor: 'blue' }}>
            Approve
          </p>
        </TableCell>
      );
    }
    if (user.status === 'rejected') {
      return (
        <TableCell align='left'>
          <p className={classes['btn']} style={{ backgroundColor: 'red' }}>
            Reject
          </p>
        </TableCell>
      );
    }
  };
  const confirmHandler = async () => {
    if (value === 'approve') {
      submitHandler();
    }
    if (value === 'pending') {
      setID('');
      setValue('');
      return;
    }
    if (value === 'rejected') {
      // openHandler();
      return;
    }
  };
  const submitHandler = async () => {
    try {
      const response = await axios.request(
        PostMethod(`api/deposit/action/${ID}`, {
          status: 'approve',
        })
      );
      console.log(response);
      if (response.data.status === 'success') {
        toast.success(response.data.message);
        setID('');
        setNum(num + 1);
        setValue('');
        //   dispatch(getRender({render: !render}));
        //   ModalCloseHandler();
        return;
      }
      if (response.data.status === 'error') {
        toast.error(response.data.message);
        setID('');
        setNum(num + 1);
        setValue('');
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <PageCard title='ငွေသွင်း'>
      <FormControl sx={{ width: 200 }} style={{ marginbottom: 10 }}>
        <label>Status Filter</label>
        <Select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          size='small'
        >
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='&status=pending'>Pending</MenuItem>
          <MenuItem value='&status=approve'>Approve</MenuItem>
          <MenuItem value='&status=rejected'>Reject</MenuItem>
        </Select>
      </FormControl>
      {loading ? (
        <NormalTable columns={columns} data={data}>
          {data?.map((user, index) => (
            <TableRow key={index}>
              <TableCell component='th' scope='row'>
                {index + 1}
              </TableCell>
              <TableCell align='left'>{user.submit_user?.id}</TableCell>
              <TableCell align='left'>{user.account_name}</TableCell>
              <TableCell align='left'>{user.account_no}</TableCell>
              <TableCell align='left'>{user.transaction_no}</TableCell>
              <TableCell align='left'>{user.payment_provider_name}</TableCell>
              <TableCell align='left'>{user.amount}</TableCell>
              <TableCell align='left'>{ChangeDate(user.created_at)}</TableCell>

              {differStatus(user)}
            </TableRow>
          ))}
        </NormalTable>
      ) : (
        <CustomLoading />
      )}

      {data.length !== 0 && (
        <CustomPagination
          setPage={setPage}
          totalPage={pagination?.meta?.last_page}
        />
      )}
    </PageCard>
  );
};

export default Deposite;

// import {
//   FormControl,
//   MenuItem,
//   Select,
//   TableRow,
//   TableCell,
//   Button,
// } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { NormalTable, PageCard, CustomLoading } from '../../Components';
// import { ChangeDate } from '../../Helper/ChangeDate';
// import { CustomGetFunction } from '../../services';
// import { PostMethod } from '../../services/api-services';
// import classes from './Deposite.module.css';
// const columns = [
//   'No',
//   'User-ID',
//   'Account Name',
//   'Phone/Account No',
//   'Transition ID',
//   'Payment Provider',
//   'Amount',
//   'Status',
//   'Payment Date',
// ];

// const Deposite = () => {
//   const [num, setNum] = useState(0);
//   const [filterStatus, setFilterStatus] = useState('');
//   const type = localStorage.getItem('type');
//   const [page, setPage] = useState(1);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');
//   const [ID, setID] = useState(null);
//   const { data, loading } = CustomGetFunction(
//     `api/deposit-receive?sortColumn=id&sortDirection=desc&limit=20&page=${page}${filterStatus}`,
//     [num, page, filterStatus]
//   );
//   console.log(data);
//   const onChangeValue = (e) => setValue(e.target.value);
//   useEffect(() => {}, [num]);
//   const handleClick = (id) => {
//     setID(id);
//     if (id === ID) {
//       setToggle(true);
//     }
//   };
//   const differStatus = (user) => {
//     if (user.status === 'pending') {
//       return (
//         <TableCell align='left'>
//           {ID !== user.id ? (
//             <Button
//               onClick={() => handleClick(user.id)}
//               style={{ width: 80 }}
//               color='success'
//               variant='contained'
//             >
//               {user.status}
//             </Button>
//           ) : (
//             <FormControl className={classes['form-control']}>
//               <Select value={value} onChange={onChangeValue} size='small'>
//                 {/* <MenuItem value="pending">Pending</MenuItem> */}
//                 <MenuItem value='approve'>Approve</MenuItem>
//                 <MenuItem value='rejected'>Reject</MenuItem>
//               </Select>
//               <Button onClick={confirmHandler}>Confirm</Button>
//             </FormControl>
//           )}
//         </TableCell>
//       );
//     }
//     if (user.status === 'approve') {
//       return (
//         <TableCell align='left'>
//           <p className={classes['btn']} style={{ backgroundColor: 'blue' }}>
//             Approve
//           </p>
//         </TableCell>
//       );
//     }
//     if (user.status === 'rejected') {
//       return (
//         <TableCell align='left'>
//           <p className={classes['btn']} style={{ backgroundColor: 'red' }}>
//             Reject
//           </p>
//         </TableCell>
//       );
//     }
//   };
//   const confirmHandler = async () => {
//     if (value === 'approve') {
//       submitHandler();
//     }
//     if (value === 'pending') {
//       setID('');
//       setValue('');
//       return;
//     }
//     if (value === 'rejected') {
//       // openHandler();
//       return;
//     }
//   };
//   const submitHandler = async () => {
//     try {
//       const response = await axios.request(
//         PostMethod(`api/deposit/action/${ID}`, {
//           status: 'approve',
//         })
//       );
//       console.log(response);
//       if (response.data.status === 'success') {
//         toast.success(response.data.message);
//         setID('');
//         setNum(num + 1);
//         setValue('');
//         //   dispatch(getRender({render: !render}));
//         //   ModalCloseHandler();
//         return;
//       }
//       if (response.data.status === 'error') {
//         toast.error(response.data.message);
//         setID('');
//         setNum(num + 1);
//         setValue('');
//         return;
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <PageCard title='ငွေသွင်း'>
//       <FormControl sx={{ width: 200 }} style={{ marginbottom: 10 }}>
//         <label>Status Filter</label>
//         <Select
//           value={filterStatus}
//           onChange={(e) => setFilterStatus(e.target.value)}
//           size='small'
//         >
//           <MenuItem value=''>All</MenuItem>
//           <MenuItem value='&status=pending'>Pending</MenuItem>
//           <MenuItem value='&status=approve'>Approve</MenuItem>
//           <MenuItem value='&status=rejected'>Reject</MenuItem>
//         </Select>
//       </FormControl>
//       {loading ? (
//         <NormalTable columns={columns} data={data}>
//           {data?.map((user, index) => (
//             <TableRow key={index}>
//               <TableCell component='th' scope='row'>
//                 {index + 1}
//               </TableCell>
//               <TableCell align='left'>{user.submit_user?.id}</TableCell>
//               <TableCell align='left'>{user.account_name}</TableCell>
//               <TableCell align='left'>{user.account_no}</TableCell>
//               <TableCell align='left'>{user.transaction_no}</TableCell>
//               <TableCell align='left'>{user.payment_provider_name}</TableCell>
//               <TableCell align='left'>{user.amount}</TableCell>
//               <TableCell align='left'>{ChangeDate(user.created_at)}</TableCell>

//               {differStatus(user)}
//             </TableRow>
//           ))}
//         </NormalTable>
//       ) : (
//         <CustomLoading />
//       )}
//     </PageCard>
//   );
// };

// export default Deposite;
