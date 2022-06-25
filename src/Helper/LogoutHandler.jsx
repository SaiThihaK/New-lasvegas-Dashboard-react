import axios from 'axios';
import { PostMethod } from '../services/api-services';
import RefreshPage from './RefreshPage';

export const logoutHandler = async () => {
  try {
    const response = await axios.request(PostMethod(`api/logout`));
    if (response.data.status === 'success') {
      localStorage.removeItem('status');
      localStorage.removeItem('jToken');
      localStorage.removeItem('lToken');
      localStorage.removeItem('type');
      // window.location.href("/");
      RefreshPage();
      return;
    }
  } catch (error) {
    if (
      error.response.status === 401 ||
      error.response.data.message === 'Unauthenticated.'
    ) {
      localStorage.removeItem('status');
      localStorage.removeItem('jToken');
      localStorage.removeItem('lToken');
      localStorage.removeItem('type');
      // window.location.href("/");
      RefreshPage();
      return;
    }
  }
};
