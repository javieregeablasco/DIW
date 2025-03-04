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

## 3.1. - Posicionamiento Static
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


## 3.2. - Posicionamiento Relative
Cuando se aplica `position: relative;`, el elemento se coloca en su posición normal dentro del flujo del documento, pero puede moverse respecto a su posición original usando las propiedades `top`, `right`, `bottom`, o `left`.

HASTA Aqui
https://nachoiborraies.github.io/htmlcss/md/es/03b#31-posicionamiento-css2
https://lenguajecss.com/css/posicionamiento/position/


- **Propiedad:** `position: relative;`
- **Comportamiento:** El elemento se mueve respecto a su ubicación original, pero aún mantiene su lugar en el flujo del documento. Esto significa que no afecta a otros elementos que están en el flujo.

### 3. **Posicionamiento Absoluto (absolute)**
Un elemento con `position: absolute;` se posiciona en relación con el contenedor más cercano que tenga `position: relative;`, `absolute;` o `fixed;`. Si no existe tal contenedor, el elemento se posiciona en relación con el elemento `<html>`.

- **Propiedad:** `position: absolute;`
- **Comportamiento:** El elemento se saca del flujo normal del documento y no ocupa espacio. Puede ser colocado en cualquier parte del contenedor usando `top`, `right`, `bottom`, o `left`.

### 4. **Posicionamiento Fijo (fixed)**
El posicionamiento fijo hace que el elemento se quede en una posición específica en la pantalla, independientemente de si el usuario hace scroll en la página. El elemento se posiciona respecto a la ventana del navegador (viewport).

- **Propiedad:** `position: fixed;`
- **Comportamiento:** El elemento se posiciona respecto a la ventana del navegador y permanece visible cuando el usuario hace scroll.

### 5. **Posicionamiento Sticky (sticky)**
El posicionamiento sticky es una mezcla entre el posicionamiento relativo y fijo. Un elemento con `position: sticky;` se comporta de manera normal hasta que se desplaza por la página hasta un cierto punto, y luego se "pega" a una posición específica mientras el usuario sigue desplazándose.

- **Propiedad:** `position: sticky;`
- **Comportamiento:** El elemento se comporta como un `relative` hasta que alcanza el umbral especificado con `top`, `right`, `bottom` o `left`, momento en el cual se fija en esa posición.

### Ejemplo de uso:

```css
/* Posicionamiento relativo */
.relative {
  position: relative;
  top: 20px; /* Se mueve 20px hacia abajo */
}

/* Posicionamiento absoluto */
.absolute {
  position: absolute;
  top: 50px;  /* Se mueve 50px desde la parte superior del contenedor */
  right: 30px; /* Se mueve 30px desde la parte derecha */
}

/* Posicionamiento fijo */
.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}

/* Posicionamiento sticky */
.sticky {
  position: sticky;
  top: 0;  /* Se queda pegado en la parte superior cuando se hace scroll */
}
```

### Consejos:
- **Posición relativa:** Útil cuando deseas mover un elemento sin afectar su lugar en el flujo.
- **Posición absoluta:** Utilizada cuando necesitas sacar un elemento del flujo normal y posicionarlo exactamente en un lugar.
- **Posición fija:** Ideal para menús, barras de navegación, o cualquier elemento que deba mantenerse visible al hacer scroll.
- **Posición sticky:** Muy útil para cabeceras o menús que deben desplazarse con la página pero quedarse pegados en la parte superior cuando se alcanza cierta posición.

¿Te gustaría ver algún ejemplo práctico o necesitas ayuda con algo más sobre posicionamiento?



https://nachoiborraies.github.io/htmlcss/md/es/03b

https://lenguajecss.com/css/posicionamiento/position/

https://www.mardeasa.es/descargas/curso-Confeccion-y-publicacion-de-paginas-web/11-CSS-Posicionamiento.pdf



# 4. Flexbox
https://lenguajecss.com/css/layout/display-css/
https://lenguajecss.com/css/flex/que-es-flex/

# 5. Grid layout 
https://lenguajecss.com/css/grid/que-es-grid/




---


https://nachoiborraies.github.io/htmlcss/  

modelo de cajas   https://lenguajecss.com/css/modelo-de-cajas/que-es/

variables css  https://lenguajecss.com/css/variables-css/css-custom-properties/  

funciones css   https://lenguajecss.com/css/funciones-css/que-son/  

programacion  https://lenguajecss.com/css/logica-css/css-es-programacion/

enlazar a google fonts. https://lenguajecss.com/css/cargar-tipografias/tipografias-google-fonts/  

display   https://lenguajecss.com/css/layout/display-css/  
grid https://lenguajecss.com/css/grid/que-es-grid/  
flex  https://lenguajecss.com/css/flex/que-es-flex/  
position  https://lenguajecss.com/css/posicionamiento/position/  
funciones de filtros para colores https://lenguajecss.com/css/efectos/filtros-css/  
formas básicas  https://lenguajecss.com/css/mascaras-y-recortes/formas-basicas/  
responsive design https://lenguajecss.com/css/responsive-web-design/que-es/  
transformaciones https://lenguajecss.com/css/transformaciones/transform/


