# Paquete Compartido: @monorepo/shared

Este paquete contiene:
- **Constantes**: Enums y listas para estados, roles y categorías.
- **Esquemas Zod**: Validaciones para entidades, creación de productos y checkout.
- **Tipos TypeScript**: Derivados automáticamente de los esquemas Zod.

## Estructura

```
packages/shared/
├── constants.ts      # Enums y listas de valores
├── schemas.ts        # Esquemas Zod para validación
├── types.ts          # Tipos TypeScript derivados de Zod
├── index.ts          # Exporta todo el paquete
├── package.json      # Configuración del paquete
```

## Uso

Importa desde cualquier app del monorepo:

```ts
import { ProductSchema, ORDER_STATUS, type Product } from '@monorepo/shared';
```

- **No se permiten strings sueltos**: Usa siempre los enums/constantes.
- **Validaciones estrictas**: Los esquemas de creación y checkout validan todos los campos críticos.
