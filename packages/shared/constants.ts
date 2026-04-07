// packages/shared/constants.ts

export const ORDER_STATUS = [
  "PENDING",
  "PAID",
  "SHIPPED",
  "DELIVERED",
  "CANCELLED",
] as const;
export type OrderStatus = typeof ORDER_STATUS[number];

export const USER_ROLES = ["ADMIN", "CLIENT"] as const;
export type UserRole = typeof USER_ROLES[number];

export const SUPPLEMENT_CATEGORIES = [
  "PROTEINAS",
  "CREATINAS",
  "PRE_ENTRENOS",
  "AMINOACIDOS",
  "VITAMINAS",
  "BARRAS",
  "OTROS",
] as const;
export type SupplementCategory = typeof SUPPLEMENT_CATEGORIES[number];
