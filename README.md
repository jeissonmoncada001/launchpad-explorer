# 🚀 Launchpad Explorer

Aplicación móvil desarrollada con **React Native (Expo)** que permite explorar información sobre lanzamientos espaciales utilizando la API pública de SpaceX.

---

## 📱 Características

- Visualiza próximos lanzamientos espaciales.
- Consulta lanzamientos pasados con información detallada.
- Visualización de detalles como cohete, fecha, ubicación de lanzamiento y misión.
- Test unitarios con Jest.
- Linting y formateo con ESLint y Prettier.
- 🛠️ Configurado con CI/CD usando GitHub Actions y EAS CLI (Expo Application Services).

---

## 📸 Capturas de pantalla

| Pantalla principal | Detalle del lanzamiento |
|--------------------|--------------------------|
| ![simulator_screenshot_7AFE49FB-87BD-45D5-B023-37C6FD292B05](https://github.com/user-attachments/assets/ea487bdc-c9f4-4da5-876c-2a97b742008a) | ![simulator_screenshot_CAEADCC1-FD8F-494F-98D3-22EB71F6F847](https://github.com/user-attachments/assets/f8f763f7-54dc-4ce2-b0a6-f4a512d750e5) |


---

## 🚀 Instalación y ejecución local

### Requisitos previos

- Node.js >= 18
- Expo CLI (`npm install -g expo`)
- Yarn (`npm install -g yarn`)
- Android Studio o dispositivo/emulador Android
- (Opcional) Cuenta en Expo.dev

### Pasos

```bash
# Clona el repositorio
git clone https://github.com/jeissonmoncada001/launchpad-explorer.git
cd launchpad-explorer

# Instala las dependencias
yarn install

# Corre en Android
yarn android
```

---

## ✅ Scripts disponibles

```bash
yarn start        # Inicia el dev server
yarn android      # Ejecuta en Android
yarn lint         # Ejecuta ESLint y Prettier
yarn test         # Ejecuta pruebas unitarias con Jest
yarn format       # Formatea el código automáticamente
```

---

## 🧪 Pruebas

- Incluye pruebas unitarias para componentes principales (`PastLaunchesScreen`, `UpcomingLaunchesScreen`) y lógica (`sortAndFilter`).
- Ejecutar con:
```bash
yarn test
```

---

## ⚙️ CI/CD

Este proyecto está configurado con:

- **GitHub Actions**: Ejecuta test, lint y builds automáticamente.
- **EAS CLI**: Genera APK de producción localmente o en la nube.

```bash
npx eas build --platform android --profile production --local --output app.apk
```

El archivo APK generado se encuentra en:

```
./app.apk
```
---

## 📁 Estructura del proyecto

```
launchpad-explorer/
├── app/ # Navegación con expo-router
├── assets/ # Imágenes e íconos
├── src/
│ ├── adapters/ # Adaptadores para transformar datos
│ ├── api/ # Llamadas HTTP a la API de SpaceX
│ ├── components/ # Componentes reutilizables de UI
│ ├── hooks/ # Hooks personalizados (useLaunches, etc.)
│ ├── repositories/ # Acceso a datos y lógica de obtención
│ ├── schemas/ # Validaciones y esquemas con Zod
│ ├── screens/ # Pantallas de la app (Home, Detalle, etc.)
│ ├── services/ # Lógica de negocio o acceso a servicios externos
│ ├── tests/ # Pruebas unitarias
│ ├── types/ # Tipos TypeScript (interfaces, etc.)
│ └── utils/ # Funciones auxiliares (ordenamiento, filtros)
├── .husky/ # Git hooks para CI (pre-commit)
├── .github/workflows/ # CI/CD con GitHub Actions
├── app.config.js # Configuración de Expo
├── eas.json # Configuración de EAS Build
├── package.json # Dependencias y scripts
└── README.md
```

---

📱 [Descargar APK de prueba](https://github.com/tuusuario/tu-repo/raw/main/app.apk)

---

## 👨‍💻 Autor

**Jeisson Moncada**  
[GitHub](https://github.com/jeissonmoncada001)

---
