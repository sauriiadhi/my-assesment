import axios from 'axios';

export const fetchUserData = async () => {
  try {
    const response = await axios.get('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
