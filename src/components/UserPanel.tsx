import React from 'react';
import { PanelContainer, PanelHeader, DataContainer, DataItem, Label } from './Panel.styled';

interface UserPanelProps {
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
  }[];
  type?: string;
}

const UserPanel = ({ data, type = 'User'  }: UserPanelProps) => {
  return (
    <PanelContainer>
      <PanelHeader>{type} Panel</PanelHeader>
      <DataContainer>
        {data.map((item) => (
          <DataItem key={item.id}>
            <Label>ID:</Label> {item.id} <br />
            <Label>Name:</Label> {item.name} <br />
            <Label>Email:</Label> {item.email} <br />
            <Label>Role:</Label> {item.role}
          </DataItem>
        ))}
      </DataContainer>
    </PanelContainer>
  );
};

export default UserPanel;
