import { DFW_STORES } from "./stores";
import { StoreInventory } from "@/types/inventory";

export interface InventoryResponse {
  updatedAt: string;
  stores: StoreInventory[];
}

export const PRODUCTS = {
  silver: {
    id: "silver",
    name: "Apple HomeView Silver",
    url: "https://www.apple.com/shop/buy-home/apple-homeview/apple-homeview-silver",
  },

  spaceGray: {
    id: "space-gray",
    name: "Apple HomeView Space Gray",
    url: "https://www.apple.com/shop/buy-home/apple-homeview/apple-homeview-space-gray",
  },
};

async function checkStoreInventory(
  storeId: string
): Promise<StoreInventory> {
  // Placeholder for future Apple lookup

  const store = DFW_STORES.find(
    (s) => s.id === storeId
  );

  return {
    store: store?.name ?? storeId,
    silver: false,
    spaceGray: false,
  };
}

export async function getAppleInventory(): Promise<StoreInventory[]> {
  return Promise.all(
    DFW_STORES.map((store) =>
      checkStoreInventory(store.id)
    )
  );
}

export async function getInventoryData(): Promise<InventoryResponse> {
  return {
    updatedAt: new Date().toISOString(),
    stores: await getAppleInventory(),
  };
}