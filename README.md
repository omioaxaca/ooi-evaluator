# CodeJudge Pro - Next.js Edition

Una plataforma completa de juez de código online construida con Next.js y arquitectura screaming (arquitectura de dominio).

## 🏗️ Arquitectura Screaming

Este proyecto implementa **screaming architecture**, donde la estructura de carpetas comunica claramente el propósito del negocio. La organización está basada en **características (features)** en lugar de capas técnicas.

### Estructura del Proyecto

```
app/
├── dashboard/           # Feature: Panel de control
│   ├── Dashboard.tsx   # Componente principal del dashboard
│   └── StatCard.tsx    # Componente de tarjeta de estadísticas
├── challenges/          # Feature: Lista de desafíos
│   └── ChallengeList.tsx
├── arena/              # Feature: Espacio de trabajo de código
│   └── CodeWorkspace.tsx
├── profile/            # Feature: Perfil de usuario
│   ├── UserProfile.tsx
│   └── RechartsWrapper.tsx
├── components/         # Componentes compartidos
│   ├── Icons.tsx
│   └── Navbar.tsx
├── page.tsx            # Página principal (CSR)
├── layout.tsx          # Layout raíz
└── globals.css         # Estilos globales
types.ts                # Definiciones de tipos TypeScript
```

## 🎯 Características Principales

### Dashboard
- Vista general del progreso del usuario
- Tarjetas de estadísticas de habilidades
- Historial de submissions recientes
- Kit de preparación recomendado

### Challenges
- Lista de desafíos con filtros
- Dificultad por colores (Fácil, Medio, Difícil)
- Búsqueda de desafíos
- Estado de resolución

### Arena (Code Workspace)
- Editor de código simulado
- Panel de descripción del problema
- Selector de lenguaje de programación
- Opciones de ejecución y envío

### Profile
- Información del usuario
- Badges y logros
- Gráfico de actividad (Recharts)
- Información educativa

## 🚀 CSR (Client-Side Rendering)

Este proyecto está configurado completamente como una **Single Page Application (SPA)** usando Next.js con CSR:

- ✅ Todos los componentes usan `'use client'`
- ✅ Navegación basada en estado (sin router de Next.js)
- ✅ Sin Server Components
- ✅ Interactividad completa del lado del cliente

## 🛠️ Tecnologías

- **Next.js 16** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Estilos
- **Lucide React** - Iconos
- **Recharts** - Gráficos
- **Biome** - Linter y formatter

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Lint
npm run lint

# Format
npm run format
```

## 🎨 Tema Dark/Light

El proyecto incluye soporte completo para modo oscuro con:
- Persistencia en localStorage
- Detección de preferencia del sistema
- Toggle manual en el navbar

## 🏛️ Principios de Screaming Architecture

1. **Claridad de propósito**: La estructura de carpetas revela inmediatamente las funcionalidades del negocio
2. **Separación por features**: Cada carpeta representa una característica completa del dominio
3. **Cohesión alta**: Componentes relacionados están juntos
4. **Bajo acoplamiento**: Las features son independientes entre sí
5. **Escalabilidad**: Fácil agregar nuevas features sin modificar la estructura existente

## 📝 Tipos de Datos

Los tipos principales se definen en `types.ts`:
- `Challenge` - Desafío de programación
- `ViewState` - Estados de vista de la aplicación
- `Submission` - Submission de código
- `UserStats` - Estadísticas del usuario

## 🎯 Próximos Pasos

- [ ] Integrar backend API
- [ ] Agregar autenticación
- [ ] Implementar editor de código real (Monaco/CodeMirror)
- [ ] Sistema de testing automatizado
- [ ] Leaderboards en tiempo real
- [ ] WebSocket para actualizaciones live

## 📄 Licencia

Este proyecto es parte de un ejercicio de evaluación.

---

**Desarrollado con Next.js y Screaming Architecture** 🎉
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
