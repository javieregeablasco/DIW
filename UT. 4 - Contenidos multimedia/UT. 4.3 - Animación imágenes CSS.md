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

1. **@keyframes**: Define el comportamiento de la animación a lo largo de su duración. Especifica los estilos en diferentes momentos de la animación, generalmente desde el inicio hasta el final.  
Para definir los momentos clave `@keyframes`, se pueden usar porcentajes o palabras clave como `from` y `to` para definir el inicio y el final de la animación.

Ejemplo básico de `@keyframes`:

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

2. **Propiedad `animation`**: Se aplica al elemento al que se le asigna la animación. 
La sintaxis de `animation` es la siguiente:

```CSS
animation: nombre duración función-de-tiempo retraso contador dirección estado;
```
**Dónde:**
- **nombre:** Nombre de la trasnformaciones definida por el desarrollador. Este nombre se puede reutilizar para más objetos que tengan la misma transofmración. 
- **duración:** Tiempo que dura una repetición de la animación, en segundos. 
- **
    función-de-tiempo: es la aceleración que tendrá la animación. También vimos los principales tipos en las transiciones.
    retraso: el tiempo que pasará desde que se termine de cargar el contenido de la página y se inicie la animación.
    contador: las veces que se repite. Podemos usar infinite para que no termine.
    dirección: sería si la animación se mueve hacia delante o hacia atrás (normal o reverse).
    estado: si la animación se está reproduciendo o está pausada.




   Ejemplo de aplicación de la animación:
   ```css
   .caja {
     animation: mover 2s ease-in-out infinite;
   }
   ```

En este ejemplo, el elemento con la clase `.caja` se movería de su posición inicial a 100 píxeles a la derecha en 2 segundos, utilizando una animación con una curva de tiempo `ease-in-out` y repitiéndose de manera infinita.

Así es cómo puedes crear animaciones en CSS para hacer que tus páginas web sean más interactivas y visualmente atractivas.





Animaciones en CSS3
Transiciones en CSS3
Transformaciones en CSS3  


https://www.rafelsanso.com/animaciones-en-css3/

https://www.rafelsanso.com/transiciones-en-css3/

https://www.rafelsanso.com/transformaciones-en-css3/

https://lenguajecss.com/animaciones/


### 5.5.2 Tarea RA3-CEf-1  