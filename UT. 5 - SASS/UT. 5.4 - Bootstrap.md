---
Título: UD. 5.4 - Bootstrap 5
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---


# 1 Introducción: "Desarrollo Frontend con Bootstrap"
<div align="center">
</br>
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/bootstrap-logo-shadow.png" width=250px>
</div>

El desarrollo frontend es una área esencial en la creación de aplicaciones y sitios web modernos. En este contexto, **Bootstrap CSS** se ha consolidado como una de las herramientas más populares para diseñar interfaces.  

**Bootstrap**, un framework CSS desarrollado originalmente por Twitter, ofrece un conjunto de herramientas predefinidas que incluyen sistemas de diseño responsivo basados en grid, componentes reutilizables como botones, menús y formularios, además de **utilidades para personalizar estilos**.  
Su objetivo principal es simplificar y acelerar el proceso de desarrollo, permitiendo que los desarrolladores se enfoquen más en la funcionalidad y la experiencia del usuario, sin tener que diseñar estilos propios.

El enfoque **mobile-first** y su compatibilidad con la navegadores modernos hacen de Bootstrap una elección ideal para desarrolladores y su estructura modular y personalizable facilita la adaptación de los estilos a las necesidades específicas de cada proyecto.

# 2 Boostrap frente a otros frameworks de CSS
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/CSS-Framework---Bootstrap.webp" width=60%>  

Comparación del número de instalaciones de **Bootstrap** y **Tailwind**, durante el periodo 2023-2024, usando el comando `npm`.  
<img src="https://d2b57pa8jvjkcd.cloudfront.net/shEYQpSsZGZcwRfsh/XHyYpkAKLY-bootstrap-tailwind-css-popularity-chart-npm-trends.png" width=90%> 

# 3 Configuración básica de **Boostrap**
## 3.1 Enlazar con Boostrap desde un CDN
Toda la información de Boostrap <a href="https://getbootstrap.com/">**en la página oficial**</a>.  
Si solo deseamos usar `Bootstrap` sin alterar su contenido, simplemente añadiremos los `CDN links` via `jsDelivr` en los metadatos del `<head>` de nuestro proyecto.  
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>Usar Bootsrap</title>
</head>
```
## 3.2 Usar extensiones de VSC para Bootstrap
Para evitar de siempre estar consultando la documentación oficial, se recomienda instalar utilidades `snippets` que permitiran autocompletar el código CSS con los estilos propios de Bootstrap.
>Ejemplo: Bootstrap 5 Quick Snippets

## 3.3 Usar Bootstrap conjuntamente con estilos propios
Puede que nos interese modificar el estilo predefinido de Bootstrap y aportar estilos propios.  
En este caso, podemos incluir una hoja de estilos CSS propia al proyecto, **siempre después de la declaración de Bootstrap** para evitar conflictos.
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/estilos.css">

    <title>Usar Bootsrap</title>
</head>
```
## 3.4 Ejercicio
Crear un archivo `index.html` que incluya en los metadatos los enlaces a Bootstrap desde su CDN.  
Este archivo no servirá para evitar de siempre estar buscando los enlaces de Bootstrap.  


# 4 Usar Boostrap en nuestro proyecto
para añadir clases de estilos propias de Bootstrap, simplemente añadiremos su nombre a la declaracion de estilos de la etiquetas que queremos modificar.
>Ejemplo de cambio de <a href="https://getbootstrap.com/docs/5.3/content/typography/">**tipografía**</a>
```
<body>
  <header>
    <h1 class="display-1">Cabecera del documento</h1>
  </header>
  <main>             
    <p class="display-6">Cuerpo del texto</p>     
  </main>
  <footer>
    <p>Pie del documento</p>
  </footer>
</body>
```
## 4.1 Tarea RA4 CEab
1. Buscar en la documentación de **Bootstrap** el listado de navegadores compatibles.
2. Mirar la versión del navegador web que usáis habitualemente y comprobar si es compatible con la última versión estable de Bootstrap.
3. Encontrar la información que permite saber si Bootstrap se puede utilizar en dispositivos móviles.
4. Entregar las capturas de pantalla en un documento de texto y subirlo a AULES en el apartado correspondiente.

# 5 Componentes de Bootstrap.
## 5.1 Layout (paginación)
El diseño de Bootstrap está basado en un sistema de cuadrícula flexible que se ajusta al tamaño de la pantalla.  
**Utiliza un sistema de cuadrícula de 12 columnas** para crear diseños responsivos. 
Más información <a href="https://getbootstrap.com/docs/5.3/layout/breakpoints/">**aquí**</a>

## 5.2 Contenidos
Bootstrap proporciona una variedad de clases para mejorar y estructurar el contenido. Incluye clases de tipografía para encabezados, párrafos y alineación de texto, así como clases de ayuda para el espaciado y los colores de texto.  
<a href="https://getbootstrap.com/docs/5.3/content/reboot/">Más información</a>  

## 5.3 Formularios
Bootstrap simplifica la creación de formularios con componentes y diseños predefinidos. Incluye clases para controles de formulario como campos de texto, menús desplegables y casillas de verificación. Los formularios se pueden personalizar fácilmente con diferentes tamaños de entrada, estados de validación y opciones de diseño.
<a href="https://getbootstrap.com/docs/5.3/forms/overview/">**Más información**</a>

## 5.4 Componentes
Bootstrap ofrece un amplio conjunto de componentes predefinidos para simplificar el desarrollo de interfaces de usuario. Estos incluyen botones, tarjetas, modales, barras de navegación y más. Cada componente es personalizable y responsivo, lo que garantiza que tu aplicación web mantenga una apariencia coherente en diferentes dispositivos y tamaños de pantalla.
<a href="https://getbootstrap.com/docs/5.3/forms/overview/">**Más información**</a>

## 5.5 Componentes de ayuda
Los helpers de Bootstrap son clases utilitarias que simplifican tareas comunes y mejoran la legibilidad. Incluyen clases para la alineación de texto, visibilidad, propiedades de visualización y más. Los helpers facilitan el ajuste de elementos sin necesidad de escribir CSS personalizado, acelerando el desarrollo y garantizando la coherencia.
<a href="https://getbootstrap.com/docs/5.3/helpers/clearfix/">**Más información**</a>

## 5.6 Utilidades
Las utilidades de Bootstrap son clases pequeñas y reutilizables que proporcionan funcionalidad y control adicionales. Incluyen clases para espaciado, alineación, bordes y colores de fondo. Las utilidades ayudan a ajustar rápidamente y de manera eficiente la apariencia de los elementos, permitiendo realizar ajustes de diseño flexibles y responsivos.
<a href="https://getbootstrap.com/docs/5.3/utilities/api/">**Más información**</a>

# 6 Paginación (layout con Bootstrap)
En **Bootstrap 5**, los **layouts** son las estructuras basicas que se pueden usar para organizar el contenido en una página web.  

## 6.1 Breakpoints
Bootstrap 5 utiliza el **responsive design de forma nativa** lo que permite crear layouts adaptables al tamaño de la  pantalla.
Los breakpoints de Bootstrap vienen definidos en la siguiente tabla.

| Breakpoint | Prefijo de clase | Tamaño mínimo de pantalla |
|------------|------------------|---------------------------|
| Extra small |	None |	<576px |
| Small	 |sm	 | ≥576px |
| Medium |	md | ≥768px |
| Large |	lg	| ≥992px |
| Extra large | large	xl |	≥1200px |
| Extra extra large |	xxl | ≥1400px |


## 6.2 Containers / contenedores
Son el elemento básico de Bootstrap y son necesarios si queremos usar el sistema de rejilla nativo (de Bootstrap).  
El selector `container` permite definir una caja con unas dimensiones `responsive` como podemos ver en la siguiente tabla. 

**Formas de definir el ancho de una caja con container :**
 - container: Establece un contenedor con un ancho máximo que se adapta al tamaño del viewport.
 - container-{breakpoint}: Establece un ancho máximo específico según un punto de interrupción definido.
 - container-fluid: Define un contenedor que ocupa el 100% del ancho del viewport, sin restricciones en los puntos de interrupción.

|| Extra small <576px | Small ≥576px | Medium ≥768px | Large ≥992px | X-Large ≥1200px | XX-Large ≥1400px |
|------------------|--------------------|--------------|---------------|--------------|-----------------|-----------------|
| .container |	100% | 540px | 720px | 960px |	1140px |	1320px |	
| .container-sm |	100% |	540px |	720px |	960px |	1140px |	1320px |
| .container-md	| 100% |	100% |	720px |	960px |	1140px |	1320px |
| .container-lg	| 100% |	100% |	100% |	960px |	1140px |	1320px |
| .container-xl |	100% |	100% |	100% |	100% |	1140px |	1320px |
| .container-xxl |	100% |	100% |	100% |	100% |	100% |	1320px |
| .container-fluid |	100% |	100% |	100% |	100% |	100% |	100% |

>**Ejemplo**
```
<body>
  <div class="container" style="background-color: antiquewhite;">Contenedor con container</div>
  <div class="container-lg" style="background-color: rgb(223, 250, 215);">Contenedor con container-lg</div>
  <div class="container-fluid" style="background-color: rgb(215, 236, 250);">Contenedor con container-fluid</div>
</body>
```

## 6.3 Grid / rejilla
El sistema de rejilla es el núcleo del diseño de Bootstrap. Está basado en **flexbox** de CSS y divide la página en un **sistema de 12 columnas**. Estas columnas se pueden combinar para crear diferentes diseños.  
El selector `row` sirve para estructurar el contenido de la página en filas. Cada fila estará compuesta de **una serie de columnas** y esas columnas, se ajustarán al tamaño de la pantalla. 

### 6.3.1 Columnas de ancho idéntico
Para renderizar columnas de ancho identico, usaremos el selector de clase `col`.
>**Ejemplo**
```
<body>
  <div class="container text-center">
    <div class="row" style="background-color: antiquewhite;">
      <div class="col">
        Columna 1
      </div>
      <div class="col" style="background-color: aqua;">
        Columna 2
      </div>
      <div class="col" style="background-color: aquamarine;">
        Column 3
      </div>
    </div>
  </div>
</body>
```
#### 6.3.1.1 Ejercicio
Crear un documento HTML `index.html` que defina un container, un row y **13 columnas**.  
Renderizarlo y ver el resultado.

### 6.3.2 Columnas de ancho desigual
Para definir un tamaño de columnas personalizado, usaremos el sufijo `-XX`, donde XX puede adoptar los valores del 1 al 12 (recordar que el sistema de columnas en Bootstrap se basa sobre **una distribución máxima de 12 columnas**).  

>**Ejemplo de 3 columnas que ocupan 2, 8 y 2 columnas (del grid) respectivamente.**  
```
<body> 
  <div class="container text-center">
    <div class="row" style="background-color: antiquewhite;">
      <div class="col-2">
        Columna 1
      </div>
      <div class="col-8" style="background-color: aqua;">
        Columna 2
      </div>
      <div class="col-2" style="background-color: aquamarine;">
        Columna 3
      </div>
    </div>
  </div>
</body>
```
**Nota importante:** Para evitar resultados inesperados siempre respetar que la suma del ancho de las columnas sea igual a 12.

#### 6.3.2.1 Ejercicio
Crear un documento HTML `index.html` que defina un container, un row y **3 columnas** de **ancho 4, 5, 4** respectivamente.  
Renderizarlo y ver el resultado.

### 6.3.3 Columnas ajustables a su contenido
Es bastante habitual tener que reajustar el ancho de las columnas en función del tamaño del `viewport` y del contenido de las columnas. Para ello usaremos las clases `col-{breakpoint}-auto`. 

>**Ejemplo con y sin reajute del ancho de las columnas**  
>Al llegar al breakpoint (lg: 992px) **col-lg-auto** "pasa a ser **col-lg** y sigue la misma estrategia que la clase container.  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/col-lg.png" width:200px>

```
<body> 
  <div class="container text-center" >
    <div class="row justify-content-md-center col-lg-auto" style="background-color: black; color: white;">
      Las columnas 1 y 3 tienen un ancho de 2. La columna 3 tiene un ancho automático a su contenido
    </div>
    <div class="row justify-content-md-center">
      <div class="col-2" style="background-color: antiquewhite;">
        1 of 3
      </div>
      <div class="col-lg-auto" style="background-color: aqua;">
        El ancho del contenedor se ajusta hasta llegar al breakpoint. 
      </div>
      <div class="col-2" style="background-color: aquamarine;">
        3 of 3
      </div>
    </div>
    <div class="row justify-content-md-center col-lg-auto" style="background-color: black; color: white;">
      Las columnas 1, 2 y 3 tienen un ancho de 2, 8 y 2 respectivamente
    </div>
    <div class="row justify-content-md-center">
      <div class="col-2" style="background-color: antiquewhite;">
        1 of 3
      </div>
      <div class="col-8" style="background-color: aqua;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit amet. 
      </div>
      <div class="col-2" style="background-color: aquamarine;">
        3 of 3
      </div>
    </div>
  </div>
</body>
```

### 6.3.3 Columnas ajustables al breakpoint
Del mismo modo que podemos ajustar el ancho del contenedor a su contenido, también podemos ajustarlo al ancho del contendor padre y en función del breakpoint.  
 
```
<body> 
  <div class="container text-center" >
    <div class="row">
      <div class="col-1" style="background-color: antiquewhite;">
        1 de 12
      </div>
      <div class="col-1" style="background-color:aqua;">
        2 de 12
      </div>
      <div class="col-1" style="background-color:bisque";>
        3 de 12
      </div>
      <div class="col-1" style="background-color:azure">
        4 de 12
      </div>
      <div class="col-1" style="background-color:beige">
        5 de 12
      </div>
      <div class="col-1" style="background-color:bisque">
        6 de 12
      </div>
      <div class="col-1" style="background-color:black; color:white">
        7 de 12
      </div>
      <div class="col-1" style="background-color:blanchedalmond">
        8 de 12
      </div>
      <div class="col-1" style="background-color:blue; color: aliceblue;">
        9 de 12
      </div>
      <div class="col-1" style="background-color:blueviolet; color:aliceblue">
        10 de 12
      </div>
      <div class="col-1" style="background-color:brown; color:aliceblue">
        11 de 12
      </div>
      <div class="col-1" style="background-color:burlywood">
        12 de 12
      </div>   
    </div>
    <div class="row justify-content-center col-lg-auto" style="background-color: black; color: white;">
      Las columnas 1, 2 y 3 tienen un ancho de 1, 10 y 1 respectivamente hasta llegar al breakpoint "lg"
    </div>
    <div class="row justify-content-md-center">
      <div class="col-lg-1 " style="background-color: antiquewhite;">
        1
      </div>
      <div class="col-lg-10" style="background-color: aqua;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit amet. 
      </div>
      <div class="col-lg-1" style="background-color: aquamarine;">
        1
      </div>
    </div>
  </div>
</body>
```

También podemos definir más de un breakpoint para definir el ancho `responsive` de las columnas que ocupará más o menos columnas en función del ancho del `viewport`.  
En este ejemplo vemos como la distribución del ancho de las columnas pasa de ser 2,8,2 a ser 1,10,1 cuando el ancho de la ventana es inferior al `breakpoint Large` o sea `992px`.  

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>col 2 brekpoints</title>
    <style>      
      @media screen and (max-width: 992px) {
        #comentario::after {
          background-color:red;
          color: black;
          width: 100%;
          content: "Luego pasa a 1, 10, 1 hasta small 576";       
        }
      }

      @media screen and (max-width: 576px) {
        #comentario::after {
          background-color:blueviolet;
          color: wheat;
          width: 100%;
          content: "Luego pasa a 100%, 100%, 100%";       
        }
      }
    </style>
</head>
<body> 
  <div class="container text-center" >
    <div class="row justify-content-md-center">
      <div class="col-1" style="background-color: antiquewhite">
        1
      </div>
      <div class="col-1" style="background-color:aqua">
        2
      </div>
      <div class="col-1" style="background-color:bisque">
        3
      </div>
      <div class="col-1" style="background-color:azure">
        4
      </div>
      <div class="col-1" style="background-color:beige">
        5
      </div>
      <div class="col-1" style="background-color:bisque">
        6
      </div>
      <div class="col-1" style="background-color:black; color:white">
        7
      </div>
      <div class="col-1" style="background-color:blanchedalmond">
        8
      </div>
      <div class="col-1" style="background-color:blue; color: aliceblue">
        9
      </div>
      <div class="col-1" style="background-color:blueviolet; color:aliceblue">
        10
      </div>
      <div class="col-1" style="background-color:brown; color:aliceblue">
        11
      </div>
      <div class="col-1" style="background-color:burlywood">
        12
      </div>   
    </div>
    <div id="comentario" class="row justify-content-md-center col-lg-auto" style="background-color: black; color: white;">
      Las columnas 1, 2 y 3 tienen un ancho de 2, 8 y 2 respectivamente hasta el breakpoint "lg" de 992px.
    </div>
    <div class="row justify-content-md-center">
      <div class="col-lg-2 col-sm-1" style="background-color: antiquewhite;">
        1
      </div>
      <div class="col-lg-8 col-sm-10" style="background-color: aqua;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sit amet. 
      </div>
      <div class="col-lg-2 col-sm-1" style="background-color: aquamarine;">
        1
      </div>
    </div>
  </div>
</body>
```

#### 6.3.3.1 Ejercicio
Crear un documento HTML `index.html` que defina un container, un row y **3 columnas**.  
Hacer el `grid` responsive con las siguientes condiciones. 
 - Para resoluciones superiores a **X-large** el ancho de las columnas será 4, 4, 4.
 - Para resoluciones superiores a **Large** el ancho de las columnas será de 3, 6, 3.
 - Para resoluciones superiores a **Medium** el ancho de las columnas será de 2, 8, 2.

### 6.3.4 Predefinir la cantidad de columnas, clases row-cols
Las clases relacionadas con `row-cols` permiten configurar rápidamente el número de columnas en un diseño grid utilizando el sistema de filas y columnas (row y col).  
Estas clases son especialmente útiles cuando se quiere lograr un diseño con un número uniforme de columnas, independientemente de cuántas filas haya en total.
```
<body>
  <div class="container text-center">
    <div class="row">
      <div class="col-12" style="background-color: black;color: aliceblue;">
        Con row-cols-2, se predefine el contenedor a solo 2 columnas por fila
      </div>    
    </div>
    <div class="row row-cols-2">
      <div class="col" style="background-color: aliceblue;">Columna 1</div>
      <div class="col" style="background-color: antiquewhite;">Columna 2</div>
      <div class="col" style="background-color: aqua;">Columna 3</div>
      <div class="col" style="background-color: aquamarine;">Columna 4</div>
    </div>
    <div class="row">
      <div class="col-12" style="background-color: black;color: aliceblue;">
        También se puede definir la cantidad de columnas que ocupará cada columna
      </div>    
    </div>
    <div class="row row-cols-2">
      <div class="col-8" style="background-color: aliceblue;">Columna 1</div>
      <div class="col-4" style="background-color: antiquewhite;">Columna 2</div>
      <div class="col-3" style="background-color: aqua;">Columna 3</div>
      <div class="col-9" style="background-color: aquamarine;">Columna 4</div>
    </div>
    <div class="row">
      <div class="col-12" style="background-color: black;color: aliceblue;">
        Ejemplo con solo 3 columnas (a priori no sabemos cuantas columnas necesitabamos al iniciar el proyecto)
      </div>    
    </div>
    <div class="row row-cols-2">
      <div class="col-8" style="background-color: aliceblue;">Columna 1</div>
      <div class="col-4" style="background-color: antiquewhite;">Columna 2</div>
      <div class="col" style="background-color: aqua;">Columna 3</div>     
    </div>
  </div>
</body>
```  

Como es de esperar, también podemos ajustar la cantidad de columnas a la resolución de la pantalla.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>col 2 breakpoints</title>
    <style>      
      @media screen and (max-width: 992px) {
        #comentario::after {
          background-color:red;
          color: black;
          width: 100%;
          content: "Luego pasa a 2 columnas por fila hasta llegar sm";       
        }
      }

      @media screen and (max-width: 576px) {
        #comentario::after {
          background-color:blueviolet;
          color: wheat;
          width: 100%;
          content: "Luego pasa a 1 columna del 100%";       
        }
      }
    </style>
</head>
<body> 
  <div class="container text-center" >
    <div class="row justify-content-md-center">
      <div class="col-1" style="background-color: antiquewhite">
        1
      </div>
      <div class="col-1" style="background-color:aqua">
        2
      </div>
      <div class="col-1" style="background-color:bisque">
        3
      </div>
      <div class="col-1" style="background-color:azure">
        4
      </div>
      <div class="col-1" style="background-color:beige">
        5
      </div>
      <div class="col-1" style="background-color:bisque">
        6
      </div>
      <div class="col-1" style="background-color:black; color:white">
        7
      </div>
      <div class="col-1" style="background-color:blanchedalmond">
        8
      </div>
      <div class="col-1" style="background-color:blue; color: aliceblue">
        9
      </div>
      <div class="col-1" style="background-color:blueviolet; color:aliceblue">
        10
      </div>
      <div class="col-1" style="background-color:brown; color:aliceblue">
        11
      </div>
      <div class="col-1" style="background-color:burlywood">
        12
      </div>   
    </div>
    <div id="comentario" class="row justify-content-md-center col-lg-auto" style="background-color: black; color: white;">
      Las columnas 1, 2, 3 y 4 ocupan solamente una fila hasta llegar al breakpoint "lg"
    </div>
    <div class="row row-cols-lg-4 row-cols-sm-2 justify-content-md-center">
      <div style="background-color: antiquewhite;">
        columna 1 
      </div>
      <div style="background-color: aqua;">
        columna 2 
      </div>
      <div style="background-color:bisque ">
        columna 3
      </div>
      <div style="background-color: aquamarine;">
        columna 4
      </div>
    </div>
  </div>
</body>
```
### 6.3.5 Anidación de columnas
La anidación de columnas permite crear estructuras más complejas dentro del sistema grid.  
Consiste en anidar una fila (row) dentro de una columna (col) existente, permitiendo dividir esa columna en subcolumnas adicionales. Es particularmente útil para organizar contenido de nuestro proyecto en niveles jerárquicos. 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>col 2 brekpoints</title>
</head>

<body> 
  <div class="container text-center" >
    <div class="row justify-content-md-center col-lg-auto" style="background-color: black; color: white; border: 2px solid blue;">
        Ejemplo de anidación de columnas
    </div>
      <div class="row row-cols-2 justify-content-md-center">
        <div class="col-3" style="background-color:blueviolet; color:white;">
          columna no anidada 
        </div>    
        <div class="col-9" style="border: 1px solid mediumseagreen;">
          <div class="row" style="background-color: brown; padding: 5px 5px 5px 5px; margin: 5px;">
          <div class="col-3" style="background-color: aqua;">columna anidada 1</div>
          <div class="col-6" style="background-color: aquamarine;">columna anidada 2</div>
          <div class="col-3" style="background-color: bisque;">columna anidada 3</div>
        </div>                
      </div>
    </div>      
  </div>
</body>
```
  
### 6.3.6 Ejercicio
Crear un documento HTML `index.html` que defina un container, un row y **3 columnas**.  
Anidar dentro de la **segunda columna** un row responsive de **3 columnas** con las siguientes condiciones. 
 - Para resoluciones superiores a **X-large** el ancho de las **columnas anidadas** será 4, 4, 4.
 - Para resoluciones superiores a **Large** el ancho de las **columnas anidadas** será de 3, 6, 3.
 - Para resoluciones inferiores a **Large**, pasaremos de **3 a 2 columnas anidadas** con un ancho de 8, 4. 

## 6.4 Estilos de columnas de Bootstrap
Los estilos de columnas permiten aplicar estilos para el renderizado de las columnas dentro de su contenedor.  

### 6.4.1 Alineación vertical de columnas
Para la alineación vertical de la columnas dentro de su contenedor, disponemos, entre otras, de las clases `align-items-start`, `align-items-center` y `align-items-end` que nos permiten posicionar los contenedores `col` dentro de su `row`.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>Alinación vertical</title>    
</head>

<body>  
  <div class="container text-center"> 
  
    <div class="row align-items-start" style="height: 33vh; background-color: bisque; padding: 5px;">         
      <div class="col" style="background-color: aliceblue;">
        Columnas arriba
      </div>
      <div class="col" style="background-color: antiquewhite;">
        Columnas arriba
      </div>
      <div class="col" style="background-color: aqua;">
        Columnas arriba
      </div>      
    </div>  

    <div class="row align-items-center" style="height: 33vh; background-color: blueviolet; padding: 5px;">         
      <div class="col" style="background-color: antiquewhite;">
        Columnas medio
      </div>
      <div class="col" style="background-color: aqua;">
        Columnas medio
      </div>
      <div class="col" style="background-color: aliceblue;">
        Columnas medio
      </div>
    </div>  
      
    <div class="row align-items-end" style="height: 33vh; background-color: brown; padding: 5px;">         
      <div class="col" style="background-color: aqua;">
        Columnas abajo
      </div>
      <div class="col" style="background-color: aliceblue;">
        Columnas abajo
      </div>
      <div class="col" style="background-color: antiquewhite;">
        Columnas abajo
      </div>
    </div>
  </div>    
</body>
```

### 6.4.2 Alineación horizontal de columnas
Para la alineación horizontal de los contenedores `col`, disponemos, entre otras, de las clases:
- **`justify-content-start`**: Alinea los elementos al inicio del contenedor.
- **`justify-content-center`**: Centra horizontalmente los elementos dentro del contenedor.
- **`justify-content-end`**: Alinea los elementos al final del contenedor.
- **`justify-content-around`**: Distribuye los elementos con espacio igual alrededor de ellos, dejando espacio extra al inicio y al final del contenedor.
- **`justify-content-between`**: Distribuye los elementos con el máximo espacio posible entre ellos, sin dejar espacio al inicio ni al final del contenedor.
- **`justify-content-evenly`**: Distribuye los elementos con espacio igual entre ellos y también entre los bordes del contenedor.

```
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>Alinación vertical</title>
    
</head>

<body>  
  <div class="container text-center"> 
  
    <div class="row justify-content-start" style="background-color:green;  padding: 5px;">         
      <div class="col-3" style="background-color: aliceblue;">
        Contenido start
      </div>
      <div class="col-4" style="background-color: antiquewhite;">
        Contenido start
      </div>
    </div>  

    <div class="row justify-content-center" style="background-color: blueviolet; padding: 5px;">         
      <div class="col-3" style="background-color: antiquewhite;">
        Contenido center
      </div>
      <div class="col-4" style="background-color: aqua;">
        Contenido center
      </div>
    </div>  
      
    <div class="row justify-content-end" style="background-color: brown; padding: 5px;">         
      <div class="col-3" style="background-color: aqua;">
        Contenido end
      </div>
      <div class="col-3" style="background-color: aliceblue;">
        Contenido end
      </div>
    </div>  

    <div class="row justify-content-around" style="background-color:green;  padding: 5px;">         
      <div class="col-3" style="background-color: aliceblue;">
        Contenido around
      </div>
      <div class="col-4" style="background-color: antiquewhite;">
        Contenido around
      </div>
    </div>  
  
    <div class="row justify-content-between" style="background-color: blueviolet; padding: 5px;">         
      <div class="col-3" style="background-color: antiquewhite;">
        Contenido between
      </div>
      <div class="col-4" style="background-color: aqua;">
        Contenido between
      </div>
    </div>  
      
    <div class="row justify-content-evenly" style="background-color: brown; padding: 5px;">         
      <div class="col-3" style="background-color: aqua;">
        Contenido evenly
      </div>
      <div class="col-3" style="background-color: aliceblue;">
        Contenido evenly
      </div>
    </div>
  </div>    
</body>
```
  
### 6.4.3 Organización de las columnas
Si definimos un `row` de más de 12 columnas, las columnas que no quepan en una línea serán situadas en la línea siguiente.   

### 6.4.4 Saltos de columnas a una linea nueva
Para forzar un salto de línea sin haber alcanzado 12 columnas, useramos la clase `w-100` (width:100%)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>Column break</title>
    
</head>

<body>  
  <div class="container text-center"> 
  
    <div class="row align-items-center" style="background-color:grey;  padding: 5px;">         
      <div class="col-4" style="background-color: aliceblue;">
        Columnas 4
      </div>
      <div class="col-4" style="background-color: antiquewhite;">
        Columnas 4
      </div>
      <div class="w-100"></div>
      <div class="col-4" style="background-color: antiquewhite; margin-top: 2px;">
        Columnas 4 en linea siguiente
      </div>
    </div>  
  </div>    
</body>
```  

### 6.4.5 Ordenar columnas
La clase `order-*` permite definir el orden en el que se renderizaran los contenedores.  
Si se omite la clase `order-*` los contenedores se renderizaran en el orden con el cual han sido declarados.
**Nota:** Para evitar renderizados no deseados se recomienda asignar la clase `order-first` y `orden-last` al primer y el último contendedor que deseamos renderizar. 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>Ordenar con order</title>
   
</head>
<body> 
  <div class="container text-center" >
    <div class="row justify-content-md-center">    
      <div id="comentario" class="row justify-content-md-center col-lg-auto" style="background-color: black; color: white;">
        Orden de aparición de las columnas sin usar la clase `order-XX`
      </div>

      <div class="col-2" style="background-color: antiquewhite">
        1
      </div>
      <div class="col-2" style="background-color:aqua">
        2
      </div>
      <div class="col-2" style="background-color:bisque">
        3
      </div>
      <div class="col-2" style="background-color:azure">
        4
      </div>
      <div class="col-2" style="background-color:beige">
        5
      </div>
      <div class="col-2" style="background-color:bisque">
        6
      </div>
   
    </div>
    
    <div id="comentario" class="row justify-content-md-center col-lg-auto" style="background-color: black; color: white;">
      Orden de aparición de las columnas sin usar la clase `order-XX`
    </div>
    
    <div class="row justify-content-md-center">
      <div class="col-2 order-first" style="background-color: antiquewhite">
        1
      </div>
      <div class="col-2 order-5" style="background-color:aqua">
        2
      </div>
      <div class="col-2 order-2" style="background-color:bisque">
        3
      </div>
      <div class="col-2 order-last" style="background-color:azure">
        4
      </div>
      <div class="col-2 order-4" style="background-color:beige">
        5
      </div>
      <div class="col-2 order-3" style="background-color:bisque">
        6
      </div>
     
    </div>
  </div>
</body>
```

### 6.4.6 Clase offset para posicionar columnas
La clase `offset-md-*` incrementa el **margen derecho** de los contenedores a razón de **`*`columnas**. 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>Offset sobre columnas</title>
   
</head>
<body> 
  <div class="container text-center" style="background-color: brown;" >
    <div class="row">
      <div class="col-1" style="background-color: antiquewhite">
        1
      </div>
      <div class="col-1" style="background-color:aqua">
        2
      </div>
      <div class="col-1" style="background-color:bisque">
        3
      </div>
      <div class="col-1" style="background-color:azure">
        4
      </div>
      <div class="col-1" style="background-color:beige">
        5
      </div>
      <div class="col-1" style="background-color:bisque">
        6
      </div>
      <div class="col-1" style="background-color:black; color:white">
        7
      </div>
      <div class="col-1" style="background-color:blanchedalmond">
        8
      </div>
      <div class="col-1" style="background-color:blue; color: aliceblue">
        9
      </div>
      <div class="col-1" style="background-color:blueviolet; color:aliceblue">
        10
      </div>
      <div class="col-1" style="background-color:brown; color:aliceblue">
        11
      </div>
      <div class="col-1" style="background-color:burlywood">
        12
      </div>       
    <div class="col-2" style="background-color: antiquewhite">
      1
    </div>
    <div class="col-2 offset-md-2" style="background-color:aqua">
      offset 2
    </div>
    <div class="col-2 offset-md-1" style="background-color:bisque">
      offset 1
    </div>   
  </div>  
</body>
```

### 6.4.7 Utilidad Margin para posicionar columnas
La utilidad `margin` permite controlar los márgenes de los elementos utilizando clases predefinidas. 

**Sintaxis de las clases de margen**
```
m{lado}-{breakpoint}-{tamaño}
```

**Donde:**
- **`m`**: Indica que se está ajustando márgenes.
- **`lado`**: Especifica el lado del margen que se desea aplicar:
  - `t` (top): Margen superior.
  - `b` (bottom): Margen inferior.
  - `s` (start): Margen inicial (izquierda en diseños LTR, derecha en RTL).
  - `e` (end): Margen final (derecha en diseños LTR, izquierda en RTL).
  - `x`: Márgenes izquierdo y derecho (horizontal).
  - `y`: Márgenes superior e inferior (vertical).
  - Sin especificar lado (`m`): Aplica margen a todos los lados.
- **`breakpoint`** *(opcional)*: Define el punto de interrupción a partir del cual se aplica el margen:
  - Ejemplos: `sm`, `md`, `lg`, `xl`, `xxl`.
- **`tamaño`**: Define el tamaño del margen:
  - `0`: Sin margen.
  - `1` a `5`: Márgenes incrementales (de menor a mayor).
  - `auto`: Utiliza márgenes automáticos para centrar elementos.
      
>**Ejemplo de código donde:**  
>**mx-5**: Se aplica un margen grande a los 2 lados del contendor.  
>**mt-lg-1**: Se aplica un margen superior pequeño en pantallas grandes `lg`.  
>**mx-auto**: Centrar horizontalmente (con el espacio restante disponible).  
>**mt-sm-1 mt-md-2 mb-lg-3**: Combinación de márgenes margen superior `1` en pantallas `small` + margen superior `2` en pantallas medianas y margen inferor `1`en pantallas grandes.
  
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <title>Utilidad margen</title>
   
</head>
<body> 
  <div class="container text-center" >
    <div class="row">    
      <div class="col" style="background-color: black; color: white;">
        Sin aplicar márgenes
      </div>
    </div>    
    <div class="row">
      <div class="col-1" style="background-color: antiquewhite">
        1
      </div>
      <div class="col-1" style="background-color:aqua">
        2
      </div>
      <div class="col-1" style="background-color:bisque">
        3
      </div>
      <div class="col-1" style="background-color:grey;">
        4
      </div>     
      <div class="col-1" style="background-color:greenyellow">
        5
      </div>     
    </div>
    
    <div class="row">    
      <div class="col" style="background-color: black; color: white;">
        Aplicando márgenes
      </div>
    </div>    
    <div class="row">
      <div class="col-1" style="background-color: antiquewhite">
        1
      </div>
      <div class="col-1 mx-5" style="background-color:aqua">
        2
      </div>
      <div class="col-1 mt-lg-1" style="background-color:bisque">
        3
      </div>
      <div class="col-1 mx-auto" style="background-color:grey">
        4
      </div>   
      <div class="col-1 mt-sm-1 mt-md-2 mb-lg-3" style="background-color:greenyellow">
        5
      </div>      
    </div>

    <div class="row">    
      <div class="col" style="background-color: black; color: white;">&nbsp</div>      
    </div>
  </div>  
</body>
```

### 6.4.8 Columnas únicas, standalone columns
Las **Standalone column classes** permiten crear diseños basados en columnas sin la necesidad de envolverlas en un contenedor `row`.

**Principales características:**
 - **Autoalineación y espaciado**:
     - El espaciado interno entre columnas (gaps) es automático.
     - Son útiles para elementos que no necesitan un sistema completo de filas y columnas.

 - **Compatibilidad con breakpoints**:
     - Se pueden combinar con los breakpoints estándar (`col-sm-*`, `col-md-*`, etc.).

>**Ejemplo de uso**
```
<body>
  <div style="background-color: aqua;" class="col-6 p-3 mb-2">
    Siempre al 50%
  </div>
      
  <div style="background-color: brown;" class="col-sm-9 p-3 mb-2">
    Al 75% hasta llegar al breakpoint sm
  </div>

  <div class="d-flex">
    <div style="background-color: blue;" class="col p-3">Columna flex</div>
    <div style="background-color: blueviolet;" class="col p-3">Columna flex</div>
    <div style="background-color: rgb(69, 42, 165);" class="col p-3">Columna flex</div>
  </div>
</body>
```
**Nota:**  
La clase `d-flex` aplica un contenedor flexbox que permite la alineación horizontal de los elementos hijos.  
La clase `p-3` añade un padding de `1 rem` al elemento.  
La clase `mb-2` añade un margen  de `0.5 rem` en la parte inferior del elemento.  


### 6.4.9 Gutters
Los **gutters** son los márgenes entre las columnas. Por defecto, Bootstrap utiliza  el `rem` como unidad para definir los gutters.

**La clase `g-*`** define el tamaño de los gutters tanto horizontal como verticalmente:
- `g-0`: Sin espacio entre columnas.
- `g-1` a `g-5`: Desde `0.25rem` hasta `3 rem`.

**Control específico: Horizontal y vertical**
- `gx-*`: Controla únicamente los gutters horizontales.
- `gy-*`: Controla únicamente los gutters verticales.

**Nota:**
Los gutters utilizan las mismas unidades que <a href="https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding">**los márgenes y padding**</a> lo que permite combirnarlos.  

# 7 Tipografías en Bootstrap
Bootstrap ofrece una amplia gama de utilidades de tipografía que permiten estilizar y manejar texto. Las clases integradas de Bootstrap ayudan a definir tamaños, pesos, alineaciones, colores y otros aspectos visuales del texto.   
Más información <a href="https://getbootstrap.com/docs/5.3/content/typography/#headings">aquí</a>
>**Ejemplo de uso de estilos tipográficos en Bootstrap**
```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tipográfias con Bootstrap 5</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
  crossorigin="anonymous"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
</head>

<body>  
  <header>
    <section id="principal">
      <div class="container px-1">
        <div class="row gx-5 py-2 text-bg-info rounded">    
          <div class="col-12 text-center">
            <h1 class="display-1 text-center text-bg-danger rounded">Header centrado</h1>
          </div>          
          <div class="col-12 text-center">
            <h1 class="display-6 text-center text-bg-secondary rounded">Alineando texto</h1>          
          </div>
          <div class="col text-start">
            <h3 class="p-3 text-bg-success rounded">Izquierda</h3>
          </div>          
          <div class="col text-center">
            <h3 class="p-3 text-bg-danger rounded">Centrado</h3>
          </div>
          <div class="col text-end rounded">
            <h3 class="p-3 text-bg-primary rounded">Derecha</h3>
          </div>          
        </div>        
      </div>
    </section>

    <section id="secundario">
      <div class="container px-1 py-2 text-center">        
        <div class="row gx-5 py-2 text-bg-warning rounded">         
          <div class="col-12">
            <h1 class="display-5">Estilos: Color, tipografía y fondo</h1>
          </div>          
          <div class="col">
            <h3 class="text-primary bg-info rounded">Header h3</h3>
          </div>
          <div class="col">
            <h3 class="text-sucess bg-body-secondary rounded">Header h3</h3>
          </div>
          <div class="col">
            <h3 class=" text-danger bg-light-subtle rounded">Header h3</h3>
          </div>
          <div class="col">
            <h3 class="text-bg-primary rounded">Header h3</h3>
          </div>        
        </div>
      </div>
    </section>
  </header>

  <main>
    <section id="unidad1">
      <div class="container px-1">
        <div class="row gx-5">
          <div class="bg-light p-1 rounded">
            <p class="lead fs-4 display-6 text-center"><strong>Ejemplos de estilos de Bootstrap 5 sobre texto.</strong></p>
            <p class="fs-6">Fuente fs-6 con texto <mark>subrayado</mark>.</p>
            <p class="fs-5"><del>Fuente fs-5 con texto tachado.</del></p>
            <p class="fs-4"><s>fuente fs-4 con texto no válido.</s></p>
            <p class="fs-3"><ins> fs-3 Subrayado.</ins></p>
            <p class="fs-6"><u>Subrayado.</u></p>
            <p class="fs-3">Fuente fs-3 y<small> la misma con la etiqueta small.</small></p>
            <p><strong>Texto en negrita.</strong></p>
            <p><em>Texto en itálica.</em></p>
            <p class="text-center"><a class="btn btn-primary btn-lg" href="https://getbootstrap.com/docs/5.3/content/typography/" role="button">Más info</a></p>
          </div>
        </div>
      </div>
    </section>

    <section id="unidad2">
      <div class="container px-1 py-2">
        <div class="row gx-5 py-2 bg-secondary rounded px-1 gy-lg-2 gy-sm-1">
          <h1 class="display-6 text-center text-bg-info rounded">Columnas responsive</h1>
          <div class="col col-sm-12 col-lg-6 col-xl-4">
            <div class="text-bg-primary p-2 rounded">
              <h2>Título de la columna 1</h2>            
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat distinctio illo rerum atque ducimus, laboriosam debitis eum deserunt ab libero quis voluptas, illum, perferendis numquam aut aliquam itaque qui magnam!</p>           
            </div>
          </div>
          <div class="col col-sm-12 col-lg-6 col-xl-4">
            <div class="text-bg-warning p-2  rounded">
              <h2>Título de la columna 2</h2>            
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat distinctio illo rerum atque ducimus, laboriosam debitis eum deserunt ab libero quis voluptas, illum, perferendis numquam aut aliquam itaque qui magnam!</p>            
            </div>
          </div>
          <div class="col col-sm-12 col-lg-6 col-xl-4">
            <div class=" text-bg-success p-2 rounded">
              <h2>Título de la columna 3</h2>            
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat distinctio illo rerum atque ducimus, laboriosam debitis eum deserunt ab libero quis voluptas, illum, perferendis numquam aut aliquam itaque qui magnam!</p>           
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer id="standaloneColumn" class="text-center py-3 bg-light col-3 mx-auto">
    <p>Ejemplos de uso de estilos en Bootstrap 5</p>
    <p>Para el footer usamos una standalone column <i class="fa-regular fa-face-smile-beam"></i></p>
  </footer>   
</body>  
</html>
```
# 8 Imágenes

En Bootstrap, <a href="https://getbootstrap.com/docs/5.3/content/images/">**las imágenes**</a> son elementos clave para el diseño visual y se manejan mediante una combinación de clases predefinidas que facilitan su estilización y comportamiento responsivo.

## 8.1 Imágenes responsivas
Para hacer que una imagen se adapte automáticamente al tamaño de su contenedor disponemos de la clase `img-fluid`. Esto aplica un `max-width: 100%` y un `height: auto` para asegurar que la imagen nunca exceda el ancho de su contenedor.

>**Ejemplo**
```
<body>
  <div class="container text-center">
    <div class="row">
      <div class="col-md" style="background-color: aliceblue;">Imagen responsive</div>          
    </div>
    <div class="row">
      <div class="col" style="background-color: bisque;">col-sm</div>
      <div class="col-md" style="background-color: blue;">
        <div>
          Ejemplo de columna responsive con imagen responsive
        </div>
        <img src="./image.avif" class="img-fluid" alt="...">
      </div>
      <div class="col-md" style="background-color: blueviolet;">col-sm</div>
    </div>
  </div>    
</body>
```

## 8.2 Estilos de bootstrap para las imágenes en miniatura
Bootstrap incluye clases para estilizar los bordes de las imágenes:
- **`rounded`**: Aplica bordes redondeados a la imagen.
- **`rounded-circle`**: Hace que la imagen tenga forma circular.
- **`img-thumbnail`**: Añade un borde, un padding, y un fondo blanco, haciendo que la imagen se asemeje a una miniatura.

>**Ejemplo**
```
<body>
  <div class="container text-center">
    <div class="row">
      <div class="col-md bg-warning">Imagen responsive</div>          
    </div>
    <div class="row">
      <div class="col-lg-4 bg-primary">
        <div>
          Imagen responsive con bordes redondeados
        </div>
        <img src="image.avif" class="rounded img-fluid" alt="Imagen con bordes redondeados">
      </div>            
      <div class="col-lg-4 bg-info">
        <div>
          Imagen responsive con estilo circular
        </div>
        <img src="image.avif" class="rounded-circle img-fluid" alt="Imagen circular">        
      </div>

      <div class="col-lg-4 bg-danger">
        <div>
          Imagen responsive con estilo thumbnail
        </div>
        <img src="image.avif" class="img-thumbnail img-fluid" alt="Miniatura">    
      </div>
    </div>
  </div>    
</body>
```
  
## 8.3 Alineación de Imágenes
Para alinear imágenes **dentro de un mismo contenedor**, usaremos las clases <a href="https://getbootstrap.com/docs/5.3/utilities/float/">`float-***`</a>.    
**A nivel de bloque**, también se pueden usar las clases de alineación de texto <a href="https://getbootstrap.com/docs/5.3/utilities/text/#text-alignment">`text-***`</a>.  
Para centrar horizontalmente **contenido de nivel de bloque de ancho fijo** podremos usar la clase `.mx-auto`. 

```
<body>
  <div class="container text-center">
    <div class="row">
      <div class="col-lg bg-warning">Alineando imágenes</div>          
    </div>
    <div class="row">
      <div class="col-lg-2 bg-info">Columna 1</div>
      <div class="col-lg-8 bg-primary">
        <div>Alineación izquierda y derecha</div>
        <img src="image.avif" class="rounded float-start" width="25%" alt="Imagen con bordes redondeados">
        <img src="image.avif" class="rounded float-end" width="25%" alt="Imagen con bordes redondeados">              
      </div>
      <div class="col-lg-2 bg-info">Columna 3</div>
    </div>

    <div class="row">
      <div class="col-lg-2 bg-primary">Columna 1</div>
      <div class="col-lg-8 bg-info">
        <div>
          Imagen centrada com mx-auto
        </div>
        <img src="image.avif" class="rounded mx-auto" width="25%" alt="Imagen con bordes redondeados">              
      </div>
      <div class="col-lg-2 bg-primary">Columna 3</div>
    </div>
  </div>          
</body>
```

## 8.4 Imágenes con texto superpuesto
Podemos usar las clases de posicionamiento y <a href="https://getbootstrap.com/docs/5.3/layout/z-index/">`z-index`</a> de Bootstrap para crear efectos como texto superpuesto en imágenes.

### 8.4.1 Usando `position-relative` y un contenedor con `position-absolute`
Este es uno de los métodos más comunes y flexibles. Puedes usar una imagen como fondo o elemento visual, y posicionar el texto encima usando clases de posicionamiento.

```
<body>
  <div class="container text-center">
    <div class="row">
      <div class="col-lg bg-warning">Alineando imágenes</div>          
    </div>
    <div class="row">
      <div class="col-lg-2 bg-info">Columna 1</div>
      <div class="col-lg-8 bg-primary">
        <div class="position-relative">
          <img src="image.avif" class="rounded img-fluid" alt="Imagen con bordes redondeados">
          <div class="position-absolute top-50 start-50 translate-middle text-bg-success">
            <div>Posicionamiento de texto sobre la imagen</div>
          </div>
          <div class="position-absolute text-bg-warning sticky-md-top">
            <div>Posicionamiento responsive de texto sobre la imagen</div>
          </div>
        </div>                           
      </div>
      <div class="col-lg-2 bg-info">Columna 3</div>
    </div>   
  </div>          
</body>
```

>**Explicación del código**
- `position-relative`: Define la posición relativa del contenedor principal, lo que permite que los elementos hijos con `position-absolute` se posicionen en relación a este.
- `position-absolute`: Superpone el texto sobre la imagen.
- `top-50 start-50 translate-middle`: Centra el texto horizontal y verticalmente.
  
Más información sobre `las clases de posicionamiento` <a href="https://getbootstrap.com/docs/5.3/utilities/position/">**aquí**</a>.

### 8.4.2 Usando la clase `card`

Bootstrap ofrece el componente <a href="https://getbootstrap.com/docs/5.3/components/card/#image-overlays">`card`</a> que incluye una manera sencilla de superponer texto sobre imágenes.

```
<body>
  <div class="container text-center">
    <div class="row">
      <div class="col-lg bg-warning">Sobreponiendo texto sobre imágenes</div>          
    </div>
    <div class="row">
      <div class="col-lg-2 bg-info">Columna 1</div>
      <div class="col-lg-8 bg-primary">
        <div class="card text-bg-dark">
          <img src="image.avif" class="card-img" alt="imagen">
          <div class="card-img-overlay">
            <h5 class="card-title">Título de la tarjeta</h5>
            <p class="card-text">Esta es una tarjeta ancha con texto de apoyo debajo como introducción al contenido adicional.</p>
            <p class="card-text"><small>Última actualización: Hace 3 mins</small></p>
          </div>
        </div>                           
      </div>
      <div class="col-lg-2 bg-info">Columna 3</div>
    </div>   
  </div>          
</body>
```
  
>**Explicación del código**
- **`card-img`**: Aplica la imagen como fondo de la tarjeta.
- **`card-img-overlay`**: Superpone el contenido sobre la imagen.
- **`d-flex flex-column justify-content-center text-center`**: Centra el texto vertical y horizontalmente dentro del overlay.

# 9 Tarea RA4 CEcd
Enunciado en AULES.

# 10 Videos en Bootstrap
Bootstrap dispone de clases especificas para la inserción de videos de manera responsiva y estilizada utilizando sus clases utilitarias y componentes predefinidos.

## 10.1 Inserción básica con HTML estándar
Como ya hemos visto, se puede agregar un video con la etiqueta `<video>` o insertarlo desde una plataforma (como YouTube) utilizando `<iframe>`.

>**Ejemplo**
```
<video class="w-100" controls>
  <source src="video.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta de video.
</video>
```
**Explicación del código:** La clase `w-100` hace que el video sea completamente responsivo, ajustándose al ancho de su contenedor.

## 10.2 Uso de las utilidades Object fit para la insersión de videos e imágenes
Antes de comentar los aspect ratios para la insersión de videos, veremos las utilidades <a href="https://getbootstrap.com/docs/5.3/utilities/object-fit/">**objet fit**</a> de bootstrap que nos permiten insertar, **tanto imágenes como videos**.   
  
Las utilidades de **`object-fit`** permiten controlar cómo se ajustan imágenes, videos y otros elementos multimedia dentro de sus contenedores.  
  
**Clases disponibles**
| Clase              | Descripción                                                                              |
|--------------------|------------------------------------------------------------------------------------------|
| `object-fit-contain` | El contenido se escala para ajustarse completamente dentro del contenedor sin recortar.  |
| `object-fit-cover`   | El contenido llena todo el contenedor, pero puede recortarse para mantener la proporción.|
| `object-fit-fill`    | El contenido se estira para llenar el contenedor, ignorando la proporción original.      |
| `object-fit-scale` | El contenido se escala para ajustarse al contenedor, sin ser mayor que el original. |
| `object-fit-none`    | El contenido no se ajusta automáticamente; mantiene su tamaño original.                 |

>**Ejemplo**
Imágen <a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/panoramica.webp">**aquí**</a>
```
<body>
  <div class="container my-5">
    <div class="row row-cols-5 text-center overflow-hidden" style="height: 10rem;">
      <div class="col text-bg-info ">
        <p>fit-containt</p>
        <img src="panoramica.webp" class="object-fit-contain border rounded w-100 h-100">
      </div>  
      <div class="col text-bg-warning">
        <p>fit-cover</p>
        <img src="panoramica.webp" class="object-fit-cover border rounded w-100 h-100" >
      </div>
      <div class="col text-bg-primary">
        <p>fit-fill</p>
        <img src="panoramica.webp" class="object-fit-fill border rounded w-100 h-100" >
      </div>
      <div class="col text-bg-secondary">
        <p>fit-scale</p>
        <img src="panoramica.webp" class="object-fit-scale border rounded w-100 h-100">      
      </div>
      <div class="col text-bg-info">
        <p>fit-none</p>
        <img src="panoramica.webp" class="object-fit-none border rounded w-100 h-100" >
      </div>   
    </div>
  </div>
</body>
```
  
**Nota:** Para la inserción de video, simplemente deberemos cambiar la etiqueta `<img>` por `<video>`.  

## 10.3 Insersión responsive de videos e imágenes  
Usando las clases `object-fit-{breakpoint}-{value}` tambien podremos cambiar el renderizado de la imagen en funcion de la resolución de la pantalla.

```
<body>
  <div class="container my-5">
    <div class="row row-cols-5 text-center overflow-hidden" style="height: 10rem;">
      <div class="col text-bg-info ">
        <p>fit-none</p>
        <img src="panoramica.webp" class="object-fit-sm-none border rounded w-100 h-100">
      </div>  
      <div class="col text-bg-warning">
        <p>fit-none</p>
        <img src="panoramica.webp" class="object-fit-md-none border rounded w-100 h-100" >
      </div>
      <div class="col text-bg-primary">
        <p>fit-none</p>
        <img src="panoramica.webp" class="object-fit-lg-none border rounded w-100 h-100" >
      </div>
      <div class="col text-bg-secondary">
        <p>fit-none</p>
        <img src="panoramica.webp" class="object-fit-xl-none border rounded w-100 h-100">      
      </div>
      <div class="col text-bg-info">
        <p>fit-none</p>
        <img src="panoramica.webp" class="object-fit-xxl-none border rounded w-100 h-100" >
      </div>   
    </div>
  </div>
</body>
```
  
**Nota:** Para la inserción de video responsive, simplemente deberemos cambiar la etiqueta `<img>` por `<video>`. 

## 10.4 Aspect ratio de videos e imágenes
Los <a href="https://getbootstrap.com/docs/5.3/helpers/ratio/">**ratios**</a> son utilidades diseñadas para mantener proporciones específicas (aspect ratios) en los elementos. Esto es especialmente útil para elementos como imágenes, videos o cualquier contenido que deba mantener una relación de aspecto definida.

**Clases predefinidas**:
 - `ratio-1x1`: Relación 1:1 (cuadrado).
 - `ratio-4x3`: Relación 4:3 (televisión estándar).
 - `ratio-16x9`: Relación 16:9 (pantalla widescreen).
 - `ratio-21x9`: Relación 21:9 (ultrawide).

**Compatibilidad con contenido**:
 - Los ratios funcionan mejor con contenido como imágenes, videos o elementos incrustados (`iframe`). El contenido dentro del contenedor automáticamente se ajusta al aspecto definido.

>**Ejemplo**
```
<body>
  <div class="container-fluid">
    <div class="row row-cols-4">      
      <div class="col text-bg-info">
        <img src="panoramica.webp" class="img-fluid border rounded object-fit-contain">
      </div>      
      <div class="col text-bg-warning">        
        <img src="panoramica.webp" class="img-fluid border rounded object-fit-contain">
      </div>      
      <div class="col text-bg-primary">        
        <img src="panoramica.webp" class="img-fluid border rounded object-fit-contain">
      </div>
      <div class="col text-bg-secondary">        
        <img src="panoramica.webp" class="img-fluid border rounded object-fit-contain">      
      </div> 
    </div>   
  
    <div class="row row-cols-4">      
      <div class="col text-bg-info ratio ratio-1x1" style="width: 25vw; height: 25vw;">
        <img src="panoramica.webp" class="rounded object-fit-contain">
      </div>      
      <div class="col text-bg-warning ratio ratio-4x3" style="width: 25vw; height: 19vw;">        
        <img src="panoramica.webp" class="rounded object-fit-contain">
      </div>      
      <div class="col text-bg-primary ratio ratio-16x9" style="width: 25vw; height: 14vw;">        
        <img src="panoramica.webp" class="rounded object-fit-contain">
      </div>
       <div class="col text-bg-secondary ratio ratio-21x9" style="width: 25vw; height: 11vw;">        
        <img src="panoramica.webp" class="rounded object-fit-contain">      
      </div>
    </div>
  </div>
</body>
```

# 11 Tarea RA4 CEefg
Enunciado en AULES.
