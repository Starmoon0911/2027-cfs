import itemFormats from "../data/item-formats.json";

export const purposes = ["talent_recruitment", "brand_exposure", "product_promotion"] as const;

// A few package-only items need a specific presentation format in the catalog.
export function getItemFormat(id: string, sourceType: string): string {
	return itemFormats[id as keyof typeof itemFormats] || sourceType;
}
