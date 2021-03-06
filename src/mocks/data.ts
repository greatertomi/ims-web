import { ProductLocation } from '../types/location';
import { Product } from '../types/product';

export const people = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Paul', firstName: 'Andrew', age: 65 },
  { id: 11, lastName: 'Snow 1', firstName: 'Jon', age: 35 },
  { id: 12, lastName: 'Lannister 1', firstName: 'Cersei', age: 42 },
  { id: 13, lastName: 'Lannister 1', firstName: 'Jaime', age: 45 },
  { id: 14, lastName: 'Stark 1', firstName: 'Arya', age: 16 },
  { id: 15, lastName: 'Targaryen 1', firstName: 'Daenerys', age: null },
  { id: 16, lastName: 'Melisandre 1', firstName: null, age: 150 },
  { id: 17, lastName: 'Clifford 1', firstName: 'Ferrara', age: 44 },
  { id: 18, lastName: 'Frances 1', firstName: 'Rossini', age: 36 },
  { id: 19, lastName: 'Roxie 1', firstName: 'Harvey', age: 65 },
  { id: 20, lastName: 'Paul 1', firstName: 'Andrew', age: 65 },
];

export const products: Product[] = [
  {
    id: 4,
    coreNumber: 'Core-10001',
    internalTitle: 'Car CD Visor Organizer Core',
    vendor: 'Vendor 37',
    vendorTitle: null,
    vendorSku: 'SKU 28614',
    backupVendor: 'Vendor 59',
    backupVendorSKU: 'SKU 44562',
    restockable: false,
    vendorOrderUnit: 'Case',
    vendorCasePack: null,
    moq: 5,
    bufferDays: 10,
    minimumLevel: null,
    productUrl: null,
    noteForNextOrder: null,
    casePack: null,
    piecesPerInternalBox: 14,
    boxesPerCase: 0,
    tag1: null,
    tag2: null,
    tag3: null,
    tag4: null,
    hamzat: null,
    active: true,
    ignoreUntil: null,
    notes: null,
  },
  {
    id: 5,
    coreNumber: 'Core-00002',
    internalTitle: 'Camel Tire 383154 1-1/4 Metal Extentions Core',
    vendor: 'Vendor 37',
    vendorTitle: null,
    vendorSku: 'SKU 76040',
    backupVendor: 'Vendor 31',
    backupVendorSKU: 'SKU 99271',
    restockable: true,
    vendorOrderUnit: 'Piece',
    vendorCasePack: null,
    moq: 1,
    bufferDays: 14,
    minimumLevel: null,
    productUrl: null,
    noteForNextOrder: null,
    casePack: null,
    piecesPerInternalBox: 20,
    boxesPerCase: 0,
    tag1: null,
    tag2: null,
    tag3: null,
    tag4: null,
    hamzat: null,
    active: false,
    ignoreUntil: null,
    notes: null,
  },
  {
    id: 6,
    coreNumber: 'Core-00003',
    internalTitle: 'Liquid Fence 148 Goose Repellent, 1-Gallon Concentrate',
    vendor: 'Vendor 16',
    vendorTitle: null,
    vendorSku: 'SKU 29009',
    backupVendor: 'Vendor 45',
    backupVendorSKU: 'SKU 55883',
    restockable: true,
    vendorOrderUnit: 'Piece',
    vendorCasePack: null,
    moq: 10,
    bufferDays: 30,
    minimumLevel: 5,
    productUrl: null,
    noteForNextOrder: null,
    casePack: null,
    piecesPerInternalBox: 18,
    boxesPerCase: 1,
    tag1: null,
    tag2: null,
    tag3: null,
    tag4: null,
    hamzat: null,
    active: true,
    ignoreUntil: null,
    notes: null,
  },
  {
    id: 7,
    coreNumber: 'Core-00004',
    internalTitle: 'Scosche IU335K Hardware Connectivity Kit',
    vendor: 'Vendor 7',
    vendorTitle: null,
    vendorSku: 'SKU 59894',
    backupVendor: 'Vendor 61',
    backupVendorSKU: 'SKU 69057',
    restockable: true,
    vendorOrderUnit: 'Piece',
    vendorCasePack: null,
    moq: 2,
    bufferDays: 18,
    minimumLevel: null,
    productUrl: null,
    noteForNextOrder: null,
    casePack: null,
    piecesPerInternalBox: 30,
    boxesPerCase: 4,
    tag1: null,
    tag2: null,
    tag3: null,
    tag4: null,
    hamzat: null,
    active: true,
    ignoreUntil: null,
    notes: null,
  },
  {
    id: 8,
    coreNumber: 'Core-00005',
    internalTitle: 'Flo Master .5 gallon Hand Sprayer Core',
    vendor: 'Vendor 12',
    vendorTitle: null,
    vendorSku: 'SKU 98487',
    backupVendor: 'Vendor 93',
    backupVendorSKU: 'SKU 65669',
    restockable: false,
    vendorOrderUnit: 'Case',
    vendorCasePack: null,
    moq: 1,
    bufferDays: 14,
    minimumLevel: null,
    productUrl: null,
    noteForNextOrder: null,
    casePack: null,
    piecesPerInternalBox: 14,
    boxesPerCase: 0,
    tag1: null,
    tag2: null,
    tag3: null,
    tag4: null,
    hamzat: null,
    active: true,
    ignoreUntil: null,
    notes: null,
  },
];

export const productLocations: ProductLocation[] = [
  {
    id: 12,
    warehouse: '2. Pre-Processed',
    location: 'A50',
    quantity: 21,
  },
  {
    id: 13,
    warehouse: '2. Pre-Processed',
    location: 'A51',
    quantity: 30,
  },
  {
    id: 14,
    warehouse: '2. Pre-Processed',
    location: 'A53',
    quantity: 2,
  },
  {
    id: 15,
    warehouse: '2. Pre-Processed',
    location: 'A55',
    quantity: 23,
  },
  {
    id: 16,
    warehouse: '1. Cores',
    location: 'B04',
    quantity: 0,
  },
];
