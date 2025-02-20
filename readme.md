
# PRODUCTS API

Aplicación Backend para la app de Usuarios y Artículos (Prueba Técnica)




## Instalación

Clona el repositorio e instala las librerías con NPM


```bash
  npm install 
```
    
Creas un archivo .env con las variables:

```bash
  PORT = 
  MONGO_URI =
```

PORT es el puerto de escucha del servidor. MONGO_URI es la cadena de conexión a la base de datos de MongoDB

Una vez hecho, probar con el comando:
```bash
  npm run dev 
```
## Decisiones técnicas

Se eligió TypeScript ya que, teniendo conocimientos con la seguridad de tipos que ofrece, aporta mayor facilidad de escalabilidad y manejo a una app que en JavaScript. Lo hace más verbosa, pero ofrece un mayor control.

Se eligió Joi para validar la obtención de las variables de entorno, fundamental para una correcta operación de la app


## Estructura

El código mayormente está dentro de una carpeta llamada src. La cuales tienen otras subcarpetas:


Config: Archivos de configuración del proyecto, como obtención de variables de entorno y conexión a MongoDB

Models: Los esquemas de Mongo en código TypeScript

Controllers: Los manejadores de las peticiones y que devuelven respuestas a estos. Contienen la lógica de las operaciones

Routes: Definición de endpoints