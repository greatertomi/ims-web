import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import DataTable from '../components/table/DataTable';

export const DataPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DataPage = () => {
  return (
    <DataPageContainer>
      <Navbar />
      <DataTable />
    </DataPageContainer>
  );
};

export default DataPage;
