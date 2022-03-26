import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { FC, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { ProductLocation } from '../../types/location';
import apiClient from '../../utils/apiClient';

interface ProductDialogProps {
  productId: number;
  productName: string;
  open: boolean;
  onClose: () => void;
  onSaveData: (values: any) => void;
}

const ProductDialog: FC<ProductDialogProps> = ({
  productId,
  productName,
  open,
  onClose,
  onSaveData,
}) => {
  const { data: locationRes } = useQuery(
    `productLocations${productId}`,
    async () => apiClient.get(`/locations/${productId}`)
  );
  const locations: ProductLocation[] = locationRes?.data || null;
  const [values, setValues] = useState({
    location: '',
    action: 'add',
    newQuantity: 1,
  });

  const handleSaveData = () => {
    onSaveData(values);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  useMemo(() => {
    setValues({
      ...values,
      location: locations?.length > 0 ? locations[0].location : '',
    });
  }, [locations]);

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Update Quantity</DialogTitle>
        <DialogContent>
          <Box mb={2}>{productName}</Box>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="location-select">Locations</InputLabel>
            <Select
              labelId="location-select"
              id="location"
              name="location"
              value={values.location}
              label="Locations"
              size="small"
              onChange={handleChange}
            >
              {locations?.map(({ warehouse, location, quantity }, index) => (
                <MenuItem value={location} key={`location${index}`}>
                  {warehouse} ({location}) - {quantity}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <FormControl sx={{ width: 150 }}>
              <InputLabel id="action-select">Action</InputLabel>
              <Select
                labelId="action-select"
                id="action"
                name="action"
                value={values.action}
                label="Action"
                size="small"
                onChange={handleChange}
              >
                <MenuItem value="add">Add</MenuItem>
                <MenuItem value="subtract">subtract</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="newQuantity"
              name="newQuantity"
              placeholder="quantity"
              type="number"
              value={values.newQuantity}
              variant="outlined"
              size="small"
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSaveData} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
