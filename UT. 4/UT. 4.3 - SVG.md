---
Título: UD. 4.3 - SVG
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---
<div align="center">
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/SVG_logo.svg" width=25%>
</div>
 
# 1. Introducción
**SVG (Scalable Vector Graphics)** es un formato de gráficos vectoriales basado en XML que se utiliza para renderizar imágenes bidimensionales.   

A diferencia de los gráficos rasterizados (como JPEG o PNG), que están formados por píxeles, SVG define imágenes mediante formas geométricas (líneas, círculos, polígonos, etc.), lo que le permite ser escalado a cualquier tamaño sin pérdida de calidad.

Además, al estar basado en texto, puede ser manipulado mediante CSS y JavaScript, lo que lo convierte en una opción flexible y ligera para el desarrollo de interfaces web interactivas. 

También es compatible con todos los navegadores modernos, lo que asegura su versatilidad en la creación de aplicaciones web.

- [Documentación oficial de SVG](https://developer.mozilla.org/es/docs/Web/SVG)

- <a href="https://marketplace.visualstudio.com/items?itemName=sidthesloth.svg-snippets">Extensión de SVG para VSC</a>

# 2. Características de SVG
-  **Escalabilidad**: Los gráficos SVG pueden ser escalados a cualquier tamaño sin pérdida de calidad.

-  **Interactividad**: Permite agregar interactividad mediante eventos.
 
-  **Compatibilidad con CSS**: Los gráficos SVG admiten estilos CSS, lo que permite, entre otros, realizar animaciones.

-  **Tamaño de archivo reducido**: Los archivos SVG se almacenan en ficheros de texto plano, lo que los hacen más ligeros que cualquier imagen rasterizada, lo que mejora el rendimiento de la página web.

-  **Texto legible**: Al ser texto en XML, los gráficos SVG pueden ser indexados por motores de búsqueda y son accesibles para lectores de pantalla, mejorando la accesibilidad web.

-  **Soporte para animaciones**: SVG soporta **animaciones nativas** tanto dentro de su código como a través de CSS y JavaScript. 

-  **Compatibilidad con navegadores modernos**: SVG es compatible con todos los navegadores actuales.
   
-  **Formato basado en XML**: Al estar escrito en XML, puede ser editado con cualquier editor de texto.

# 3. Repositorios de imágenes SVG.
Existen numerosos sitios web que ofrecen gráficos SVG listos para usar en proyectos (la mayoría piden suscripción). 

-  <a href="https://worldvectorlogo.com/es">worldvectorlogo</a>
-  <a href="https://fonts.google.com/icons">Google icons</a>
-  <a href="https://cocomaterial.com">Coco Material</a>   
-  <a href="https://freeicons.io">Free Icons:</a>  
-  <a href="https://game-icons.net">Game Icons</a>  
-  <a href="https://iconduck.com">Icon Duck</a>  
-  <a href="https://thenounproject.com">Icons and Photos For Everything</a>  
-  <a href="https://patternpad.com">Patternpad</a>  
-  <a href="https://Pixabay.com">Pixabay</a>  
-  <a href="https://svgrepo.com">SVG Repo</a>  
-  <a href="https://svgsilh.com">SVG Silh</a>  
-  <a href="https://uxwing.com">Uxwing</a>  
-  <a href="https://www.flaticon.es/">Flaticon</a>  
-  <a href="https://undraw.co/illustrations">unDraw</a>  
-  <a href="https://iconmonstr.com/">iconmonstr</a>


## 4. Formas de insertar imágenes SVG.
## 4.1 Etiqueta img para un SVG
Es la forma más sencilla de incluir un archivo SVG. El archivo SVG permanecerá externo, pero será cargado en el documento HTML.  

Para agregar una imagen SVG utilizando la etiqueta <img>, simplemente especificaremos la ruta del archivo SVG dentro de la etiqueta img.
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-green-600 font-bold underline">
    ¡Mi primera imagen SVG!
  </h1>
  <img src="./img/icono.svg" alt="Imagen SVG" width=4%>
  
</body>
</html>
```

## 4.2 SVG en línea (inline)
Las imágenes SVG pueden escribirse directamente en el documento HTML mediante la etiqueta <svg> </svg>.  

Para ello tendremos que acceder al código de la imagen.
1. Abrir el archivo SVG en el IDE.
2. Copiar todo el código SVG dentro de las etiquetas <svg> </svg>.
3. Pegar el código SVG dentro del elemento <body> del documento HTML. 
```
<p class="m-4 text-xl text-blue-700">SVG usando SVG en linea <strong>SVG</strong></p>
  <svg width="50" height="50" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.699 20c-.411 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.016.092-4.326-2.582-4.326-4.258 0-2.006 1.738-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.834 10.693-8.468 10.693zm10.833 0c-.41 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.015.092-4.326-2.582-4.326-4.258 0-2.006 1.739-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.833 10.693-8.468 10.693z" fill-rule="nonzero"/>
  </svg>
```  
## 4.3 Etiqueta object
La etiqueta <object> </object> permite incrustar un archivo SVG como un objeto independiente en la página.  

La etiqueta <object> ofrece flexibilidad al incrustar SVGs, permitiendo un control preciso sobre el tamaño y la presentación del gráfico vectorial.
```
<p class="m-4 text-xl text-green-700">SVG usando <strong>object</strong></p>
<object type="image/svg+xml" data="/SVG1/src/img/icono.svg" width="50" height="50">
  Tu navegador no soporta SVGs.
</object>
```

Donde:
-  El atributo type="image/svg+xml" especifica el tipo de archivo como SVG.
-  El atributo data="/SVG1/src/img/icono.svg" indica la ruta del archivo SVG.
-  Los atributos width="50" y height="50" definen las dimensiones del objeto SVG.
  
## 4.4 Etiqueta iframe
También se puede usar la etiqueta **iframe** para insertar imágenes SVG. 

Sin embargo, es importante tener en cuenta ciertas consideraciones al utilizar <iframe> para mostrar SVGs:
-  **Dificultades de mantenimiento**: Los <iframe> pueden ser difíciles de mantener, especialmente cuando existen múltiples elementos <iframe> en la página.
-  **SEO**: El uso **excesivo** de <iframe> puede **afectar negativamente** la optimización de l sitio web para motores de búsqueda.
-  **Escalabilidad:** Las imágenes SVG añadidas mediante <iframe> **no son escalables**, lo que **anula el propósito** de utilizar gráficos vectoriales escalables.

```
<p class="m-4 text-xl text-cyan-600">SVG usando <strong>iframe</strong></p>
<iframe src="./img/icono.svg" width="50" height="50" title="SVG"></iframe>
```

## 4.4 Usando la propiedad background-image
Al igual que la etiqueta iframe, backgroung-image también tiene limitaciones a tener en cuenta.  
-  **No Accesible:** Las imágenes de fondo SVG no son accesibles a través del texto alternativo (alt) como las imágenes <img>.
-  **Escalabilidad:** La escalabilidad del SVG se ven limitadas por las propiedad CSS del contenedor.
```
<div class="w-96 h-96 bg-[url('/SVG1/src/img/icono.svg')] bg-cover bg-no-repeat flex justify-center items-center">
  <p class="m-4 text-xl text-cyan-600">5. SVG usando <strong>background</strong></p>
</div>  
```

# 5 Crear un SVG
Existen al menos 2 maneras diferentes de crear nuestras imagenes SVG:  
-  **Programarlas mediante formas geométricas simples**:   
    Como hemos visto SVG es un formato basado en XML lo que permite crear imágenes directamente escribiendo código. 
-  **Crear un diseño con un programa de edición de imágenes y guardarlo en formato SVG**:
    Programas de edición de imágenes como **Adobe Illustrator**, **Inkscape** o **Sketch** permiten diseñar imágenes visualmente y luego exportarlas o guardarlas como archivos SVG.  


## 5.1 Programar una imagen
Para ello podremos usar las formas básicas disponibles como rectángulos, círculos, líneas y rutas pero antes deberemos ver la sintaxis empleada.

### 5.1.1 Sintaxis de SVG
SVG es un lenguaje XML, por lo que su sintaxis sigue las reglas del XML.

El documento SVG se describe de la siguiente manera:  
-  **Elemento raíz** que contiene el resto de elementos.
-  **Todas las etiquetas están cerradas** (las etiquetas vacías incluyen una barra / al final de la etiqueta).
-  **Las etiquetas de cierre coinciden con las de apertura** (incluso en el uso de mayúsculas y minúsculas).
-  **Todos los atributos tienen algún valor**.
-  **Los valores de los atributos están entre comillas** (simples o dobles).
- Algunos de los **atributos se escriben con algunas letras en mayúsculas** y no se pueden escribir en minúsculas (viewBox).
```
<p>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    width="170" height="165" viewBox="-100 -50 170 165">
    <polygon fill="yellow" stroke="red" stroke-width="7"
      points="129,150 85,119 41,150 57,104 15,66
        68,66 85,15 102,65 156,66 113,98" />
  </svg>
</p>
```
Donde:   

**1. Etiqueta `<svg>`**:
   - **`version="1.1"`**: Especifica la versión del estándar SVG utilizado.
   - **`xmlns="http://www.w3.org/2000/svg"`**: Define el espacio de nombres XML para SVG. resulta necesario para que el navegador sepa que se trata de un documento SVG.
   - **`width="170"` y `height="165"`**: Dimensiones del contenedor SVG.
   - **`viewBox="0 0 170 165"`**: Define el sistema de coordenadas del SVG. El `viewBox` permite que el contenido SVG se escale y se ajuste al tamaño del contenedor. Aquí se indica que el área visible comienza en (0, 0) y tiene un tamaño de 170 por 165 unidades.

**2. Etiqueta `<polygon>`**:
   - **`fill="yellow"`**: Define el color de relleno del polígono. 
   - **`stroke="red"`**: Establece el color del contorno (borde) del polígono.
   - **`stroke-width="7"`**: Especifica el grosor del contorno del polígono. 
   - **`points="129,150 85,119 41,150 57,104 15,66 68,66 85,15 102,65 156,66 113,98"`**: Define los vértices del polígono mediante un conjunto de coordenadas (x, y). Cada par de números representa un vértice en el espacio del SVG. 

### 5.1.2 El plano de SVG, atributo viewBox
<img src="https://www.aulaclic.es/html/graficos/coordenadas_svg.png">  


El origen de coordenadas es el punto (0,0) los valores de la coordenada x van hacia la derecha y los valores de la coordenada y van hacia abajo.  

El atributo viewBox establece la porción del plano SVG que muestra la imagen. Este atributo se establece con cuatro valores:

**1. Primer valor:** abcisa (X) de la esquina superior izquierda de la porción del plano que muestra la imagen.  
**2. Segundo valor:** ordenada (Y) de la esquina superior izquierda de la porción del plano que muestra la imagen.  
**3. Tercer valor:** ancho de la porción del plano que muestra la imagen.  
**4. Cuarto valor:** alto de la porción del plano que muestra la imagen.  

```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-100 -100 200 200" style="background-color: lightgray">
  <circle cx="0" cy="0" r="100" fill="none" stroke="red" stroke-width="1" />
  <line x1="-100" y1="0" x2="200" y2="0" stroke="black" stroke-width="1" />
  <line x1="0" y1="-100" x2="0" y2="200" stroke="black" stroke-width="1" />
</svg>
```
>Actividad 1
>Cambiar los valores de width="105", height="105" y viewBox="-5 -5 105 105
>Entender los resultados obtenidos.

>Actividad 2
>Cambiar los valores de width="105" height="105" viewBox="-100 -100 105 105
>Entender los resultados obtenidos.

### 5.1.3 Atributos width y height no proporcionales a viewBox
Este concepto es similar al manejo de imágenes con la etiqueta **img**, donde los atributos **width** y **height** deben mantener la misma proporción que la imagen si no queremos que se produzcan distorsiones.  

A diferencia de la etiqueta **img**, la etiqueta **svg**, no produce deformación sino que se ajusta la porción visible.

Los navegadores se encargan de representar una sección del plano SVG con las proporciones de los atributos **width** y **height**, asegurándose de que incluya el área definida por el atributo **viewBox**.

**Ejemplo 1**
En este ejemplo solo vemos el círculo central.
```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="-25 -25 50 50">
  <circle cx="-50" cy="0" r="25" fill="none" stroke="blue" stroke-width="2" />
  <circle cx="50" cy="0" r="25" fill="none" stroke="blue" stroke-width="2" />
  <circle cx="0" cy="-50" r="25" fill="none" stroke="green" stroke-width="2" />
  <circle cx="0" cy="50" r="25" fill="none" stroke="green" stroke-width="2" />
  <circle cx="0" cy="0" r="25" fill="none" stroke="red" stroke-width="2" />
</svg>
```

**Ejemplo 2**
En este ejemplo vemos los 4 círculos.
```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="-75 -75 150 150">
  <circle cx="-50" cy="0" r="25" fill="none" stroke="blue" stroke-width="2" />
  <circle cx="50" cy="0" r="25" fill="none" stroke="blue" stroke-width="2" />
  <circle cx="0" cy="-50" r="25" fill="none" stroke="green" stroke-width="2" />
  <circle cx="0" cy="50" r="25" fill="none" stroke="green" stroke-width="2" />
  <circle cx="0" cy="0" r="25" fill="none" stroke="red" stroke-width="2" />
</svg>
```

>Actividad:
>Modificar el programa anterior para que solo se vean los circulos horizontales.
>Repetir la edición del programa para que solo se vean los circulos verticales.
>Analizar los resultados obtenidos.

### 5.1.4 Margenes del viewBox
Para asegurarse de que todo el dibujo sea visible, es conveniente elegir un viewbox un poco más grande que la zona ocupada por los elementos del dibujo.  

En los siguientes ejemplos vemos como variando los argumentos pasados a viewBox ya no tenemos recortes del espesor del círculo.  

```
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="-25 -25 50 50">
  <circle cx="0" cy="0" r="25" fill="none" stroke="red" stroke-width="2" />
</svg>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="-26 -26 52 52">
  <circle cx="0" cy="0" r="25" fill="none" stroke="red" stroke-width="2" />
</svg>
```

### 5.1.5 Formas básicas de SVG
Las formas básicas SVG son:
-  La línea <line ... />  
-  La polilínea <polyline ... />  
-  El círculo <circle ... />
-  La elipse <ellipse ... />,
-  El rectángulo <rect ... />
-  El polígono <polygon ... />  

**1. Línea** `<line ... />`
   -  La etiqueta <line /> dibuja una línea recta.  
   -  Los atributos principales propios de <line /> son:  
     -  (x1, y1): coordenadas del punto de inicio.   
     -  (x2, y2): coordenadas del punto final.
   - Sintaxis:
```
<svg>
  <line x1="" y1=""
      x2="" y2=""
      stroke=""
      stroke-width=""/>
</svg>
```    

**2. Polilínea** `<polyline ... />`
   -  La etiqueta <polyline /> dibuja un polígono abierto.  
   -  Los atributos principales propios de <polyline /> son:  
     -  (x1, y1) (x2, y2) (x3, y3) ... (xn, yn): Coordenadas de los puntos sucesivos de la polilínea.
  - Sintaxis:    
```
<svg>
  <polyline points="" style=""/>
</svg>
```

**3. Círculo** `<circle ... />`
   -  La etiqueta <circle /> dibuja un circulo.
   -  Los atributos principales propios de <cicle /> son:
     - (cx, cy): Coordenada y del centro y `r` (radio).
   - Sintaxis:
```
<svg>
  <circle cx="" cy="" r="" style=""/>
</svg>
```  
  
**4. Elipse** `<ellipse ... />`
   -  La etiqueta <ellipse /> dibuja una elipse.
   -  Los atributos principales propios de <cicle /> son:
     - (cx, cy): Coordenada y del centro.
     - `rx` (radio en dirección x)
     - `ry` (radio en dirección y)      
   - Sintaxis:
```
<svg>
  <ellipse cx="" cy="" rx="" ry="" style=""/>
</svg>
```
     
**5. Rectángulo** `<rect ... />`
   -  La etiqueta <rect /> dibuja un rectángulo.
   -  Los atributos principales propios de <rec /> son:
     - (x, y): Coordenadas la **esquina superior izquierda** del rectángulo
     - width: anchura del rectángulo
     - height: altura del rectángulo
     - rx: radio horizontal de las esquinas redondeadas
     - ry: radio vertical de las esquinas redondeadas
  - Sintaxis:
```
<svg>
  <rect x="" y="" width="" height="" style=""/>
</svg>
```
    
**6. Polígono** `<polygon .../>`
   - La etiqueta <polygon /> dibuja un poligono cerrado.
   - Los atributos principales de <polygon /> son:
      -  (x1, y1) (x2, y2) (x3, y3) ... (xn, yn): Coordenadas de los puntos sucesivos del polígono.
      -  El último punto (xn, yn) se une automáticamente con el primero (x1, y1).
   - Sintaxis:
```
<svg>
  <polygon points="" style=""/>
</svg>
```  

### 5.1.6 Ejercicios

-  #### 1. Dibuja una línea horizontal que conecte dos puntos en una vista de 300x100.

-  #### 2. Dibuja una polilínea que forma un zigzag entre varios puntos.

-  #### 3. Dibuja un círculo de radio 50 en el centro de un área de 200x200.

-  #### 4. Crea una elipse centrada con un radio horizontal de 70 y un radio vertical de 40.

-  #### 5. Dibuja un rectángulo de 150x100 con esquinas redondeadas en un área de 300x200.

-  #### 6. Crea un triángulo equilátero utilizando la etiqueta `<polygon />`.

-  #### 7. Dibuja una cruz usando dos líneas que se cruzan en el centro del área de 100x100.

-  #### 8. Crea una polilínea con curvas suaves.
>Nota: Para redondear las esquinas, usar `stroke-width`.

-  #### 9. Dibuja un rectángulo.

-  #### 10. Utiliza el elemento `<polygon />` para dibujar una estrella de 5 puntas.
        
### 5.1.7 Formas avanzadas de SVG: Etiqueta <path ... />
La etiqueta `<path />` define una forma mediante una serie de comandos que describen movimientos y dibujos en el espacio. A diferencia de otras etiquetas de SVG más simples <path /> **permite dibujar cualquier forma imaginable**.

[Editor de path](https://yqnn.github.io/svg-path-editor/)

**1. Etiqueta** `<path />`  
-  La etiqueta `<path />` utiliza un atributo principal llamado `d`, el cual contiene una lista de comandos y parámetros. Estos comandos indican cómo moverse y dibujar en el área gráfica.

**2. Comandos Básicos de** `<path />`
Los comandos se dividen en dos grupos: 
-  **Comandos en mayúsculas:** Utilizan coordenadas absolutas. Es decir, siempre se refieren al origen del gráfico. 
-  **Comandos en minúsculas:** Utilizan coordenadas relativas. Es decir, siempre se refieren desde donde se encuentra el puntero. 

| Comando | Parámetros                                   | Nombre                            | Descripción                                                                                                           |
|------|----------------------------------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| M    | x,y                                          | moveto                            | Mueve el puntero al punto especificado x,y **sin dibujar**.                                                                 |
| m    | x,y                                          | moveto                            | Mueve el puntero al punto especificado x,y relativo a la ubicación actual del puntero, **sin dibujar**.                        |
| L    | x,y                                          | lineto                            | Dibuja una línea desde la ubicación actual del puntero hasta el punto especificado x,y.                                  |
| l    | x,y                                          | lineto                            | Dibuja una línea desde la ubicación actual del puntero hasta el punto especificado x,y relativo a la ubicación actual.   |
| H    | x                                            | horizontal lineto                 | Dibuja una línea horizontal hasta el punto definido por (x especificado, y actual del puntero).                         |
| h    | x                                            | horizontal lineto                 | Dibuja una línea horizontal hasta el punto definido por (x actual del puntero + x especificado, y actual del puntero).    |
| V    | y                                            | vertical lineto                   | Dibuja una línea vertical hasta el punto definido por (x actual del puntero, y especificado).                           |
| v    | y                                            | vertical lineto                   | Dibuja una línea vertical hasta el punto definido por (x actual del puntero, y actual del puntero + y especificado).      |
| C    | x1,y1 x2,y2 x,y                              | curveto                           | Dibuja una curva de Bézier cúbica desde el punto actual hasta x,y. x1,y1 y x2,y2 son los puntos de control de la curva.|
| c    | x1,y1 x2,y2 x,y                              | curveto                           | Igual que C, pero interpreta las coordenadas relativas al punto actual del puntero.                                     |
| S    | x2,y2 x,y                                    | shorthand / smooth curveto        | Dibuja una curva de Bézier cúbica hasta x,y. x2,y2 es el punto de control final, el inicial es el final de la curva anterior.|
| s    | x2,y2 x,y                                    | shorthand / smooth curveto        | Igual que S, pero interpreta las coordenadas relativas al punto actual del puntero.                                     |
| Q    | x1,y1 x,y                                    | quadratic Bezier curveto          | Dibuja una curva de Bézier cuadrática desde el punto actual hasta x,y. x1,y1 es el punto de control de la curva.      |
| q    | x1,y1 x,y                                    | quadratic Bezier curveto          | Igual que Q, pero interpreta las coordenadas relativas al punto actual del puntero.                                     |
| T    | x,y                                          | shorthand / smooth quadratic curveto | Dibuja una curva de Bézier cuadrática hasta x,y. El punto de control es el mismo que el último usado.                |
| t    | x,y                                          | shorthand / smooth quadratic curveto | Igual que T, pero interpreta las coordenadas relativas al punto actual del puntero.                                     |
| A    | rx,ry x-axis-rotation large-arc-flag, sweepflag x,y | elliptical arc                  | Dibuja un arco elíptico desde el punto actual hasta x,y. rx y ry son los radios de la elipse.                         |
| a    | rx,ry x-axis-rotation large-arc-flag, sweepflag x,y | elliptical arc                  | Igual que A, pero interpreta las coordenadas relativas al punto actual del puntero.                                     |
| Z    |                                              | closepath                         | Cierra el camino dibujando una línea desde el punto actual al primer punto.                                           |
| z    |                                              | closepath                         | Cierra el camino dibujando una línea desde el punto actual al primer punto.                                           |

**3. Sintaxis de** `<path />`  
La sintaxis del elemento path es como sigue:  
```
<path d="conjunto de comandos" />
```
Donde el conjunto de comandos está formado por los comandos moveto, lineto, curveto, arc y closepath.

-  **Ejemplo**
>**Nota:** Archivo disponible <a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/html/index_path.html">aquí</a> 
```
<path d="M10,40 L40,40 L40,80 L80,80 L80,120 L120,120 L120,160 L40,160" />
```
**Significado del código:**
-  **moveto M (10,40):** Desplaza el cursor al punto (10,40). Sin **dibujar nada**.
-  **Lineto L (40,40):** Dibuja una línea entre el punto actual (10,40) y el punto especificado (40,40).
-  **Lineto L (40,80):** Dibuja una línea entre el punto actual (40,40) y el punto especificado (40,80).
-  **Lineto L (80,80):** Dibuja una línea entre el punto actual (40,80) y el punto especificado (80,80).
-  **Lineto L (80,120):** Dibuja una línea entre el punto actual (80,80) y el punto especificado (80,120).
-  **Lineto L (120,120):** Dibuja una línea entre el punto actual (80,120) y el punto especificado (120,120).
-  **Lineto L (120,160):** Dibuja una línea entre el punto actual (120,120) y el punto especificado (120,160).
-  **Lineto L (40,160):** Dibuja una línea entre el punto actual (120,160) y el punto especificado (40,160).

 lineto. L x y Dibuja una línea entre el punto actual y el punto especificado (x,y).

**Resultado:**  

<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/path.png" width=50%>

#### 5.1.7.1 Buenas prácticas y simplificación del código

-  **Etiqueta `<g>` en SVG**  
    -  La etiqueta `<g>` en SVG se utiliza para agrupar elementos gráficos. Como lo veremos más adelante (aunque ya lo estemos usando), esto permite aplicar transformaciones, estilos y atributos de manera conjunta a todos los elementos de un grupo.  
    -  Al usar `<g>`, se organiza mejor el contenido SVG, facilitando la manipulación y el mantenimiento del código. 

    -  **Ejemplo de uso de <g>:**

```
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <g fill="blue" stroke="black" stroke-width="2">
        <circle cx="50" cy="50" r="30"/>
        <rect x="100" y="20" width="60" height="60"/>
    </g>
</svg>
```

- **Evitar repeticiones dentro del comando <path>**  
    -  Al definir un `<path>` en SVG se dan muchas veces la circunstancia que se aplica el mismo comando varias veces **seguidas**.
    -  En este caso se puede optar por repetir el comando tantas veces como sea necesario. Eso puede dar **claridad en la Sintaxis** pero también sobrecargar el código.
    -  También se puede optar por omitir el comando. Entonces se considera, de manera implicita que los siguientes puntos introducidos tendrán el mismo comando.

    -  **Ejemplo de omisión del comando:**
>Repitiendo comandos.
```
<path d="M 10 10 C 20 20, 40 20, 50 10 C 60 0, 80 0, 90 10 C 40 60, 80 120, 30 90 Z" fill="none" stroke-width="1" stroke="black" />
```
>Sin repetir comandos.
```
<path d="M 10 10 C 20 20, 40 20, 50 10 60 0, 80 0, 90 10 40 60, 80 120, 30 90 Z" fill="none" stroke-width="1" stroke="black" />
```

#### 5.1.7.2 Diferencias entre coordenadas absolutas y relativas, ejemplo con lineto L y l
-  **Ejemplo usando lineto L**
```
<!-- Usando L (línea absoluta) -->
<path d="M10,50 L100,50 L100,150 L10,150 Z" fill="none" stroke="blue" stroke-width="2" />
<text x="10" y="40" font-size="12" fill="blue">Absoluto (L)</text>
```
**Explicación:**  
El cuadrado azul usa el comando `L` (absoluto), lo que significa que cada **coordenada especificada** es en relación al **sistema de coordenadas general** del SVG.  

-  **Ejemplo usando lineto l**
```  
<!-- Usando l (línea relativa) -->
<path d="M150,50 l90,0 l0,100 l-90,0 Z" fill="none" stroke="red" stroke-width="2" />
<text x="150" y="40" font-size="12" fill="red">Relativo (l)</text>
```
**Explicación:** 
El cuadrado rojo usa el comando `l` (relativo), lo que significa que las coordenadas son relativas al último punto en el que se trazó una línea. En este caso, las líneas se dibujan comenzando desde el punto inicial `M150,50`, y luego se desplazan de forma relativa a ese punto.

-  **Resultado**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/html%20lineto.png" width=50%>

#### 5.1.7.3 Comando curveto C - curva cúbica de Bézier.
-  **Teoría.**  
Cuatro puntos del plano: P0, P1, P2 y P3 definen una curva cúbica de Bézier. La curva empieza en el punto P0, se dirige hacia P1 y llega a P3 viniendo de la dirección del punto P2. Usualmente, no pasará ni por P1 ni por P2. Estos puntos sólo están ahí para proporcionar información direccional.
<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Bezier_curve.svg" width=35%>
</div>

-  Las curvas de bezier cuadráticas se dibujan de la siguiente manera.  
<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/d/db/B%C3%A9zier_3_big.gif">
</div>
 
-  **Ejemplo**
```
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M 30 270
               C 40 10, 65 10, 270 270 
               " 
      stroke="blue" 
      fill="transparent"
      stroke-width="2"/>
    </g>

    <g stroke-width="1" stroke="rgba(255, 0, 0, 0.25)">
      <line x1="30" y1="270" x2="40" y2="10"/>
      <line x1="270" y1="270" x2="40" y2="10"/>
    </g>
     
    <g stroke-width="1" stroke="lightblue">
      <line x1="30" y1="270" x2="65" y2="10"/>
      <line x1="270" y1="270" x2="65" y2="10"/>
    </g>
</svg>
```
-  **Explicación del código**
> `M 30 270`: Mueve el punto de inicio del camino a las coordenadas (30, 270).
> `C 40 10, 65 10, 95 80`: Dibuja una curva cúbica desde **el punto actual hasta el punto (270, 270),** utilizando los puntos de control (40, 10) y (65, 10) para definir la forma de la curva.

-  **Resultado**

<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/curvaC.png" width=50%>


#### 5.1.7.4 Comando smooth curveto S.  
- **Teoría**
  -  Dibuja una curva cúbica de Bézier desde el punto actual (x,y) hasta un punto (x2,y2).
  -  **El primer punto de anclaje es el reflejo del segundo punto de anclaje de la curva anterior.**
  -  Si no hay segundo punto de la curva anterior se toma el mismo punto de anclaje para `P-1` y `P1`.   
  -  x1,y1 son las coordenadas del segundo punto de anclaje (control point) P1.
  
-  Dibujado con solo un punto de control.  
<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/B%C3%A9zier_2_big.gif">
</div>

- **Ejemplo con curva C anterior disponible.** 
```
<svg width="305" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Ejes de referencia -->
  <line x1="0" y1="100" x2="300" y2="100" stroke="gray" stroke-width="1" />
  <line x1="150" y1="0" x2="150" y2="200" stroke="gray" stroke-width="1" />
    
  <!-- Curva cúbica suavizada -->
  <path d="M 50 150 C 100 50, 150 50, 150 100 S 250 150, 300 100" fill="transparent" stroke="blue" stroke-width="2" />
       
  <!-- Puntos de control -->
  <circle cx="50" cy="150" r="3" fill="red" />
  <circle cx="100" cy="50" r="3" fill="green" />
  <circle cx="150" cy="50" r="3" fill="green" />
  <circle cx="250" cy="150" r="3" fill="green" />
  <circle cx="300" cy="100" r="3" fill="red" />

  <!-- Linea punto de control P1 -->
  <line x1="250" y1="150"
    x2="300" y2="100"
    stroke="gray"
    stroke-width="1"/>
</svg>
```
-  **Resultado**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/smoothCurvetoSgrid.png" width=50%>

- **Ejemplo sin curva C anterior disponible.** 
```
<svg>
  <!-- Ejes de referencia -->
  <line x1="0" y1="100" x2="300" y2="100" stroke="gray" stroke-width="1" />
  <line x1="150" y1="0" x2="150" y2="200" stroke="gray" stroke-width="1" />
  
  <!-- Curva cúbica suavizada -->
  <path d="M 40 180 S 150 50, 330 150" fill="transparent" stroke="blue" stroke-width="2" />
    
  <!-- Puntos de referencia -->
  <circle cx="40" cy="180" r="3" fill="red" />
  <circle cx="150" cy="50" r="3" fill="green" />
  <circle cx="330" cy="150" r="3" fill="red" />

  <!-- Lineas a puntos de control -->
  <line x1="40" y1="180"
        x2="150" y2="50"
        stroke="gray"
        stroke-width="1"/>
  <line x1="150" y1="50"
        x2="330" y2="150"
        stroke="gray"
        stroke-width="1"/>
</svg>
```
-  **Resultado**
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/smoothCurvetoSgrid2.png" width=50%>

#### 5.1.7.5 Comando quadratic Bezier curveto Q.
-  **Teoría**  
Tres puntos del plano: a, pc y z definen una curva cuadrática de Bézier. La curva empieza en el punto a, se dirige hacia pc ( punto de control ) y llega a z viniendo de la dirección del punto de control. Usualmente, no pasará por pc. Este punto sólo proporciona información direccional.  
La línea recta que une cada uno de los puntos finales de la curva ( a y z ) con su correspondiente punto de control ( pc ) es tangente a la curva.

- **Ejemplo** 
```
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Ejes de referencia -->
  <line x1="0" y1="100" x2="300" y2="100" stroke="gray" stroke-width="1" />
  <line x1="150" y1="0" x2="150" y2="200" stroke="gray" stroke-width="1" />
          
  <!-- Curva cuadrática Bézier -->
  <path d="M 40 180 Q 150 50, 330 150" fill="transparent" stroke="blue" stroke-width="2" />
            
  <!-- Puntos de control -->
  <circle cx="40" cy="180" r="3" fill="red" />
  <circle cx="150" cy="50" r="3" fill="green" />
  <circle cx="330" cy="150" r="3" fill="red" />
          
 <!-- Lineas a puntos de control -->
 <line x1="40" y1="180"
       x2="150" y2="50"
       stroke="gray"
       stroke-width="1"/>
 <line x1="150" y1="50"
       x2="330" y2="150"
       stroke="gray"
       stroke-width="1"/>
</svg>
```
-  **Resultado**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/CurvetoQgrid.png" width=50%>

#### 5.1.7.6 Comando quadratic Bezier curveto T.
-  Teoria
T (smooth quadratic curveto), toma automáticamente el punto de control de la curva cuadrática anterior, permitiendo que la curva **continúe suavemente**.


```
<svg>
  <!-- Ejes de referencia -->
  <line x1="0" y1="100" x2="400" y2="100" stroke="gray" stroke-width="1" />
  <line x1="150" y1="0" x2="150" y2="200" stroke="gray" stroke-width="1" />
            
  <!-- Curva cuadrática Bézier (Q) -->
  <path d="M 40 180 Q 150 50, 330 150 T 400 50" fill="transparent" stroke="blue" stroke-width="2" />
             
  <!-- Puntos de control -->
  <circle cx="40" cy="180" r="3" fill="red" />
  <circle cx="150" cy="50" r="3" fill="green" />
  <circle cx="330" cy="150" r="3" fill="red" />
  <circle cx="400" cy="50" r="3" fill="green" />
            
   <!-- Líneas a puntos de control -->
   <line x1="40" y1="180"
         x2="150" y2="50"
         stroke="gray"
         stroke-width="1"/>
   <line x1="150" y1="50"
         x2="330" y2="150"
         stroke="gray"
         stroke-width="1"/>
</svg>
```

- **Resultado**
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/CurvetoTgridSmooth.png" width=50%>

#### 5.1.7.7 Arco eliptico A.
- Permite dibujar total o parcialmente una elipse.  
**Sintaxis:** `A` `rx ry` `x-axis-rotation` `large-arc-flag` `sweepflag` `x y`  
Dónde: 
    - rx: radio de la elipse según el eje x.
    - ry: radio de la elipse según el eje y.
    - x-axis-rotation: rotación de la elipse según el eje x.
    - large-arc-flag: Indica si el arco debe ser el mayor o menor de los dos posibles. Si el valor es `1`, se dibuja el arco más grande (más de 180 grados). Si es `0`, se dibuja el arco más pequeño (menos de 180 grados).
    - sweepflag: Indica la dirección en la que se dibuja el arco. Si el valor es `1`, el arco se dibuja en sentido horario. Si es `0`, se dibuja en sentido antihorario.
    - x y: Coordenadas del punto final de la elipse.

> Más información <a href="https://www.nan.fyi/svg-paths/arcs">aquí</a>   

- **Ejemplo**  
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arc A</title>
</head>

<body>

<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }  

  svg {
    background: #ece3e3;
    margin-top: 15px;
  }
      
  path {
    stroke: blue;
    stroke-width: 0.5px;
    fill: red;
  }
        
  div { 
    background-color: antiquewhite;
    width: 750px;
    padding: 10px, 10px, 10px, 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

  }
</style>

<div>
  <svg width="500" height="500" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <path id="arc" 
      d="M 150 150
         A 50 100 0 0 0 250 150"
      fill="none" 
      stroke-width="0.75"
      stroke="blue"
    />
    
    <line x1="50" y1="150"
          x2="150" y2="80"
          stroke="gray"
          stroke-width="0"/>
  </svg>

  <p>Valor de <strong>x-axis-rotation</strong></p>
  <fieldset style="width: 200px;">
    <legend>Modificar ángulo de rotación</legend>
      <input type="range" id="xAxisRotation" name="x-axis-rotation" min="0" max="90" step="1" value="0">
      <output id="rotationValue">0</output>
  </fieldset>
      
  <p>Valor de <strong>large-arc-flag</strong></p>
  <select id="largeArcFlag">
    <option value="0">Valor 0</option>
    <option value="1">Valor 1</option>
  </select>

  <p>Valor de sweepflag</p>
  <select id="sweepFlag">
    <option value="0">Valor 0</option>
    <option value="1">Valor 1</option>
  </select>

</div>  

<script>
  //Variar angulo de rotacion de la elipse
  const path = document.getElementById('arc');
  const xAxisRotation = document.getElementById('xAxisRotation');
  const rotationValueDisplay = document.getElementById('rotationValue');

  let rotationValue = xAxisRotation.value; //inicializar valor
  
  xAxisRotation.addEventListener('input', function() {
    rotationValue = this.value;  
    updatePath(); //pintar el path de nuevo
    rotationValueDisplay.textContent = rotationValue; // pintar valor en fieldset.
  });  
    
  //Variar large-arc-flag 
  const selectLargeArcFlag = document.getElementById("largeArcFlag");

  let largeArcFlag =selectLargeArcFlag.value; //inicializar valor 
  
  selectLargeArcFlag.addEventListener("change", () => {
    largeArcFlag = selectLargeArcFlag.value;
    updatePath();
  });
  
  // Actualizar sweepflag
  const selectSweepFlag = document.getElementById("sweepFlag");

  let sweepFlag = selectSweepFlag.value; // inicializar valor 

  selectSweepFlag.addEventListener("change", () => {
    sweepFlag = selectSweepFlag.value; 
    updatePath();
  });

  // Actualizar path
  function updatePath() {
    path.setAttribute('d', `M 150 150 A 50 150 ${rotationValue} ${largeArcFlag} ${sweepFlag} 250 150`);
  }

</script>

</body>
</html>
```

#### 5.1.7.8 Ejercicio
Realiza un SVG **usando path** replicando el logo de la banda musical Dûrga de Valencia.  
El logo en cuestión es el siguiente:  

<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/logoDurga.png" width=50%>

**Nota**  
Aun no hemos visto como aplicar estilos a svg.  
Para aplicar el color y el grosor de linea usar: `stroke-width="4"` y `stroke="#D9C472"`  
Para aplicar el relleno del circulo usar: `fill="#D9C472"`

**Ejemplo**
```
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 10 L 190 10 L 190 190 L 10 190 Z" 
    stroke="#D9C472" 
    fill="transparent" 
    stroke-width="4"/>
</svg>
```

## 5.2 Atributos / estilos para SVG
### 5.2.1 Atributos SVG  
#### 5.2.1.1 Trazos  
-  **Atributo stroke**   
El atributo **stroke** permite definir el color del trazo del elemento.

```
<svg viewBox="0 0 45 45" height="300" style="background:#aaa">
  <rect x="5" y="5" width="15" height="15" stroke="purple" />
  <rect x="25" y="5" width="15" height="15" stroke="red" />
  <rect x="5" y="25" width="15" height="15" stroke="deeppink" />
  <rect x="25" y="25" width="15" height="15" stroke="gold" />
</svg>
```  

-  **Atributo stroke-width**   
El atributo **stroke-width** permite modificar el grosor del trazo del elemento.

```
<svg viewBox="0 0 45 45" height="300" style="background:#aaa">
  <rect x="5" y="5" width="15" height="15" stroke="purple" stroke-width="0" />
  <rect x="25" y="5" width="15" height="15" stroke="red" stroke-width="1" />
  <rect x="5" y="25" width="15" height="15" stroke="deeppink" stroke-width="2" />
  <rect x="25" y="25" width="15" height="15" stroke="gold" stroke-width="6" />
</svg>
```  

-  **Atributo stroke-opacity**  
El atributo **stroke-opacity** permite establecer la opacidad del elemento (grado de transparencia). El valor a indicar es un número entre 0 y 1, con decimales (0 totalmente transparente y 1 es totalmente opaco).

```
<svg viewBox="0 0 45 45" height="300" style="background:#aaa">
  <rect x="5" y="5" width="15" height="15" stroke="red" stroke-opacity="0" />
  <rect x="25" y="5" width="15" height="15" stroke="red" stroke-opacity="0.25" />
  <rect x="5" y="25" width="15" height="15" stroke="red" stroke-opacity="0.5" />
  <rect x="25" y="25" width="15" height="15" stroke="red" stroke-opacity="1" />
</svg>
```
#### 5.2.1.2 Ejercicio
>**Ejercicio.**  
Realizar un programa SVG que renderize una imagen similar a la siguiente:
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/anillos1.png">

#### 5.2.1.3 Forma del trazo  
-  **Atributo stroke-linecap**  
Con **stroke-linecap** se indica la forma de los extremos de los trazos.  
Posibles valores de stroke-linecap:
    - `butt`, prederminado.
    - `round`, el extremo de la línea es redondeado.
    - `square`, el extremo de la línea es cuadrado.

```
<svg viewBox="0 0 30 30" height="300" style="background:#aaa">
  <path d="M5 5 L25 5" stroke="black" stroke-width="3" stroke-linecap="butt" />
  <path d="M5 15 L25 15" stroke="darkred" stroke-width="3" stroke-linecap="round" />
  <path d="M5 25 L25 25" stroke="purple" stroke-width="3" stroke-linecap="square" />
</svg>

<svg viewBox="0 0 30 30" height="300" style="background:#aaa">
  <path d="M15 5 L15 5" stroke="black" stroke-width="3" stroke-linecap="butt" />
  <path d="M15 15 L15 15" stroke="darkred" stroke-width="3" stroke-linecap="round" />
  <path d="M15 25 L15 25" stroke="purple" stroke-width="3" stroke-linecap="square" />
</svg>
```

-  **Atributo stroke-linejoin**  
Con **stroke-linejoin** se puede definir como serán las uniones de dos trayectos o dos lineas, y como se mostrarán.  
Posibles valores de stroke-linejoin:
    - `miter`, predeterminado. Los segmentos de línea se unen en un punto afilado o en ángulo extendido, creando una esquina que puede sobresalir. Si el ángulo entre las líneas es muy agudo, la longitud de la unión puede limitarse utilizando la propiedad `stroke-miterlimit`.    
    - `bevel`. Los segmentos de línea se unen mediante un corte recto, creando una esquina "plana" o biselada. El punto de unión no es afilado como en `miter`, sino truncado.    
    - `miter-clip`. La unión se recorta si el ángulo es demasiado pequeño, evitando una esquina demasiado larga y afilada.
    - `round`. Los segmentos de línea se unen con un borde redondeado en las esquinas.  
   
```
<svg viewBox="0 0 300 100" width="1200" height="400">
 
  <path d="M5 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="miter" />
  <text x="5" y="90">miter</text>
    
  <path d="M55 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="round" />
  <text x="55" y="90">round</text>
    
  <path d="M105 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="bevel" />
  <text x="105" y="90">bevel</text>
   
  <path d="M155 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="miter-clip" />
  <text x="155" y="90">miter-clip</text>

</svg>
```
#### 5.2.1.4 Ejercicio
>**Ejercicio**  
>Realizar un programa SVG que renderize un cuadrado.  
>Aplicar en cada esquina un valor de ´stroke-linecap` diferente.

-  **Atributo stroke-miterlimit**  
El atributo stroke-miterlimit permite modificar como se ve el ángulo puntiagudo cuando se han definido los valores `miter`, `miter-clip` en el atributo `stroke-linejoin`.
```
<div>
  <svg viewBox="0 0 300 90" width="1200">
    <path d="M5 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="miter" />
    <text x="5" y="90">miter</text>
          
    <path d="M55 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="round" />
    <text x="55" y="90">round</text>
          
    <path d="M105 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="bevel" />
    <text x="105" y="90">bevel</text>
         
    <path d="M155 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="miter-clip" />
    <text x="155" y="90">miter-clip</text>
  </svg>
</div>

<div>
  <svg viewBox="0 0 300 90" width="1200" >
    <path d="M5 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="miter" stroke-miterlimit="1" />
    <text x="5" y="90">miter</text>
          
    <path d="M155 60 l20 -5 l-3 20" stroke="blue" stroke-width="2" stroke-linejoin="miter-clip" stroke-miterlimit="0.5"/>
    <text x="155" y="90">miter-clip</text>
  </svg>
</div>
```
#### 5.2.1.5 Ejercicio
>**Ejercicio**  
>Realizar un programa SVG que renderize un triángulo.  
>Aplicar en cada esquina un valor de ´stroke-miterlimit` diferente.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Line Join</title>
</head>

<body>

<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }  

  svg {
    background: #ece3e3;
    margin-top: 15px;
  }
      
  path {
    stroke: blue;
    stroke-width: 6px;
    fill:aquamarine;
  }
        
  div { 
    background-color: antiquewhite;
    width: 750px;
    padding: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  output {
    margin-top: 5px;
  }
 
</style>

<div>
  <svg width="600" height="600" viewBox="-5 -5 310 310" xmlns="http://www.w3.org/2000/svg">
    <g> <!--Rejilla-->
          <g stroke="rgba(0, 0, 0, 0.5)" stroke-width="0.5"> <!--lineas horizontales-->
            <line x1="0" y1="0" x2="300" y2="0" stroke-width="1" stroke="black" />
            <line x1="0" y1="10" x2="300" y2="10" />
            <line x1="0" y1="20" x2="300" y2="20" />
            <line x1="0" y1="30" x2="300" y2="30" />
            <line x1="0" y1="40" x2="300" y2="40"/>
            <line x1="0" y1="50" x2="300" y2="50" stroke-width="1" stroke="black"/>
            <line x1="0" y1="60" x2="300" y2="60" />
            <line x1="0" y1="70" x2="300" y2="70" />
            <line x1="0" y1="80" x2="300" y2="80" />
            <line x1="0" y1="90" x2="300" y2="90" />
            <line x1="0" y1="100" x2="300" y2="100" stroke-width="1" stroke="black"/>
            <line x1="0" y1="110" x2="300" y2="110" />
            <line x1="0" y1="120" x2="300" y2="120" />
            <line x1="0" y1="130" x2="300" y2="130" />
            <line x1="0" y1="140" x2="300" y2="140" />
            <line x1="0" y1="150" x2="300" y2="150" stroke-width="1" stroke="black"/>
            <line x1="0" y1="160" x2="300" y2="160" />
            <line x1="0" y1="170" x2="300" y2="170" />
            <line x1="0" y1="180" x2="300" y2="180" />
            <line x1="0" y1="190" x2="300" y2="190" />
            <line x1="0" y1="200" x2="300" y2="200" stroke-width="1" stroke="black"/>
            <line x1="0" y1="210" x2="300" y2="210" />
            <line x1="0" y1="220" x2="300" y2="220" />
            <line x1="0" y1="230" x2="300" y2="230" />
            <line x1="0" y1="240" x2="300" y2="240" />
            <line x1="0" y1="250" x2="300" y2="250" stroke-width="1" stroke="black"/>
            <line x1="0" y1="260" x2="300" y2="260" />
            <line x1="0" y1="270" x2="300" y2="270" />
            <line x1="0" y1="280" x2="300" y2="280" />
            <line x1="0" y1="290" x2="300" y2="290" />
            <line x1="0" y1="300" x2="300" y2="300" stroke-width="1" stroke="black"/>
          </g>        
          
          <g stroke="rgba(0, 0, 0, 0.5)" stroke-width="0.25"> <!-- Líneas verticales -->
            <line x1="0" y1="0" x2="0" y2="300" stroke-width="1" stroke="black"/>
            <line x1="10" y1="0" x2="10" y2="300" />
            <line x1="20" y1="0" x2="20" y2="300" />
            <line x1="30" y1="0" x2="30" y2="300" />
            <line x1="40" y1="0" x2="40" y2="300" />
            <line x1="50" y1="0" x2="50" y2="300" stroke-width="1" stroke="black"/>
            <line x1="60" y1="0" x2="60" y2="300" />
            <line x1="70" y1="0" x2="70" y2="300" />
            <line x1="80" y1="0" x2="80" y2="300" />
            <line x1="90" y1="0" x2="90" y2="300" />
            <line x1="100" y1="0" x2="100" y2="300" stroke-width="1" stroke="black"/>
            <line x1="110" y1="0" x2="110" y2="300" />
            <line x1="120" y1="0" x2="120" y2="300" />
            <line x1="130" y1="0" x2="130" y2="300" />
            <line x1="140" y1="0" x2="140" y2="300" />
            <line x1="150" y1="0" x2="150" y2="300" stroke-width="1" stroke="black"/>
            <line x1="160" y1="0" x2="160" y2="300" />
            <line x1="170" y1="0" x2="170" y2="300" />
            <line x1="180" y1="0" x2="180" y2="300" />
            <line x1="190" y1="0" x2="190" y2="300" />
            <line x1="200" y1="0" x2="200" y2="300" stroke-width="1" stroke="black"/>
            <line x1="210" y1="0" x2="210" y2="300" />
            <line x1="220" y1="0" x2="220" y2="300" />
            <line x1="230" y1="0" x2="230" y2="300" />
            <line x1="240" y1="0" x2="240" y2="300" />
            <line x1="250" y1="0" x2="250" y2="300" stroke-width="1" stroke="black"/>
            <line x1="260" y1="0" x2="260" y2="300" />
            <line x1="270" y1="0" x2="270" y2="300" />
            <line x1="280" y1="0" x2="280" y2="300" />
            <line x1="290" y1="0" x2="290" y2="300" />
            <line x1="300" y1="0" x2="300" y2="300" stroke-width="1" stroke="black"/>
          </g>
    </g>
   
    <path id="lineJoin"
          d="M 40 170
             L 180 120
             L 120 260
             Z"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
    />    
  </svg>
    
  <p>Valor del atributo <strong>stroke-linejoin</strong></p>
  <select id="strokeLineJoin">
    <option value="miter" selected>miter</option>
    <option value="round">round</option>
    <option value="bevel">bevel</option>
    <option value="miter-clip">miter-clip</option>
  </select>

  <p>Valor del atributo <strong>stroke-miterlimit</strong></p>
  <fieldset>
    <legend>Modificar valor</legend>
      <span>
        <input type="range" id="strokeMiterLimit" min="1.5" max="3.5" step="0.1" value="3.5">
        <output id="displayStrokeMiterLimit">3.5</output>
      </span>
    </fieldset>

</div>  

<script>
  // Definiciones
const selectStrokeLineJoin = document.getElementById("strokeLineJoin");
  const path = document.getElementById("lineJoin");
  const strokeMiterLimit = document.getElementById("strokeMiterLimit");
  const displayStrokeMiterLimit = document.getElementById("displayStrokeMiterLimit");

  // Actualizar stroke-linejoin
  selectStrokeLineJoin.addEventListener("change", () => {
    const strokeLineJoin = selectStrokeLineJoin.value;
    path.setAttribute("stroke-linejoin", strokeLineJoin);         
  });

  // Actualizar stroke-miterlimit
  strokeMiterLimit.addEventListener('input', () => {
    const valueStrokeMiterLimit = strokeMiterLimit.value;
    path.setAttribute("stroke-miterlimit", valueStrokeMiterLimit);  
    displayStrokeMiterLimit.textContent = valueStrokeMiterLimit; // Mostrar valor en fieldset.
});

</script>

</body>
</html>
```

#### 5.2.1.6 Patrones en trazos
-  **Atributo stroke-dasharray**  
Este atributo permite personalizar el estilo de las líneas, añadiendo efectos visuales como líneas discontinuas o punteadas (guiones y espacios para los contornos (trazos) de las formas).  
Para el siguiente ejemplo, se le ha pasado a dasharray los valores 3 y 1 que equivalen a 3 unidades de tamaño trazado y 1 unidad sin trazar.   
```
<body style="text-align: center;">
    <div>
      <svg viewBox="0 0 30 30" height="250" fill="none"  stroke-width="0.25" stroke="blue">
        <path d="M5 3 L25 3 L25 22 L15 18 L5 22 Z" />
        <text x="3" y="27"  font-family="Courier" font-size="3">sin stroke-dasharray</text>
      </svg>
    </div>

    <div>
      <svg viewBox="0 0 30 30" height="250" width="500" fill="none" stroke-width="0.25" stroke="green">
        <path d="M5 3 L25 3 L25 22 L15 18 L5 22 Z" stroke-dasharray="3 1" />
        <text x="15" y="27" font-family="Courier" font-size="3" text-anchor="middle">Con stroke-dash -> 3 1</text>
      </svg>
    </div>
</body>
```

**Nota**
La **unidad de tamaño** de los guiones y espacios se define en las mismas unidades que las utilizadas en `viewBox`. No se especifica en píxeles (px), sino que las longitudes se relacionan directamente con la escala del gráfico.
>**Ejemplo:**  
>Si tenemos `viewBox` = 0 0 30 30 y `stroke-dasharray`= 3 1  
>Tendremos un guion de **3 unidades** de longitud y un espacio de **1 unidad** de longitud.  

-  **Atributo stroke-dashoffset**
Este atributo se puede utilizar conjuntamente con el atributo anterior. Es muy útil para animar los trazos de una figura o forma.
El atributo stroke-dashoffset establece un desplazamiento al principio del trazo, haciendo que el inicio del trazo discontinuo comience el número de píxeles más tarde que se indique.
```
<style>
  svg {
    background: #ece3e3;
  }

  path {
    stroke: black;
    stroke-width: 0.5px;
    fill: none;
  }

  body { 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>

<body> 
    <div>
      <svg viewBox="0 0 30 30" height="250">
        <path d="M5 5 L25 5 L25 25 L15 20 L5 25 Z" stroke-dasharray="3 3" stroke-dashoffset="3">
      </svg>
      
      <fieldset>
        <legend>Propiedad stroke-dashoffset:</legend>
        <input type="range" min="-20" max="20" step="1" value="3">
        <output>1</output>
      </fieldset>
    </div>

<script>
  const paths = document.querySelectorAll("path");
  const input = document.querySelector("input");
  input.addEventListener("input", () => {
    input.nextElementSibling.value = input.value;
    paths.forEach(path => path.setAttribute("stroke-dashoffset", input.value));
  });
</script>

</body>
```

#### 5.2.1.7 Ejercicio
> **Ejercicio**  
>Sobre la base del ejemplo anterior.  
>Realizar un SVG que dibuje 2 circulos que usen el mismo stroke-dasharray.
>   
>**Posible solución:**  
>   
><img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/circulos%20animados.png">

#### 5.2.1.8 Rellenos
-  **Atributo fill**  
  Con `fill` indicamos el color de relleno de la figura que estamos diseñando.
```
<body> 
  
  <div style="display:flex; flex-direction:column; align-items:center;">
    <svg viewBox="0 0 100 100" height="400">
      <path d="M5 5 L5 90 L90 90 Z" stroke="blue" stroke-width="1" fill="red" />
    </svg>
  </div>
      
</body>
```

-  **Atributo fill-opacity**  
  Con `fill-opacity` indicamos el nivel de transparencia del objeto path.
```
<style>
  svg {
    background: #ece3e3;
  }

  path {
    stroke: blue;
    stroke-width: 0.5px;
    fill: red;
  }
  
  div { 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>

<body> 
  
  <div>
    <svg viewBox="0 0 100 100" height="400" width="400">
      <text x="48" y="45"  font-family="CourierBold" font-size="16" text-anchor="middle">fill-opacity</text>
      <path d="M5 5 L5 95 L95 95 L95 5 Z" fill-opacity="1" />
    </svg>
    
    <fieldset style="width: 120px;">
      <legend>Fill opacity</legend>
      <input type="range" min="0" max="1" step="0.01" value="1">
      <output>1</output>
    </fieldset>
  </div>

<script>

  const paths = document.querySelectorAll("path");
  const input = document.querySelector("input");
  
  input.addEventListener("input", () => {
    input.nextElementSibling.value = input.value;
    paths.forEach(path => path.setAttribute("fill-opacity", input.value));  
  });
</script>

</body>
```  

-  **Atributo fill-rule**  
  `fill-rule` establece el algoritmo encargado de determinar qué es relleno y qué no lo es cuando varios paths se superponen.  
  Por defecto, `fill-rule` esta a `nonzero`.  
  >Valores de **fill-rule**:  
  >**nonzero**: El interior de una forma es relleno.  
  >**evenodd**: El interior de una forma es hueco. 
```
<style>
  svg {
    background: #ece3e3;
  }

  path {
    stroke: blue;
    stroke-width: 0.5px;
    fill: red;
  }
  
  div { 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>

<body> 
  
  <div>
    <svg viewBox="0 0 100 100" height="400">
      <path d="M5 5 L5 90 L90 90 M25 75 L75 75 L75 25 L25 25 Z"
            fill="indigo" stroke="black" fill-rule="nonzero" />
    </svg>
    
    <p>Valor de <strong>fill-rule</strong>:</p>
    <select id="fill-rule">
      <option value="0">nonzero</option>
      <option value="1">evenodd</option>
    </select>
  </div>

<script>
  const select = document.querySelector("select");
  const path = document.querySelector("path");
  select.addEventListener("change", () => {
    const selectedOption = select[select.selectedIndex].textContent;
    path.setAttribute("fill-rule", selectedOption);
  });
</script>

</body>  
```
#### 5.2.1.9 Ejercicio
> **Ejercicio**  
>Sobre la base del ejemplo anterior.  
>Realizar un SVG que dibuje 2 elipses concentricas.  
>Cada elipse tendrá una relleno diferente.  
>Comprobar qué ocurre cuando se cambia el valor de `<fill-rule>`
> 
>**Posible solución:**
> 
><img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/elipses%20solapadas.png">
### 5.2.2 Estilos SVG
Aplicar estilos CSS a un SVG es similar a aplicar estilos a cualquier otro elemento HTML. De hecho, en los ejemplos anteiores, ya hemos estado aplicado todo tipo de estilos a los elementos SVG. 

A continuación haremos una breve descripción de ellos.

#### 5.2.2.1 Estilos inline (en línea)
Se aplican directamente a los elementos SVG usando el atributo `style`. Es la forma más directa, pero no la más reutilizable:
```
<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" style="fill: blue; stroke: black; stroke-width: 2;" />
</svg>
```

#### 5.2.2.2 Estilos usando atributos de SVG
Los atributos de SVG son aquellos SVG que pueden aplicarse a los elementos.
```
<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" fill="blue" stroke="black" stroke-width="2" />
</svg>
```

#### 5.2.2.3 Estilos en un archivo CSS externo o interno
Se puede definir un archivo CSS para incluir reglas de estilo utilizando **selectores**, **clases**, e **identificadores (`id`)**. 
```
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle class="blue-circle" cx="100" cy="100" r="50" />
</svg>

<style>
  .blue-circle {
    fill: blue;
    stroke: black;
    stroke-width: 2;
  }
</style>
```

#### 5.2.2.4 Estilos CSS en un archivo SVG independiente
Cuando **el SVG es un archivo independiente**, se puede incluir el bloque de estilos `<style>` directamente en el archivo SVG.

```
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .blue-circle {
      fill: blue;
      stroke: black;
      stroke-width: 2;
    }
  </style>
  <circle class="blue-circle" cx="100" cy="100" r="50" />
</svg>
```

#### 5.2.2.5 Pseudo-clases
Las pseudo-clases `:hover`, `:active`, o `:focus` también se aplican a los elementos SVG. 

```
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle class="interactive-circle" cx="100" cy="100" r="50" />
</svg>

<style>
  .interactive-circle {
    fill: blue;
    stroke: black;
    stroke-width: 2;
    transition: fill 0.3s;
  }

  .interactive-circle:hover {
    fill: red;
  }
</style>
```

#### 5.2.2.6 Estilos aplicados a grupos (elemento `<g>`)
Como hemos visto, se recomienda usar contenedores `<g>` para estructurar nuestro diseño.  

Del mismo que cualquier otra etiqueta HTML, tambien se le puede aplicar estilos a `<g>`.

```
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <g class="group-style">
    <circle cx="50" cy="50" r="40" />
    <rect x="100" y="100" width="50" height="50" />
  </g>
</svg>

<style>
  .group-style {
    fill: blue;
    stroke: black;
    stroke-width: 2;
  }
</style>
```
#### 5.2.2.7 Frameworks y SVGs.
La compatibilidad de los frameworks CSS con `<svg>` varía según la forma en que manejan los estilos, la estructura del DOM y las capacidades de personalización.  

A continuación un breve listado de ellos.

**1. Bootstrap**
- **Compatibilidad**:  
  - Excelente.
- **Características**:
  - Permite el uso de SVG en su sistema de cuadrícula.
  - Incluye utilidades de clase para estilos comunes aplicables a los elementos SVG (Bootstrap Icons).
   
**2. Tailwind CSS**
- **Compatibilidad**:  
  - Buena.
- **Características**:
  - Tailwind CSS permite la personalización completa de los estilos SVG a través de utilidades de clase.
  - **No se puede aplicar clases de Tailwind dentro de los elementos SVG**.
  - Para aplicar clases de estilos de Tailwind a elementos SVG, se deberán encapsular dentro de una etiqueta HTML. 
    
**3. Bulma**
- **Compatibilidad**:  
  - Buena.
- **Características**:
  - Bulma no incluye estilos específicos para SVG, pero se puede aplicar sus clases de contenedores y alineación a elementos SVG.
  
**4. Foundation**
- **Compatibilidad**:  
  - Buena.
- **Características**:
  - Como Bulma y tailwind, Foundation no incluye estilos específicos para SVG.

**5. Materialize CSS**
- **Compatibilidad**:  
  - Buena.
- **Características**:
  - Al igual que otros frameworks, no tiene estilos SVG específicos.
  
**6. Semantic UI**
- **Compatibilidad**:  
  - Buena.
- **Características**:
  - Al igual que otros frameworks, no tiene estilos SVG específicos.
  
**7. UIKit**
- **Compatibilidad**:  
  - Buena.
- **Características**:
  - Al igual que otros frameworks, no tiene estilos SVG específicos.
 
## 5.3 Textos y tipografía en SVG
### 5.3.1 Textos y SVG
Es posible incluir textos en imágenes SVG. Para ello, se puede utilizar la etiqueta <text>.
- Etiqueta `<text>`

textLength	none	Indica una distancia entre carácteres. Usado junto al atributo anterior.

|<img width=100/> Atributo <img width=100/> |<img width=300/> Descripción <img width=300/>| Valor por defecto |
|---|---|---|
| x y  |  Posición en horizontal y vertical del texto respecto al viewBox del elemento.  |  0 |
| dx dy  | Desplazamiento en horizontal y vertical del texto respecto a su posición.  |  none |
| rotate  |Indica una rotación para cada uno de los carácteres del texto (por separado).  |  none | 
| lengthAdjust  |  Indica el tipo de ajuste de carácteres.  | **spacing**: las letras del texto no se reduce llegando a solaparse. **spacingAndGlyphs**: Las letras del texto se reduce evitando el solapamiento.|
| text-anchor | Define cómo se alinea el texto con respecto a las coordenadas x e y.| **start** Alineado al inicio del texto. <img width=220/>**middle** Centrado en el texto.<img width=280/> **end** Alineado al final del texto.| 
|dominant-baseline | Controla la alineación vertical del texto.|  **middle**: Centrado verticalmente.<img width=250/> **hanging**: Alineado por el borde superior del texto. <img width=100/>**alphabetic**: Alineado por el borde inferior del texto.|      


- **Ejemplo**
```
  <svg width="300" height="300" viewBox="0,0,300,300" xmlns="http://www.w3.org/2000/svg">
    <text x="50" y="50">Texto en SVG</text>
    <line x1="50" y1="50"
          x2="150" y2="50"
          stroke="black"
          stroke-width="0.5"/>

    <text x="50" y="70" 
          dx="10" dy="-5">Desplazando texto con dx y dy</text>
    <line x1="50" y1="70"
          x2="150"y2="70"
          stroke="black"
          stroke-width="0.5"/>

    <text x="50" y="90" 
          rotate="30">Rotación en SVG</text>
    <line x1="50" y1="90"
          x2="150"y2="90"
          stroke="black"
          stroke-width="0.5"/>

    <text x="50" y="130" 
          transform="rotate(-5)">Rotación con CSS</text>
    <line x1="50" y1="130"
          x2="150"y2="130"
          stroke="black"
          stroke-width="0.5"/>         
  </svg>
```

- Ajuste de texto.  
  El atributo `textLength` establece el largo de un texto y así pues, su grado de compactación y expansión de cada caracter.  
  El atributo `lengthAdjust` permite indicar si se quiere que los carácteres se solapen o no con los valores `spacing`y `spacingAndGlyphs`.  

**Ejemplo**
```
<style>
  .subtitle {
    font-family: EnterCommand;
    font-size: 15px;
    font-weight: 600;
    fill: indigo;
  }

  select {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
</style>

<body>
  <p>Valor de textLength:
    <input class="tl" type="range" min="0" max="250" value="0">
    <output>0</output>
  </p>

  <p>Valor de <code>lengthAdjust</code>:</p>
  <select class="la">
    <option>spacing</option>
    <option>spacingAndGlyphs</option>
  </select>
      
  <svg viewBox="0 0 300 100" height="300">
    <text class="subtitle" x="35" y="55">Texto que se expande y comprime</text>
  </svg>
</body>

<script>
  const tl = document.querySelector(".tl");
  const la = document.querySelector(".la");
  const subtitle = document.querySelector(".subtitle");

  tl.addEventListener("input", () => {
    subtitle.setAttribute("textLength", tl.value);
    tl.nextElementSibling.value = tl.value;
  });

  la.addEventListener("change", () => subtitle.setAttribute("lengthAdjust", la.value));
</script>
```

- **Etiqueta** `<tspan>`  
  La etiqueta `<tspan>`es similar a la etiqueta `<span>`. Tiene los mismos atributos que `<text>` y modificar estilos localmente.
  - **Ejemplo**
```
<style>
  .subtitle {
    font-family: EnterCommand;
    font-size: 15px;
    font-weight: 600;
    fill: green;
  }
</style>

<body>
  <svg viewBox="0 0 500 100" width="500">
    <text class="subtitle" x="35" y="55">
      Ejemplo de
      <tspan fill="blue">añadir estilos localmente dentro</tspan>
      de una etiqueta 
      <tspan fill="black">text</tspan>
    </text>
  </svg>  
</body> 
```

### 5.3.2 Estilos de textos y SVG
Al igual que cualquier etiqueta HTML, SVG también admite atributos de estilos mediante CSS para modificar textos.

| Atributo CSS | Descripción            | Valor por defecto |
|------|----------------------------------------------|-----------------------------------|
| font-family  | Familia de fuentes que se utilizará.  |  - | 
| font-size| Tamaño de la fuente. |  medium |
| font-size-adjust  | Ajuste del texto. |  none |
| font-stretch	| Grado de compactación del texto. | normal	|
| font-style	| normal, cursiva...	|normal |	
| font-variant | Controla la variante de la fuente (normal, small-caps). | normal |
| font-weight	| Grosor de la fuente. | normal	|
| text-decoration | Decoraciones del texto (none, underline, overline o line-through).| none |
| fill | Color del texto. | black |
| fill-opacity | Opacidad del color de relleno del texto. | 1 |
| stroke | Color del contorno del texto. | black |
| stroke-width | Ancho del contorno del texto. | 0 |
| stroke-opacity | Opacidad del color del contorno del texto. | 0 |



```
<style>
  body {
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;    
  }

  #estilo1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    fill: blue;
    font-style: italic;
    font-stretch: expanded;
  }

  .estilo2 {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 24px;
    fill:blueviolet;
    text-decoration: underline;
  }
</style>

<body>
  <div>
    <svg viewBox="0 0 500 150" width="500">
      <text id="estilo1" x="35" y="55">
        Modificador de estilos 1 
      </text>

      <text class="estilo2" x="35" y="90">
        Modificar de estilos 2 
      </text>
    
      <text style="font-size:40px" fill="red" x="35" y="135">
        Modificar de estilos 3 
      </text>
    </svg>  
  </div>   
</body>
```

### 5.3.3 Path sobre textos  
La etiqueta `<textPath>`permite pintar un texto siguiendo un elemento `<path>`.   
**Ejemplo:**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estilos CSS en textos de SVG</title>
</head>

<style>
  body {
    display: flex;
    justify-content: center; 
    align-items: center;     
    background-color: #f4f4f4;
    margin: 100px;    
  }

  text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    fill: blue;
    font-style: italic;         
  }

  svg {
    background-color:bisque;
    display: flex;
    justify-content: center;
  }
</style>

<body>
  
  <div>
    <svg viewBox="-10 -10 520 320" width="1000" height="600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <symbol id="curvedPath">
          <path id="miPath" d="M 40 180 Q 150 50, 330 150 T 350 0" fill="transparent" stroke="green" stroke-width="0.5" />
        </symbol>
      </defs>

      <use href="#curvedPath" fill="none" stroke="#59fa81" />

      <text lengthAdjust="spacingAndGlyphs" textLength="600">
        <textPath href="#miPath">Texto siguiendo un path en forma de curva de bezier</textPath>
      </text>
    </svg>
  </div>

</body>
</html>
```

## 5.4 Buenas prácticas y simplificación del código (2)
Como acabamos de ver en el ejemplo anterior, se han utilizado 3 elementos nuevos: `<defs>` `<symbol>` y `<use>` así como el identificador `id`.  

- **Elemento** `<defs>`  
  El elemento `<defs>` se utiliza para **almacenar objetos gráficos** que se utilizarán más adelante. Para mostrarlos hay que hacer referencia a ellos con un elemento <use>.  

- **Elemento** `<symbol>`  
  El elemento `<symbol>` se utiliza para **definir objetos de plantilla gráfica reutilizables** que pueden ser instanciados por un elemento <use>.  

- **Identificador** `id`  
  Permite identificar un elemento para reutilizarlo posteriormente con `<use>`. Para instanciarlo se puede utilizar `href="..."`.
     
- **Elemento** `<use>`  
  Permite reutilizar símbolos o grupos que hayan sido definidos previamente. Tiene varios atributos que se pueden utilizar para personalizar la plantilla y/o cambiar su representación.

## 5.5 Animaciones
Animar SVGs tiene varias ventajas: mejora la experiencia del usuario al hacer las interfaces visualmente más atractivas e interactivas, facilita la transmisión de información (como en gráficos o indicadores), y añade personalidad a elementos visuales de manera dinámica y fluida.  
Estas animaciones se pueden definir mediante **etiquetas SMIL** (Synchronized Multimedia Integration Language) dentro del SVG, usando **propiedades de CSS** o con **scripts de JavaScript**.  

<a href="https://www.tutorialspoint.com/svg/src/loaders/index.html">**Ejemplos de animaciones.**</a>  

<a href="https://svg-tutorial.com/">**Tutoriales y ejemplos.**</a>

Toda la información sobre animaciones <a href="https://www.w3.org/TR/SVG11/animate.html">**aquí**</a>.

### 5.5.1 Animaciones con etiquetas SMIL. 
[SMIL Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/)"

SMIL (Synchronized Multimedia Integration Language) es un lenguaje basado en XML que permite definir animaciones y sincronización multimedia en archivos SVG.
En el contexto de SVG, SMIL se usa a través de etiquetas, permitiendo animar atributos de los elementos SVG, sin necesidad de JavaScript.  
Aunque SMIL tiene un soporte limitado en algunos navegadores, sigue siendo una opción poderosa para animaciones básicas en gráficos vectoriales.

#### 5.5.1.1 Etiqueta `<set>`  
La etiqueta <set> permite cambiar el valor de un atributo de un elemento SVG en un momento determinado sin una transición progresiva.    
Básicamente, actúa como un interruptor que establece un nuevo valor para un atributo durante un tiempo específico.  
Más información <a href="https://www.w3.org/TR/SVG11/animate.html#SetElement">**aquí**</a>  
- **Principales atributos de la etiqueta** `<set>`.
     - **attributeType** (opcional): Especifica el tipo de atributo que se usará para realizar la animación (CSS, XML, auto).   
     - **attributeName** (obligatorio): Nombre del atributo que se desea cambiar.  
     - **to** (obligatorio): Valor al que se cambiará el atributo durante la animación.
     - **begin** (opcional): Momento en que se inicia la animación (se definie en segundos o por un evento).
     - **dur** (opcional): Duración durante la cual el atributo se mantendrá en el valor especificado en `to`.
     - **end** (opcional): Especifica cuándo debe finalizar la animación. Útil cuando no se define `dur`.
     - **repeatCount** (opcional): Número de repeticiones de la animación (1, 2, 3, ... `"indefinite"`).
     - **repeatDur** (opcional): Tiempo total de la duración de todas las repeticiones de la animación (s). Al alcanzar esta duración, la animación se detiene, independientemente de `repeatCount`.
     - **fill** (opcional): Define cómo se comporta la animación antes de comenzar y después de finalizar. Sus valores pueden ser:
        - `"remove"`: elimina el efecto después de la animación.
        - `"freeze"`: mantiene el valor de `to` después de que la animación termina.
     - **id** (opcional): Identificador único para la animación, **permitiendo que otras animaciones o scripts la instancien**.
     - **xlink:href** (opcional): Apunta a un elemento específico dentro del SVG al que se aplicará la animación, útil cuando `<set>` se encuentra fuera del elemento que se quiere animar.

**Ejemplo:**
```
<svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" style="fill:red;">
    <set attributeName="cx" to="200" begin="2s" />
</svg>
```  

#### 5.5.1.2 Ejercicio 
>**Ejercicio**
>Realizar un programa con la etiqueta `<set>`que haga lo siguiente.  
>1. Circulo (disco) de color rojo, r=25, cx=50, cy=50.  
>2. A los 2 segundos el disco se desplazará 150 unidades de viewGrid según el eje x, y cambiará a color verde.   
>3. A los 4 segundos el disco se desplazará 150 unidades de viewGrid según el eje y, y cambiará a color azul.  
>4. A los 6 segundos el disco se desplazará **-150 unidades** de viewGrid **según el eje x**, y cambiará a color amarillo.  
>5. A los 8 segundos el disco se desplazará **-150 unidades** de viewGrid **según el eje y**, y cambiará a color rojo.  
  
#### 5.5.1.3 Etiqueta `<animate>`  
La principal diferencia con respeto a `<set>` es que `<animate >` permite **modificar atributos a lo largo del tiempo**.  
Más información <a href="https://www.w3.org/TR/SVG11/animate.html#AnimateElement">**aquí**</a>  
- **Principales atributos de la etiqueta** `<animate>`.  
     - **attributeType** (opcional): Especifica el tipo de atributo que se usará para realizar la animación (CSS, XML, auto). 
     - **attributeName** (obligatorio): Nombre del atributo que se desea cambiar.   
     - **from** (opcional): Valor inicial del atributo antes de que comience la animación.
     - **to** (opcional): Valor final del atributo al final de la animación.
     - **by** (opcional): Valor que se sumará al valor inicial para establecer el valor final de la animación.
     - **values** (opcional): Lista de valores (separados por punto y coma `;`) que el atributo adoptará durante la animación, creando una secuencia de valores.
     - **begin** (opcional): Momento en que se inicia la animación (se define en **una lista de tiempos** o por un evento).
     - **dur** (opcional): Duración de la animación (en `"s"` o `"indefinite"` para animaciones sin fin.
     - **end** (opcional): Especifica cuándo debe finalizar la animación. Útil cuando no se define `dur`.
     - **repeatCount** (opcional): Número de repeticiones de la animación (1, 2, 3, ... `"indefinite"`).     - 
     - **repeatDur** (opcional): Tiempo total de la duración de todas las repeticiones de la animación (s).     - 
     - **fill** (opcional): Define cómo se comporta la animación antes de comenzar y después de finalizar. Sus valores pueden ser:
        - `"remove"`: elimina el efecto después de la animación.
        - `"freeze"`: mantiene el valor de `to` después de que la animación termina.
     - **keySplines** (opcional): Define la curva de interpolación para animaciones de tipo `keyTimes`, usando valores en el formato de función de Bezier cúbica.
     - **keyTimes** (opcional): Lista de tiempos normales entre `0` y `1`, separados por punto y coma (`;`), que determinan en qué momento debe alcanzarse cada valor de `values`.
     - **calcMode** (opcional): Define el método de interpolación entre valores de la animación. Puede ser:
       - `"discrete"`: cambio instantáneo entre valores.
       - `"linear"`: interpolación lineal entre valores.
       - `"paced"`: interpolación basada en la distancia, creando un ritmo constante.
       - `"spline"`: interpolación basada en los valores de `keySplines`.
     - **additive** (opcional): Determina si la animación debe sumarse al valor inicial (`"sum"`) o reemplazarlo (`"replace"`).
     - **accumulate** (opcional): Define si los valores de animación deben acumularse en cada repetición (`"sum"`) o no (`"none"`).
     - **id** (opcional): Identificador único para la animación, **permitiendo que otras animaciones o scripts la instancien**.
     - **xlink:href** (opcional): Apunta a un elemento específico dentro del SVG al que se aplicará la animación, útil cuando `<animate>` se encuentra fuera del elemento que se quiere animar.

**Ejemplo:**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animate</title>
</head>
<body>
  <div style="font-family: Arial, Helvetica, sans-serif; font-size: 20; color: black; margin-bottom: 20px; text-decoration: underline;">Etiqueta animate</div>
  <svg width="300" height="250" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250">
    <title>Animación</title>

    <line x1="0" y1="0" x2="0" y2="120" stroke="#aa5050" stroke-width="60" />

    <circle cx="52" cy="30" r="20" stroke="black" stroke-width="4" fill="none"> 
      <animate 
        attributeType="XML"
        id="bolaDerecha"
        attributeName="cx"
        from="52" 
        to="213"
        dur="9s"
        begin="0s"
        repeatCount="2"
        values="52;80;190;213;"
        fill="freeze"
        calcMode="linear" 
        end="18"

      />
      <!-- to y values -> values se sobrepone a los valores de from y -->
      <!-- fill  -> de freeze a remove -->
      <!-- calcMode  -> de discrete a paced -->
      <!-- end  -> de 18 a 10 -->
  
    </circle>

    <rect x="235" y="0" width="10" height="120" fill="#347350" />        

    <circle cx="80" cy="30" r="2" stroke="blue" stroke-width="4" fill="none"/>
    <circle cx="190" cy="30" r="2" stroke="blue" stroke-width="4" fill="none"/>
    
    <!-- Visualizar tiempo transcurrido -->
    <text x="10" y="180" font-family="Arial" font-size="20" fill="black" >Tiempo trancurrido:</text>
    <text x="10" y="200" font-family="Arial" font-size="20" fill="black" id="timeDisplay">0.0s</text>
      
  </svg>

  <script>
    let seconds = 0; 
    const display = document.getElementById('timeDisplay');

    function updateTime() {
      seconds += 0.1; 
      display.textContent = seconds.toFixed(1) + "s";
        if (seconds < 18) {
          setTimeout(updateTime, 100); // Llama a updateTime cada 100 ms
        }
    }

    updateTime();
  </script>

</body>
</html>
```
#### 5.5.1.4 Ejercicio 
>**Ejercicio**  
>Modificar el programa anterior para que el anillo vaya de izquierda a derecha y de derecha a izquierda.  
>Modificar el programa anterior para que el anillo vaya de izquierda a derecha y de derecha a izquierda **2 veces**.  
>Modificar el programa anterior para que el anillo vaya de izquierda a derecha y de derecha a izquierda **sin parar**.  
>Modificar el programa anterior para que el anillo vaya de izquierda a derecha y de derecha a izquierda **5 veces**.  
>Modificar el programa anterior para que el tiempo que el anillo vaya de izquierda a derecha sea **4 veces** el tiempo que el anillo vaya de de derecha a izquierda.  
>Modificar el programa anterior para que los topes izquierdo y derecho cambien de color al impactar el anillo contra ellos.  
>   

#### 5.5.1.5 Etiqueta `<animateTransform>`  
La etiqueta `<animateTransform>` permite **animar transformaciones** como traslaciones, rotaciones, escalas e inclinaciones.  
A diferencia de la etiqueta `<animate>`, que solo puede animar **atributos individuales**, `<animateTransform>` permite transformaciones complejas en el tiempo. 
Más información <a href="https://www.w3.org/TR/SVG11/animate.html#AnimateTransformElement">**aquí**</a> 
- **Principales atributos de la etiqueta** `<animateTransform>`.  
     - **attributeType** (opcional): Especifica el tipo de atributo que se usará para realizar la animación (CSS, XML, auto).   
     - **attributeName** (obligatorio): Nombre del atributo que se desea cambiar.    
     - **type** (obligatorio): Tipo de transformación a aplicar. Los posibles valores son:  
        - `"translate"`: Mueve el elemento en el eje X e Y.  
        - `"rotate"`: Rota el elemento alrededor de un punto.  
        - `"scale"`: Escala el elemento en los ejes X e Y.  
        - `"skewX"`: Aplica una inclinación en el eje X.  
        - `"skewY"`: Aplica una inclinación en el eje Y.          
     - **from** (opcional): Valor inicial del atributo antes de que comience la animación.
     - **to** (opcional): Valor final del atributo al final de la animación.     
     - **by** (opcional): Valor que se sumará al valor inicial para establecer el valor final de la animación.
     - **values** (opcional): Lista de valores (separados por punto y coma `;`) que el atributo adoptará durante la animación, creando una secuencia de valores.
     - **begin** (opcional): Momento en que se inicia la animación (se define en **una lista de tiempos** o por un evento).     
     - **dur** (opcional): Duración de la animación (en `"s"` o `"indefinite"` para animaciones sin fin.     
     - **end** (opcional): Especifica cuándo debe finalizar la animación. Útil cuando no se define `dur`.     
     - **repeatCount** (opcional): Número de repeticiones de la animación (1, 2, 3, ... `"indefinite"`).     
     - **repeatDur** (opcional): Tiempo total de la duración de todas las repeticiones de la animación (s).     
     - **fill** (opcional): Define cómo se comporta la animación antes de comenzar y después de finalizar. Sus valores pueden ser:
        - `"remove"`: elimina el efecto después de la animación.
        - `"freeze"`: mantiene el valor de `to` después de que la animación termina.                  
     - **keySplines** (opcional): Define la curva de interpolación para animaciones de tipo `keyTimes`, usando valores en el formato de función de Bezier cúbica.
     - **keyTimes** (opcional): Lista de tiempos normales entre `0` y `1`, separados por punto y coma (`;`), que determinan en qué momento debe alcanzarse cada valor de `values`.
     - **calcMode** (opcional): Define el método de interpolación entre valores de la animación. Puede ser:
       - `"discrete"`: cambio instantáneo entre valores.
       - `"linear"`: interpolación lineal entre valores.
       - `"paced"`: interpolación basada en la distancia, creando un ritmo constante.
       - `"spline"`: interpolación basada en los valores de `keySplines`.
     - **additive** (opcional): Determina si la animación debe sumarse al valor inicial (`"sum"`) o reemplazarlo (`"replace"`).
     - **accumulate** (opcional): Define si los valores de animación deben acumularse en cada repetición (`"sum"`) o no (`"none"`).
     - **id** (opcional): Identificador único para la animación, **permitiendo que otras animaciones o scripts la instancien**.
     - **xlink:href** se usa para apuntar a un elemento específico y aplica solo cuando el <animateTransform> está fuera del elemento a animar.
     -  **xmlns:xlink**="http://www.w3.org/1999/xlink" define el espacio de nombres en el SVG.

**Ejemplo**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animate6</title>
</head>
<body>
  <div style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; color: black; margin-bottom: 20px; text-decoration: underline;">Etiqueta animate</div>
  <svg width="300" height="250" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250">
    <title>Animación</title>

    <line x1="0" y1="0" x2="0" y2="120" stroke="#aa5050" stroke-width="60"> 
      <animate 
        attributeType="XML"
        attributeName="stroke"
        values="#aa5050;#347350;#aa5050" 
        begin="0s; bolaDerecha.end"      
        dur="8s"
        keyTimes="0; 0.5; 1"
        repeatCount="5" 
        calcMode="linear"                
      />
    </line>


    <circle cx="52" cy="30" r="20" stroke="black" stroke-width="4" fill="none"> 
      <animate 
        attributeType="XML"
        id="bolaDerecha"
        attributeName="cx"
        from="52" 
        to="213"
        dur="4s"
        begin="0.0s; bolaIzquierda.end"          
      />   
      <animate 
        attributeType="XML"
        id="bolaIzquierda"
        attributeName="cx"
        from="213" 
        to="52"
        dur="4s"
        begin="bolaDerecha.end"      
      />  
    </circle>

    <rect x="235" y="0" width="10" height="120" fill="#347350">
      <animate 
        attributeType="XML"
        attributeName="fill"
        values="#347350;#aa5050;#347350" 
        begin="0; bolaDerecha.end;"      
        dur="8s"
        keyTimes="0; 0.5; 1"
        repeatCount="5" 
        calcMode="linear"                
      />        
      
      <animateTransform 
        attributeType="XML"
        attributeName="transform"
        type="rotate"
        from="0 240 60" 
        to="180 240 60" 
        begin="bolaDerecha.end"      
        dur="2.5s"
        repeatCount="2" 
        fill="freeze"                
      />
    </rect>             
  </svg>
</body>
</html>
```

#### 5.5.1.6 Ejercicio 
>**Ejercicio**  
>Modificar el programa anterior para que al impactar el anillo contra la línea izquierda esta última se escale ligeramente para dar una sensación de impacto. Realizar la animación de tal modo que la linea vuelva a su tamaño normal transcurrido un tiempo que consideréis adecuado.  
>Además del efecto de impacto añadir un efecto de desplazamiento hacia la izquierda. En este caso la barra vertical también deberá volver a su posición original.

#### 5.5.1.7 Etiqueta `<animateMotion>`
La etiqueta `<animateMotion>` permite animar un elemento **a lo largo de un camino definido**.  
Más información <a href="https://www.w3.org/TR/SVG11/animate.html#AnimateMotionElement">**aquí**</a> 

- **Principales atributos de la etiqueta** `<animateMotion>`  
     - **path** (opcional): Define el recorrido o trayectoria que seguirá el elemento durante la animación. La trayectoria se define mediante una secuencia de coordenadas y comandos de dibujo en formato de la propiedad `d`.  
     - **keyPoints** (opcional): Lista de valores separados por punto y coma (`;`) entre `0` y `1` que representa los puntos específicos de la trayectoria a alcanzar a lo largo de la animación.
     - **keyTimes** (opcional): Lista de tiempos normales entre `0` y `1`, separados por punto y coma (`;`), que determinan en qué momento debe alcanzarse cada valor de `values`.  
     - **values** (opcional): Lista de valores (separados por punto y coma `;`) que el atributo adoptará durante la animación, creando una secuencia de valores. 
     - **rotate** (opcional): Define la rotación del elemento a lo largo del camino. Los valores posibles son:  
        - `"auto"`: rota el elemento según la dirección del camino.  
        - `"auto-reverse"`: rota el elemento en dirección inversa al camino.  
        - `"none"`: ninguna rotación.     
     - **from** (opcional): Valor inicial del atributo antes de que comience la animación en caso de no usar `path`.  
     - **to** (opcional): Valor final del atributo al final de la animación en caso de no usar `path`.     
     - **by** (opcional): Valor que se sumará al valor inicial para establecer el valor final de la animación.   
     - **begin** (opcional): Momento en que se inicia la animación (se define en **una lista de tiempos** o por un evento).     
     - **dur** (opcional): Duración de la animación (en `"s"` o `"indefinite"` para animaciones sin fin.     
     - **end** (opcional): Especifica cuándo debe finalizar la animación. Útil cuando no se define `dur`.     
     - **repeatCount** (opcional): Número de repeticiones de la animación (1, 2, 3, ... `"indefinite"`).     
     - **repeatDur** (opcional): Tiempo total de la duración de todas las repeticiones de la animación (s).     
     - **fill** (opcional): Define cómo se comporta la animación antes de comenzar y después de finalizar. Sus valores pueden ser:  
        - `"remove"`: elimina el efecto después de la animación.  
        - `"freeze"`: mantiene el valor de `to` después de que la animación termina.                   
     - **keySplines** (opcional): Define la curva de interpolación para animaciones de tipo `keyTimes`, usando valores en el formato de función de Bezier cúbica.  
     - **calcMode** (opcional): Define el método de interpolación entre valores de la animación. Puede ser:  
       - `"discrete"`: cambio instantáneo entre valores.  
       - `"linear"`: interpolación lineal entre valores.  
       - `"paced"`: interpolación basada en la distancia, creando un ritmo constante.  
       - `"spline"`: interpolación basada en los valores de `keySplines`.  
     - **additive** (opcional): Determina si la animación debe sumarse al valor inicial (`"sum"`) o reemplazarlo (`"replace"`).  
     - **accumulate** (opcional): Define si los valores de animación deben acumularse en cada repetición (`"sum"`) o no (`"none"`).  
     - **id** (opcional): Identificador único para la animación, **permitiendo que otras animaciones o scripts la instancien**.  
     - **xlink:href** se usa para apuntar a un elemento específico y aplica solo cuando el <animateTransform> está fuera del elemento a animar.  
     - **xmlns:xlink**="http://www.w3.org/1999/xlink" define el espacio de nombres en el SVG.  

**Ejemplo**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animate6</title>
</head>

<style>
  svg {
    background-color: antiquewhite;
    margin: 5px 5px 5px 15px;
    padding: 40px 40px 40px 40px;
  }

  text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    font-weight: bold;
    fill: blueviolet;
    text-anchor: middle; /*admite text-anchor pero no dominant-baseline*/ 
    stroke: none;     
  }

</style>

<body>
  <div style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; color: rgb(28, 24, 211); margin-bottom: 20px; text-decoration: underline;">Etiqueta animateMotion</div>
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="160 110 520 400">
      <title>AnimateMotion</title>
      <path d="M 230 230 Q 410 50 590 230 Q 650 310 590 390 Q 410 570 230 390 Q 170 310 230 230" stroke="#FF0000" stroke-width="0.5" fill="none"/>
      <text dominant-baseline="middle">animateMotion
        <animateMotion
          path="M 230 230 Q 410 50 590 230 Q 650 310 590 390 Q 410 570 230 390 Q 150 310 230 230"
          begin="0s"
          dur="10s"
          repeatCount="indefinite" 
        />
      </text>                  
    </svg>
</body>
</html>
```

**Modificacion del ejemplo anterior**
Incorporación de los atributos `rotate`, `keyTimes`,`keyPoints`,`fill` y `end`.
```
<animateMotion
  path="M 230 230 Q 410 50 590 230 Q 650 310 590 390 Q 410 570 230 390 Q 170 310 230 230"
  begin="3s"
  dur="10s"
  end="25"
  repeatCount="3"
  fill="freeze" 
  keyPoints="0; 0.5; 1"
  keyTimes="0; 0.25; 1"
  rotate="none" 
/>
```

#### 5.5.1.8 Buenas prácticas de programación (3)
El punto de partida será <a href="https://svg-tutorial.com/svg/css-animation">**este ejemplo**</a>.  
En el código de aquí abajo vemos como usando la etiqueta `<defs>` definimos los diferentes objetos gráficos que renderizaremos más adelante, según los vayamos necesitando.
También se usa la etiqueta `<use>` y el identificador `id` para renderizar los objetos gráficos definidos anteriormente.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BPP</title>
    <link rel="icon" type="image/svg+xml" href="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg">
</head>

<style>
  svg {
    background-color: antiquewhite;
    margin: 10px 10px 10px 10px;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: rgb(34, 32, 32);
    margin-bottom: 10px;
    text-decoration: underline;    
  }
  
  #pala {
    fill: #A18D8D;
    opacity: 0.5;
  }

  #eje,  
  #soporte {
    fill: #dab1b1;
    opacity: 0.5;
  }
  
</style>

<body>
  <div>Buenas prácticas de programación</div>
  <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 200 200">
    <defs>      
      <path id="pala"  d="M -1 -80 
                          C -1 -81 1 -81 1 -80 
                          L  1 -80 Q  2 -62  3 -39 
                          C  3 -36 -3 -36 -3 -39 
                          Q -2 -62 -1 -80
                          Z"/>     
      
      <circle id="eje" cx="0" cy="-32" r="3"/>        
      
      <path id="soporte"  d="M -2 -27
                             L -5 50
                             h 10
                             L 2 -27
                             Z"/>           
    </defs>
    
    <use xlink:href="#pala">
      <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 0 -32"
                        to="360 0 -32"
                        dur="5s"
                        repeatCount="indefinite"
      />
    </use>
  
    <use xlink:href="#pala">
      <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="120 0 -32"
                        to="480 0 -32"
                        dur="5s"
                        repeatCount="indefinite"
      />
    </use>

    <use xlink:href="#pala">
      <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-120 0 -32"
                        to="240 0 -32"
                        dur="5s"
                        repeatCount="indefinite"
      />
    </use>

    <use xlink:href="#eje"/>
    <use xlink:href="#soporte"/>
  </svg>
</body>
</html>
```

#### 5.5.1.9 Ejercicio
>Ejercicio de anillo menguante  
>Modificar el siguiente programa para que el anillo mengue y se alargue a lo largo del tiempo.  
<a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/mpeg/anilloMenguante.mp4">animación</a>
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anillo menguante</title>
    <link rel="icon" type="image/svg+xml" href="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg">
</head>

<style>
  svg {
    background-color: black;
  }

</style>
<body>

  <svg width="380" height="380" viewBox="-20 -20 40 40" xmlns="http://www.w3.org/2000/svg">
    <circle id="spinner" cx="0" cy="0" r="16" stroke-width="3" stroke-linecap="round" stroke="antiquewhite">          
    </circle>    
  </svg>

</body>
</html>
``` 


### 5.5.2 Ejemplos de animaciones  
Ejemplo muy básico de una animación de carga:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anillo loading</title>
    <link rel="icon" type="image/svg+xml" href="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg">
</head>

<style>
  svg {
    background-color: black;
  }

</style>
<body>
  <svg width="380" height="380" viewBox="-20 -20 40 40" xmlns="http://www.w3.org/2000/svg">
    <g >
      <path d="M 0 -14 A 1 1 0 0 0 0 -12 M 0 12 A 1 1 0 0 0 0 -12 M 0 12 A 1 1 0 0 0 0 14 A 1 1 0 0 0 0 -14" stroke-width=2 stroke="#fff">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 0 0"
          to="360 0 0"
          dur="1.3s"
          repeatCount="indefinite" />
      </path>
    </g>
    <g>
      <path d="M 0 -14 A 1 1 0 0 0 0 -12 M 0 12 A 1 1 0 0 0 0 -12 M 0 12 A 1 1 0 0 0 0 14 A 1 1 0 0 0 0 -14" stroke-width=2 stroke="#fff" >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 0 0"
          to="360 0 0"
          dur="1.0s"
          repeatCount="indefinite" />
      </path>
    </g>
  </svg>

</body>
</html>
```  

Animación de carga de windows 11:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anillo WIN 11</title>
    <link rel="icon" type="image/svg+xml" href="https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg">
</head>

<style>
  svg {
    background-color: black;
    width: 380px;
    height: 380px;    
  }

  circle {
    stroke-width: 3;
    stroke-linecap: round;
    fill: none;
    stroke: antiquewhite;
    padding: 3px;
  }
   
</style>

<body>
  <svg viewBox="-20 -20 40 40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="16">    
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        values="0;810" 
        keyTimes="0;1" 
        dur="3s" 
        repeatCount="indefinite">
      </animateTransform>    
  
      <animate 
        attributeName="stroke-dasharray" 
        values="0 100;100 100;0 100" 
        calcMode="linear" 
        keyTimes="0;0.5;1" 
        dur="3s" 
        repeatCount="indefinite">
      </animate>    
    
      <animate 
        attributeName="stroke-dashoffset" 
        values="0;0;-80" 
        calcMode="linear"
        keyTimes="0;0.50;1" 
        dur="3s" 
        repeatCount="indefinite">
      </animate>    
    </circle>
  </svg>

</body>
</html>
```



## 5.5 Creación de imágenes SVG con editores de imágenes.
Existen numerosos editores de imagenes que permiten guardar los archivos en formato *.svg .  
En nuestro caso usaremos **Inkscape** al ser uno de los más populares y completos, además de gratuito.  


<a href="https://inkscape.org/release/inkscape-1.4/windows/64-bit/msi/?redirected=1" target="_blank">
  <img src="https://media.inkscape.org/static/images/inkscape-logo.svg" alt="click para instalar">
</a>

### 5.5.1 Tarea 4 - RA3-CEd  
1 - Con la ayuda del programa de edición de imágenes Inkscape realizar el siguiente icono:  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/img/loaderBasic.png" width=15%/> 

2 - Animar el icono <a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/mpeg/loadingBasic.mp4">de la siguiente manera</a>


### 5.5.2 Tarea 5 - RA3-CEf  
1 - Realizar la siguiente <a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/mpeg/loadingVintage.mp4">animación</a>

## 5.6 Creación de animaciones SVG con editores.
### 5.6.1 Introducción
La creación de SVGs animados con editores permite a los desarrolladores y diseñadores web enriquecer sus proyectos con elementos visuales interactivos y dinámicos.  
Al igual que para la edición de imágenes y posterior guardado en formato SVG, existen numerosas propuestas, tanto gratuitas como comerciales para la edición y animación de imágenes svg.

**Adobe Illustrator**
   - Aunque tradicionalmente conocido como un editor de gráficos vectoriales, ofrece integraciones y plugins que ayudan a animar SVGs directamente o exportar elementos para su animación en otras herramientas.

**Inkscape**
   - Una herramienta de código abierto y gratuita que permite la creación y edición de gráficos SVG. Inkscape tiene capacidades para crear animaciones sencillas.

**SVGator**
   - Una de las herramientas más populares para animar SVGs de manera sencilla y sin necesidad de código. SVGator permite a los usuarios crear animaciones complejas directamente en su interfaz de arrastrar y soltar, generando un archivo SVG animado listo para usar.

**Lottie y Bodymovin'**
   - Lottie es una librería de animación que utiliza el plugin Bodymovin' para exportar animaciones creadas en Adobe After Effects como archivos JSON.
     
**Snap.svg**
   - Una biblioteca de JavaScript diseñada específicamente para trabajar con SVGs, es ideal para desarrolladores que quieran tener un control completo sobre las animaciones (mediante código).

**GSAP (GreenSock Animation Platform)**
   - GSAP permite crear animaciones fluidas y de alto rendimiento y ofrece gran flexibilidad con una sintaxis simple.Es una opción popular entre desarrolladores que buscan más control y capacidades avanzadas.

**Animatron Studio**
   - Una herramienta en línea que permite crear animaciones HTML5 y SVG de forma interactiva. 

**Keyshape**
   - Es una herramienta de pago, pero tiene una interfaz intuitiva y funciones avanzadas de animación, como interpolación de formas y movimiento fluido.

**Figma**
   - Aunque es más conocido como un editor de interfaces y prototipos, Figma soporta la exportación de gráficos SVG que pueden ser animados posteriormente.

### 5.6.2 Figma
<a href="https://www.figma.com">**Enlace a la web de Figma**</a>  
<a href="https://www.figma.com/proto/b1iAjgZ2VZe7Cwij22e0Je/spinnerBasic?node-id=15-83&t=W4maEf2eZjsFUV6R-1">**Ejemplo de spinner**</a>
### 5.6.3 SVGator
<a href="https://app.svgator.com/">**Enlace a la web de SVGator**</a>  
<a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%204/mpeg/spinner%20win11.mp4">**Ejemplo de spinner**</a>

