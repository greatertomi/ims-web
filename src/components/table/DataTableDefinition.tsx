import { Button } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSnackbarContext } from '../../context/SnackbarContext';
import ProductDialog from '../product/ProductDialog';

const TableActions = ({ params }: { params: GridValueGetterParams }) => {
  const [openModal, setOpenModal] = useState(false);
  const { updateSnackbar } = useSnackbarContext();

  const handleModalClose = () => setOpenModal(false);

  const handleModalOpen = () => setOpenModal(true);

  const handleSaveData = () => {
    setOpenModal(false);
    updateSnackbar({
      show: true,
      severity: 'success',
      message: 'Data updated successfully!',
    });
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
        productName={params.row.internalTitle || 'Product'}
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
    renderCell: (params: GridValueGetterParams) => (
      <TableActions params={params} />
    ),
  },
];
