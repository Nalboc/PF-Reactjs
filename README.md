# Ecommerce con React

Este es un proyecto de ecommerce desarrollado con **React** y **Firebase** como base de datos. El objetivo del proyecto es crear una plataforma de compra en línea sencilla donde los usuarios puedan navegar productos, agregarlos al carrito y realizar compras.

## Demo

Puedes ver el demo en [aquí](https://pf-fabricioroberts.vercel.app/).
Deploy realizado con vercel.

## Funcionalidades

- **Lista de productos**: Visualiza los productos disponibles con sus detalles.
- **Carrito de compras**: Agrega productos al carrito, eliminalos o procede a realizar la compra.
- **Autenticación de usuarios**: Por cada compra se pide datos al usuario, que son guardados junto a la orden de compra en la base de datos.
- **Filtrado por categoria**: Filtra productos por categorías.
  **Base de datos en Firebase**: Almacena los productos y la información de los usuarios en Firebase Firestore.

## Tecnologías utilizadas

- **React**: Framework principal para la creación de la UI.
- **React Router**: Para la navegación entre páginas.
- **Context API**: Para la gestión del estado global (carrito, usuario, etc.).
- **Firebase**: Para la gestión y almacenamiento de productos.
- **CSS**: Para el diseño de la interfaz de usuario.

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Nalboc/PF-Reactjs.git
cd nombre-del-repositorio
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar aplicacion

```bash
npm run dev
```
