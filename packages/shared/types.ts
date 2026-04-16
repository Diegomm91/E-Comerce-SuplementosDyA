// Tipos e interfaces compartidas para el E-Commerce de Suplementos

import {
  UserSchema,
  CategorySchema,
  BatchSchema,
  ProductSchema,
  ProductVariantSchema,
  OrderItemSchema,
  OrderSchema,
  CreateProductSchema,
  CheckoutSchema,
} from "./schemas";
import { z } from "zod";

export type User = z.infer<typeof UserSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Batch = z.infer<typeof BatchSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type ProductVariant = z.infer<typeof ProductVariantSchema>;
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type Order = z.infer<typeof OrderSchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;
export type Checkout = z.infer<typeof CheckoutSchema>;
