import React from 'react';
import styled from 'styled-components';
import DataTable from '../components/DataTable';
import Navbar from '../components/Navbar';

const DataPageContainer = styled.div`
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
