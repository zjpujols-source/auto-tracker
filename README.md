# AutoTracker 🚗 (Control de Vehículo)

Aplicación web móvil (PWA) para control y registro de mantenimiento, servicios y consumo de combustible de vehículos.

Diseñada especialmente para teléfonos Android, con soporte bilingüe (Español / Inglés).

---

## 🌟 Características Principales (Key Features)

1. **Información del Vehículo (Vehicle Info)**
   - Marca, Modelo, Año, VIN (Número de serie) y Millas actuales.
   - Odómetro de actualización rápida con un solo toque.

2. **Mantenimiento y Servicios (Maintenance Tracking)**
   - Fechas de **cambio de aceite** (*Oil change*) con cálculo de próximo servicio (+5,000 mi).
   - Fechas de **rotación / cambio de llantas** (*Tire service*) con cálculo de próximo servicio (+6,000 mi).
   - Registro de frenos, afinación, batería, filtros y otros servicios.
   - Indicadores visuales de estado: **Al día** (verde), **Próximo** (amarillo) y **¡Vencido!** (rojo).

3. **Registro de Gasolina y Rendimiento (Fuel & Gallons-per-Mile Tracking)**
   - Fecha de carga, odómetro (millas), galones y costo total.
   - **Cálculo automático de MPG** (Millas por galón) y **Galón por Milla** entre cargas.
   - Promedios históricos de consumo y total de galones consumidos.

4. **Instalable en Android (PWA)**
   - Se instala directamente desde Google Chrome sin necesidad de tienda de aplicaciones.
   - Abre a pantalla completa con su propio icono de auto.
   - Funciona sin conexión a internet (offline).

5. **Respaldo y Seguridad de Datos**
   - Todos los datos se guardan de forma privada en el teléfono (`localStorage`).
   - Botón para exportar historial completo a Excel / CSV.
   - Botón para descargar y restaurar copias de seguridad en formato JSON.

---

## 📱 Cómo instalar en Android (How to Install on Android)

1. Abre el enlace de la aplicación en el navegador **Google Chrome** en tu teléfono Android.
2. Toca el menú de tres puntos verticales **(⋮)** en la esquina superior derecha de Chrome.
3. Toca en **"Agregar a pantalla principal"** o **"Instalar aplicación"**.
4. ¡Listo! Se creará un acceso directo en tu pantalla de inicio como cualquier otra app.

---

## 🚀 Cómo probarlo en tu computadora (How to Run Locally)

Puedes abrir `index.html` directamente haciendo doble clic o usando cualquier servidor local simple:

```bash
cd /Users/zeke/.gemini/antigravity/scratch/auto-tracker
python3 -m http.server 8080
```

Luego abre en tu navegador:
`http://localhost:8080`
