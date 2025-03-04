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
- Width y height: El tamaño de la caja (anchura y altura).
- El color de fondo del elemento. Alternativamente, también se puede definir una imagen de fondo con la propiedad background-image, que se superpone al color de fondo.

Margen

Comenzaremos con la imagen. Con tan sólo modificar su margen, observaremos cómo se distancia del resto de los elementos. Usaremos la propiedad margin seguida de un valor numérico o de un porcentaje:

    img { margin: 20px; }

Relleno

Probaremos ahora a modificar su relleno, es decir, la distancia imaginaria entre un hipotético borde y la imagen propiamente dicha. Para ello emplearemos la propiedad padding, exactamente igual que hicimos con la anterior. Probemos con un valor menos exagerado:

    img { padding: 5px; }

Borde

Si recargamos la página con esta incorporación, observaremos que, en efecto, la imagen se separa un poco más, esos 5 píxeles por cada lado, pero no es posible distinguir dónde acaba el efecto del margen y comienza el del relleno. Para poder diferenciar los valores, deberíamos tener un borde en la imagen.

    img {

        border-width: 2px;
        border-style: solid;
        border-color: #007000;
        }

Con los conocimientos que tenemos ya de CSS podemos intuir con facilidad qué es lo que hace cada una de esas tres propiedades: en una definimos el grosor del borde, en otra el tipo de línea y en la última su color.
Laterales

Tanto margin, como padding y border se pueden emplear para modificar laterales de una caja, con independencia de los demás. Añadiendo a cada uno de ellos la variación -left (izquierda), -right (derecha), -top (arriba) o -bottom (abajo) conseguimos que sólo afecte al valor o valores indicados.

En la figura hemos aplicado estas propiedades para el título de la página:

    h1 {

        margin-top:40px;
        padding-left: 5px;
        padding-right:5px;
        border-top-width: 2px;
        border-top-style: dotted;
        border-top-color: #007000;
        border-bottom-width: 2px;
        border-bottom-style: double;
        border-bottom-color: #007000;
        }

Ocultar
Más opciones para los bordes

Para los bordes podemos definir tres propiedades: su anchura, su estilo y su color. La anchura y el color se definen con las medidas habituales y los sistemas que ya hemos analizado. El estilo, por su parte, se basa en una serie de valores concretos:

    dotted: punteado.
    dashed: línea discontinua.
    solid: línea continua.
    double: línea doble.
    groove: tipo de relieve.
    ridge: tipo de relieve.
    inset: tipo de relieve.
    outset: tipo de relieve.
    none: empleado para indicar que no habrá borde

Es cuestión de probar algunos modelos. El valor solid es la línea sencilla, la más empleada.

Como ya sucedía con otras propiedades, podemos reagrupar los valores referidos a los bordes en una sola propiedad genérica denominada border. Para ello estableceremos los valores separados por espacios y en el orden de tamaño, estilo y color, como en este ejemplo que haría la misma función que el recuadro anterior:

    img { border: 2px solid #007000;}

Esquinas redondeadas

Con los estilos actuales podemos trazar un borde alrededor de una figura y que tenga sus esquinas redondeadas.

La propiedad que lo permite es border-radius, acompañada de un valor numérico. El ejemplo anterior, con la incorporación de esta propiedad, daría como resultado el rectángulo de la figura:

    img {

        border: 2px solid #007000;
        border-radius:25px;
        }

Sombras

Las modernas hojas de estilo proporcionan a cualquier elemento la capacidad de proyectar una sombra. Ya vimos que esto funcionaba con el texto, pero además contamos con la propiedad box-shadow para crear sombras en cualquier caja de nuestra página web, lo que hace que sea posible aplicarselo a cualquier elemento.

    table {box-shadow: 8px 8px 6px #aaaaaa; }

Los valores que conforman la sombra son similares a los que vimos para las sombras de texto, es decir, desplazamiento horizontal, vertical, difuminado y color de sombra.
Elementos flotantes

Los elementos de una página web pueden reubicarse a la izquierda o a la derecha con tan sólo emplear la propiedad float, haciendo que el resto del contenido se sitúe alrededor de ese elemento.

En el siguiente ejemplo la regla:

    img { float:left;}

provoca que el texto se sitúe alrededor de la imagen.





---
HASTA AQUÍ
--- 




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


