import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
}
