import React from 'react';
import { initialData } from '../dataConstants';
import UserPanel from './UserPanel';

const UserComponent = () => {
  const data = initialData;
  return (
    <UserPanel data={data}/>
  )
};

export default UserComponent;
