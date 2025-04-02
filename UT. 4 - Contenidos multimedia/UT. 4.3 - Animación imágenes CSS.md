---
Título: UD. 4.3 - Animaciones de imágenes con CSS.
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

<div align=center>
  <img src="./img/animaciones-css3.jpg" width="100%">
</div>
<br> 

| **Resultados de aprendizaje de la unidad didáctica:** |
|-|
| **RA. 3:** Prepara archivos multimedia para la web, analizando sus características y manejando herramientas específicas.|

|**Criterios de evaluación de la unidad didáctica:**|
|-|
| **CE. f&#41;** Se han realizado animaciones a partir de imágenes fijas.|

<br>

| **Licencia Creative Commons:** ||
| - | - |
| <img src="../UT. 1 - UserInterface UserXperience/img/by-nc-nd-eu_.png" width=90%> | **Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA:** No se permite un uso comercial de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la que regula la obra original. |
---
# 1. Introducción

# 2. Animaciones
## 2.1. - Introducción
Una animación en CSS es una técnica que permite cambiar de manera gradual los estilos de un elemento HTML a lo largo del tiempo, creando un efecto visual dinámico. 

Los objetivos básicos de las animaciones son:   
1️⃣ **Mejorar la experiencia del usuario (UX)** generando una experiencia atractiva y fluida, incentivando al usuario a seguir explorando.  

2️⃣ **Atraer o guiar la atención del usuario**: Las animaciones permiten destacar elementos clave, guiando la atención del usuario hacia la información más relevante.  

3️⃣ **Proporcionar retroalimentación** facilitando la comprensión de las acciones realizadas, indicando si una acción fue exitosa o no. 

## 2.2. - Componentes de una animación
Las animaciones en CSS se definen con dos componentes principales:

:one: Regla **@keyframes**:  
Define el comportamiento de la animación a lo largo de su duración. Especifica los estilos en diferentes momentos clave `@keyframes` de la animación (p.e. inicio y final).  
Para definir los `@keyframes`, se pueden usar porcentajes o palabras clave como `from` y `to`. 

>**Ejemplo de regla @keyframes con from y to:**

```css
@keyframes mover {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}
```
  
>**Ejemplo de regla @keyframes con %:**

```css
@keyframes mover {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(100px);
  }
}
```

:two: **Propiedad `animation`**:  
Se aplica al elemento al que se le asigna la animación y permite configurar múltiples propiedades de animación en una sola declaración. 

La sintaxis de `animation` es la siguiente:  
```CSS
animation: nombre duración función-de-tiempo retraso contador dirección estado mode-de-relleno;
```
**Dónde:**
- **nombre (animation-name):** Nombre de la animación definida por el desarrollador. Este nombre se puede reutilizar para más elementos que tengan la misma animación.  
- **duración (animation-duration):** Tiempo que dura una repetición de la animación. Se expresa en segundos (`s`) o milisegundos (`ms`).  
- **función-de-tiempo (animation-timing-function):** Define la aceleración que tendrá la animación a lo largo del tiempo. Los valores comunes incluyen `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out` y `cubic-bezier()`.  
- **retraso (animation-delay):** Intervalo de tiempo que pasa entre la carga de la página y el inicio de la animación.  
- **contador (animation-iteration-count):** Número de veces que se repite la animación (`1`, `2`, `infinite`, etc.).  
- **dirección (animation-direction):** Define la dirección en la que se reproduce la animación:  
  - `normal`: Se ejecuta desde el inicio hasta el final.  
  - `reverse`: Se ejecuta desde el final hasta el inicio.  
  - `alternate`: Alterna entre normal y reverse en cada repetición.  
  - `alternate-reverse`: Alterna entre reverse y normal en cada repetición.  
- **estado (animation-play-state):** Controla si la animación está en ejecución o pausada:  
  - `running`: La animación se reproduce normalmente.  
  - `paused`: La animación se detiene en el cuadro actual hasta que se reanude.
- **modo de relleno (animation-fill-mode):** Determina qué estilos son aplicados al elemento cuando la animación no se está ejecutando. Sus valores incluyen:  
  - `none`: No aplica ningún estilo fuera del tiempo de ejecución de la animación.  
  - `forwards`: Mantiene el estilo del último fotograma de la animación.  
  - `backwards`: Aplica el estilo del primer fotograma antes de que comience la animación.  
  - `both`: Combina `forwards` y `backwards`. 

<br>

>**Ejemplo de animación**  
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de Animación</title>
  <style>
/* definicion de la animación */
    @keyframes mover {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(200px);
      }
    }
/* fin definicion de la animación */

    .caja {
      width: 100px;
        height: 100px;
        background-color: coral;
        position: relative;
/* argumentos de la animación */
        animation: mover 2s ease-in-out infinite alternate;
/* fin argumentos de la animación */
        }
    </style>
</head>

<body>
    <div class="caja"></div>
</body>

</html>
```

- La animación `mover` cambia la posición horizontal del elemento (`translateX`).  
- Se aplica a `.caja` con `animation: mover 2s ease-in-out infinite alternate;`  
  - `mover`: Nombre de la animación.  
  - `2s`: Duración de cada repetición.  
  - `ease-in-out`: Suaviza el inicio y el final.  
  - `infinite`: La animación se repite indefinidamente.  
  - `alternate`: Alterna la dirección en cada iteración.  

>**Ejercicio 1:**  
Modificar el código para que cumpla los siguientes requisitos:
- La animación se iniciará 4 segundos después de cargarse la página.
- El color inicial será `green`.
- El color final será `blue`. 
- La animación tendrá un punto intermedio con las siguientes condiciones: 
  - Al tiempo 2s la animacion deberá haber recorrido `333px`.
  - Al tiempo 2s, el color de la animación será `red`. 

<br>

>**Ejercicio 2:**  
Modificar el código para que realice la siguiente animación:

<video src="./code/43animCSS-3.mp4" controls></video>

# 3. Transiciones
## 3.1. - Introducción
Las transiciones permiten cambiar gradualmente los valores de las propiedades CSS de un elemento en un período de tiempo determinado, generando un efecto visual.

## 3.2. - Componentes de una transición
:one: **Propiedad `transition`**:  
Permite especificar qué propiedad CSS cambiará, la duración de la transición, la función de tiempo y un posible retraso.
   
   La sintaxis básica de `transition` es:
   ```css
   transition: propiedad duración función-de-tiempo retraso;
   ```
   
   **Donde:**
   - **propiedad (transition-property):** Indica qué propiedad CSS será animada (ej. `opacity`, `background-color`, `transform`).
   - **duración (transition-duration):** Tiempo que tardará la transición en completarse (`s` o `ms`).
   - **función-de-tiempo (transition-timing-function):** Define la aceleración de la transición (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()`).
   - **retraso (transition-delay):** Especifica el tiempo de espera antes de que inicie la transición.
   
:two: **Propiedades individuales de `transition`**:  
Se pueden definir las transiciones de manera más específica utilizando las siguientes propiedades:
   - `transition-property`: Define qué propiedad será afectada por la transición.
   - `transition-duration`: Especifica el tiempo de duración.
   - `transition-timing-function`: Controla la aceleración.
   - `transition-delay`: Indica el tiempo de espera antes de iniciar.
   
<br>

> **Ejemplo de transición en CSS:**
```css
.caja {
  width: 100px;
  height: 100px;
  background-color: coral;
  transition: background-color 0.5s ease-in-out, transform 0.3s ease-in;
}

.caja:hover {
  background-color: tomato;
  transform: scale(1.2);
}
```

> **Explicación:**
- `background-color 0.5s ease-in-out`: Cambia el color de fondo en 0.5s con una aceleración suave.
- `transform 0.3s ease-in`: Aplica un escalado suave cuando el usuario pasa el cursor.

## 3.3. - Transición de múltiples propiedades
Si se desean animar múltiples propiedades, se pueden separar con comas:

```css
.caja {
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 0;
  transition: background-color 1s ease, border-radius 0.5s linear;
}

.caja:hover {
  background-color: green;
  border-radius: 50%;
}
```

## 3.4. - Usando `all` en `transition-property`
Si queremos que todas las propiedades animables sufran una transición, podemos usar `all`:

```css
.caja {
  width: 100px;
  height: 100px;
  background-color: purple;
  transition: all 0.5s ease;
}

.caja:hover {
  width: 120px;
  height: 120px;
  background-color: pink;
}
```

## 3.5. - Diferencias entre `transition` y `animation`
| Característica       | `transition` | `animation` |
|----------------------|-------------|-------------|
| Necesita un evento  | Sí (hover, focus, etc.) | No, se ejecuta automáticamente |
| Se repite automáticamente | No | Sí |
| Mayor control sobre la secuencia | No | Sí con `@keyframes` |
| Simplicidad | Fácil de usar | Más flexible pero más complejo |

> **Ejemplo:**
> La caja gira 45 grados cuando el usuario hace hover sobre ella.
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de Transición</title>
  <style>
    .caja {
      width: 100px;
      height: 100px;
      background-color: coral;
      transition: transform 0.5s ease-in-out;
    }
    .caja:hover {
      transform: rotate(45deg);
    }
  </style>
</head>
<body>
  <div class="caja"></div>
</body>
</html>
```

>**Ejercicio 1:**  
Modificar el código para que el cuadrado tenga las siguientes transiciones:
- El color final será `azul`. 
- La forma de la caja pasará de **cuadrada a circular**.

>**Ejercicio 2:**  
XXX

<br>

# 4. Transformaciones
## 4.1. - Introducción
Las transformaciones de objetos han sido una de las mejoras más destacadas del estándar CSS3 y permiten modificar todo tipo de propiedades geométricas como la posición, ángulo, escala etc.  
De por sí, las transformaciones son poco útiles. Su potencial se muestra al combinarlas con animaciones y transiciones.


La sintaxis de las transformaciones es la siguiente:
```css
transform: transform-functions; 
```
**Nota:**  
`transform` puede combinar varias transformaciones en una sola declaración.

>**Ejemplo con una sola transformación:**
```css
transform: rotate(45deg);
```
>**Ejemplo combinando varias transformaciones:**
```css
transform: rotate(45deg) scale(1.5) translateX(50px);
```
## 4.2. - Tipos de Transformaciones**
### 4.2.1. - Traslación (`translate`)
Mueve un elemento en los ejes X, Y o Z sin cambiar su tamaño o forma.
```css
transform: translateX(50px); /* Mueve 50px a la derecha */
transform: translateY(-20px); /* Mueve 20px hacia arriba */
transform: translate(50px, -20px); /* Mueve en X e Y */
```

### 4.2.2. - Rotación (`rotate`)
Gira un elemento en un ángulo determinado en 2D o 3D.
```css
transform: rotate(45deg); /* Gira 45° en sentido horario */
transform: rotate(-30deg); /* Gira 30° en sentido antihorario */
```

Para rotaciones en 3D:
```css
transform: rotateX(45deg); /* Gira en el eje X */
transform: rotateY(60deg); /* Gira en el eje Y */
transform: rotateZ(90deg); /* Gira en el eje Z */
```

### 4.2.3. - Escalado (`scale`)
Cambia el tamaño del elemento en X, Y o ambos.
```css
transform: scale(1.5); /* Aumenta un 50% en ambos ejes */
transform: scaleX(2); /* Duplica el ancho */
transform: scaleY(0.5); /* Reduce la altura a la mitad */
```

### 4.2.4. - Inclinación (`skew`)
Inclina el elemento en el eje X, Y o ambos.
```css
transform: skewX(20deg); /* Inclinación en X */
transform: skewY(-15deg); /* Inclinación en Y */
transform: skew(20deg, -15deg); /* Inclinación en ambos ejes */
```


## 4.3. - Transformaciones en 3D**
Además de `rotateX()`, `rotateY()` y `rotateZ()`, CSS permite la transformación en el espacio tridimensional mediante:
- **`perspective()`**: Define la distancia de la cámara.
- **`translateZ()`**: Mueve el objeto en el eje Z.
- **`scaleZ()`**: Escala en profundidad.

Ejemplo:
```css
transform: perspective(500px) rotateY(45deg);
```

## 4. Ejemplo Práctico**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Transformaciones en CSS</title>
  <style>
    .caja {
      width: 100px;
      height: 100px;
      background: coral;
      margin: 50px;
      transition: transform 0.5s ease-in-out;
    }

    .caja:hover {
      transform: rotate(15deg) scale(1.2) translateX(20px);
    }
  </style>
</head>
<body>
  <div class="caja"></div>
</body>
</html>
```
👉 **Cuando pasas el ratón sobre `.caja`, se rota 15°, aumenta un 20% de tamaño y se mueve 20px a la derecha.**  

# 4. Animación de imagenes
## 4.1. - Estilos CSS sobre imágenes
Los estilos CSS permiten mejorar el renderizado de las imágenes, adaptarlas al diseño de la página y optimizar la experiencia del usuario.  
Algunos de los principales estilos incluyen:
### 4.1.1. - Tamaño y ajuste
   - `width` y `height`: Definen el tamaño de la imagen.
   - `max-width: 100%`: Hace que la imagen sea responsive.
   - `object-fit`: Controla cómo la imagen se ajusta a su contenedor.
     - `cover`: La imagen cubre todo el contenedor sin deformarse.
     - `contain`: Se ajusta sin recortar.
     - `fill`: Se estira para llenar el espacio.
     - `none`: La imagen no se redimensiona.

### 4.1.2. - Bordes y sombras
   - `border-radius`: Permite crear esquinas redondeadas.
   - `box-shadow`: Agrega sombras alrededor de la imagen.

### 4.1.3. - Filtros y efectos
   - `filter`: Aplica efectos como:
     - `blur(xpx)`: Difumina la imagen.
     - `grayscale(100%)`: Convierte la imagen a escala de grises.
     - `brightness(1.5)`: Aumenta el brillo.
     - `contrast(200%)`: Aumenta el contraste.
   - `mix-blend-mode`: Modifica la fusión de la imagen con el fondo.

### 4.1.4. - Transparencia y opacidad
   - `opacity`: Ajusta la transparencia de la imagen.

### 4.1.5. - Posicionamiento
   - `position`: Define cómo se coloca la imagen en la página (`absolute`, `relative`, `fixed`, etc.).
   - `z-index`: Controla si la imagen se muestra por encima o debajo de otros elementos.

### 4.1.6. - Ejercicio
Insertar dentro de un documento HTML <a href="./img/cocrodilo.jpg">**esta imagen**</a> usando todos los valores posibles de `object-fit`. Comprobar las diferencias en los resultados obtenidos.    

## 4.2. Aplicación de estilos CSS para animar imágenes
### 4.2.1. - Ejercicio 1
Definir los estilos necesarios para obtener el siguiente resultado.
<video controls src="./media/ejercicio1.mp4"></video>

### 4.2.2. - Ejercicio 2
Definir los estilos necesarios para obtener el siguiente resultado.




https://animista.net/play/basic/swing

https://lenguajecss.com/css/efectos/filtros-css/


# 4. Animación de sprites
https://lenguajecss.com/animaciones/animaciones/spritesheets-css/

### 5.5.2 Tarea RA3-CEf-1  

https://www.youtube.com/watch?v=ymuBowcODVU
