import { Button } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { useSnackbarContext } from '../../context/SnackbarContext';
import apiClient from '../../utils/apiClient';
import { queryClient } from '../../utils/reactQuery';
import ProductDialog from '../product/ProductDialog';

const TableActions = ({ params }: { params: GridValueGetterParams }) => {
  const [openModal, setOpenModal] = useState(false);
  const { mutate } = useMutation(
    'updateQuantity',
    (newData) => {
      return apiClient.put(`/products/${params.id}`, newData);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('products');
        await queryClient.invalidateQueries(`productLocations${params.id}`);
      },
    }
  );
  const { updateSnackbar } = useSnackbarContext();

  const handleModalClose = () => setOpenModal(false);

  const handleModalOpen = () => setOpenModal(true);

  const handleSaveData = async (values: any) => {
    try {
      setOpenModal(false);
      await mutate(values);
      updateSnackbar({
        show: true,
        severity: 'success',
        message: 'Data updated successfully!',
      });
    } catch (err) {
      console.error(err);
      updateSnackbar({
        show: true,
        severity: 'error',
        message: 'Data updated failed!',
      });
    }
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
        productId={+params.id}
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
