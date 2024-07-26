import React from 'react';
import UserManagement from './components/UserManagement';
import AdminComponent from './components/AdminComponent';
import UserComponent from './components/UserComponent';
import RoleBasedRender from './components/RoleBasedRender';

const App: React.FC = () => {
  return (
    <div>
      <UserManagement />
      <RoleBasedRender roles={['admin']} fallback={<UserComponent />}>
        <AdminComponent />
      </RoleBasedRender>
    </div>
  );
};

export default App;
