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
  const store = DFW_STORES.find(
    (s) => s.id === storeId
  );

  //
  // Future Apple inventory lookup goes here
  //
  const silverAvailable = false;
  const spaceGrayAvailable = false;

  return {
    store: store?.name ?? storeId,
    silver: silverAvailable,
    spaceGray: spaceGrayAvailable,
  };
}

export async function getAppleInventory(): Promise<StoreInventory[]> {
  const inventory = await Promise.all(
    DFW_STORES.map((store) =>
      checkStoreInventory(store.id)
    )
  );

  return inventory;
}

export async function getInventoryData(): Promise<InventoryResponse> {
  return {
    updatedAt: new Date().toISOString(),
    stores: await getAppleInventory(),
  };
}