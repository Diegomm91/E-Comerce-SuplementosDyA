import { PrismaService } from '../prisma/prisma.service';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        category: {
            id: string;
            name: string;
        };
        variants: {
            id: string;
            productId: string;
            flavor: string;
            size: string;
            price: import("@prisma/client/runtime/client").Decimal;
            discountPrice: import("@prisma/client/runtime/client").Decimal | null;
            discountEndsAt: Date | null;
            stock: number;
            sku: string;
        }[];
    } & {
        id: string;
        name: string;
        brand: string;
        description: string;
        protein: number;
        carbohydrates: number;
        fats: number;
        calories: number;
        isGlutenFree: boolean;
        isVegan: boolean;
        nutritionTable: import("@prisma/client/runtime/client").JsonValue;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
}
