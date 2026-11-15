import { DFW_STORES } from "./stores";

export async function getAppleInventory() {
  return DFW_STORES.map((store) => ({
    store,
    silver: false,
    spaceGray: false,
  }));
}