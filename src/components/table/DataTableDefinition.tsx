import { Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import ProductDialog from '../product/ProductDialog';

const renderActionButton = (params: any) => {
  const [openModal, setOpenModal] = useState(false);
  const { updateShowSnackbar } = useProductContext();

  const onClick = () => {
    console.log('button clicked', params);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
    onClick();
  };

  const handleSaveData = () => {
    setOpenModal(false);
    updateShowSnackbar(true);
  };

  return (
    <>
      <Button onClick={handleModalOpen} variant="contained" size="small">
        Edit
      </Button>
      <Button
        component={Link}
        to={`/products/${params.id}`}
        variant="contained"
        size="small"
        sx={{ ml: 2 }}
      >
        View
      </Button>
      <ProductDialog
        productName="Product"
        open={openModal}
        onClose={handleModalClose}
        onSaveData={handleSaveData}
      />
    </>
  );
};

export const columns: GridColDef[] = [
  { field: 'coreNumber', headerName: 'Core Number', width: 130 },
  { field: 'internalTitle', headerName: 'Internal Title', width: 250 },
  {
    field: 'vendor',
    headerName: 'Vendor',
    width: 120,
  },
  {
    field: 'vendorSku',
    headerName: 'Vendor SKU',
    sortable: false,
    width: 120,
  },
  {
    field: 'vendorOrderUnit',
    headerName: 'Order Unit',
    sortable: false,
    width: 120,
  },
  {
    field: 'moq',
    headerName: 'MOQ',
    type: 'number',
    width: 80,
  },
  {
    field: 'totalQuantity',
    headerName: 'Total Quantity',
    type: 'number',
    width: 120,
    valueGetter: (params) => {
      return params.row.totalQuantity || 'Null';
    },
  },
  {
    field: 'bufferDays',
    headerName: 'Buffer Days',
    type: 'number',
    width: 100,
  },
  {
    field: 'restockable',
    headerName: 'Restockable',
    width: 120,
  },
  {
    field: 'active',
    headerName: 'Active',
    width: 120,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 180,
    sortable: false,
    renderCell: renderActionButton,
  },
];
