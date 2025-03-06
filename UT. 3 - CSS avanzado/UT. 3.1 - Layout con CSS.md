---
Título: UD. 5.3 - CSS3 avanzado: Modelo de cajas y Maquetación (layout)
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

# 1. Introducción
En el desarrollo web, la **maquetación** permite diseñar y estructurar interfaces atractivas y funcionales.  
Existen diversas técnicas para distribuir los elementos en una página web, entre las más utilizadas destacan:

- **Modelo de cajas**: Todos los elementos en HTML se representan como cajas rectangulares.
- **Posicionamiento con CSS**: Se pueden emplear valores como `static`, `relative`, `absolute`, `fixed` y `sticky` para definir cómo se ubican los elementos respecto a su contenedor o a la ventana del navegador.
- **Flexbox**: Es un sistema de diseño flexible que permite distribuir elementos de manera eficiente en una fila o columna.
- **Grid Layout**: Es un sistema más avanzado que permite crear diseños complejos dividiendo el espacio en filas y columnas.


# 2. Modelo de cajas
Cada elemento HTML se encuentra rodeado de una caja con varias propiedades que pueden ser modificadas.  
![alt text](./img/caja-css.png)

CSS permite definir las características de cada una de estas cajas (altura, anchura, posición, color…). Para ello, hemos de tener en cuenta que cada caja se compone de ciertos elementos:

- El contenido de la caja.
- Border: Borde (visible o no) que enmarca el contenido.
- Padding: Espacio entre el contenido y el borde.
- Margin, espacio entre cajas adyacentes.
- Width y height: Tamaño de la caja (ancho y alto).
- Background: Color o imagen de fondo del elemento. 

## 2.1. - Margin collapse
El **margin collapse** es un comportamiento de CSS en el que los márgenes verticales de elementos adyacentes o anidados pueden combinarse en lugar de sumarse. Esto sucede para evitar que los espacios entre elementos se vuelvan innecesariamente grandes y facilitar una disposición más coherente del contenido.

**Casos en los que ocurre el Margin Collapse**  
1. **Entre elementos hermanos**  
Si dos elementos situados uno encima del otro tienen márgenes verticales, en lugar de sumarse, se superponen y se toma el valor más grande.  
```css
  .caja1 {
    margin-bottom: 30px;
  }

  .caja2 {
    margin-top: 20px;
  }
```
:arrow_right: El espacio entre `caja1` y `caja2` será **30px**, no 50px.

2. **Entre un elemento padre e hijo**  
Si un elemento hijo tiene un `margin-top`, este puede colapsar con el `margin-top` del padre en lugar de sumarse.  
```css
  .padre {
    margin-top: 40px;
  }

  .hijo {
    margin-top: 20px;
  }
```
:arrow_right: El margen superior del padre se fusiona con el del hijo, tomando el mayor valor en vez de sumarse.

3. **Márgenes vacíos en elementos anidados**  
Si un contenedor no tiene contenido ni `padding`, su `margin-top` o `margin-bottom` podría colapsar con los márgenes de su elemento hijo.

4. **Evitar el margin collapse**
- **Propiedad `padding`**: Agregar `padding` al contenedor impide el colapso.
- **Bordes (`border`)**: Un `border` en el contenedor impide el colapso de márgenes.
- **Propiedad `display: flex` o `display: grid`**: Con estos modelos de maquetación no se aplica el margin collapse. 

## 2.2. - Ejercicios

# 3. Posicionamiento CSS
El posicionamiento CSS se refiere a cómo los elementos HTML se colocan en la página web y cómo se relacionan con otros elementos.   
La propiedad `position` puede adoptar los siguientes valores:
| Valor | Definición |
|---|---|
|Static| Valor por defecto. Los elementos van apareciendo según el orden del documento HTML.|
|Relative|Se desplaza la caja respecto a lo que sería su posicionamiento normal.|
|Absolute|La caja se sitúa en una posición absoluta respecto de su elemento contenedor.|
|Fixed|La caja se sitúa en una posición fija en pantalla, independientemente de si el usuario sube o baja la página.|
|Float|La caja se sitúa todo lo posible a la izquierda o derecha, dentro de la línea horizontal en que se encuentra.|
|Sticky|La caja se desplaza cuando hacemos scroll hasta quedarse pegada en la parte superior cuando se alcanza cierta posición.|
|z-index|Permite controlar la profundidad y el orden de apilamiento de los elementos que tienen la propiedad position, siempre que la propiedad position sea distinta de static.|

## 3.1. - Posicionamiento con Static
Por defecto, todos los elementos HTML tienen el posicionamiento `static`. Esto significa que el elemento se coloca en el flujo normal del documento, es decir, en el lugar que le corresponde según el orden en que aparece en el código.

- **Propiedad:** `position: static;` 
- **Comportamiento:** Los elementos no pueden ser desplazados con las propiedades `top`, `right`, `bottom` o `left`.  
> **Ejemplo:**

```css
.caja1 {
  background-color: rgba(0, 0, 255, 0.192);
  width: 25vw;
  text-align:center;    
  margin: 20px;
  padding: 10px;
}

.caja2 {
  background-color: rgba(255, 0, 0, 0.192);
  width: 25vw;
  text-align:center;
  margin: 20px;
  padding: 10px;
}
```
> **Resultado:**  
![alt text](./img/static.png)


## 3.2. - Posicionamiento con Relative
Cuando se aplica `position: relative;`, el elemento se coloca en su posición normal dentro del flujo del documento, pero puede moverse respecto a su posición original usando las propiedades `top`, `right`, `bottom`, o `left`.

- **Propiedad:** `position: relative;`
- **Comportamiento:** El elemento se mueve respecto a su ubicación original, pero aún mantiene su lugar en el flujo del documento. Esto significa que no afecta a otros elementos que están en el flujo.  

>**Ejemplo:**

```css
.caja1 {
  background-color: rgba(0, 0, 255, 0.192);
  width: 25vw;
  text-align:center;    
  margin: 20px;
  padding: 10px;
}

.caja2 {
  background-color: rgba(255, 0, 0, 0.192);
  width: 25vw;
  text-align: center;
  margin: 20px;
  padding: 10px;
  position: relative; /* Posicionamiento relativo a su ubicación original */
  left: 20px; /* Desplazamiento 20px derecha */
  top: 10px;  /* Desplazamiento 10px hacia abajo */
}
```

>**Resultado:**  
![alt text](./img/relative.png)

## 3.3. - Posicionamiento con Absolute
Un elemento con `position: absolute;` se posiciona en relación con el contenedor más cercano que tenga `position: relative;`, `absolute;` o `fixed;`. Si no existe tal contenedor, el elemento se posiciona en relación con el elemento `<html>`.  

- **Propiedad:** `position: absolute;`
- **Comportamiento:** El elemento se saca **del flujo normal del documento y no ocupa espacio**. Puede ser colocado en cualquier parte del contenedor usando `top`, `right`, `bottom`, o `left`.

>**Ejemplo:**
```css
.contenedor {
  position: relative; /* Contenedor relative para que caja2 se posicione dentro de él */
  width: 35vw;
  height: 20vh;
  background-color: antiquewhite;
  padding: 1px; /* solo para dar contenido al contenedor */
}

.caja1 {
  background-color: rgba(0, 0, 255, 0.192);
  width: 25vw;
  text-align: center;    
  margin: 10px;
  padding: 10px;
}

.caja2 {
  background-color: rgba(255, 0, 0, 0.192);
  width: 25vw;
  text-align: center;
  padding: 10px;
  position: absolute; /* elemento con posición absolute relativo a .contenedor */
  top: 40px;  /* 40px hacia abajo desde el contenedor relative */
  left: 50px; /* 50px hacia la izquierda desde el contenedor relative */
}
```

```html
<body>
  <div class="contenedor">
    <div class="caja1">Contenido caja 1</div>
    <div class="caja2">Contenido caja 2</div>
  </div>
</body>
``` 

>**Resultado:**  
![alt text](./img/absolute.png)

## 3.4. - Posicionamiento con Fixed
El posicionamiento fijo hace que el elemento se quede en una posición específica en la pantalla, independientemente de si el usuario hace scroll en la página.  
**Importante:** El elemento se posiciona respecto a la ventana del navegador (viewport) y sus dimensiones también son relativas al viewport (no al contenedor padre).

- **Propiedad:** `position: fixed;`
- **Comportamiento:** El elemento se posiciona respecto a la ventana del navegador y permanece visible cuando el usuario hace scroll.  

>**Ejemplo:**
```css
.contenedor {
  width: 50vw;
  height:400vh;
  background-color: antiquewhite;
  padding: 1px;
}
.caja1 {
  background-color: rgba(0, 0, 255, 0.192);
  width: 75%;
  text-align: center;    
  margin-top: 50px;
  margin-left: 10px;
  padding: 10px;
}
.caja2 {
  background-color: rgba(255, 0, 0, 0.7);
  width: 50%; /* 50% del viewport al salirse del flujo del documento */
  text-align: center;
  padding: 10px;
  position: fixed; /* Se fija a la ventana del navegador */
  top: 0px;  /* Se ubica a 0px del borde superior de la ventana */
  left: 0px; /* Se ubica a 0px del borde derecho de la ventana */
}
```

```html
<div class="contenedor">
  <div class="caja1">Contenido caja 1</div>
  <div class="caja2">Contenido caja 2 (Fija)</div>
  <div class="caja1">Contenido caja 1</div>
  <div class="caja1">Contenido caja 1</div>
  <div class="caja1">Contenido caja 1</div>
</div>
```

>**Resultado:**  
<video controls src="./img/fixed.mp4" title="Title"></video>


## 3.5. - Posicionamiento con Float
La propiedad `float` permite que un elemento se desplace hacia la izquierda o la derecha dentro de su contenedor, permitiendo que otros elementos fluyan a su alrededor.  

**Importante:** A diferencia de `position: fixed;`, los elementos flotantes **siguen formando parte del flujo del documento** y su tamaño sigue dependiendo de su contenedor padre.  

- **Propiedad:** `float: left;` o `float: right;`  
- **Comportamiento:** El elemento flota a un lado y los elementos siguientes se acomodan alrededor de él.  

> **Ejemplo:**  
```css
.contenedor {
  width: 40vw;
  height:30vh;
  background-color: antiquewhite;
  padding: 1px;
}
.caja1 {
  background-color: rgba(143, 223, 140, 0.192);
  width: 25%;
  text-align: center;    
  margin: 5px;
  padding: 10px;
  float: none; /* no flota */
}
.caja2 {
  background-color: rgba(0, 0, 255, 0.192);
  width: 25%;
  text-align: center;    
  margin: 5px;
  padding: 10px;
  float: left; /* flota a la izquierda */
}
.caja3 {
  background-color: rgba(255, 0, 0, 0.7);
  width: 25%; 
  text-align: center;
  margin: 5px;
  padding: 10px;
  float: right; /* flota a la derecha */
}
```

```html
<div class="contenedor">
  <div class="caja1">Contenido caja 1</div>
  <div class="caja2">Contenido caja 2</div>
  <div class="caja3">Contenido caja 3</div>
</div>
```

>**Resultado:**  
![alt text](./img/float.png)

## 3.5. - Posicionamiento con Sticky  
La propiedad `position: sticky;` permite que un elemento se comporte como `relative` hasta que alcanza un determinado umbral de desplazamiento, momento en el cual se mantiene "pegado" en su posición dentro del contenedor padre.  

**Importante:** A diferencia de `position: fixed;`, los elementos con `sticky` **siguen estando dentro del flujo del documento** y solo se fijan cuando se desplazan más allá del umbral definido.  

- **Propiedad:** `position: sticky;` con un valor para `top`, `left`, `right` o `bottom`  
- **Comportamiento:** El elemento se mantiene en su posición original hasta que el usuario hace scroll, momento en el que se fija en el punto definido.  

> **Ejemplo:**  
```css
.contenedor {
  width: 40vw;
  height: 300vh;
  background-color: antiquewhite;
  padding: 50px;  
}
.caja1 {
  background-color: rgb(143, 223, 140);
  width: 60%;
  text-align: center;    
  margin: 5px;
  padding: 10px;
  position: sticky;
  top: 25px; /* se queda a 25px de la parte superior al hacer scroll */
}
.caja2 {
  background-color: rgba(0, 0, 255, 0.192);
  width: 60%;
  text-align: center;    
  margin: 5px;
  padding: 10px;
}
.caja3 {
  background-color: rgba(255, 0, 0, 0.7);
  width: 60%; 
  text-align: center;
  margin: 5px;
  padding: 10px;
}
```

```html
<div class="contenedor">
  <div class="caja2">Contenido caja 1</div>
  <div class="caja1">Caja sticky</div>
  <div class="caja3">Contenido caja 2</div>
  <div class="caja2">Contenido caja 3</div>
  <div class="caja3">Contenido caja 4</div>    
</div>
```

>**Resultado:**  
<video controls src="./img/sticky.mp4" title="Title"></video>

## 3.6. - Posicionamiento con z-index  
La propiedad `z-index` en CSS se usa para **controlar la profundidad y el orden de apilamiento** de los elementos en la pantalla. Funciona solo en elementos que tienen una propiedad `position` distinta de `static`, es decir, que la propiedad sea `relative`, `absolute`, `fixed` o `sticky`.  

Los valores de `z-index` pueden ser:  
- **Positivos** (`z-index: 10;`): El elemento se coloca por encima de los que tienen un valor menor.  
- **Negativos** (`z-index: -1;`): El elemento se coloca detrás de otros elementos con valores superiores.  
- **`auto`**: Usa el mismo valor de `z-index` que su elemento padre.  

>**Ejemplo:**  
```css
.contenedor {
  position: relative; 
  width: 50vw;
  height: 20vh;
  background-color: antiquewhite;
  padding: 1px; 
}
.caja1, .caja2, .caja3, .caja4, .caja5 {
  width: 50%;
  text-align: center;
  padding: 10px;
  position: absolute; 
}
.caja1 {
  background-color: rgb(0, 255, 242);
  top: 20px;  
  left: 20px;
  z-index: 0; 
}
.caja2 {
  background-color: rgb(255, 0, 43);   
  top: 25px;  
  left: 25px;
  z-index: 1; 
}  
.caja3 {
  background-color: rgb(217, 255, 0);
  top: 30px;  
  left: 30px;
  z-index: 2; 
}
.caja4 {
  background-color: rgb(0, 60, 255);
  top: 35px;  
  left: 35px;
  z-index: 3; 
}
.caja5 {
  background-color: rgb(225, 0, 255);
  top: 40px;  
  left: 40px;
  z-index: 4; 
}
```

>**Resultado:**
<video controls src="./img/zindex.mp4" title="Title"></video>

## 3.7. - Tarea RA2 CEf-1
<poner aqui un ejemplo de navbar sidebar etc>

# 4. Flexbox
## 4.1. - Introducción
**Flexbox**, coloquialmente conocida como **flex** proviene de “Flexible Box Layout”, que se traduce como “Diseño de caja flexible”. Se trata de una solución **unidimensional** para la creación de "responsive designs", ya que permite organizar un conjunto de elementos flexibles que se adaptan automáticamente a su contenedor. Además, ofrece control sobre parámetros como la alineación, la dirección (horizontal o vertical) y el ajuste de las filas según el tamaño de los elementos, entre otros."

## 4.2. - Conceptos
El <a href="https://www.w3.org/TR/css-flexbox-1/">**W3C**</a> define a esta estructura como un “flujo flexible” de elementos en **dirección unidimensional** (arriba hacia abajo o izquierda hacia derecha) y **tamaño** (anchura/altura) según los ejes principal (horizontal) y transversal (vertical).  

![alt text](./img/flex_terms.png)

- **Contenedor flexible** (flex container): Es el elemento padre que contiene los ítems flexibles.   
- **Eje principal** (main axis): Los contenedores flexibles tienen una orientación específica. Por defecto, el eje principal del contenedor flex es el horizontal.  
- **Eje secundario** (cross axis): Del mismo modo, los contenedores flexibles tienen una orientación secundaria específica, perpendicular a la principal.   
- Es posible permutar la orientación de los ejes y asignar el eje principal al vertical y el secundario al horizontal.  
- **Elemento flexible** (flex item): Son los elementos que se encuentran dentro del "flex container". 

## 4.3. - Tipos de contenedores flexibles
Existen dos tipos de contenedores flexibles: `flex` (flexible) e `inline-flex` (flexible en línea). La propiedad `display` permite definir el tipo de contenedor flexible. 

|**Tipo de contenedor**|**Comportamiento de los elementos hijos**|
|-|-|
| **display:flex** |El contenedor se comporta como un bloque, es decir, ocupa todo el espacio (horizontal) disponible (similar a `block`), pero sus elementos hijos solo ocupan el espacio necesario (a menos que se especifique lo contrario).|
|**display:inline-flex**|El contenedor se comporta como un elemento en-línea, es decir, ocupa solo el espacio necesario y pueden colocarse unos detrás de otros en la misma línea (similar a inline-block). Sin embargo, sus elementos hijos siguen comportándose como en un contenedor `flex`. |

>**Ejemplo:**
```css
.container1 {
  margin: 10px;
  display: flex;
  background-color: rgb(8, 235, 20);
}
.container2 {
  margin: 10px;
  display:inline-flex;
  background-color: blueviolet;
}
.element1 {
  margin: 5px;
  padding: 5px;
  background-color: aquamarine;
}
.element2 {
  margin: 15px;
  padding: 15px;
  background-color: bisque;
}
.element3{
  margin: 10px;
  padding: 10px;
  background-color: rgb(226, 75, 30);
}
```

```html
<div class="container1">
  <div class="element1">Elemento 1</div>
  <div class="element2">Elemento 2</div>
  <div class="element3">Elemento 3</div>
</div>
<div class="container2">
  <div class="element1">Elemento 1</div>
  <div class="element2">Elemento 2</div>
  <div class="element3">Elemento 3</div>
</div>
<div class="container2">
  <div class="element1">Elemento 1</div>
  <div class="element2">Elemento 2</div>
  <div class="element3">Elemento 3</div>
</div>
```

>**Resultado:**
![alt text](./img/flex%20inlineflex.png)

## 4.4. - Dirección de los elementos hijos del contenedor flexible: Flex_direction
La propiedad `flex-direction` permite definir la dirección del eje principal del contenedor flexible (padre) según el eje horizontal (por defecto) o vertical. 

Los posibles valores de `flex-direction` son: 
|**Valores de flex-direction**|**Comportamiento**|
|-|-|
|**flex_direction: row** |Los elementos se visualizan **de izquierda a derecha** (valor por defecto).|
|**flex_direction: row-reverse** |Los elementos se visualizan de **derecha a izquierda**.|
|**flex_direction: column** |Los elementos se visualizan de **arriba hacia abajo**.|
|**flex_direction: column-reverse** |Los elementos se visualizan de **abajo hacia arriba**.|

>**Ejemplo:**
```css
.container1, .container2, .container3, .container4 {
  margin: 10px;
  padding: 5px;
  display: inline-flex;
}
.element1, .element2, .element3 {
  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 5px;  
  border: 1px solid gray;
  border-radius: 3px;    
}
.container1 {
  flex-direction: row;
  background-color: rgb(8, 235, 20);
}
.container2 {
  flex-direction:row-reverse;
  background-color: blueviolet;
}
.container3 {      
  flex-direction: column;
  background-color: rgb(21, 230, 150);
}
.container4 {
  flex-direction: column-reverse;
  background-color: rgb(196, 166, 35);
}
.element1 {
  background-color: aquamarine;
}
.element2 {
  background-color: bisque;
}
.element3{
  background-color: rgb(226, 75, 30);
}
```
```html
<div class="container1">  
  <div class="element1">1</div>
  <div class="element2">2</div>
  <div class="element3">3</div>
</div>

<div class="container2">
  <div class="element1">1</div>
  <div class="element2">2</div>
  <div class="element3">3</div>
</div>

<div class="container3">
  <div class="element1">1</div>
  <div class="element2">2</div>
  <div class="element3">3</div>
</div>

<div class="container4">
  <div class="element1">1</div>
  <div class="element2">2</div>
  <div class="element3">3</div>
</div>
```

>**Resultado:**
![alt text](./img/flexdirection.png)

## 4.5. - Ajuste en línea de los elementos flexibles: Flex-warp
La propiedad `flex-wrap` establece si los elementos se colocan en una sola línea o en varias.

Los posibles valores de la propiedad `flex-wrap` son:
|**Valores de flex-wrap**|**Comportamiento**|
|-|-|
|**flex_wrap: nowrap** | Los elementos se muestran en línea, en una sola fila. Su tamaño se ajusta al contenedor siempre que la suma de todos ellos sea mayor que el 100% de la anchura del contenedor. Si es inferior, se muestran en línea pero conservan su tamaño. No se permite el desbordamiento en varias líneas.|
|**flex_wrap: wrap** | Los elementos se muestran en línea, en una sola fila. Su tamaño se ajusta al contenedor siempre que la suma de todos ellos sea inferior al 100% de la anchura del contenedor. Si es superior, se muestran en varias líneas (desbordamiento).|
|**flex_wrap: wrap-reverse** | Similar a `warp` pero esta vez, si hay desbordamiento, las filas de elementos se muestran en orden inverso.|

>**Ejemplo:**
```css
.container1, .container2, .container3 {
  margin: 10px;
  padding: 5px;
  display: flex;      
}
.element1, .element2, .element3 {
  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 5px;  
  border: 1px solid gray;
  border-radius: 3px;  
  text-align: center;        
}
.container1 {
  flex-wrap: nowrap;
  background-color: rgb(8, 235, 20);
}
.container2 {
  flex-wrap: wrap;
  background-color: blueviolet;
}
.container3 {      
  flex-wrap: wrap-reverse;
  background-color: rgb(21, 230, 150);
}   
.element1 {
  background-color: aquamarine;
}
.element2 {
  background-color: bisque;
}
.element3{
  background-color: rgb(226, 75, 30);
}
```
```html
<div class="container1">  
  <div class="element1">1</div>
  <div class="element2">2</div>
  <div class="element3">3</div>
  <div class="element1">4</div>
  <div class="element2">5</div>
  <div class="element3">6</div>
  <div class="element1">7</div>
  <div class="element2">8</div>
  <div class="element3">9</div>
</div>

<div class="container2">  
  <div class="element1">1</div>
  <div class="element2">2</div>
  <div class="element3">3</div>
  <div class="element1">4</div>
  <div class="element2">5</div>
  <div class="element3">6</div>
  <div class="element1">7</div>
  <div class="element2">8</div>
  <div class="element3">9</div>
</div>

<div class="container3">  
  <div class="element1">1</div>
  <div class="element2">2</div>
  <div class="element3">3</div>
  <div class="element1">4</div>
  <div class="element2">5</div>
  <div class="element3">6</div>
  <div class="element1">7</div>
  <div class="element2">8</div>
  <div class="element3">9</div>
</div>
```

>**Resultado:**
<video controls src="./img/wrap.mp4" title="Title"></video>

## 4.6. - Ajuste bidireccional de los elementos flexibles: Flex-flow
La propiedad `flex-flow` establece simultáneamente las propiedades `flex-direction` y `flex-wrap`.

Los posibles valores de la propiedad `flex-flow` son:  
| **Valores de flex-flow** | **Comportamiento** |  
|--------------------------|--------------------|  
| **flex-flow: row nowrap** | Los elementos se organizan en una sola fila (horizontalmente) y no se permite el desbordamiento en varias líneas. |  
| **flex-flow: row wrap** | Los elementos se organizan en una fila principal, pero si no caben en el contenedor, se envuelven en varias líneas. |  
| **flex-flow: row wrap-reverse** | Similar a `row wrap`, pero las nuevas líneas aparecen en la parte superior en lugar de la parte inferior. |  
| **flex-flow: column nowrap** | Los elementos se organizan en una sola columna (verticalmente) sin desbordamiento. |  
| **flex-flow: column wrap** | Los elementos se organizan en una columna y pueden desbordarse en varias columnas si es necesario. |  
| **flex-flow: column wrap-reverse** | Similar a `column wrap`, pero las nuevas columnas aparecen en el lado izquierdo en lugar del derecho. |  

## 4.7. - Ordenación de los elementos flexibles: Order
Si asignamos un valor a la propiedad order, los elementos hijos no seguirán el orden en el que fueron definidos originalmente, sino que se organizarán según el valor de `order`.

>**Fragmento de código con la propiedad order:**
```css
.element1 {
  order: 3;
  background-color: aquamarine;
  ...
}
```

## 4.8. - Tamaño inicial de los elementos flexibles: Flex-basis
Habitualmente, el tamaño de los elementos flexibles viene determinado por su contenido. Si no hay espacio suficiente en la dirección principal, el espacio disponible se distribuye de forma desigual entre todos los elementos, dando más espacio a los elementos con más contenido.
La propiedad flex-basis establece el tamaño inicial del elemento, antes de que se reparta el espacio libre.

Los posibles valores de la propiedad `flex-basis` son:  
| **Valores de flex-basis** | **Comportamiento** |  
|--------------------------|--------------------|  
| **flex-basis: content** | Los elementos se organizan en una sola fila (horizontalmente) y no se permite el desbordamiento en varias líneas. |  
| **flex-basis: auto** | Los elementos se organizan en una fila principal, pero si no caben en el contenedor, se envuelven en varias líneas. |  
| **flex-basis: valor** | Similar a `row wrap`, pero las nuevas líneas aparecen en la parte superior en lugar de la parte inferior. |  


Tamaño inicial: flex-basis
Expansión: flex-grow
Compresión: flex-shrink
Tamaños: flex
Márgenes automáticos: margin
Alineación principal: justify-content
Alineación secundaria (1): align-items
Alineación individual: align-self
Alineación secundaria (n): align-content

HASTA Aqui  
https://www.mclibre.org/consultar/htmlcss/css/css-flexbox.html
https://lenguajecss.com/css/flex/alinear-centrar-css/

https://nachoiborraies.github.io/htmlcss/md/es/03b#33-la-propiedad-display

https://www.yunbitsoftware.com/blog/2017/03/30/flexbox-css3-tutorial-descripcion-ejemplos-html/









# 5. Grid layout 
https://lenguajecss.com/css/grid/que-es-grid/




---

variables css  https://lenguajecss.com/css/variables-css/css-custom-properties/  

funciones css   https://lenguajecss.com/css/funciones-css/que-son/  

programacion  https://lenguajecss.com/css/logica-css/css-es-programacion/

enlazar a google fonts. https://lenguajecss.com/css/cargar-tipografias/tipografias-google-fonts/  

 
funciones de filtros para colores https://lenguajecss.com/css/efectos/filtros-css/  
formas básicas  https://lenguajecss.com/css/mascaras-y-recortes/formas-basicas/  
responsive design https://lenguajecss.com/css/responsive-web-design/que-es/  
transformaciones https://lenguajecss.com/css/transformaciones/transform/