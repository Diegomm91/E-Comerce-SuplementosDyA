// packages/shared/schemas.ts
import { z } from "zod";
import { ORDER_STATUS, USER_ROLES, SUPPLEMENT_CATEGORIES } from "./constants";

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string(),
  role: z.enum(USER_ROLES),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.enum(SUPPLEMENT_CATEGORIES),
});

export const BatchSchema = z.object({
  id: z.string().uuid(),
  productVariantId: z.string().uuid(),
  lotNumber: z.string().min(1),
  expirationDate: z.string().datetime(),
  stock: z.number().int().min(0),
});

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  brand: z.string().min(2),
  description: z.string().min(10),
  protein: z.number().min(0),
  carbohydrates: z.number().min(0),
  fats: z.number().min(0),
  calories: z.number().min(0),
  isGlutenFree: z.boolean(),
  isVegan: z.boolean(),
  nutritionTable: z.record(z.string(), z.union([z.string(), z.number()])),
  categoryId: z.string().uuid(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const ProductVariantSchema = z.object({
  id: z.string().uuid(),
  productId: z.string().uuid(),
  flavor: z.string().min(1),
  size: z.string().min(1),
  price: z.number().gt(0),
  discountPrice: z.number().gt(0).optional(),
  discountEndsAt: z.string().datetime().optional(),
  stock: z.number().int().min(0),
  sku: z.string().min(1),
});

export const OrderItemSchema = z.object({
  id: z.string().uuid(),
  orderId: z.string().uuid(),
  productVariantId: z.string().uuid(),
  quantity: z.number().int().min(1),
  price: z.number().gt(0),
});

export const OrderSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  items: z.array(OrderItemSchema),
  status: z.enum(ORDER_STATUS),
  total: z.number().gt(0),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  paymentId: z.string().optional(),
});

// Esquema para creación de producto (sin campos autogenerados)
export const CreateProductSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Esquema para checkout (orden de compra)
export const CheckoutSchema = z.object({
  userEmail: z.string().email(),
  items: z.array(
    z.object({
      productVariantId: z.string().uuid(),
      quantity: z.number().int().min(1),
    })
  ),
  paymentMethod: z.string().min(2),
  shippingAddress: z.string().min(10),
});
