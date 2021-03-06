import { ProductLocation } from './location';

export interface Product {
  id: number;
  coreNumber: string;
  internalTitle: string;
  vendor: string;
  vendorTitle: string | null;
  vendorSku: string;
  backupVendor: string;
  backupVendorSKU: string;
  restockable: boolean | null;
  vendorOrderUnit: 'Case' | 'Piece';
  vendorCasePack: string | null;
  moq: number;
  bufferDays: number;
  minimumLevel: number | null;
  productUrl: string | null;
  noteForNextOrder: string | null;
  casePack: string | null;
  piecesPerInternalBox: number | null;
  boxesPerCase: number | null;
  tag1: string | null;
  tag2: string | null;
  tag3: string | null;
  tag4: string | null;
  hamzat: string | null;
  active: boolean;
  ignoreUntil: string | null;
  notes: string | null;
  totalQuantity?: number;
  locations?: ProductLocation[];
}
