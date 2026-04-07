# E-Commerce Suplementos - Monorepo

Este proyecto es un e-commerce profesional de suplementos deportivos, diseñado con una arquitectura escalable y mantenible, siguiendo principios SOLID y Clean Code.

## Stack Tecnológico

- **Monorepo:** Turborepo
- **Frontend (Tienda):** Next.js (App Router), Tailwind CSS, Shadcn/ui
- **Panel Administrativo:** Dashboard dentro de Next.js
- **Backend:** Node.js con NestJS
- **Base de Datos:** PostgreSQL + Prisma ORM
- **UI:** Shadcn/ui
- **Autenticación:** JWT/Auth.js
- **Pagos:** Integración Mercado Pago
- **Inventario:** Soporte para variantes (sabores, tamaños)
- **Compartidos:** `packages/shared` para tipos TypeScript y validaciones Zod/DTOs

## Estructura de Carpetas Propuesta

```
E-Comerce suplementos/
├── apps/
│   ├── web/                # Frontend Next.js (Tienda + Admin)
│   └── api/                # Backend NestJS
├── packages/
│   └── shared/             # Tipos, DTOs, validaciones Zod
├── prisma/                 # Esquema y migraciones Prisma
├── .github/
│   └── copilot-instructions.md
├── .env.example            # Variables de entorno de ejemplo
├── package.json            # Configuración raíz (workspaces, scripts)
├── turbo.json              # Configuración Turborepo
└── README.md
```

## Buenas Prácticas
- **No usar librerías inseguras ni prácticas riesgosas para salud o datos.**
- **Validar exhaustivamente datos de usuario y pagos.**
- **Separar lógica de dominio, infraestructura y presentación.**
- **Centralizar tipos y validaciones en `packages/shared`.**

---

A continuación, se generará la configuración inicial del monorepo y los archivos base para cada módulo.