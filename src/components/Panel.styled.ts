import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

export const Heading = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

export const Button = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#007bff' : '#28a745')};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#0056b3' : '#218838')};
  }
`;

export const PanelContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PanelHeader = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

export const DataContainer = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const DataItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;
