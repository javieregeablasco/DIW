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
Una animación en CSS es una técnica que permite cambiar de manera gradual los estilos de un elemento HTML a lo largo del tiempo, creando un efecto visual dinámico. 

Los objetivos básicos de las animaciones son:   
1️⃣ **Mejorar la experiencia del usuario (UX)** generando una experiencia atractiva y fluida, incentivando al usuario a seguir explorando.  

2️⃣ **Atraer o guiar la atención del usuario**: Las animaciones permiten destacar elementos clave, guiando la atención del usuario hacia la información más relevante.  

3️⃣ **Proporcionar retroalimentación** facilitando la comprensión de las acciones realizadas, indicando si una acción fue exitosa o no. 

## 2.1. - Componentes de una animación
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

>**Ejercicio 2:**  
Modificar el código para que realice la siguiente animación:

<video src="./code/43animCSS-3.mp4" controls>

# 3. Transiciones
Las transiciones permiten cambiar gradualmente los valores de las propiedades CSS de un elemento en un período de tiempo determinado, generando un efecto visual.

Los objetivos principales de las transiciones son:

1️⃣ **Mejorar la experiencia del usuario (UX)** al hacer que los cambios de estado sean fluidos y visualmente agradables.

2️⃣ **Atraer la atención del usuario**, ayudando a destacar elementos de la interfaz de usuario sin necesidad de animaciones complejas.

3️⃣ **Proporcionar retroalimentación visual**, indicando cambios de estado como efectos hover, activaciones o interacciones.

## 1.1. - Componentes de una transición
Las transiciones en CSS se definen con los siguientes componentes clave:

1. **Propiedad `transition`**: Permite especificar qué propiedad CSS cambiará, la duración de la transición, la función de tiempo y un posible retraso.
   
   La sintaxis básica de `transition` es:
   ```css
   transition: propiedad duración función-de-tiempo retraso;
   ```
   
   **Donde:**
   - **propiedad (transition-property):** Indica qué propiedad CSS será animada (ej. `opacity`, `background-color`, `transform`).
   - **duración (transition-duration):** Tiempo que tardará la transición en completarse (`s` o `ms`).
   - **función-de-tiempo (transition-timing-function):** Define la aceleración de la transición (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()`).
   - **retraso (transition-delay):** Especifica el tiempo de espera antes de que inicie la transición.
   
2. **Propiedades individuales de `transition`**: Se pueden definir las transiciones de manera más específica utilizando las siguientes propiedades:
   - `transition-property`: Define qué propiedad será afectada por la transición.
   - `transition-duration`: Especifica el tiempo de duración.
   - `transition-timing-function`: Controla la aceleración.
   - `transition-delay`: Indica el tiempo de espera antes de iniciar.
   
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

## 1.2. - Transición de múltiples propiedades
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

## 1.3. - Usando `all` en `transition-property`
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

> **Nota:** Usar `all` puede ser costoso en rendimiento si se aplica a muchos elementos.

## 1.4. - Diferencia entre `transition` y `animation`
| Característica       | `transition` | `animation` |
|----------------------|-------------|-------------|
| Necesita un evento  | Sí (hover, focus, etc.) | No, se ejecuta automáticamente |
| Se repite automáticamente | No | Sí (con `infinite` o `animation-iteration-count`) |
| Mayor control sobre la secuencia | No | Sí (con `@keyframes`) |
| Simplicidad | Fácil de usar | Más flexible pero más complejo |

Las transiciones son ideales para efectos simples y sutiles, mientras que las animaciones son mejores para efectos complejos con múltiples etapas.

> **Ejemplo práctico en HTML:**
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

> En este ejemplo, la caja gira 45 grados cuando el usuario pasa el ratón sobre ella.

---
Con estas técnicas, puedes mejorar la interactividad de tus interfaces con efectos fluidos y atractivos. 🎨🚀












Animaciones en CSS3
Transiciones en CSS3
Transformaciones en CSS3  



https://www.rafelsanso.com/transiciones-en-css3/

https://www.rafelsanso.com/transformaciones-en-css3/

https://lenguajecss.com/animaciones/


### 5.5.2 Tarea RA3-CEf-1  