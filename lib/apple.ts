import { DFW_STORES } from "./stores";
import { StoreInventory } from "@/types/inventory";

export interface InventoryResponse {
  updatedAt: string;
  stores: StoreInventory[];
}

export const PRODUCTS = {
  silver: {
    name: "Apple HomeView Silver",
    url: "https://www.apple.com/shop/buy-home/apple-homeview/apple-homeview-silver",
  },

  spaceGray: {
    name: "Apple HomeView Space Gray",
    url: "https://www.apple.com/shop/buy-home/apple-homeview/apple-homeview-space-gray",
  },
};

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