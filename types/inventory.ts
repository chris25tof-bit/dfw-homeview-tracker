export type InventoryStatus =
  | "in-stock"
  | "available-to-order"
  | "unavailable"
  | "unknown";

export interface ProductAvailability {
  status: InventoryStatus;
  message: string;
}

export interface StoreInventory {
  store: string;

  silver: ProductAvailability;

  spaceGray: ProductAvailability;
}