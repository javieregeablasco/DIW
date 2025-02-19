---
Título: UD. 6.3 - Guía para la creación de sitios web accesibles
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

# 1 Guía para crear sitios web accesibles
A continuación, se presentan las mejores prácticas para crear una página web accesible.  

## 1.1 Estructura semántica correcta
Una **estructura semántica correcta** en el desarrollo web se refiere al uso adecuado de elementos HTML que describen el significado y la función del contenido, en lugar de solo su apariencia. Esto no solo mejora la accesibilidad, sino que también facilita el mantenimiento del código, mejora el SEO (optimización para motores de búsqueda) y permite una mejor interpretación del contenido por parte de navegadores y tecnologías de asistencia.

**¿Por qué es importante la semántica en HTML?**
1. **Accesibilidad**: Los lectores de pantalla y otras tecnologías de asistencia dependen de la semántica para interpretar y navegar el contenido.
2. **SEO**: Los motores de búsqueda utilizan la estructura semántica para entender el contenido y clasificar mejor las páginas.
3. **Mantenimiento**: Un código semántico es más fácil de leer y mantener, tanto para desarrolladores como para equipos colaborativos.
4. **Compatibilidad**: Los navegadores interpretan mejor el contenido semántico, lo que garantiza una experiencia consistente en diferentes dispositivos.

## 1.2 Elementos semánticos clave en HTML
La especificación HTML5 introdujo una serie de elementos semánticos que permiten estructurar el contenido de manera más clara y significativa.

:one: **Etiquetas de sección**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/BEM.png" width=50% />
   - `<header>`: Contiene el encabezado de la página o sección (por ejemplo, el logotipo y el menú de navegación).
   - `<nav>`: Define la sección de navegación (enlaces principales del sitio).
   - `<main>`: Contiene el contenido principal de la página.
   - `<section>`: Agrupa contenido temáticamente relacionado.
   - `<article>`: Representa contenido independiente y autónomo (por ejemplo, una entrada de blog).
   - `<aside>`: Contiene contenido relacionado pero no esencial (por ejemplo, una barra lateral).
   - `<footer>`: Define el pie de página o de una sección.

   Ejemplo de estructura básica:
   ```html
   <header>
     <h1>Mi Sitio Web</h1>
     <nav>
       <ul>
         <li><a href="#">Inicio</a></li>
         <li><a href="#">Acerca de</a></li>
       </ul>
     </nav>
   </header>
   <main>
     <section>
       <h2>Bienvenidos</h2>
       <p>Contenido de la sección...</p>
     </section>
     <article>
       <h3>Artículo destacado</h3>
       <p>Contenido del artículo...</p>
     </article>
   </main>
   <footer>
     <p>Derechos reservados © 2023</p>
   </footer>
   ```

---
  
2️⃣ **Encabezados (`<h1>` a `<h6>`)**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/headings.jpg" width=35% />
   - Definen la jerarquía del contenido. `<h1>` es el título principal, y `<h6>` es el menos importante.
   - Ejemplo:
     ```html
     <h1>Título principal</h1>
     <h2>Subtítulo</h2>
     <h3>Sección</h3>
     ```

---

:three: **Elementos de texto semántico**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/text%20semantic.jpg" width=35% />
   - `<p>`: Define un párrafo.
   - `<strong>`: Indica que el texto es importante (semánticamente, no solo visualmente).
   - `<em>`: Indica énfasis (cursiva semántica).
   - `<blockquote>`: Representa una cita extensa.
   - `<cite>`: Define el título de una obra (por ejemplo, un libro o película).
   - `<time>`: Representa una fecha u hora.

---

 :four: **Elementos multimedia**  
 <img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/mediaelements_cut.png" width=35% />
   - `<figure>` y `<figcaption>`: Se usan para agrupar imágenes, gráficos o videos con una leyenda.
   - `<img>`: Para imágenes, siempre con el atributo `alt` que describe la imagen.
   - `<audio>` y `<video>`: Para contenido multimedia.

---

:five: **Listas**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/listhtml.jpg" width=45% />
   - `<ul>`: Lista no ordenada.
   - `<ol>`: Lista ordenada.
   - `<li>`: Elemento de lista.
   - `<dl>`, `<dt>`, `<dd>`: Listas de definiciones.

## 1.3 Textos alternativos para imágenes y animaciones
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/atributo-alt.jpg"  />
Proporcionar semántica adecuada y descripciones alternativas (atributo <a href="https://html.spec.whatwg.org/multipage/images.html#alt">alt</a>) para todas las imágenes.

El atributo alt especifica un texto alternativo para navegadores que no puedan mostrar imágenes, formularios o aplicaciones. El idioma de este texto alternativo está especificado por el atributo lang.

Varios elementos no textuales (IMG, AREA, APPLET e INPUT) permiten a los autores especificar texto alternativo que sirva como contenido cuando el elemento no pueda ser representado normalmente. El especificar texto alternativo ayuda a los usuarios que no tengan terminales gráficas, a los usuarios cuyos navegadores no soporten formularios, a los usuarios con discapacidades visuales, a aquellos que utilicen sintetizadores de voz, a aquellos que hayan configurado sus agentes de usuario para no mostrar imágenes, etc.

>**Buenas prácticas de uso:**
- Semántica adecuada.
- Describir brevemente la imagen y su función.
- Si la imagen es decorativa, dejar el atributo `alt` vacío (`alt=""`).

**Ejemplo:**
- **Así no:**
```html
<img src="imagen-producto.jpg" alt="">
```
- **Así sí:**
```
<figure aria-label="Ilustración de un pájaro estilizado">
  <img src="img1.png" alt="Pájaro estilizado" class="imagen-pajaro">
  <figcaption>Esta es una ilustración artística de un pájaro estilizado, utilizada como parte del diseño visual.</figcaption>
</figure>
```
## 1.4 Contraste de colores adecuado
Asegúrarse de que el texto tenga un contraste suficiente con el fondo para facilitar la lectura.

>**Buenas prácticas de uso:**
- Usar herramientas como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) para verificar el contraste.
- Seguir las pautas <a href="https://www.w3.org/WAI/standards-guidelines/wcag/es">WCAG</a> que recomiendan un ratio mínimo de 4.5:1 para texto normal y 3:1 para texto grande.

**Ejemplo:**
```css
body {
  color: #333;
  background-color: #fff;
}
```
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/contraste.png">

## 1.5 Navegación solamente accesible con el teclado
Asegura que los usuarios puedan navegar por el sitio utilizando solo el teclado.

>**Buenas prácticas de uso:**
- Evitar trampas de teclado (elementos que no permiten salir de ellos).
- Utilizar el atributo `tabindex` para controlar el orden de tabulación cuando sea necesario.

**Ejemplo:**
```html
<header>
  <a href="#contenido-principal" tabindex="1" class="skip-link">Ir al contenido principal</a>
  <nav>
    <ul>
      <li><a href="#" tabindex="2">Inicio</a></li>
      <li><a href="#" tabindex="3">Servicios</a></li>
      <li><a href="#" tabindex="4">Contacto</a></li>
    </ul>
  </nav>
</header>

<main id="contenido-principal">
  <h1>Bienvenido a nuestro sitio</h1>
  <p>Pulsa "Tab" para navegar entre los enlaces.</p>
  
  <button tabindex="5">Botón con tabindex</button>
  <div tabindex="6" style="border: 1px solid #ccc; padding: 10px;">
    Puedes enfocar este div con `tabindex="6"`.
  </div>
</main>

```

## 1.6 Formularios accesibles
Etiquetar correctamente los campos de los formularios para que los usuarios con tecnologías de asistencia puedan interactuar con ellos.

>**Buenas prácticas de uso:**
- Usar la etiqueta `<label>` para cada campo de formulario.
- Asociar cada etiqueta con su campo mediante el atributo `for`.

**Ejemplo:**
```html
<form aria-labelledby="accessible-form" style="background-color: antiquewhite;">
  <h2 id="accessible-form">Formulario Accesible</h2>

  <label for="name">Nombre completo:</label>
  <input type="text" id="name" name="name" required aria-required="true">
  <br><br>

  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required aria-required="true">
  <br><br>

  <fieldset>
    <legend>Género:</legend>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Masculino</label><br>

    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Femenino</label><br>

    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Otro</label>
  </fieldset>
  <br>
```
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/formulario.png" width=75% />

## 1.7 Contenidos multimedia accesibles
Los elementos multimedia que tanto se utilizan en las páginas web hoy en día pueden ocasionar graves problemas de accesibilidad, ya no sólo a las personas con algún tipo de discapacidad, sino a todo el mundo en general. Al ser elementos que no son HTML requieren, en la mayoría de los casos, la instalación de un visor específico (plug-in, add-on o extensión) que sea capaz de interpretar el elemento multimedia.  

Por tanto, **como regla general**, no se debe abusar de los elementos multimedia y el diseñador de una página web se tiene que preguntar si es un elemento esencial que no se puede eliminar o sustituir por otro más accesible.

>**Buenas prácticas de uso:**
- Proporcionar subtítulos para los vídeos.
- Ofrecer transcripciones para los audios.

**Ejemplo:**
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  Tu navegador no soporta la reproducción de vídeos.
</video>
<p>Transcripción: [Descripción del contenido del vídeo]</p>
```

## 1.8 Enlaces de hipertexto
- Usar texto para el hipertexto que tenga sentido leído fuera de contexto. Por ejemplo, evitar abusar del **"pinchar aquí"**.  
- Algunos navegadores y algunos programas de ayuda que emplean las personas con discapacidad (por ejemplo, los lectores de pantalla) ofrecen al usuario la posibilidad de mostrar, normalmente en una ventana aparte, la lista de enlaces que contiene una página web. Si el texto de un enlace no tiene sentido fuera de su contexto, el enlace no tendrá sentido en esta lista de enlaces.  
- Por otro lado, si los enlaces poseen un estilo especial para resaltarlos, los usuarios suelen fijar su atención en ellos, por lo que es importante que el texto de los enlaces sea lo más claro y significativo posible.  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/enlace.png">

## 1.9 Uso de ARIA (Accessible Rich Internet Applications)
Las <a href="https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA/Attributes/aria-label">**WAI-ARIA** (**Web Accessibility Initiative – Accessible Rich Internet Applications**)</a> son un conjunto de atributos en HTML diseñados para mejorar la accesibilidad de aplicaciones web interactivas.

Las **ARIA** permiten que los elementos dinámicos en una página web sean comprensibles para tecnologías asistivas, como lectores de pantalla. Son especialmente útiles cuando usamos JavaScript para crear interfaces complejas con **menús desplegables, carruseles, pestañas o formularios avanzados**.  

La especificación de ARIA establece componentes que definen **roles, estados y propiedades de los elementos de la interfaz de usuario**.

### 1.9.1 Principales atributos de ARIA  
:one: **Roles (`role`)** → Definen la función de un elemento en la página.  
Ejemplo:  
```html
<div role="alert">¡Error! Debes completar el formulario.</div>
```
📌 El lector de pantalla interpretará este `div` como una alerta.  

---
  
:two: **Etiqueta accesible (`aria-label`)** → Proporciona una descripción accesible para un elemento que no tiene texto visible.  

Ejemplo:  
```html
<button aria-label="Cerrar ventana">❌</button>
```
📌 **Explicación**:  
- El botón solo muestra un icono (**❌**), lo que puede ser confuso para usuarios con discapacidad visual.  
- `aria-label="Cerrar ventana"` le indica al lector de pantalla su función real.

---  
 
:three: **Campo obligatorio (`aria-required`)** → Indica que un campo de formulario es obligatorio para completar el envío.  

Ejemplo:  
```html
<label for="email">Correo electrónico:</label>
<input type="email" id="email" aria-required="true">
```
📌 **Explicación**:  
- `aria-required="true"` informa a las tecnologías asistivas que este campo es obligatorio.  
- Un lector de pantalla podría anunciarlo como: **"Correo electrónico, campo obligatorio"**.  

---

4️⃣ **Landmarks (aria-*)** → Ayudan a estructurar mejor el contenido de la página para usuarios con tecnologías de asistencia.
**Ejemplo:**  
```
<header aria-labelledby="site-title">
  <h1 id="site-title">Mi Sitio Web</h1>
</header>

<nav aria-label="Menú principal">
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Servicios</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>

<main aria-labelledby="main-content">
  <h2 id="main-content">Bienvenido a nuestra página</h2>
  <p>Esta es la sección principal del contenido.</p>
</main>

<footer aria-label="Pie de página">
  <p>&copy; 2025 Mi Sitio Web</p>
</footer>
```
📌 Los aria-label y aria-labelledby ayudan a los lectores de pantalla a identificar claramente las secciones principales del sitio.  

---

:five: **Estados y Propiedades (`aria-state` y `aria-property`)** → Proporcionan información sobre el estado dinámico de un elemento en la página.  

📌 **Diferencia entre estado y propiedad:**  
- **Estados (`aria-*` de estado)** → Pueden cambiar dinámicamente con la interacción del usuario.  
- **Propiedades (`aria-*` de propiedad)** → Definen características estáticas del elemento y rara vez cambian.  

**Ejemplo de un estado (`aria-expanded`)**  
```html
<button aria-expanded="false" aria-controls="menu">Menú</button>
<ul id="menu" hidden>
  <li>Opción 1</li>
  <li>Opción 2</li>
</ul>
```
📌 **Explicación:**  
- `aria-expanded="false"` indica que el menú está contraído.  
- Cuando el usuario lo abra, el valor debe cambiar dinámicamente a `"true"`.  

✅ **Ejemplos de estados (`state`):**  
- `aria-checked="true"` → Para checkboxes o radio buttons.  
- `aria-disabled="true"` → Indica que un botón o campo está deshabilitado.  
- `aria-hidden="true"` → Oculta el elemento a tecnologías asistivas.  


**Ejemplo de una propiedad (`aria-labelledby`)**  
```html
<h2 id="titulo">Instrucciones</h2>
<p aria-labelledby="titulo">Sigue los pasos para completar el formulario.</p>
```
📌 **Explicación:**  
- `aria-labelledby="titulo"` indica que el `<p>` está relacionado con el `<h2>`.  
- El lector de pantalla leerá "Instrucciones: Sigue los pasos para completar el formulario".  

✅ **Ejemplos de propiedades (`property`):**  
- `aria-labelledby` → Relaciona elementos con un título.  
- `aria-describedby` → Proporciona una descripción adicional.  
- `aria-haspopup` → Indica si un botón abre un menú, diálogo, etc.  

---

:six: **Landmarks ARIA (`role` para regiones)** → Definen áreas importantes en una página web para mejorar la navegación con tecnologías asistivas.  

📌 **¿Para qué sirven?**  
Permiten que los usuarios de lectores de pantalla naveguen rápidamente entre secciones como encabezados, menús y contenido principal.  



**Ejemplo de landmarks ARIA en una página web**  
```html
<header role="banner">
  <h1>Mi Sitio Web</h1>
</header>

<nav role="navigation">
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Servicios</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>

<main role="main">
  <article>
    <h2>Bienvenido</h2>
    <p>Este es el contenido principal de la página.</p>
  </article>
</main>

<aside role="complementary">
  <h3>Noticias Recientes</h3>
  <p>Últimas novedades de nuestro blog.</p>
</aside>

<footer role="contentinfo">
  <p>&copy; 2025 Mi Sitio Web</p>
</footer>
```

📌 **Explicación:**  
- `role="banner"` → Identifica la cabecera del sitio.  
- `role="navigation"` → Define el menú de navegación.  
- `role="main"` → Marca el contenido principal.  
- `role="complementary"` → Para contenido secundario (como una barra lateral).  
- `role="contentinfo"` → Especifica la información del pie de página.  


### 1.9.2 Ejemplo de uso de ARIA en un menú desplegable  
```html
<button id="menuBtn" aria-haspopup="true" aria-expanded="false">
  Menú
</button>
<ul id="menu" role="menu" aria-hidden="true">
  <li role="menuitem">Opción 1</li>
  <li role="menuitem">Opción 2</li>
</ul>
```
  
- `aria-haspopup="true"` indica que el botón abre un menú.  
- `aria-expanded="false"` señala que el menú está cerrado.  
- `aria-hidden="true"` oculta el menú para lectores de pantalla hasta que se abra.  

### 1.9.3 ¿Cuándo usar ARIA y cuándo no?  
✔ **Usar ARIA** cuando los elementos nativos de HTML no son suficientes para describir la interacción.  
❌ **No usar ARIA innecesariamente**, ya que HTML5 ya ofrece mucha accesibilidad de forma predeterminada (por ejemplo, los `<button>` y `<input>` ya son accesibles sin ARIA).  

**Ejemplo:**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%206%20-%20Accesibilidad%20web%20/img/aria.png" width=50% />
