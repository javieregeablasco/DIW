---
Título: UD. 3.2 - Funciones y variables en CSS
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

# 1. - Introducción
Aunque CSS no sea una lenguaje de programación al uso, si que permite definir variables y dispone de una libreria de funciones que nos permitiran, entre otras, realizar animaciones.  


# 2. Variables CSS
## 2.1. - Definición de las variables
Las **CSS Custom Properties** (variables CSS) permiten definir valores reutilizables y modificar estilos de manera flexible.
Por convención, las variables CSS se definen de la siguiente manera:    
```css
--nombre-variable: valor 
```

Y generalmente se colocan al principio de la hoja de estilos dentro de :root, lo que las hace globales a toda la hoja de estilos.
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
## 2.3. - Variables CSS dinámicas**
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
## 3. Funciones matemáticas en CSS
CSS tiene varias funciones útiles para hacer cálculos en tiempo real.

### 3.1. - Operaciones matemáticas con `calc()`
>**Ejemplo:**
```css
.container {
  width: calc(100% - 50px);
  height: calc(50vh + 20px);
}
```

## 3.2. - Control de tamaños con `min()`, `max()` y `clamp()`
Definen valores mínimos, máximos y rangos para tamaños de elementos.**

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

## 3.3. - Control de tamañox con minmax()

## 🔹 **4. Funciones de color en CSS**
📌 CSS incluye funciones para manipular colores:

### ✅ **4.1. `rgb()`, `rgba()` – Colores con transparencia**
```css
.caja {
  background-color: rgba(52, 152, 219, 0.5); /* Azul con 50% de opacidad */
}
```

### ✅ **4.2. `hsl()`, `hsla()` – Control de tono, saturación y luminosidad**
```css
.texto {
  color: hsl(200, 100%, 50%); /* Azul puro */
}
```

---

## 🔹 **5. Funciones de transformación**
📌 Manipulan el tamaño, posición y rotación de elementos.

### ✅ **Ejemplo con `translate()`, `rotate()`, `scale()`**
```css
.caja {
  transform: translate(20px, 30px) rotate(15deg) scale(1.2);
}
```

---

## 🔹 **6. Funciones de filtros (`filter()`)**
📌 Aplican efectos visuales como desenfoques, contrastes y escalas de grises.

### ✅ **Ejemplo de filtros en imágenes**
```css
.imagen {
  filter: grayscale(50%) brightness(120%);
}
```

---



poner el minmax de grid

https://blog.soaresdev.com/guia-rapido-css-grid/
https://lenguajecss.com/css/grid/que-es-grid/
https://css-tricks.com/snippets/css/complete-guide-grid/
https://www.joshwcomeau.com/css/interactive-guide-to-grid/
https://victorroblesweb.es/2022/10/19/como-funciona-css-grid-layout/
https://oscarmaestre.github.io/lenguajes_marcas/tema3.html#maquetacion-avanzada-con-grid-layouts

https://www.youtube.com/watch?v=Fj6BGtNvXIc




funciones de filtros para colores https://lenguajecss.com/css/efectos/filtros-css/  
formas básicas  https://lenguajecss.com/css/mascaras-y-recortes/formas-basicas/  
responsive design https://lenguajecss.com/css/responsive-web-design/que-es/  
transformaciones https://lenguajecss.com/css/transformaciones/transform/