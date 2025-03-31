---
Título: UD. 3.2 - Funciones y variables en CSS
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

<div align=center>
  <img src="./img/css3.png" width="35%">
</div>


| **Resultados de aprendizaje de la unidad didáctica:** |
|-|
| **RA. 2:** Crea interfaces web homogéneos definiendo y aplicando estilos.|

|**Criterios de evaluación de la unidad didáctica:**|
|-|
| **CE. g&#41;** Se han creado clases de estilos.|


<br>

| **Licencia Creative Commons:** ||
| - | - |
| <img src="../UT. 1 - UserInterface UserXperience/img/by-nc-nd-eu_.png" width=90%> | **Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA:** No se permite un uso comercial de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la que regula la obra original. |
---

# 1. - Introducción
Aunque CSS no sea un lenguaje de programación como tal, sí que permite definir variables y dispone de una librería de funciones que nos permitirá, entre otras cosas, realizar animaciones.  

# 2. Variables CSS
## 2.1. - Definición de las variables
Las **CSS Custom Properties** (variables CSS) permiten definir valores reutilizables y modificar estilos de manera flexible.
Por convención, las variables CSS se definen de la siguiente manera:    
```css
--nombre-variable: valor 
```

Generalmente se colocan al principio de la hoja de estilos dentro de `:root`, convirtiedon las variables en **globales a toda la hoja de estilos**.
>**Ejemplo de custom properties:**
```css
:root{
  --motherboard-color: #f5f5f5;
  --default-border-color: black;
  --cpu-color: #06D6A0;
  --slot-color: #073B4C;
  --connector-color: #EF476F;
  --connector-size: 2em;
  --cpu-size: 7em;
  --default-gap: 1em;
} 
```

## 2.2. - Uso de las variables
Para poder acceder a las variables CSS, usaremos la función `var(--nombre-variable)` que será la responsable de devolver el contenido de la variable en el formato esperado por la propiedad de CSS.

>**Ejemplo de variables y su posterior utilización:**
```css
:root {
  --color-primario: #3498db;
  --tamanyo-texto: 16px;
}

.boton {
  background-color: var(--color-primario);
  font-size: var(--tamanyo-texto);
  padding: 10px;
}
```
## 2.3. - Variables CSS dinámicas
Al igual que en los lenguajes de programación, podemos modificar el valor de las variables CSS de forma dinámica, pero este cambio suele ocurrir dentro de un contexto específico, como en estados de interacción o dentro de un selector.

>**Ejemplo con `hover`:**
```css
.boton {
  --color-boton: #e74c3c;
  background-color: var(--color-boton);
  transition: background 0.3s;
}

.boton:hover {
  --color-boton: #c0392b;
}
```
# 3. Funciones en CSS
CSS tiene varias funciones útiles para hacer cálculos en tiempo real.

## 3.1. - Operaciones matemáticas con `calc()`
>**Ejemplo:**
```css
.container {
  width: calc(100% - 50px);
  height: calc(50vh + 20px);
}
```

## 3.2. - Control de tamaños con `min()`, `max()` y `clamp()`
Definen valores mínimos, máximos y rangos para tamaños de elementos.*

```css
.texto {
  font-size: min(5vw, 40px);  /* Nunca supera 40px */
}

.contenedor {
  width: max(300px, 50%);  /* Mínimo 300px, pero crece hasta 50% */
}

.titulo {
  font-size: clamp(16px, 4vw, 32px); /* Entre 16px y 32px según el viewport */
}
```

## 3.3. - Control de tamaños con minmax()
La función `minmax(min, max)` permite definir un rango entre los 2 valores que le pasamos a la función. Resulta ser bastante útil para definir el tamaño de filas o columnas dentro de un contenedor `grid`.

>**Ejemplo de uso de `minmax()` dentro de un `grid`.**   
- **min:** Tamaño mínimo que puede tener la columna o fila.  
- **max:** Tamaño máximo que puede alcanzar la columna o fila.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo Grid con minmax()</title>
  <style>
    .grid-container {
      display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 15px;
        padding: 20px;
        background-color: #f5f5f5;
    }
    .grid-item {
      background-color: lightblue;
      border: 2px solid blue;
      padding: 20px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
  </div>
  <p id="info"></p>
		

  <script>
    // recuperar el contendido de grid
	  function updateGridInfo() {
      const grid = document.querySelector('.grid-container');
      const styles = getComputedStyle(grid);
      document.getElementById('info').textContent = 
        "Contenido de grid-template-columns: " + styles.getPropertyValue('grid-template-columns');
    }

    // llamar a la funcion actualizar
    updateGridInfo();

    // actualizar en tiempo real
    window.addEventListener('resize', updateGridInfo);			
  </script>
</body>
</html>
```

>**Explicación de la utilidad de minmax():**
- `minmax(200px, 1fr)`: Cada columna tiene al menos 200px, pero si hay más espacio disponible, se expandirá hasta llenar el ancho disponible.
- `auto-fill:` Se crean tantas columnas como quepan en la pantalla **aunque no todas se representen**.

## 3.4. - Funciones de control de color en CSS
CSS también incluye funciones para manipular colores:

### 3.4.1. `rgb()`, `rgba()`
Desde los primeros pasos de programación en `HTML + CSS`, llevamos utilizando esas funciones sin saber que eran funciones de CSS. 

```css
.contendor {
  background-color: rgba(52, 152, 219, 0.5);
}
```

### 3.4.2. - `hsl()`, `hsla()` – Control de tono, saturación y luminosidad**
```css
.texto {
  color: hsl(335, 61.10%, 7.10%); /* Azul puro */
}
```
>**Ejemplo 1 de uso simple de la funcion brillo**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Funciones sobre colores</title>
  <style>
    :root {
    --color-primario: red;    
    --color-texto: blanchedalmond;
    }
    .conFiltro, .sinFiltro {
      color: var(--color-texto);
      background-color: var(--color-primario);
    }
    .conFiltro {
      filter: brightness(0.5);
    }     
  </style>
</head>
<body>
  <article>
    <span class="sinFiltro">Texto al que no se le ajusta  el brillo</span>
    <br><br>
    <span class="conFiltro">Texto al que se le ajusta el brillo</span>
  </article>  
</body>
</html>
```

>**Ejemplo 2 de uso simple de la funcion de saturación**
En este caso la opacidad del color de fondo se ajusta (en tiempo real) al ancho del documento.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Saturacion Dinámica</title>
  <style>
    :root {
      --color-primario: red;
      --color-texto: blue;
    }
    .conFiltro, .sinFiltro {
      display: block;
      width: 20rem;
      color: var(--color-texto);
      background-color: var(--color-primario);
      margin: 2rem;
      padding: 20px;
      text-align: center;
      font-weight: bold;
    }
    .conFiltro {
      transition: filter 0.01s ease;
    }
  </style>
</head>
<body>
  <article>
    <span class="sinFiltro">Elemento al que no se le ajusta la opacidad</span>
    <span class="conFiltro">Elemento al que se le ajusta la opacidad</span>
  </article>
  <script>
    // Función para actualizar la opacidad basado en el ancho del viewport
    function updateOpacidad() {
      // ancho del viewport
      const viewportWidth = window.innerWidth;  
      // cálculo de la opacidad
      const opacidad = Math.min (0.95, -0.00075 * viewportWidth + 1.15);
      // Asignar el valor calculado al filtro de opacidad
      const conFiltro = document.querySelector('.conFiltro');
      conFiltro.style.backgroundColor = `rgba(255,0,0,${opacidad})`;  
    }
    // actualizar al cargar la página
    updateOpacidad();
    // evento stretch ventana
    window.addEventListener('resize', updateOpacidad);
  </script>
</body>
</html>
```

### 3.4.5. - Funciones de transformación
Aunque las veremos mas extensivamente dentro de la unidad sobre animaciones, existen funciones de CSS que permiten manipular, por ejemplo, el tamaño, la posición y la rotación de los elementos.

>**Ejemplos con `translate()`, `rotate()`, `scale()`**
```css
.caja {
  transform: translate(20px, 30px) rotate(15deg) scale(1.2);
}
```

### 3.4.6. - Funciones de filtros (`filter()`)**
Permiten aplicar efectos visuales como desenfoques, contrastes y escalas de grises.

>**Ejemplo de filtros en imágenes**
```css
.imagen {
  filter: grayscale(50%) brightness(120%);
}
```

# 4. Tarea RA2-CEg-3
