---
Título: UD. 5.1 - SASS
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---  

<div align="center">
</br>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/480px-Sass_Logo_Color.svg.png" width=25%>
</div>
 
# 1. Introducción: Preprocesador de estilos Sass
<a href="https://sass-lang.com/">SASS</a> (Syntactically Awesome Stylesheet) es un preprocesador de CSS utilizado para traducir un código de **hojas de estilo no estándar** a un código CSS estándar e interpretable por la mayoría de navegadores. Fue creado por Hampton Catlin en 2006 y más tarde extendido por Natalie Weizenbaum.    
La principal utilidad de SASS es la de hacer más simple la escritura del código CSS y brindar utilidades que CSS no ofrece.

**Ventajas de utilizar Sass**  
En proyectos grandes, las hojas de estilo suelen ser complejas y difíciles de mantener. Un preprocesador emplea funcionalidades que no existen en CSS y que facilitan la escritura y organización del código. Estas funcionalidades incluyen entre otros, variables, anidación de selectores, herencia de estilos y mixins, lo que permite un desarrollo más estructurado y eficiente.  
- **Variables.**
  De manera similar a cualquier lenguaje de programación, las variables permiten guardar información y emplearlas cuándo sea necesario.
  
- **Anidación de selectores.**
Usar anidamiento en Sass permite escribir el código CSS con la misma estructura visual que el HTML. De este modo, se simplifica el uso de los selectores y se ofrece a los programadores un formato más visual y jerarquizado para seleccionar elementos anidados.

- **Mixins.**
Los mixins son grupos de código, algo comparable a una función en otro lenguaje de programación, y permiten reutilizar secciones íntegras de código.

- **Herencia de estilos.**  
Mediante las herencias, es posible unificar declaraciones de estilo y compartirlas entre diferentes selectores. Una de las particularidades de las herencias en SASS es que las declaraciones heredadas solo se procesan si se utilizan, lo que asegura que el CSS final no contenga estilos innecesarios.

# 2. Otros preprocesadores de CSS: SCSS  
**SCSS (Sassy CSS) es una extensión de la sintaxis de Sass** que se distingue por su sintaxis: **utiliza corchetes en lugar de identaciones**. SCSS se diseñó de tal manera que un archivo CSS3 válido también es un archivo SCSS válido.  
Los archivos SCSS se almacenan con la extensión .scss.  
**Nota:** Al ser actualmente la sintaxis de Sass preferida nos centraremos en esta. No obstante, a lo largo de la unidad se darán tanto ejemplos de sintaxis Sass como de SCSS.  

# 3. Frameworks compatibles con Sass
<a href="https://getbootstrap.com/">**Bootstrap**</a> es uno de los frameworks frontend más populares y utiliza SASS como preprocesador para sus estilos. Esto nos permite personalizar fácilmente los estilos de Bootstrap utilizando variables y funciones de SASS.

<a href="https://bulma.io/">**Bulma**</a> es otro framework CSS que utiliza SASS como preprocesador. Al igual que Bootstrap, nos permite personalizar fácilmente los estilos de Bulma con características avanzadas de SASS.

<a href="https://gulpjs.com/">**Gulp**</a> es una herramienta de automatización de tareas que puede integrarse fácilmente con SASS. Podemos usar Gulp para compilar automáticamente nuestros archivos SASS, minificar y combinar nuestros estilos, entre otras tareas útiles.



# 4. Instalación y uso de SASS.
## 4.1 Instalación
Instrucciones de <a href="https://sass-lang.com/install/">**instalación**</a> de Sass.  

## 4.2 Uso de Sass
De una manera que recuerda a **Tailwind** necesitaremos compilar el código Sass (estilos.scss) a (estilos.css).  
Para ello podremos hacerlo desde la `CLI` con `sass input.scss output.css` o automáticamente con un **supervisor** ejecutando el comando `sass --watch input.scss output.css`. 
## 4.3 Ejercicio
Crear una carpeta dentro de la cual crearéis un archivo *.scss con el siguiente contenido:
```
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
Ejecutar el comando `sass --watch archivo.scss archivo.css` y comprobar que se han generado 2 archivos con extensiones ***.css** y ***.css.map**

## 4.4 Archivo *.css.map
El archivo `map.css` es un archivo de mapa de fuentes (source map). Los mapas de fuentes ayudan a depurar el código CSS compilado al permitir que las herramientas de desarrollo del navegador mapeen las reglas CSS generadas de vuelta a las líneas correspondientes en los archivos SASS/SCSS originales.

**Propósito de un archivo** `.map.css`
- **Depuración:** Facilita identificar en qué parte del archivo SASS/SCSS se originó un estilo específico cuando se inspecciona un elemento en el navegador.
- **Desarrollo:** Ayuda a mantener la relación entre el CSS compilado y el código fuente, lo que resulta útil cuando se trabajan en proyectos grandes y complejos.

**Funcionamiento.**
El archivo `.map.css` se enlaza al archivo CSS compilado. El navegador utiliza este archivo para mostrar las fuentes originales al depurar el CSS, lo que simplifica la localización y corrección de errores.  

## 4.5 Ejercicio
Crear un archivo `index.html` y asociarle la hoja de estilos *.css.
Renderizar el archivo y comprobar que los estilos del documento están vinculados al archivo.scss . 
Comprobar igualmente que en el archivo *.css aparece el siguiente comentario:
```
/*# sourceMappingURL=styles.css.map */
```
Esto indica al navegador dónde encontrar el archivo de mapa de fuentes para vincular el código CSS compilado al código SCSS original.

# 5. Variables
Las variables permiten almacenar información reutilizable, el nombre de la variable debe empezar con $ y deben ser declaradas antes de utilizarse.  
Sass permite almacenar diferentes tipos de datos en variables, incluyendo:

**Colores:**
- **SCSS**  
```
$background-color: #ff5733;
```
- **Sass**
```
$background-color: #ff5733
```
<br></br>
**Números:**  
```
$base-margin: 16px;
```
<br></br>
**Cadenas de texto:**  
- **SCSS**
```
$font-family: 'Arial', sans-serif;
```
- **Sass**
```
$font-family: 'Arial', sans-serif
```
<br></br>
**Booleans:**
```
$is-responsive: true;
```
<br></br>
**Listas:**
```
$breakpoints: 320px, 480px, 768px, 1024px;
```
<br></br>
**Maps (Mapas asociativos):**  
- **SCSS**
```
$theme-colors: (
  "primary": #007bff,
  "secondary": #6c757d,
  "success": #28a745
);
```
- **Sass**
```
$theme-colors: (
  "primary": #007bff,
  "secondary": #6c757d,
  "success": #28a745
)
```

## 5.1 Ejercicio parte 1
**Implementación de Temas Claro y Oscuro en Sass**  
Implementar un sistema de temas claro y oscuro utilizando variables en Sass para definir colores de fondo y de texto, y aplicarlos al `body` según la clase asignada.

- **Instrucciones:**
    - Crear variables en Sass para los **colores** de **fondo** y de **texto** del tema claro y oscuro , p.e.: `bg-light` y `text-dark`, `#ffffff`. 
    - Aplicar las variables de color:
      - Definir los estilos de `body` usando la clase `.light-theme` para aplicar los colores correspondientes al tema claro.
      - Define los estilos de `body` usando la clase `.dark-theme` para aplicar los colores correspondientes al tema oscuro.

Con la ayuda del siguiente código, comprobar que los estilos se aplican correctamente.
```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" ="width=device-width, initial-scale=1.0">
  <title>Variables</title>
  <link rel="stylesheet" href="Estilos.css">  
</head>
<body class="light-theme"> 

  <header>
    <h1>Ejercicio de variables en Sass</h1>
    <button id="toggle-theme">Cambiar a Tema Oscuro</button>
  </header>

  <main>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quis a atque facilis iste asperiores iure repudiandae modi, placeat ullam eos soluta laboriosam recusandae velit est optio consequatur quasi officiis!</p>
  </main>

  <footer>
    <p>Pie de página</p>
  </footer>

  <script>
    // Función para alternar temas
    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');
      
      // Cambiar el texto del botón según el tema activo
      if (document.body.classList.contains('light-theme')) {
        toggleButton.text = 'Cambiar a Tema Oscuro';
      } else {
        toggleButton.text = 'Cambiar a Tema Claro';
      }
    });
  </script>

</body>
</html>
```  
  
## 5.2 Ejercicio parte 2
Continuaremos sobre la base del ejercicio anterior y explotaremos la reutilizabilidad de las variables de Sass.
1. Definir un color primario `primary-color`, `#ff5733`.
2. Aplicar ese color como color de fondo del `header` del archivo anterior.
3. Aplicar ese color al **borde superior** del `footer` (2px)
   
## 5.3 Utilización, operaciones y funciones sobre variables
**Utilización de variables**  
Para utilizar una variable dentro de un selector usaremos la notacion `#{$variable}`.
```
$medium: 768px;

@media only screen and min-width: #{$medium} {
    .btn {
        background: $blue;
    }
}
```
**Operaciones sobre variables**  
También se pueden realizar operaciones matemáticas sobre variables. 
```
$padding: 20px;

.btn {
    padding: $padding / 2;
}
```
**Funciones sobre variables**  
Para terminar, también es posible utilizar funciones que podremas aplicar a nuestras variables.  
<a href="https://sass-lang.com/documentation/modules/">**Listado módulos Sass**</a>  
Para poder usar las funciones de los módulos, previamente deberemos importarlos con la directiva `@use`  
```
@use 'sass:color';

$primary: gray;

.btn {
    background: $primary;

    &:hover {
        background: darken($primary, 10);
    }
}
```
Ejemplo de función que permite extraer valores de una variable **mapa** (diccionario).
```
@use "sass:map";

$theme-colors: (
  "primary": #007bff,
  "secondary": #6c757d,
  "success": #28a745
);

.realizado {
    background-color: map-get($map: $theme-colors, $key: success);
}
```
## 5.4 Ejercicio
**Crear un archivo Sass que realice lo siguiente:**  
1 - Definir un estilo **CSS** que pase un texto de **mayúsculas** a **minúsculas**.  
2 - Definir un estilo **CSS** que pase un texto de **minúsculas** a **mayúsculas**.  
3 - Buscar en la documentación de Sass una función que convierte el contenido de una variable de texto de **minúsculas** a **mayúsculas** (tips: `Builts-in modules`, `string`, `upper`, `case`).  
4 - Escribir un documento HTML que ilustre las conversiones. Estaís libres de añadir los estilos necesarios para mejorar la vistosidad del documento.

>**Ejemplo de resultado:**
>  
><img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/ejercicio54.png" width=75%/>  

# 6 Anidación de selectores
En CSS, los selectores relacionados deben escribirse de manera explícita, lo que puede llevar a un código repetitivo y difícil de mantener. 
Una de las características de Sass es la capacidad de anidar selectores CSS de una manera que refleja la estructura jerárquica del HTML. Eso hace que el código CSS sea más legible y fácil de organizar.  
**Ejemplo de anidamientos de estilos en CSS**
>**Html**
```
<div class="contenedor">
  <p class="texto">Hola mundo</p>
  <span class="destacado">¡Bienvenido!</span>
</div>
```
>**CSS**
```
.contenedor {
  padding: 20px;
}

.contenedor .texto {
  color: blue;
}

.contenedor .destacado {
  font-weight: bold;
}
```

## 6.1 Sintaxis de Sass para los anidamientos de estilos
En Sass, el anidamiento **se realiza simplemente escribiendo las reglas dentro de otras reglas**.  
Esto refleja la jerarquía de los elementos HTML como lo podemos ver a continuación donde:
  1. `nav` contiene un `ul`
  2. `ul`contiene un `li`
  3. `li` contiene un `a`.

```scss
nav {
  background-color: #333;
  
  ul {
    list-style-type: none;
    
    li {
      display: inline-block;
      padding: 10px;
      
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
```
## 6.2 Ejercicio
Convertir a SCSS el CSS del ejemplo del punto 6.
  
## 6.3 Uso del selector padre `&`
El símbolo `&` (Ampersand) se utiliza para hacer referencia al selector padre en una regla anidada. Esto es útil para aplicar pseudo-clases, pseudo-elementos o variantes del selector.  
  
**Ejemplo con pseudo clases y pseudo-elementos**  
- `&:hover` Se refiere a button:hover. El botón cambia de color cuando está en hover.
- `&:active` Se refiere a button:active. El botón cambia de color al hacer clic (`active`) sobre él.
- `&::after` Hace referencia a `a::after`. Crea un contenido después de clicar el enlace.
>SCSS
```
button {
  background-color: #007bff;
  color: white;
  
  &:hover {
    background-color: #0056b3;
  }
  
  &:active {
    background-color: #28a745;
  }
}

a {
  color: blue;
  
  &:hover {
    color: darkblue;
  }
  
  &::after {
    content: ' (link) ';
    font-style: italic;
  }
}
```
>CSS
```
button {
  background-color: #007bff;
  color: white;
}
button:hover {
  background-color: #0056b3;
}
button:active {
  background-color: #28a745;
}

a {
  color: blue;
}
a:hover {
  color: darkblue;
}
a::after {
  content: ' (link) ';
  font-style: italic;
}

/*# sourceMappingURL=estilos.css.map */
```

## 6.4 Ejercicio
Escribir un HTML que utilice los estilos definidos en el ejemplo del apartado 6.3.  
  
## 6.5 Anidamiento con combinadores
El anidamiento puede incluir combinadores de selección como `>`, `+`, `~`, y un espacio (para descendientes). Esto permite especificar la relación entre los elementos de manera jerárquica.

**Ejemplo con combinadores.**
- `> p` selecciona los elementos `p` que son hijos directos de `div`.
- `p + ul` selecciona un `ul` que está inmediatamente después de un `p`.
- `p ~ div` selecciona todos los `div` que siguen a un `p` en el mismo nivel de jerarquía.
>Archivo.scss
```
div {
  background-color: lightblue;
  
  > p {
    font-weight: bold;
  }
  
  p + ul {
    margin-top: 10px;
  }
  
  p ~ div {
    border: 1px solid gray;
  }
}
```
>Archivo.css
```
div {
  background-color: lightblue;
}
div > p {
  font-weight: bold;
}
div p + ul {
  margin-top: 10px;
}
div p ~ div {
  border: 1px solid gray;
}

/*# sourceMappingURL=estilos.css.map */
```  

## 6.6 Anidamiento de media queries:
También se pueden anidar las reglas de media queries para hacer que los estilos sean responsivos.

**Ejemplo:**
```
.container {
  width: 100%;
  
  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
}
```

## 6.7 Buenas prácticas de Sass
Es recomendable no anidar demasiado profundamente, ya que puede hacer que el CSS sea difícil de mantener y puede generar reglas de estilo muy específicas difíciles de sobrescribir.  
  
**Ejemplo de anidamiento excesivo.**
```
.container {
  .section {
    .article {
      .title {
        font-size: 2rem;
      }
    }
  }
}
```
  
## 6.8 Tarea RA2CEj
Convertir la hoja de estilos siguiente a SCSS.
```
.panel {
  border: 1px solid #ddd;
  padding: 20px;
}
.panel .panel-header {
  background-color: #f5f5f5;
}
.panel .panel-header h2 {
  margin: 0;
  color: #333;
}
.panel .panel-body {
  margin-top: 20px;
}
.panel .panel-body p {
  color: #666;
}
.panel .panel-footer {
  background-color: #f5f5f5;
  text-align: right;
}
.panel .panel-footer button {
  background-color: #007bff;
  color: white;
}
.panel .panel-footer button:hover {
  background-color: #0056b3;
}
```


# 7 Directivas @import, @use y @forward  
La directiva **@import** se utiliza para importar **otras hojas de estilo dentro de la hoja de estilo principal**, lo que permite modularizar los estilos, organizarlos en diferentes archivos y mantener el código más limpio y manejable.  
Desde `Sass 1.23.0`, el uso de `@import` está desaconsejado, se recomienda usar `@use` y `@forward`.  
  
Las directivas **`@use`** y **`@forward`** son características de **Sass** (desde Sass 1.23.0) y reemplazanan la directiva **`@import`**. 

## 7.1 Importación de módulos con @use
**@use** permite importar y cargar un archivo Sass de manera más controlada y eficiente que la antigua `@import` permitiendo, entre otras, evitar la duplicación de reglas.
- **Sintaxis.**
```
@use "path/to/module";
```

- **Características de `@use`:**
    - **Carga el archivo solo una vez**, incluso si se importa en múltiples archivos.
    - **Las variables, mixins y funciones** importadas son "namespaced", es decir, agrupadas bajo el nombre del archivo, lo que ayuda a evitar conflictos de nombres.
    - **Naming (espacios de nombres)**: Cuando usamos `@use`, las variables, mixins y funciones del archivo importado se agrupan bajo un prefijo que se deriva del nombre del archivo. Por ejemplo, si importamos el archivo `_colors.scss`, las variables dentro de este archivo estarán accesibles como `colors.$primary`, `colors.$secondary`, etc.

**Ejemplo:**
- Archivo Estilos.scss
```
@use "./estilosAdicionales/flex";

// tema claro
$bg-light: #ffffff;
$text-light: #000000;

// tema oscuro
$bg-dark: #333333;
$text-dark: #ffffff;

body.light-theme {
  background-color: $bg-light;
  color: $text-light;  
}

body.dark-theme {
  background-color: $bg-dark;
  color: $text-dark;
}

$primary-color: #ff5733;

header {
  background-color: $primary-color;
}

footer {
  border-top: 1px solid $primary-color;
}
```

- **Archivo _flex.scss**
```
#formulario {
    display: flex;
    flex-direction: column;
    align-items: center;               
}

input {
    width: 45vw;
    margin: 5px;
}

textarea {
    width: 45vw;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid blue;     
    margin: 10px; 
    width: 60vw;      
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```
- **Archivo index.html**
```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Variables</title>
  <link rel="stylesheet" href="Estilos.css">  
</head>
<body class="light-theme">

  <header>
    <h1>Ejercicio de variables en Sass</h1>
    <button id="toggle-theme">Cambiar a Tema Oscuro</button>
  </header>

  <main>
    <p>Utilización de la directiva @use para añadir estilos desde hoja de estilos adicional.</p>
    <form id="formulario" action="form">
      <label>Nombre</label>
      <input type="text">
      <label>Email</label>
      <input type="">
      <label>Mensaje</label>
      <input type="text">
      <textarea cols="10" rows="5"></textarea>
      <input type="submit" value="Enviar">
    </form>

  </main>

  <footer>
    <p>Pie de página</p>
  </footer>

  <script>
    // Función para alternar entre el tema claro y oscuro
    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');
      
      // Cambiar el texto del botón según el tema activo
      if (document.body.classList.contains('light-theme')) {
        toggleButton.textContent = 'Cambiar a Tema Oscuro';
      } else {
        toggleButton.textContent = 'Cambiar a Tema Claro';
      }
    });
  </script>

</body>
</html>
```

## 7.2 Ejercicio 
Montar el ejemplo anterior y comprobar como el estilo de <`form`> se actualiza al usar la directiva @use.

**Nota:**  
En el ejemplo:
- Por convención se pone un `guión bajo` delante de la hoja de estilos a la que se hace referencia.
- El guión bajo indica que el archivo es <a href="https://sass-lang.com/guide/#partials">**un archivo de estilos parcial**</a>, es decir, un archivo que **no se compila directamente** en un archivo CSS independiente, sino que **se incluye y compila en otros archivos**.
- Cuando se usan las directivas `@use` y `@forward` dentro de un archivo ***.scss** omitir el guión bajo `_` para evitar errores de compilación.
  >**Ejemplo:**  
  >**Así sí:** `@use "./estilosAdicionales/flex";`    
  >**Así no:** `@use "./estilosAdicionales/_flex";`

## 7.3 Alias
Se puede usar un alias para un archivo importado con `@use` para hacer más cortos los nombres de las variables o mixins que estamos usando.

**Modificación del ejemplo anterior.**
- **Archivo _flex.scss**
```
#formulario {
    display: flex;
    flex-direction: column;
    align-items: center;               
}

input {
    width: 45vw;
    margin: 5px;
}

textarea {
    width: 45vw;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid blue;     
    margin: 10px; 
    width: 60vw;      
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

// tema claro
$bg-light: #ffffff;
$text-light: #000000;

// tema oscuro
$bg-dark: #333333;
$text-dark: #ffffff;
```
- **Archivo Estilos.scss**
```
@use "./estilosAdicionales/flex" as flex;

body.light-theme {
  background-color: flex.$bg-light;
  color: flex.$text-light;
}

body.dark-theme {
  background-color: flex.$bg-dark;
  color: flex.$text-dark;
}

$primary-color: #ff5733;

header {
  background-color: $primary-color;
}

footer {
  border-top: 1px solid $primary-color;
}
```
  
## 7.4 Reexportación de módulos con @forward 
La directiva `@forward` se utiliza para **reenviar** todo o parte de un módulo (archivo Sass) a otros archivos. Esto permite que un archivo Sass se convierta en un "paso intermedio" que reexporta el contenido de otros archivos, lo que facilita la creación de bibliotecas o colecciones de módulos reutilizables.
La directiva @forward, **solo sirve para reexportar variables, mixins, y funciones de un archivo a otro**, de forma que otros archivos puedan importar las funcionalidades desde un único punto central.

**Ejemplo.**
- **Archivo Estilos.scss**
```
@use "./estilosAdicionales/flex" as flex;

body.light-theme {
  background-color: flex.$bg-light;
  color: flex.$text-light;
}

body.dark-theme {
  background-color: flex.$bg-dark;
  color: flex.$text-dark;
}

$primary-color: #ff5733;

header {
  background-color: $primary-color;
}

footer {
  border-top: 1px solid $primary-color;
}
```
- **Archivo _variables.scss**
```
// _variables.scss
// Tema claro
$bg-light: #ffffff;
$text-light: #000000;

// Tema oscuro
$bg-dark: #000000;
$text-dark: #ffffff;
```
- **Archivo flex.scss**
```
@forward "../forwarded/variables"; 

#formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    width: 45vw;
    margin: 5px;
}

textarea {
    width: 45vw;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid blue;
    margin: 10px;
    width: 60vw;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

## 7.5 Ejercicio
Montar el ejemplo anterior para entender mejor la directiva @forward.

**Nota:**
En el ejemplo:
- **@use**: Se utiliza para **importar un archivo Sass en otro** y poder utilizar sus variables, mixins y funciones.
- **@forward**: Se utiliza para **reexportar contenido de un archivo Sass a otro**. Sirve para crear puntos de acceso centralizados o módulos de estilo que otros archivos pueden importar.
- **@forward no carga el archivo** en sí, sino que expone su contenido para que otros archivos puedan usarlo al importar el archivo que contiene @forward.

**Características clave de `@forward`:**
- **Reexportar módulos**: `@forward` reexporta todas o algunas partes de un módulo a otros archivos que lo necesiten, **sin necesidad de hacer un `@use` de cada archivo individualmente**.
- **Control de lo que se reexporta**: Se puede usar `@forward` con selección para excluir o incluir ciertas variables, mixins o funciones.

**Ejemplo de `@forward` con control de lo que se reexporta:**
```
// _colors.scss
$primary: #ff5733;
$secondary: #333333;
$tertiary: #ffffff;
```
```
// _index.scss
@forward "colors" with $primary, $secondary;
```
En este caso, el archivo `_index.scss` solo reexportará las variables `$primary` y `$secondary`, excluyendo `$tertiary`.

## 7.6 Ejercicio
Pasar la declaración de la variable `$primary-color: #ff5733;` del archivo `estilos.scss` a `_variables.scss`.  
Realizar las adapataciones pertinentes para que el HTML se ejecute correctamente.

## 7.7 Resumen de @use y @forward
- **`@use`**: Importa un archivo Sass de manera controlada, evitando la duplicación de código y proporcionando un espacio de nombres para las variables y mixins.
- **`@forward`**: Reexporta un archivo Sass a otros archivos, permitiendo que esos archivos accedan a su contenido de forma organizada.
    
Ambas directivas son fundamentales para trabajar de manera eficiente con Sass en proyectos grandes y permiten una gestión más limpia de los estilos.

# 8. Mixins y funciones
## 8.1 Definición de un mixin.
Los **mixins** son bloques que agrupan estilos CSS que pueden ser utilizados y reutilizados en otros lugares del proyecto de una página web, lo que evita tener que reescribirlos cada vez que sea necesario emplearlos. Además, un **mixin** también puede recibir parámetros (como si fuera una función de un lenguaje de programación), los que permite obtener varias salidas (estilos CSS), personalizadas a las necesidades del proyecto.

## 8.2 Sintaxis de un mixin
Un *mixin* se define con la directiva `@mixin` seguida del nombre del mixin. Es una buena práctica emplear nombres descriptivos y claros.

```
// Definición del mixin
@mixin button-styles {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #348db;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #280b;
  }
}
```

### 8.2.1 Ejercicio
>Crear un archivo `*.scss` y compilarlo. Observar el contenido del archivo `*.css` generado.

## 8.3 Uso de un mixin
Para incluir un **mixin** en un selector, se utiliza la directiva `@include`.

```
.button {
  @include button-styles;
}
```
### 8.3.1 Ejercicio
>Completar el archivo `*.scss` creado anteriormente, compilarlo y observar el contenido del archivo `*.css`.

## 8.4 Mixins con Parámetros
Los **mixins** pueden aceptar uno o más parámetros para permitir la personalización de los estilos.  
**Archivo** `estilos.scss` 
```
@mixin border-radius($radius) {
    -webkit-border-radius: $radius;
       -moz-border-radius: $radius;
            border-radius: $radius;
}

@mixin botonCompleto($radius, $fontSize, $color) {
    font-size: $fontSize;
    border-radius: $radius;
    color: $color;
}
  
#box {
    @include border-radius(12px);
}

.button {
    margin-top: 10px;
    @include border-radius(6px);    
}

.btn {
    margin-top: 10px;
    @include botonCompleto(6px,20px,blue);    
}
```
**Archivo** `index.html` 
```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Instanciar @mixin</title>
  <link rel="stylesheet" href="estilos.css">  
</head>
<body class="light-theme">

  <header>
    <h1>Ejercicio de declaración de mixins</h1>
    <button id="box">Click 1</button>
  </header>

  <main>
    <section>
      <button class="button">Mixin de 1 parametro</button>
    </section>
    <section>
      <button class="btn">Mixin de varios parametros</button>
    </section>    
  </main>

  <footer>
    <h1>Fin del ejercicio</h1>    
  </footer>
  
</body>
</html>
```

## 8.5 Mixins con Parámetros Predeterminados
También se pueden definir parámetros predeterminados, dado el caso de instanciar un mixin pasándole solo un parte, o directamente ningun valor. 

```
@mixin box-shadow($x: 0, $y: 0, $blur: 5px, $color: rgba(0, 0, 0, 0.3)) {
  box-shadow: $x $y $blur $color;
}

.card {
  @include box-shadow(2px, 2px);
}
```
### 8.5.1 Ejercicio
>¿Cual será el *.css resultante del ejemplo anterior?

## 8.6 Directiva @content dentro de un @mixin
**@content** actúa como un marcador de posición dentro de un **@mixin**. Ese marcador será reemplazado por el código proporcionado al invocar el @mixin con @include. 
```
//definicion del mixin con la directica @content
@mixin card-style {
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #fff;    
    @content; // Se insertará contenido aquí cuando se use el mixin
}
//invocar el mixin y pasarle codigo adicional
.container {
    @include card-style {
        color: #333; //código adicional
        font-size: 14px; //código adicional
    }
}
```
### 8.6.1 Ejercicio
Montar el ejemplo anterior.  
Montar el ejemplo anterior pero esta vez con el `@include card-style` **vacio** es decir `@include card-style {}` 

## 8.7 Mixins anidados
El anidamiento de @mixins implica la inclusión de un @mixin dentro de otro. Esto permite construir estilos más modulares y mantener la estructura organizada.
```
@mixin flex-container {
    display: flex;
    justify-content: center;
    align-items: center;  
    @content;
  }
  
  @mixin flex-item($grow: 1) {
    flex-grow: $grow;
  }
  
  .container {
    @include flex-container {
      height: 100vh;
      .item {
        @include flex-item(2);
      }
    }
  }
```

## 8.8 Mixins globales
El término "mixin global" se refiere a un mixin que está disponible para ser usado en cualquier parte de un proyecto debido a su ubicación en un archivo compartido o común que es importado globalmente.  
Esta manera de proceder permite definir tantos archivos (módulos) como elementos tengamos (variables, funciones, mixins...).
Como hemos visto en <a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/UT.%205.1%20-%20SASS.md#7-directivas-import-use-y-forward"># 7 Directivas @import, @use y @forward</a> , los mixins globales se importan o reexportan con la directiva @use y @forward respectivamente. 
>**Ejemplo:**  
>Archivo **_mixins.scss**  
```
@mixin borde-redondeado($radio: 5px) {
  border-radius: $radio;
}
```
>Archivo **estilos.scss**
```
@use 'mixins'; // Importa el archivo que contiene el mixin global

.caja {
  @include mixins.borde-redondeado(10px);
}
```

## 8.9 Funciones
La directiva `@function` es una característica de Sass que permite definir funciones similares a las de lenguajes de programación tradicionales. Estas funciones aceptan parámetros, realizan cálculos o manipulaciones, y devuelven un valor que puede ser utilizado en otros lugares del archivo Sass.  

  - **Sintaxis de `@function`**
```
@function nombre-funcion($parametro1, $parametro2) {
  // Cuerpo de la función
  @return valor;
}
```

  - **Ejemplo**
la siguiente función convierte píxeles a `rem`:
```
@function px-to-rem($px, $base-font-size: 16px) {
  @return #{$px / $base-font-size} * 1rem;
}
```  
Llamada a la función (desde dentro de un mixin).
```
@mixin button($color) {
  background-color: $color;
  border: none;
  padding: 10px 20px;
  font-size: px-to-rem(16px);
}
```  

  - **Limitaciones de `@function`:**
- **Sólo devuelven valores**: Las funciones de Sass solo pueden devolver un valor, no pueden cambiar directamente el CSS generado (para eso se utilizan los mixins).
- **Limitaciones lógicas**: Aunque Sass permite algunas operaciones lógicas y cálculos, no es un lenguaje de programación completo, por lo que hay límites en la lógica que se puede implementar.

  - **Diferencia entre `@function` y `@mixin`:**
- **`@function`** devuelve un valor que se puede usar en propiedades de CSS.
- **`@mixin`** incluye bloques de estilos completos y no devuelve un valor.

## 8.10 Cambios en las global built-in functions
La próxima actualización, Sass eliminará el soporte para el uso de funciones integradas sin **referenciarlas explícitamente** al módulo al que pertenecen. Esto forma parte de los cambios ya vistos anteriormente con la transición desde `@import` hacia `@use` y `@forward`.

## 8.11 Ejemplo de uso de funciones integradas, antes de la actualización 
Se usan las funciones simplemente instanciandolas.
```
$list: append(("a", "b"), "c"); // Funciona sin usar un módulo.
```
## 8.12 Ejemplo de uso de funciones integradas, después de la actualización 
A partir de ahora, el ejemplo **8.11** dará una advertencia de `deprecated` durante la compilación del archivo `*.scss`.  
Para evitar que nuestro código quede obsoleto haremos lo siguiente. 
 - **Necesidad de `@use`.**
 - **Prefijo Obligatorio.**
```
@use "sass:list";

$list: list.append(("a", "b"), "c");
```
## 8.13 Ventajas y motivos del cambio
- **Principal ventaja: Encapsulación de nombres de funciones**
  - Al requerir que las funciones estén vinculadas a su módulo, se reduce la posibilidad de conflictos de nombres entre **funciones personalizadas** y **funciones integradas**.
  - Por ejemplo, si definimos una función propia `append`, esta ya no colisionará con la función integrada `list.append`.


- **Motivo del Cambio.**
  - **Mayor mantenibilidad**: El código es más fácil de leer, entender y mantener cuando los métodos provienen de módulos específicos.
  - **Consistencia con los estándares modernos**: Esta estructura modular es más consistente con cómo se organizan las bibliotecas modernas.

Más información <a href="https://sass-lang.com/documentation/breaking-changes/import/">**aquí**</a>. 

# 9 Estructuras de control: Condicionales y bucles 
## 9.1 Condicionales
Podemos crear estilos más eficientes y flexibles utilizando condiciones. Por ejemplo, si dos elementos tienen el mismo estilo, pero existe una condición que solo uno de ellos cumple, podremos diferenciarlos usando `estilos / mixins` condicionales.

Con la directiva **@if** definiremos diferentes condiciones de uso. Además del `@if` también es habitual usar **@else if <condición> o @else**.
```
@mixin button-style($type) {
  @if $type == "primary" {
    background-color: blue;
    color: white;
  } @else if $type == "secondary" {
    background-color: gray;
    color: black;
  } @else {
    background-color: white;
    color: black;
  }
}

.btn-1 {
  @include button-style("primary");
}

.btn-2 {
  @include button-style("secondary");
}

.btn-3 {
  @include button-style("tertiary");
}
```

### 9.1.1 Ejercicio
**Mixin de media queries condicionales**  
>**Parte 1**  
 - Escribe un código en SCSS que defina un `mixin` llamado `media-query`  
 - Ese `mixin` permitirá aplicar diferentes estilos CSS basados en la variable dispositivo `$device` (phone, tablet u otros) que le será pasado por parámetro.   
 - El `mixin` tratará con un bucle condicional el contenido de `device` y determinará si se trata de un teléfono, una tableta o de un valor pasado por error (o ningun valor).  
 - Para cada selección aplicar el `@content` correspondiente dentro de **una consulta de medios** (`@media`) con un ancho máximo de 900px (phone), 1200px (tablet) o más de 1200px (error / nulo), respectivamente.  
 - En el caso de no pasar ningun parámetro o pasarlo con errores el `@media` aplicado será de 1200px.  

>**Parte 2**  
Aplica este `mixin` en una clase llamada `.container` para que:  
- Cambie el color de fondo a azul cuando se visualice en un dispositivo con un ancho máximo de 600px (teléfono).  
- Cambie el color de fondo a verde cuando se visualice en un dispositivo con un ancho máximo de 900px (tableta).  
- Cambie el color de fondo a rojo en cualquier otra caso.

El código deberá utilizar `@include` para aplicar el `mixin` dentro de la clase `.container`.  


## 9.2 Bucles (iteradores)
### 9.2.1 Directiva @each  
La directiva @each se utiliza para iterar sobre listas y mapas en Sass. Es ideal para recorrer elementos y aplicar estilos de forma dinámica.
>**Ejemplo con listas:**
```
$colores: red, blue, green;

@each $color in $colores {
  .text-#{$color} {
    color: $color;
  }
}
```  
>**Ejemplo con mapas:**
```
$espaciados: (
  small: 4px,
  medium: 8px,
  large: 16px
);

@each $nombre, $valor in $espaciados {
  .margen-#{$nombre} {
    margin: $valor;
  }
}
```  
### 9.2.2 Directiva @for  
se utiliza para ejecutar un bloque de código **un número específico de veces**.
>**Ejemplo con @for, from y through.**
```
$inicio: 1;
$final: 5;

@for $i from $inicio through $final {
    .columna-#{$i} {
      width: 100% / $i;
    }
  }
```
>**Resultado CSS después de compilación.**

```
.columna-1 {
  width: 100%;
}

.columna-2 {
  width: 50%;
}

.columna-3 {
  width: 33.3333%;
}

.columna-4 {
  width: 25%;
}

.columna-5 {
  width: 20%;
}
```
**Diferencia entre to y through:**  
Para crear el bucle definimos una variable `$i` y para recorrer el bucle utilizaremos `from`, `through` o `to`.  
La diferencia entre `through` o `to` radica en que, si utilizamos `to`, se recorre la variable desde el valor `from` hasta el valor anterior a `to`. Con `through` se recorren todos los valores incluido `to`.

>**Ejemplo con @for, from y to.**
```
$inicio: 1;
$final: 5;

@for $i from $inicio to $final {
    .columna-#{$i} {
      width: 100% / $i;
    }
  }
```

>**Resultado CSS después de compilación.**
```
.columna-1 {
  width: 100%;
}

.columna-2 {
  width: 50%;
}

.columna-3 {
  width: 33.3333%;
}

.columna-4 {
  width: 25%;
}
```

### 9.2.3 Directiva while
La directiva @while ejecuta un bloque de código mientras una condición sea verdadera.
```
$i: 1;

@while $i < 4 {
  .borde-#{$i} {
    border-width: $i * 2px;
  }
  $i: $i + 1;
}
```
## 9.3 Directiva @debug
La directiva `@debug` se utiliza para imprimir información en la consola durante la compilación. Es muy útil para depurar y verificar el contenido de variables, listas, mapas, y otros datos en tiempo de compilación (sin afectar al CSS resultante).

>**Ejemplo:**
```
$colors: (red, green, blue);
@debug $colors;
```
## 9.4 Ejercicio
Con la ayuda de iteradores, escribir una hoja de estilo en Sass que devuelva la siguiente renderización.  
Podeís utilizar el color que más os guste.

<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/ejercicio924.png" width=500px/>

# 10. Herencia de selectores y clase %
## 10.1 Herencias , @extend
La directiva **@extend**, permite compartir (heredar) reglas CSS entre múltiples selectores manteniendo el enfoque **DRY** (Don't Repeat Yourself).  
```
// Selector a heredar
.placeholder {
  color: #ccc;
  font-size: 14px;
  font-style: italic;
}

// Selectores que heredan los estilos CSS
.input-placeholder {
  @extend .placeholder;
}

.textarea-placeholder {
  @extend .placeholder;
}
```
## 10.2 Ejercicio
 - Sobre el ejemplo anterior definir una clase `output-placeholder` con los siguientes estilos `color: green` y `font-size: 10px`.  
 - Esa clase, aparte de tener sus estilos propios, también heredará de la clase `placeholder`.  
 - Montar un archivo HTML, con al menos un elemento al que se le aplique `output-placeholder`, y comprobar qué estilos se le aplica y la estructura del archivo *.css compilado.   

## 10.3 Herencia en selectores derivados.
`@extend` también puede usarse en selectores anidados aunque se recomienda moderar su uso por los problemas de consistencia del CSS resultante. Para esos casos usar `mixin` en vez de heredar.  
>Archivo *.scss 
```
.card {
  border: 1px solid #ccc;
  padding: 10px;

  .card-header {
    font-size: 18px;
    font-weight: bold; 
  }
  
  .card-body {
    font-size: 14px;
  }
}
  
.featured-card {
  @extend .card;          // Hereda las propiedades principales de .card
  
  &-header {              // Selector derivado
    @extend .card-header; // Hereda las propiedades de .card-header
    color: red; 
  }
  
  &-body {                 // // Selector derivado
    @extend .card-body;   // Hereda las propiedades de .card-body
    font-size: 16px; 
  }
}
```
>Archivo *.css compilado  
```
.card, .featured-card {
  border: 1px solid #ccc;
  padding: 10px;
}
.card .card-header, .card .featured-card-header, .featured-card .card-header, .featured-card .featured-card-header {
  font-size: 18px;
  font-weight: bold;
}
.card .card-body, .card .featured-card-body, .featured-card .card-body, .featured-card .featured-card-body {
  font-size: 14px;
}

.featured-card-header {
  color: red;
}
.featured-card-body {
  font-size: 16px;
}

/*# sourceMappingURL=estilos.css.map */
```

## 10.4 Usos principales del símbolo & en Sass
Hemos dado 3 usos al símbolo `&`: creación de pseudo-clases, pseudo-elementos y también, en el ejemplo anterior, para la creación de selectores combinados.  
A continuación repasaremos los principales usos de `&`:

### 10.4.1 Concatenar nombres de clases o elementos relacionados
`&` puede usarse para añadir sufijos o prefijos a una clase, creando modificadores o variaciones de una base.

>**Ejemplo Sass**
```scss
.alert {
  color: red;

  &-warning {
    color: orange;
  }

  &-success {
    color: green;
  }
}
```

>**CSS compilado**
```css
.alert {
  color: red;
}

.alert-warning {
  color: orange;
}

.alert-success {
  color: green;
}
```

### 10.4.2 Crear selectores combinados
Se puede usar el `&` para escribir selectores más complejos, como combinadores (`+`, `>`, `~`).

**Ejemplo Sass**
```
.card {
  & + & {
    margin-top: 20px;
  }

  & > .card-header {
    font-weight: bold;
  }
}
```

**CSS compilado**
```
.card + .card {
  margin-top: 20px;
}

.card > .card-header {
  font-weight: bold;
}
```
### 10.4.3 Uso en pseudo-clases y pseudo-elementos
El `&` es particularmente útil para anidar pseudo-clases y pseudo-elementos dentro de un selector.

**Ejemplo Sass**
```
.link {
  color: blue;

  &:visited {
    color: purple;
  }

  &::after {
    content: ' →';
  }
}
```

**CSS compilado**
```
.link {
  color: blue;
}

.link:visited {
  color: purple;
}

.link::after {
  content: ' →';
}
```

### 10.4.4 Uso con directivas como `@media`
El `&` también puede usarse dentro de directivas como `@media` para generar estilos responsivos.

**Ejemplo Sass**
```scss
.container {
  width: 100%;

  @media (min-width: 768px) {
    & {
      width: 80%;
    }
  }
}
```

**CSS compilado:**
```css
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 80%;
  }
}
```

## 10.5 Clase %
La clase `%` también conocida como **placeholder** (selector de marcador de posición), se utiliza para definir un conjunto de reglas de estilo **que no se aplican directamente a ningún elemento** pero que pueden ser **extendidas mediante `@extend`**.  
La `clase %` es especialmente útil para compartir estilos entre selectores sin agregar clases extra al HTML ni generar CSS redundante.
Al no aplicarse directamente a ningún elemento, **no se compila** y así pues, no aparecerá en el *.css. 

>**Archivo scss**
```
// placeholder 
%estilosComunes {
  color: #333;
  font-size: 16px;
  padding: 10px;
  border:2px solid black;
  border-radius: 5px;

}
  
// Selectores que extienden el placeholder
.btn {
  @extend %estilosComunes;
  background-color: #007BFF;

  :hover {
    background-color: green;
  }
}
  
.alert {
  @extend %estilosComunes;
  background-color: #FFC107;

  :hover {
    background-color: red;

  }
}
```

>**Archivo css compilado**
```
.alert, .btn {
  color: #333;
  font-size: 16px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
}

.btn {
  background-color: #007BFF;
}
.btn:hover {
  background-color: green;
}

.alert {
  background-color: #FFC107;
}
.alert:hover {
  background-color: red;
}

/*# sourceMappingURL=estilos.css.map */
```
>Archivo HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Placeholder</title>
</head>
<body>
    <main>
        <p>Ejemplo de placeholder</p>
        <section>
            <p>
                <a href="#" class="btn">Confirmar</a>
                <a href="#" class="alert">Eliminar</a>
            </p>
        </section>
    </main>
</body>
```

## 10.6 Beneficios de usar placeholders.
- **Reutilización de código**: Ayuda a evitar la duplicación de código al permitir que varios selectores compartan los mismos estilos.
- **Optimización**: No generan CSS por sí solos, solo generan estilos cuando se utilizan, lo que permite mantener la hoja de estilos más limpia.
- **Fácil mantenimiento**: Actualizar los estilos del placeholder actualiza automáticamente todos los selectores que lo extienden. 

# 11. Estructuración de proyectos con Sass
## 11.1 Estructuración
La estructuración de proyectos en Sass es clave para mantener el código organizado, legible y fácil de mantener.  
Sass proporciona convenciones de organización que ayudan a estructurar los proyectos de una manera coherente y ordenada.  
**Principios Básicos de Estructuración.**  
 - **Modularidad:**
   Dividir el código en módulos pequeños, especificos y reutilizables.
 - **Consistencia:**
   Definir y mantener una convención de nombres y estructura de archivos coherente a lo largo del proyecto.
 - **Separación lógica de elementos:**  
   Definir y mantener la separación lógica entre diferentes tipos de estilos, , mixins, componentes...
   
## 11.2 Metodologías de Arquitectura de proyectos
Las siguientes metodologías ofrecen guías y convenciones para organizar (estructurar) el código Sass (aunque son fundamentos de CSS).
  - **BEM (Block Element Modifier):** Aunque sea una convención de nomenclatura para CSS, también se aplica en Sass.

  - **SMACSS (Scalable and Modular Architecture for CSS):** Propone dividir el código en cinco categorías: Base, Layout, Module, State y Theme.
  - **ITCSS (Inverted Triangle CSS):** Organiza el código en niveles de especificidad creciente, comenzando con estilos genéricos y avanzando hacia estilos específicos y personalizados.

## 11.3 Estructura básica de un proyecto (Sass o CSS).  
```
styles/  
│  
├── base/  
│   ├── _reset.scss  
│   ├── _typography.scss  
│   └── _base.scss  
│  
├── components/  
│   ├── _buttons.scss  
│   ├── _cards.scss  
│   └── _navbar.scss  
│  
├── layout/  
│   ├── _header.scss  
│   ├── _footer.scss  
│   ├── _grid.scss  
│   └── _sidebar.scss  
│  
├── pages/  
│   ├── _home.scss  
│   └── _about.scss  
│  
├── themes/  
│   ├── _dark.scss  
│   └── _light.scss  
│  
├── utils/  
│   ├── _.scss  
│   ├── _mixins.scss  
│   ├── _functions.scss  
│   └── _placeholders.scss  
│  
└── main.scss
```

**Función de cada carpeta.**
- **base/**:  
  La carpeta `base` contiene los estilos básicos o globales del proyecto (<a href="https://github.com/elad2412/the-new-css-reset/blob/main/css/reset.css">archivo de reinicio</a>, <a href="https://github.com/elad2412/the-new-css-reset">reset CSS</a>), tipografía,  configuración general de los elementos HTML...).
- **components/**:  
  Incluye estilos para componentes reutilizables (botones, tarjetas, menús de navegación...)
- **layout/**:  
  Se ocupa de las estructuras de la página (encabezados, pies de página, barras laterales, sistemas de cuadrícula...)
- **pages/**:  
Archivos de estilos específicos para páginas individuales (landing page, sección "acerca de", "sobre nosostros"...).
- **themes/**:  
  Contiene los archivos de temas del proyecto (diurno, nocturno, daltónicos...).
- **utils/**:
  Carpeta para utilidades de **Sass** (, mixins, funciones, placeholders...).
- **main.scss**:
  Es el archivo principal que importa todos los demás archivos parciales y genera la hoja de estilos final.

**Ejemplo de configuración de archivos.**
  - **utils/_variables.scss**
```  
// Definir  de colores
$primary-color: #3498db;
$secondary-color: #2ecc71;
$danger-color: #e74c3c;

// Definir  de espaciado
$spacing-unit: 8px;

// Definir  tipográficas
$font-stack: 'Helvetica, Arial, sans-serif';
```

  - **utils/_mixins.scss**
```
// Definir mixin para bordes redondeados
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
          border-radius: $radius;
}

// Definir mixin para responsive text
@mixin responsive-text($size) {
  font-size: $size;

  @media (min-width: 768px) {
    font-size: $size * 1.2;
  }

  @media (min-width: 1024px) {
    font-size: $size * 1.4;
  }
}
```
 
  - **base/_reset.scss**
```
// Resetear estilos por defecto
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

  - **components/_buttons.scss**
```
@use '../utils/variables' as *;
@use '../utils/mixins' as *;

.button {
  padding: $spacing-unit * 2 $spacing-unit * 3;
  color: #fff;
  background-color: $primary-color;
  @include border-radius(4px);

  :hover {
    background-color: darken($primary-color, 10%);
  }

  &--secondary {
    background-color: $secondary-color;

    &:hover {
      background-color: darken($secondary-color, 10%);
    }
  }
}
```

  - **main.scss**
```
// Importar archivos base
@use 'utils/variables' as *;
@use 'utils/mixins' as *;

// Importar archivos base
@use 'base/reset';
@use 'base/typography';

// Importar archivos de componentes
@use 'components/buttons';
@use 'components/cards';

// Importar archivos de layout
@use 'layout/header';
@use 'layout/footer';
@use 'layout/grid';

// Importar archivos de páginas
@use 'pages/home';
@use 'pages/about';

// Importar archivos de temas
@use 'themes/light';
@use 'themes/dark';
```

**NOTA IMPORTANTE:**
En el código anterior hemos visto que en el archivo `main.scss` se usa el  la **palabra clave** `*` en vez de definir un **alias**.  
Es un buena práctica usar la palabra clave `*` para importar todo el contenido de los archivos ya que no hace necesario el uso de prefijos. 
Por ejemplo, si preferimos mantener los prefijos, accederemos a las variables mediante `variables.$primary-color`.  
Si definimos un alias `@use 'utils/variables' as var;` accederemos a las variables mediante `var.$primary-color`. 

# 12 Buenas prácticas de proyectos en Sass (resumen del tema).
Las buenas prácticas en **Sass** ayudan a mantener el código limpio, eficiente y fácil de mantener, especialmente en proyectos grandes. 

## 12.1 Organización del proyecto
- **Arquitectura modular**: Dividir los estilos en archivos separados y organízandolos en carpetas lógicas 
- **Sistema 7-1**: Es un enfoque común para estructurar proyectos en Sass y consiste en dividir el proyecto en siete carpetas principales más un archivo `main.scss`:
  - **base/**: Reset CSS, , y estilos globales.
  - **components/**: Estilos para botones, formularios, etc.
  - **layout/**: Estructura de la página, grid, y contenedores.
  - **pages/**: Estilos específicos de páginas.
  - **themes/**: Temas o variaciones de colores.
  - **utils/**: Mixins, funciones y helpers.
  - **vendors/**: Estilos de bibliotecas externas.
  - **main.scss**: Archivo que importa todos los demás.

## 12.2 Uso adecuado de nombres y archivos
- **Definir en un solo archivo todo los elementos de mismas características (p.e. variables).**
- **Definir nombres claros.**
```
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: 'Helvetica, Arial, sans-serif';
```
## 12.3 Mixins y funciones
- **Reutilizar código**: Usar `@mixin` para fragmentos de código que se repiten, como las configuraciones de `flex` o gradientes.
```
@mixin border-radius($radius) {
  border-radius: $radius;
}
```
- **Funciones para cálculos**: Usa funciones de Sass (`@function`) para realizar cálculos como la conversión de `px` a `rem`.
```
@function px-to-rem($px, $base: 16) {
  @return #{$px / $base}rem;
}
```

## 12.4 Anidar con moderación
- **Evitar anidacones profundas**: Limita la anidación a no más de 3 niveles para mantener el código legible y evitar la creación de selectores muy específicos.
  ```scss
  .card {
    .header {
      .title {
        color: #333;
      }
    }
  }
  ```

## 12.5 Uso adecuado (y moderado) de `@extend`
- **Evitar `@extend` excesivo**: Aunque `@extend` puede ser útil para compartir estilos, si se usa en exceso puede hacer que el CSS resultante sea complejo y difícil de mantener.
- **Preferir `@mixin` (clases utilitarias) a `@extend`**: Son más flexibles y reducen el riesgo de problemas de herencia no deseados.

## 12.6 Uso de `@use` y `@forward` y placeholders `%`
- **`@use` en lugar de `@import`**: `@use` es la forma moderna de importar archivos en Sass, y ayuda a evitar la duplicación de código y el espacio de nombres global.
```
@use '';
  .box {
    color: .$primary-color;
  }
```

- **`@forward` para módulos compartidos**: Usarlo para crear un archivo que importe y reenvíe otros módulos, manteniendo un punto central de importación.
```
// _all.scss
@forward 'variables';
@forward 'mixins';
```
- **`%` para codigo no compilable**:
```
%button-styles {
  padding: 10px 20px;
  border-radius: 4px;
}
```

## 12.7 Controlar el flujo de código, implementar condicionales y bucles sobre estilos.
```
$theme: dark;
body {
  @if $theme == dark {
    background-color: #000;
    color: #fff;
  } @else {
    background-color: #fff;
    color: #000;
  }
}
```

## 12.8 Código limpio y consistente
- **Convenciones de nombres**: Seguir una convención de nombres clara, como BEM (Block Element Modifier), para mantener la coherencia.
```
.button {
  &__icon {
    margin-right: 10px;
  }
}
```  
- **Formato consistente**: Asegurar de que la indentación, el uso de llaves y los espacios sean consistentes en todo el proyecto.
- **Comentarios claros**: Documenta secciones importantes del código con comentarios.
  ```scss
  // Base styles for buttons
  ```

## 12.9 Optimización de código
- **Evitar los selectores innecesarios**: No usar selectores complejos cuando uno simple es suficiente.
- **Combinar reglas similares**: Agrupar propiedades repetidas para reducir la redundancia.
- **Cuidado con los mixins grandes**: Si un `@mixin` genera demasiado código repetido, considerar otro enfoque más eficiente.

## 12.10 Pruebas y mantenimiento
- **Preprocesadores automáticos**: Usar herramientas como **Gulp**, **Webpack** o **Parcel** para compilar automáticamente Sass a CSS.
- **Linting de código**: Usa herramientas como **stylelint** para encontrar y corregir errores o inconsistencias en el código.

## 12.11 Documentación
- **Documentar el código Sass**: Usa comentarios detallados y si es posible, herramientas de documentación automática como **<a href="http://sassdoc.com/">SassDoc</a>**.
