---
Título: UD. 3.2 - Funciones y variables en CSS
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

# 1. - Introducción
Aunque CSS no sea una lenguaje de programación al uso, si que permite definir variables y dispone de una libreria de funciones que nos permitiran, entre otras, realizar animaciones.  


# 2. Variables CSS (`--nombre-variable`)**
Las **CSS Custom Properties** (variables CSS) permiten definir valores reutilizables y modificar estilos de manera flexible.


>**Ejemplo de variables CSS:**
```css
:root {
  --color-primario: #3498db;
  --tamano-texto: 16px;
}

.boton {
  background-color: var(--color-primario);
  font-size: var(--tamano-texto);
  padding: 10px;
}
```
📌 **Características**:
- Se definen con `--nombre-variable`.
- Se accede con `var(--nombre-variable)`.
- Se pueden redefinir dentro de **selectores específicos** para personalizar estilos.

---

## 🔹 **2. Variables CSS dinámicas**
Las variables pueden cambiar en función de eventos o condiciones.

### ✅ **Ejemplo con `hover`**:
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
📌 **Ventaja**: Permite cambiar valores sin necesidad de duplicar código.

---

## 🔹 **3. Funciones matemáticas en CSS**
CSS tiene varias funciones útiles para hacer cálculos en tiempo real.

### ✅ **3.1. `calc()` – Operaciones matemáticas**
```css
.caja {
  width: calc(100% - 50px);
  height: calc(50vh + 20px);
}
```
📌 **Usos comunes**:
- Restar márgenes dinámicamente.
- Combinar valores fijos y relativos.

---

### ✅ **3.2. `min()`, `max()` y `clamp()` – Control de tamaños**
📌 **Definen valores mínimos, máximos y rangos para tamaños de elementos.**

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
📌 **Ventajas**:
- **`min()`**: Usa el valor más pequeño.
- **`max()`**: Usa el valor más grande.
- **`clamp()`**: Define un rango adaptable.

---

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

### 🚀 **Resumen de funciones y variables en CSS nativo**
| Tipo | Ejemplo | Uso |
|------|---------|-----|
| **Variables CSS** | `--color: red;` | Reutilización de valores |
| **`var()`** | `color: var(--color);` | Acceder a variables CSS |
| **`calc()`** | `width: calc(100% - 50px);` | Cálculos dinámicos |
| **`min()` / `max()`** | `font-size: min(5vw, 40px);` | Tamaños responsivos |
| **`clamp()`** | `clamp(16px, 4vw, 32px);` | Rango adaptable |
| **Colores (`rgb()`, `hsl()`)** | `color: rgba(0, 0, 255, 0.5);` | Control de color y transparencia |
| **Transformaciones** | `rotate(15deg) scale(1.2);` | Efectos en elementos |
| **Filtros** | `filter: blur(5px);` | Aplicar efectos visuales |

---

### 📌 **Conclusión**
- CSS ha evolucionado y permite **programar estilos de manera flexible sin preprocesadores**.
- Puedes usar **variables, cálculos dinámicos y funciones avanzadas** para mejorar la mantenibilidad del código.
- **Con `calc()`, `clamp()`, `min()` y `max()` se pueden hacer diseños más responsivos sin media queries.**

📌 **¿Quieres un ejemplo más avanzado o aplicado a tu proyecto?** 🚀


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