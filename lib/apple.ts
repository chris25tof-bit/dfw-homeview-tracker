import { DFW_STORES } from "./stores";
import { StoreInventory } from "@/types/inventory";

export async function getAppleInventory(): Promise<StoreInventory[]> {
  return DFW_STORES.map((store) => ({
    store,
    silver: false,
    spaceGray: false,
  }));
}