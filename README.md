# Backend Express para Mock de Pedidos

Este proyecto es un backend en Node.js con Express que sirve un mock de pedidos desde un archivo `mock.json` y permite filtrar por el parámetro `status`.

## Uso

1. **Instalación de dependencias**

   ```bash
   npm install
   ```

2. **Ejecución local**

   ```bash
   npm start
   ```

3. **Endpoint principal**

   - Obtener todos los pedidos:
     ```
     GET /pedidos
     ```
   - Filtrar por status:
     ```
     GET /pedidos?status=INPROGRESS
     ```

## Despliegue en Glitch

- Sube los archivos `server.js`, `package.json` y `mock.json` a tu proyecto en Glitch.
- Glitch usará automáticamente la versión de Node.js especificada en `package.json`.

## Requisitos

- Node.js 18.x (compatible con Glitch)
- Express 4.x

## Autor

- Proyecto generado con ayuda de GitHub Copilot
