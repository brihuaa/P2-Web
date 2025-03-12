# 🌌 Star Wars Character Search

Aplicación web para buscar personajes de Star Wars usando la [SWAPI](https://swapi.dev/).


## 🚀 Características

- Búsqueda de personajes por nombre
- Detalles completos del personaje
- Visualización de películas y naves relacionadas
- Diseño responsive
- Manejo de errores con animaciones
- Enlaces directos a la documentación oficial de SWAPI

## 🛠️ Tecnologías

[![Fresh](https://img.shields.io/badge/Fresh-1.1.3-blue?style=flat&logo=deno)](https://fresh.deno.dev/)
[![Deno](https://img.shields.io/badge/Deno-1.34.3-black?style=flat&logo=deno)](https://deno.land/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## ⚙️ Instalación

1. Clonar repositorio:
```bash
git clone https://github.com/brihuaa/P2-Web
cd P2-Web
```
## 🕹️ Cómo usar

### 🔍 Búsqueda de personajes
1. **En la página principal:**
   - Escribe el nombre de un personaje en el campo de búsqueda  
     *(Ejemplos: "Luke", "Vader", "R2-D2")*
   - Haz clic en el botón **🔎 Buscar**

### 📋 Página de resultados
- **Tabla detallada:**  
  Visualiza todas las características del personaje:
  - Altura, peso, color de ojos
  - Año de nacimiento y género
  - Planeta natal (con enlace a SWAPI)

- **Contenido relacionado:**
  - 🎬 **Películas:** Listado de apariciones con ID de episodio
  - 🚀 **Naves estelares:** Vehículos asociados al personaje
  - 🔗 **Enlaces directos:** Acceso a recursos oficiales en SWAPI

### ❌ Búsqueda fallida
- **Animación interactiva:** Emoji 😞 con efecto de rebote
- **Sugerencias útiles:** Ejemplos de búsquedas válidas
- **Recuperación rápida:**  
  Botón *"Volver a buscar"* para nuevos intentos

---

## 📚 Referencia de la API

### SWAPI Documentation
🔗 [Documentación oficial](https://swapi.dev/documentation)  
📦 Endpoint principal: `https://swapi.dev/api/people/`

