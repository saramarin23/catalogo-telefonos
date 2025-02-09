# Tienda de móviles

- [Descripción](#descripción)
- [Stack tecnológico](#stack-tecnológico-y-librerías)
- [Instalación](#instalación)
- [Ejecución de la app](#ejecución-de-la-app)
- [Variables de entorno](#variables-de-entorno)
- [Arquitectura](#arquitectura-del-proyecto)

## **Descripción**

Web de catálogo de teléfonos construida con **React** y **Vite**. Incluye funcionalidades como búsqueda en tiempo real, carrito de la compra con persistencia de datos (LocalStorage) y una interfaz responsiva que se adapta al ancho de la pantalla.

## Stack tecnológico y librerías

### **Frontend**

- **React**: Framework para el portal.
- **SCSS**: Preprocesador CSS.
- **React Router**: Manejo de rutas para la navegación.
- **React Context API**: Gestión del estado global.
- **PropTypes**: Validación del tipado de las props en componentes.

### **Testing**

- **Vitest**: Testing para React.
- **React Testing Library**: Testing de componentes.

### **Configuración**

- **ESLint**: Linter para garantizar código limpio.
- **Prettier**: Formateador de código.
- **dotenv**: Manejo de variables de entorno para no mostrar datos confidenciales.

## **Instalación**

1. Clonar el repositorio:

```bash
git clone https://github.com/saramarin23/catalogo-telefonos
```

2. Acceder a la carpeta del proyecto

```bash
cd catalogo-telefonos
```

3. Instalar las dependencias

```bash
npm install
/
yarn install
```

## **Ejecución de la app**

### Modo desarrollo

```bash
npm run dev
/
yarn dev
```

La aplicación se abrirá en el puerto [5173](http://localhost:5173)

### Modo producción local

```bash
npm run build
npm run preview
```

La aplicación se abrirá en el puerto [4173](http://localhost:4173)

### Despliegue en producción

La aplicación está correctamente desplegada en Vercel y se puede acceder a ella en: [Catálogo de teléfonos Vercel](https://catalogo-telefonos.vercel.app/)

### **Testing**

#### **Ejecutar tests**

```bash
npm run test
/
yarn test
```

## Variables de entorno

`.env` se ha añadido a la lista de ficheros en `.gitignore` por protección de datos, en su lugar se ha añadido un `.env.example` para simular el acceso.

### Configuración variables de entorno:

1. Copia el archivo `.env.example` en la carpeta raíz del proyecto y renómbralo como `.env`.
2. Añade los valores en el archivo `.env` con la información del pdf de la prueba técnica.

## Arquitectura del proyecto

```plaintext
src/
-- assets/
-- -- icons/
-- -- -- CartIconBlack.svg
-- -- -- CartIconBlack.svg
-- -- -- CartIconWhite.svg
-- -- -- ChevronLeft.svg
-- -- -- X.svg
-- -- LoadingBar.png
-- -- Logo.png
-- components/
-- -- Button.jsx
-- -- CartItemCard.jsx
-- -- ColorBoxes.jsx
-- -- Header.jsx
-- -- PhoneCard.jsx
-- -- ProductSpecs.jsx
-- -- SearchBar.jsx
-- -- StorageBoxes.jsx
-- context/
-- -- CartContext.jsx
-- hooks/
-- -- useFetchAllProducts.jsx
-- services/
-- -- api.js
-- styles/
-- -- abstracts/
-- -- -- _variables.scss
-- -- base/
-- -- -- _links.scss
-- -- -- _reset.scss
-- -- -- _typography.scss
-- -- components/
-- -- -- _button.scss
-- -- -- _cartItemCard.scss
-- -- -- _colorBoxes.scss
-- -- -- _header.scss
-- -- -- _phoneCard.scss
-- -- -- _productSpecs.scss
-- -- -- _searchBar.scss
-- -- -- _storageBoxes.scss
-- -- pages/
-- -- -- _cartView.scss
-- -- -- _phoneDetailView.scss
-- -- -- _phoneListView.scss
-- -- main.scss
-- tests/
-- -- Cart.test.jsx
-- -- PhoneDetail.test.jsx
-- -- PhoneList.test.jsx
-- utils/
-- -- filterProducts.js
-- -- texts.js
-- views/
-- -- CartView.jsx
-- -- PhoneDetail.jsx
-- -- PhoneListView.jsx
-- App.jsx
-- AppRoutes.jsx
-- main.jsx
-- setupTests.jsx
```
