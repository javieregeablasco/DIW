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


