---
Título: UD. 5.5 - Personalización de Bootstrap 5 con Sass
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---
  
<div align="center">
</br>
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/love_sass.png">
</div>

# 1 Introducción
<a href="https://getbootstrap.com/">**Bootstrap**</a> es una de las librerías más utilizadas para el desarrollo de interfaces web, gracias a su facilidad de uso y diseño responsivo. Sin embargo, cada proyecto tiene requisitos únicos que a menudo exigen personalizar estilos para reflejar una identidad visual específica o mejorar la experiencia del usuario. 

Sass (Syntactically Awesome Stylesheets) permite modificar y extender Bootstrap ajustando colores, tipografías, espacios... y otros aspectos del diseño sin necesidad de sobrescribir clases directamente. Este enfoque no solo acelera el desarrollo y personalización del proyecto, sino que también asegura una mayor flexibilidad y consistencia en el diseño final.

# 2 Configuración inicial del proyecto
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/bootstrap-vite.png" width=400px>
Para poder configurar Bootstrap necesitaremos descargar el framework completo de bootstrap, para ello usaremos Vite.  

Más información <a href="https://getbootstrap.com/docs/5.3/getting-started/vite/">aquí</a> 

## 2.1 Crear una carpeta proyecto e inicializar npm
Creamos la carpeta contenedora de nuestro proyecto y abrimos una terminal en nuestro IDE (o directamente desde una powershell para SO windows) y escribimos el siguiente comando.
```
npm init -y
```

## 2.2 Instalar Vite dentro de nuestro proyecto
Instalamos las dependencias de vite con el siguiente comando.
```
npm i --save-dev vite
```
El argumento `--save-dev` indica que la dependencia (en este caso, Vite) se utilizará únicamente en el entorno de desarrollo y no formará parte de las dependencias necesarias para el entorno de producción.

## 2.3 Instalar Bootstrap
La instalación **completa** de Bootstrap usando el siguiente comando.
```
npm i --save bootstrap @popperjs/core
```
## 2.4 Instalar otras dependencias 
Como es evidente, necesitaremos la dependencia de **Sass** para importar correctamente el paquete CSS de Bootstrap.
```
npm i --save-dev sass
```

# 3 Estructura de nuestro proyecto
Para definir la estructura básica de nuestro proyecto, crearemos una carpeta `src` así como los archivos `index.html', `main.js`, `styles.scss` y el archivo de configuración `vite.config.js`
```
mkdir src
mkdir src\js
mkdir src\scss
New-Item -ItemType File src/index.html, src/js/main.js, src/scss/styles.scss, vite.config.js
```

Nuestro proyecto quedará de la siguiente manera:  
```
Proyecto1/  
├── node_modules/  
├── src/  
│    ├── js/  
│    │   └── main.js  
│    ├── scss/  
│    │   └── styles.scss  
│    └── index.html  
├── package-lock.json  
├── package.json  
└── vite.config.js  
```

# 4 Configurar Vite 
## 4.1 Editar el archivo de configuración vite.config.js
Compiaremos el siguiente código dentro del archivo.
```
import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}
```
De esa manera, indicamos a Vite dónde se encuentra el código JavaScript y la configuración básica del servidor.
    
## 4.2 Editar el archivo index.html
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap con Sass y Vite</title>
    <script type="module" src="./js/main.js"></script>
  </head>
  <body>
    <div class="container py-4 px-3 mx-auto">
      <h1>¡Hola, Bootstrap Sass y Vite!</h1>
      <button class="btn btn-primary">Botón primario</button>
      <p class="text-center display-1 text-warning bg-dark m-3">¡Si no ves este texto subrayado, algo ha fallado!</p>
    </div>
  </body>
</html>
```
  
## 4.3 Editar el archivo package.json
Añadimos la línea que falta, eso permitirá lanzar nuestro servidor Vite local.  
```
{
  // ...
  "scripts": {
    "start": "vite",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ...
}
```

## 4.4 Lanzar Vite
```
npm start
```  
Quedando el renderizado de la siguiente manera:
  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/holaBSSASSVITE.png">

# 5 Impotar Bootstrap
## 5.1 Importar Bootstrap CSS
Como hemos visto en el punto anterior, no se han aplicado los estilos porque Boostrap no está importado en nuestro proyecto.  
Para ello editaremos el archivo de Sass `styles.scss` e importaremos todas las fuentes Sass de Bootstrap.
```
@import "bootstrap/scss/bootstrap";
```

## 5.2 Importar CSS y el JavaScript de Bootstrap
Para ello editamos el archivo main.js
```
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
```
  
Si toda ha ido bien se visualizará el render siguiente.  
  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/holaBSSASSVITEGood.png" width=50%>

# 6 Customizando Bootstrap
## 6.1 **Motivos para customizar Bootstrap con Sass**  
Bootstrap es un framework CSS muy popular debido a su facilidad de uso con su sistema predefinido de componentes y utilidades. Sin embargo, **las necesidades específicas de un proyecto a menudo requieren personalizaciones** que van más allá de lo que Bootstrap pueda ofrecer. A continuación, nombramos algunas de ellas.  

1️⃣ **Adaptación a la identidad visual del proyecto (branding)**  
Los proyectos web suelen requerir que los colores, tipografías, tamaños y estilos reflejen la identidad visual de una marca.  
2️⃣ **Reducción del peso del CSS**  
Cuando importamos Bootstrap desde un CDN o directamente en el proyecto, **cargamos todo el framework, incluyendo estilos y componentes no utilizados**. Esto puede afectar negativamente al rendimiento y por ende al SEO.  
3️⃣ **Uso de variables y mixins personalizados**  
4️⃣ **Creación de componentes especificos reutilizables**  
5️⃣ **Creación de un framework individualizado basado en bootstrap**

## 6.2 Preparación del entorno para la customización de bootstrap 
Toda la información sobre el procedimiento <a href="https://getbootstrap.com/docs/5.3/customize/sass/">**aquí**</a>.

### 6.2.1 Estructura de archivos
Para evitar de afectar a la integridad del framework, no deberemos **nunca** editar los **core files** de bootstrap.  
Para poder customizar los diferentes componentes de **Bootstrap** crearemos, dentro de la carpeta **scss** una estructura de directorios como la que se muestra a continuación.
```
proyecto/
├── node_modules/  
├── src/  
│    ├── js/  
│    │   └── main.js  
│    ├── scss/  
│    │   ├── styles.scss
|    |   └── custom/    
│    │        ├── _importAll.scss
│    │        ├── _customVariables.scss
│    │        └── _customMapas.scss
│    └── index.html  
├── package-lock.json  
├── package.json  
└── vite.config.js  
```

### 6.2.2 **Contenido de importAll.scss**  
Dentro del archivo **importAll.scss** pondremos todas las llamadas a los módulos de **Bootstrap**.
```
// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../../../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
@import "../../../node_modules/bootstrap/scss/variables";
@import "../../../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../../../node_modules/bootstrap/scss/maps";
@import "../../../node_modules/bootstrap/scss/mixins";
@import "../../../node_modules/bootstrap/scss/root";

// 6. Optionally include any other parts as needed
@import "../../../node_modules/bootstrap/scss/utilities";
@import "../../../node_modules/bootstrap/scss/reboot";
@import "../../../node_modules/bootstrap/scss/type";
@import "../../../node_modules/bootstrap/scss/images";
@import "../../../node_modules/bootstrap/scss/containers";
@import "../../../node_modules/bootstrap/scss/grid";
@import "../../../node_modules/bootstrap/scss/helpers";

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../../../node_modules/bootstrap/scss/utilities/api";

// 8. Add additional custom code here
```
**Nota importante**
- En el **punto 2**, se incluirá cualquier sobrescritura de las variables de Bootstrap.   
- En el **punto 4**, se incluirá cualquier ampliación de las variables de Bootstrap.   
- En el **punto 8**, se insertará el código de customización dentro del mismo archivo.

Para no ensuciar un archivo que luego no se volverá a editar, se recomienda crear archivos propios a cada customización. De generarse muchas personalizaciones, se recomienda distribuir los archivos en una estructura de directorios para facilitar la depuración y el mantenimiento posterior del proyecto.  

### 6.2.3 **Contenido de archivosCustom.scss**  
Para el ejemplo, crearemos un archivo `_customVariables.scss` que nos permitirá sobrescribir los colores de Bootstrap.
```
$primary: red;
$secondary: magenta;
```
### 6.2.4 **Contenido del archivo styles.scss**  
Dentro del archivo **styles.scss**, dispondremos las instancias de **la siguiente manera**.
```
@import "custom/importAll";
@import "bootstrap/scss/bootstrap";
```
Como podemos ver, usaremos la directiva `@import` para realizar las instancias. Aunque @import será **deprecated** en la próxima versión de Sass, en este caso en particular, la directiva `@use` no devuelve el resultado esperado.  

## 6.3 Formas de personalizar Bootstrap
### 6.3.1 Modificando los valores de las variables de bootstrap
Bootstrap utiliza variables Sass para definir colores, fuentes, tamaños, puntos de interrupción y otros aspectos del sistema de diseño. Esas variables se pueden reescribir definiendo nuevos valores.  
Las variables en Bootstrap están definidas en `\node_modules\bootstrap\scss\_variables.scss y _variables-dark.scss`.  

#### 6.3.1.1 **Variables Sass**  
**:one: Variables de Color**  
```scss
$primary: #0d6efd;
$secondary: #6c757d;
...
```
**:two: Variables de Tipografía**  
```scss
$font-family-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
$font-size-base: 1rem;
$font-weight-bold: 700;
$line-height-base: 1.5;
```
**3️⃣ Variables de Espaciado (Margen y Padding)**
```scss
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * 0.25,
  2: $spacer * 0.5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3
);
```

**4️⃣ Variables de Breakpoints**
```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```
**5️⃣ Variables de Bordes y Sombras**
```scss
$border-radius: 0.375rem;
$box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
$box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
```

#### 6.3.1.2 **¿Cómo personalizar las variables?**  
Para sobrescribir las variables de **Bootstrap**, usaremos el archivo `customVariables.scss` para variables simples o `customMapas.scss` si queremos modificar variables de tipo mapa. En estos archivos redefiniremos las variables **antes** de importar Bootstrap.  

🔹 **Sobrescritura de variables simples en `customVariables.scss`**  
```scss
$primary: #ff6600; // Cambiamos el color principal
$font-size-base: 1.1rem; // Ajustamos el tamaño de fuente
```

🔹 **Sobrescritura de mapas en `customMapas.scss`**  
```scss
$theme-colors: map-merge($theme-colors, (
  "custom": #ff33cc // Agregamos un nuevo color al mapa
));
```

#### 6.3.1.3 **Variables CSS**
Dentro de Bootstrap, algunas variables CSS están definidas en `:root`, lo que permite su uso en todo el documento como variables personalizadas. Aunque estas variables pueden sobrescribirse en CSS, **no se pueden modificar directamente desde Sass** como las variables de `$Sass` a menos que se redefinan explícitamente (**práctica no recomentdable**).  

**Ejemplo de variables en `:root` de Bootstrap**  
```
:root,
[data-bs-theme=light] {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  ...
}
```

### 6.3.2 Usando mixins
Los **mixins** en Sass son fragmentos reutilizables de código que pueden incluirse en otras reglas sin necesidad de duplicar código. Bootstrap proporciona numerosos mixins para tareas comunes, como la creación de cuadrículas, botones, formularios y transiciones. Estos mixins permiten **crear componentes personalizados** o **modificar los existentes**.  

**Ejemplo de nuevo mixin**  
```scss
@mixin highlight-button($color) {
  font-size: 1.1rem;  

  &:hover {
    box-shadow: 0 6px 15px rgba($color, 0.5);
    transform: scale(1.05);
  }
}

.btn-highlight {
  @include highlight-button($primary);
}
```

### 6.3.3 Usando funciones
Bootstrap proporciona algunas funciones para calcular colores, tamaños y proporciones. Se puede utilizar estas funciones para crear valores dinámicos basados en las variables de Bootstrap o en **variables personalizadas**.   

**Ejemplo de función**
```
@function funcionCustom($color) {
  $lightness: lightness($color);
  
  @if $lightness > 70 {
    @return "text-decoration-underline"; // Si es muy claro
  } @else if $lightness > 50 {
    @return "fw-bold"; // Si es medianamente claro
  } @else {
    @return "text-decoration-line-through"; // Si es oscuro
  }
}

@each $color, $value in $theme-colors {
  .decoration-#{$color} {
  @extend .#{funcionCustom($value)};
  }
}
```


### 6.2.2 Práctica RA5 CEe
Recuperar el proyecto de la práctica RA5 CEab (o crear un proyecto nuevo) y realizar las siguientes personalización de Boostrap.   

:one: Ampliar la clase `.btn-#{$color}` de tal manera que Sass cree 2 nuevos estilos `.btn-rojo` y `.btn-magenta`.  
Esos 2 nuevos estilos devolverán los 2 valores de tema siguientes.
```
$rojo: rgb(219, 38, 38);
$magenta: rgb(214, 39, 214);
```
Modificar la sección de los botones y añadirle 2 botones con las clases `.btn .btn-rojo` y `.btn .btn-magenta`.  
El resultado deberá ser similar al de la siguiente imagen:
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/personalizacionbotones.png">

:two: Ampliar el tema `margin` de tal manera que al compilarse el proyecto tengamos 5 nuevas clases para (entre otros) las clases mt-*.  
Las nuevas clases mt-6, mt-7, mt-8, mt-9 y mt-10 tendrán los siguientes valores:
```
.mt-6 {
  margin-top: 3.5rem;
}

.mt-7 {
  margin-top: 4rem;
}

.mt-8 {
  margin-top: 4.5rem;
}

.mt-9 {
  margin-top: 5rem;
}

.mt-10 {
  margin-top: 5.5rem;
}
```
Se valorará positivamente el uso de un bucle para definir los nuevos valores del tema.

3️⃣Recuperar el código del **apartado 6.3.2** e integralo dentro del proyecto. Visualizar varios botones con y sin esa nueva clase.
**Pregunta:** ¿Qué occure si se aplica esa clase a botones con la clase `btn-secondary`, `btn-success`, etc?

4️⃣Crear código Sass para crear unas clases que permitan generalizar `la clase btn-highlight` a todas las clases de colores, es decir, crear un código que defina nuevas clases tipo `btn-highlight-primary`, `btn-highlight-secondary`, ..., `btn-highlight-magenta`.

5️⃣Ampliar el proyecto y añadir el componente `acordeon`.  
Personalizar el componente para pasar de:  


**Esta imagen**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/acordeon.png">  


**A esta otra**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/acordeonPersonalizado.png">

Los colores de la personalización serán los siguientes:
 
Los datos son los siguientes:

| **Propiedad**                               | **Valor**                                     |
|---------------------------------------------|-----------------------------------------------|
| Color icono acordeón desplegado             | rgb(216, 28, 28)                              |
| Color icono sin desplegar                   | rgb(19, 212, 19)                              |
| Color fondo texto desplegado                | rgb(230, 215, 230)                            |
| Color fondo cabecera elemento desplegado    | rgb(219, 223, 35)                             |
| Padding entre cuerpo y elementos internos   | 0.15rem                                       |
| Color del borde del acordeón                | rgb(93, 116, 11)                              |
| Radio del elemento principal                | 0.5rem                                        |
| Color texto elemento principal desplegado   | rgb(20, 20, 221)                              |
| Color texto elemento sin desplegar SIN focus| rgb(51, 160, 18)                              |
| Color texto desplegado                      | green                                         |
| Color fondo elemento sin desplegar          | yellow                                        |
| Tamaño icono acordeón                       | 1.75rem                                       |
| Sombreado alrededor del elemento con focus  | 0 0 0 0.15rem rgba(78, 78, 209, 0.445)        |




