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

# 4. Flexbox



HASTA Aqui
https://www.mclibre.org/consultar/htmlcss/css/css-flexbox.html

https://victorroblesweb.es/2022/09/27/como-funciona-flexbox-en-css/

https://lenguajecss.com/css/flex/que-es-flex/
https://nachoiborraies.github.io/htmlcss/md/es/03b#31-posicionamiento-css2

https://mardeasa.es/descargas/curso-Confeccion-y-publicacion-de-paginas-web/22-CSS-Flexbox-y-Grid.pdf
https://www.yunbitsoftware.com/blog/2017/03/30/flexbox-css3-tutorial-descripcion-ejemplos-html/









# 5. Grid layout 
https://lenguajecss.com/css/grid/que-es-grid/




---

variables css  https://lenguajecss.com/css/variables-css/css-custom-properties/  

funciones css   https://lenguajecss.com/css/funciones-css/que-son/  

programacion  https://lenguajecss.com/css/logica-css/css-es-programacion/

enlazar a google fonts. https://lenguajecss.com/css/cargar-tipografias/tipografias-google-fonts/  

display   https://lenguajecss.com/css/layout/display-css/  
grid https://lenguajecss.com/css/grid/que-es-grid/  
funciones de filtros para colores https://lenguajecss.com/css/efectos/filtros-css/  
formas básicas  https://lenguajecss.com/css/mascaras-y-recortes/formas-basicas/  
responsive design https://lenguajecss.com/css/responsive-web-design/que-es/  
transformaciones https://lenguajecss.com/css/transformaciones/transform/