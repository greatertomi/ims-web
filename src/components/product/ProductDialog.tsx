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
import React, { FC } from 'react';
import { productLocations } from '../../mocks/data';

interface ProductDialogProps {
  productName: string;
  open: boolean;
  onClose: () => void;
  onSaveData: (values: any) => void;
}

const ProductDialog: FC<ProductDialogProps> = ({
  productName,
  open,
  onClose,
  onSaveData,
}) => {
  const locations = productLocations;
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
              value={locations[0].location}
              label="Locations"
              size="small"
            >
              {locations.map(({ warehouse, location, quantity }) => (
                <MenuItem value={location}>
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
                value="add"
                label="Action"
                size="small"
              >
                <MenuItem value="add">Add</MenuItem>
                <MenuItem value="subtract">subtract</MenuItem>
              </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              placeholder="quantity"
              type="email"
              variant="outlined"
              size="small"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSaveData} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
