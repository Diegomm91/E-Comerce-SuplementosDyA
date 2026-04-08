import { prisma } from './prismaClient.js';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno desde la raíz del monorepo
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

async function main() {
  console.log('Iniciando seed...');

  // 1. Crear Categorías
  const proteinas = await prisma.category.upsert({
    where: { name: 'Proteínas' },
    update: {},
    create: { name: 'Proteínas' },
  });

  const creatinas = await prisma.category.upsert({
    where: { name: 'Creatinas' },
    update: {},
    create: { name: 'Creatinas' },
  });

  const aminoacidos = await prisma.category.upsert({
    where: { name: 'Aminoácidos' },
    update: {},
    create: { name: 'Aminoácidos' },
  });

  console.log('Categorías creadas.');

  // 2. Crear Productos
  
  // Producto 1: Proteína Whey
  const wheyProtein = await prisma.product.create({
    data: {
      name: 'Whey Protein Isolate',
      brand: 'MuscleMax',
      description: 'Proteína de suero de leche aislada de alta calidad.',
      protein: 25,
      carbohydrates: 2,
      fats: 1,
      calories: 120,
      nutritionTable: {
        servingSize: '30g',
        servingsPerContainer: 30,
        vitaminC: '10%',
        calcium: '15%',
      },
      categoryId: proteinas.id,
      variants: {
        create: [
          {
            flavor: 'Vainilla',
            size: '2lb',
            price: 45.99,
            stock: 50,
            sku: 'WHEY-VAN-2LB',
          },
          {
            flavor: 'Chocolate',
            size: '2lb',
            price: 45.99,
            stock: 40,
            sku: 'WHEY-CHO-2LB',
          },
          {
            flavor: 'Frutilla',
            size: '5lb',
            price: 89.99,
            stock: 20,
            sku: 'WHEY-FRU-5LB',
          },
        ],
      },
    },
  });

  // Producto 2: Creatina Monohidrato
  const creatinaMono = await prisma.product.create({
    data: {
      name: 'Creatine Pure',
      brand: 'PowerLabs',
      description: 'Creatina monohidrato micronizada para máxima absorción.',
      protein: 0,
      carbohydrates: 0,
      fats: 0,
      calories: 0,
      nutritionTable: {
        servingSize: '5g',
        servingsPerContainer: 60,
      },
      categoryId: creatinas.id,
      variants: {
        create: [
          {
            flavor: 'Neutral',
            size: '300g',
            price: 25.50,
            stock: 100,
            sku: 'CREA-NEU-300G',
          },
          {
            flavor: 'Neutral',
            size: '600g',
            price: 42.00,
            stock: 60,
            sku: 'CREA-NEU-600G',
          },
        ],
      },
    },
  });

  console.log('Productos y variantes creados.');
  console.log('Seed completado exitosamente.');
}

main()
  .catch((e) => {
    console.error('Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
