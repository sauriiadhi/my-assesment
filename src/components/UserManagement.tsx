import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setUser, updateRole } from '../redux/userSlice';
import { fetchUserData } from '../api';
import { Container, Heading, Button } from './Panel.styled'; // Import styled components

const UserManagement = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { username, role } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      if (data) {
        dispatch(setUser(data));
      }
    };
    getUserData();
  }, [dispatch]);

  const handleRoleChange = (newRole: string) => {
    dispatch(updateRole(newRole));
  };

  return (
    <Container>
      <Heading>Welcome, {username}</Heading>
      <Button 
        isActive={role === 'admin'} 
        onClick={() => handleRoleChange(role === 'user' ? 'admin' : 'user')}
      >
        {role === 'user' ? 'Set Admin Role' : 'Set User Role'}
      </Button>
    </Container>
  );
};

export default UserManagement;
