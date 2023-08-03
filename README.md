# README (EN)

# eCommerce REACT App
 
App Link: https://ecommerceapp-l4g2.onrender.com/

API: https://ecommerceapp-l4g2-api.onrender.com/

    GET PRODUCTS /api/v1/product/get-product
    GET CATEGORIES /api/v1/category/get-category/

## Description:
- ECommerce online app using REACT connected by an API 
- Responsive App: desktop, mobile, tablets, etc.

- NON Registered Users can:
    - Register
    - LogIn
    - Watch and search products
    - Add products to cart.

- Registered Users also can buy products finishing the payment.

- An ADMIN can:
    - Watch products and categories
    - Create new products and categories
    - Updated products and categories.
    - Delete products and categories.

    - Also can see and manage the orders of the clients.

- The management of users and admins permissions are assigned directly in MONGO DB Atlas

## Features:
- Register and LogIn
- User and Admin Dashboard
- Modals
- Notifications
- Product Search Bar
- Category and Price filters
- Detailed product page with related products.
- Cart
- Payment system


## Used Technologies:
- Mongo DB: NOSQL database.
- Express: Server.
- Node Js: Backend.
- Axios: database connection.
- React: Frontend.
- Bootstrap: JS and CSS prototypes.
- Github : Version control.
- Render: Deployment.


## Some Modules Used in this Project:
- CLIENT:
    - nodemon: improve the server
    - dotenv: Environment Variables
    - mongoose: connection to mongoDB
    - bcrypt: data cryption
    - jsonwebtoken: browser sessions
    - slugify 
    - express-formidable : for uploads
    - braintree : Braintree payment system
- FRONTEND:
    - react-router-dom
    - react-icons
    - visual studio emojisense (opcional)
    - react-helmet: SEO
    - react-toastify: notifications
    - react-hot-toast: notifications
    - axios
    - concurrently: using to automate executing the app
    - cors: Cross-Origin Resource Sharing
    - antd: Modals
    - braintree-web-drop-in-react: Braintree payment system 
    - moment: for timestamps


## Testing

    You can register as a new user (don't use real or personal data). Or you may use any of these:

    User: test@user.com
    Pass: 123789

    User: alice@user.com
    Pass: 456789

Admin permissions are given manually.

***

# README (ES)

# eCommerce REACT App
 
App Link: https://ecommerceapp-l4g2.onrender.com/

API: https://ecommerceapp-l4g2-api.onrender.com/

    GET PRODUCTS /api/v1/product/get-product
    GET CATEGORIES /api/v1/category/get-category/

## Descripcion:
- Aplicación de comercio online creada usando REACT conectada mediante API. 
- App Responsiva: Desktop, moviles, tablets...

- Un Usuario NO registrado podrá:
    - Registrarse
    - Logearse
    - Ver  y buscar productos
- Un Usuario Registrado además podrá comprar los productos

- Un Administrador podrá:
    - ver productos y categorías.
    - crear productos y categorías.
    - modificar productos y categorías.
    - eliminar productos y categorías. 
    - Además podrá ver y administrar las compras que hayan hecho los clientes.

- La gestión de usuarios y administradores se realiza exclusivamente a traves de MongoDB Atlas.

## Características:
- Registro y login
- User y Admin dashboard
- Modales
- Notificaciones
- Barra de Búsqueda de productos
- Filtros por categorías y precio
- Detalle de producto con productos relacionados.
- Carro de compra
- Plataforma de pago


## Tecnologías usadas:
- Mongo DB: como base de datos NoSQL.
- Express: para el servidor.
- Node Js: como Backend.
- Axios: conexion a base de datos.
- React: como Frontend.
- Bootstrap: Estilos CSS
- Github : Control de versiones.
- Render: Deployment.


## Algunos módulos usados en el proyecto:
- CLIENTE:
    - nodemon: Para automatizar el servidor
    - dotenv: Variables de entorno
    - mongoose: Para conectar con la base de datos
    - bcrypt: para encriptar los datos
    - jsonwebtoken: para las sesiones del navegador
    - slugify: para direcciones automaticas de los productos. (En el servidor)
    - express-formidable : para uploads (En el server)
    - braintree : para la plataforma de pago Braintree
- FRONTEND:
    - react-router-dom
    - react-icons
    - visual studio emojisense (opcional)
    - react-helmet (Para el SEO)
    - react-toastify (Para notificaciones)
    - react-hot-toast (para notificaciones)
    - axios
    - concurrently ( se usa para ejecutar el servidor y el cliente a la vez)
    - cors
    -antd (Modales)
    - braintree-web-drop-in-react (Plataforma de pago)
    - moment (Para usar timestamps en el frontend)


## Testeo
    Se puede registrar un usuario nuevo (no usar datos reales o personales) O se puede usar alguno de los siguientes:

    User: test@user.com
    Pass: 123789

    User: alice@user.com
    Pass: 456789

Los permisos para administradores se proporcionan manualmente.