import { DFW_STORES } from "./stores";
import { StoreInventory } from "@/types/inventory";

export interface InventoryResponse {
  updatedAt: string;
  stores: StoreInventory[];
}

export async function getAppleInventory(): Promise<StoreInventory[]> {
  return DFW_STORES.map((store) => ({
    store,
    silver: false,
    spaceGray: false,
  }));
}

export async function getInventoryData(): Promise<InventoryResponse> {
  return {
    updatedAt: new Date().toISOString(),
    stores: await getAppleInventory(),
  };
}