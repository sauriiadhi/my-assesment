import React from 'react';
import UserPanel from './UserPanel';
import { initialData } from '../dataConstants';
const AdminComponent = () => {
  const data = initialData
  return (
    <UserPanel data={data} type="Admin" />
  );
};

export default AdminComponent;
