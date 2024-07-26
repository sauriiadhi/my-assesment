import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface RoleBasedRenderProps {
  roles: string[];
  fallback: React.ReactNode;
  children: React.ReactNode;
}

const RoleBasedRender = ({ roles, fallback, children }: RoleBasedRenderProps) => {
  const { role } = useSelector((state: RootState) => state.user);

  if (roles.includes(role)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};

export default RoleBasedRender;
