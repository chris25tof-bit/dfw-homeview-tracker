import { DFW_STORES } from "./stores";
import {
  StoreInventory,
  ProductAvailability,
} from "@/types/inventory";

export interface InventoryResponse {
  updatedAt: string;
  stores: StoreInventory[];
}

export const PRODUCTS = {
  silver: {
    id: "silver",
    sku: "MDH14LL/A",
    name: "Apple HomeView Silver",
    url: "https://www.apple.com/shop/buy-home/apple-homeview/apple-homeview-silver",
  },

  spaceGray: {
    id: "space-gray",
    sku: "MDH24LL/A",
    name: "Apple HomeView Space Gray",
    url: "https://www.apple.com/shop/buy-home/apple-homeview/apple-homeview-space-gray",
  },
};

async function checkProduct(
  storeNumber: string,
  sku: string
): Promise<ProductAvailability> {
  try {
    const response = await fetch(
      `https://www.apple.com/shop/fulfillment-messages?fae=true&searchNearby=true&parts.0=${encodeURIComponent(
        sku
      )}&store=${storeNumber}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          Referer:
            "https://www.apple.com/shop/buy-home/apple-homeview/apple-homeview-silver",
          Origin: "https://www.apple.com",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const body = await response.text();

      return {
        status: "unknown",
        message: `Apple ${response.status}: ${body.slice(
          0,
          100
        )}`,
      };
    }

    const data = await response.json();

    const stores =
      data?.body?.content?.pickupMessage?.stores ?? [];

    const matchingStore = stores.find(
      (store: any) =>
        store.storeNumber === storeNumber
    );

    const product =
      matchingStore?.partsAvailability?.[sku];

    if (!product) {
      return {
        status: "unknown",
        message: "No inventory data",
      };
    }

    const pickupDisplay =
      product.pickupDisplay ?? "";

    const pickupQuote =
      product.pickupSearchQuote ??
      "Availability unknown";

    if (
      product.storePickEligible &&
      pickupDisplay === "ships-to-store"
    ) {
      return {
        status: "available-to-order",
        message: pickupQuote,
      };
    }

    if (product.storePickEligible) {
      return {
        status: "in-stock",
        message: pickupQuote,
      };
    }

    return {
      status: "unavailable",
      message: pickupQuote,
    };
  } catch {
    return {
      status: "unknown",
      message: "Request failed",
    };
  }
}

async function checkStoreInventory(
  storeId: string
): Promise<StoreInventory> {
  const store = DFW_STORES.find(
    (s) => s.id === storeId
  );

  if (!store) {
    throw new Error(
      `Unknown store: ${storeId}`
    );
  }

  const silver = await checkProduct(
    store.storeNumber,
    PRODUCTS.silver.sku
  );

  const spaceGray = await checkProduct(
    store.storeNumber,
    PRODUCTS.spaceGray.sku
  );

  return {
    store: store.name,
    silver,
    spaceGray,
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