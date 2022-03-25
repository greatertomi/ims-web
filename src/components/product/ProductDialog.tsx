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

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
}

const ProductDialog: FC<ProductDialogProps> = ({ open, onClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Update Quantity</DialogTitle>
        <DialogContent>
          <Box mb={2}>Product Name</Box>
          <FormControl fullWidth>
            <InputLabel id="location-select">Age</InputLabel>
            <Select
              labelId="location-select"
              id="location"
              value={10}
              label="Age"
              size="small"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <FormControl sx={{ width: 150 }}>
              <InputLabel id="action-select">Action</InputLabel>
              <Select
                labelId="action-select"
                id="action"
                value="add"
                label="Age"
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
          <Button onClick={onClose} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
