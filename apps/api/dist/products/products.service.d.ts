import { PrismaService } from '../prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
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
        nutritionTable: import("@prisma/client/runtime/library").JsonValue;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
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
        nutritionTable: import("@prisma/client/runtime/library").JsonValue;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
