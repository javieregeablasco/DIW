---
Título: UD. 5.3 - Sprites con Sass 
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

# 1 Introducción
## 1.1 ¿Qué es un sprite?
Un sprite es una imagen que contiene **múltiples gráficos pequeños combinados en una sola imagen**. Mediante CSS y Sass (para simplificar su uso), se pueden mostrar solo las partes específicas de la imagen que se necesitan.  

**Ejemplo de sprite**  
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/sprite.png" width=50%>

## 1.2 ¿Por qué usar sprites?
Los origines de los sprites emergen de las conexiones a internet deficientes y de la necesidad de mejorar el rendimiento y la eficiencia de cargar de las páginas web. 

## 1.3 Ventajas de usar sprites
- **Reducción de solicitudes al servidor:** Al solo usar una imágen (multiple), se disminuye el número de peticiones HTTP.
- **Optimización del rendimiento:** Menos peticiones significa tiempos de carga más rápidos.
- **Consistencia visual:** Los sprites aseguran que todas las imágenes se carguen al mismo tiempo, evitando que algunos íconos se queden en blanco mientras se descargan.
- **Facilidad de mantenimiento:** Permiten centralizar la gestión de gráficos pequeños en un solo archivo, haciendo más fácil actualizarlos o reemplazarlos.

## 1.4 Formatos de imágenes admisibles  
Todos los formatos son admisibles pero los sprites se usan principalmentes con png y svg.
- **PNG:**
  - Es el formato más utilizado para sprites tradicionales debido a su soporte para transparencia y alta calidad de imagen.
  - Es ideal para gráficos pequeños como íconos y botones.

- **SVG:**  
  - Muy popular para sprites modernos, especialmente en gráficos escalables y dinámicos, ya que es un formato basado en vectores.
  - Ofrece flexibilidad en términos de edición, animación y calidad sin pérdida de resolución.

- **Otros formatos (JPG, GIF):**  
   - Técnicamente admisibles, pero menos comunes para sprites. El JPG no soporta transparencia, y el GIF es limitado en calidad y rendimiento.

# 2 Sprites sobre imágenes raster
## 2.1 Creación de la imágen
### 2.1.1 Herramientas para crear sprites.
Existen todo tipo de herramientas para construir sprites, desde **preprocesadores CSS**, hasta **generadores de iconos**.   
**1. Preprocesadores CSS**  
   - Sass, Less.
      
**2. Automatizadores de Tareas**
   - Gulp, Grunt, Webpack, Parcel.

3. **Generadores de Sprites Online**
   - Sprite Cow, Spritesmith, Shoebox.

4. **Programas de Diseño Gráfico**
   - Photoshop, Illustrator, Figma, Sketch.

5. **Herramientas de Optimización de Imágenes**
   - ImageMagick, TinyPNG, ImageOptim.

6. **Frameworks y Librerías Front-End**
   - Tailwind CSS, Bootstrap Icons.

7. **Herramientas de Desarrollo Visual**
   - TexturePacker, Shoebox.

8. **Herramientas de Generación de Iconos**
   - IcoMoon, Fontello.

### 2.1.2 Definir el tamaño del sprite 
 - Crear una imagen como un cuadrado (o rectángulo) donde cada lado sea un multiple exacto de un icono.  
 (Por ejemplo, para un icono de 48px x 48px, usar 528px x 528px).
>**Pregunta:** ¿Cuantos iconos caben en una fila de esa imagen?

### 2.1.3 Planificación de la imagen
 - Definir la cantidad de columnas y filas.
 - Como lo veremos más adelante, es habitual trabajar con porcentajes, así pues, aumentar en 1 la cantidad de columnas/filas para acomodar los porcentajes, ya que el conteo comienza en 0 y termina en 100.
 - Cantidades recomendadas de columnas/filas: **2, 3, 5, 6, 11**  
 **Ejemplo:**  
     - 2: 0%, 100%  
     - 3: 0%, 50%, 100%  
     - 5: 0%, 25%, 50%, 75%, 100%  
     - 6: 0%, 20%, 40%, 60%, 80%, 100%  
     - 11: 0%, 10%, 20%, [...], 90%, 100%.

### 2.1.3 Añadir guías
 - Agregar guías en cada intervalo de columnas y filas *(ej. 16px, 48px, 96px, 144px, ...)* para alinear los iconos correctamente.
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/guias.webp">

### 2.1.4 Colocar las imágenes
 - Alinear las imágenes en la cuadrícula.
<img src="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/colocarImagenes.webp"> 
 - Recortar o escalar la imagen si es necesario.

## 2.2 Gestión del sprite con SCSS, ejemplo práctico
Después de crear la imagen del sprite, utilizaremos SCSS para gestionar los iconos de las imágenes. 
### 2.2.1 Archivo sprite
Importar el archivo y visualizar su contenido.
<a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/flags.png">link al archivo</a>

### 2.2.2 Usar directivas
```
@use "sass:list";
```

### 2.2.3 Crear las variables del proyecto
$spriteArchivoFuente: './media/flags.png';  
$ancho: 44px;  
$alto: 30px;  
$spriteRango: 0.413223;  

$listaPaises: "ad", "ae", "af", "ag", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", 
"aw", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br",
"bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", 
"cm", "cn", "co", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", 
"ec", "ee", "eg", "eh", "er", "es", "et", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gd", 
"ge", "gf", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", 
"hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "in", "io", "iq", "ir", "is", "it", 
"jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la",
"lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg",
"mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx",
"my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om",
"pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "pt", "pw", "py", "qa", "re", 
"ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", 
"sm", "sn", "so", "sr", "ss", "st", "sv", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", 
"tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "ty", "tz", "ua", "ug", "gb", 
"um", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "za", 
"zm", "zr", "zw";

$listaNombrePais: "Andorra", "United Arab Emirates", "Afghanistan", "Antigua and Barbuda", "Albania", "Armenia", 
"Netherlands Antilles", "Angola", "Antarctica", "Argentina", "American Samoa", "Austria", "Australia", 
"Aruba", "Azerbaijan", "Bosnia and Herzegovina", "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", 
"Bahrain", "Burundi", "Benin", "Bermuda", "Brunei Darussalam", "Bolivia", "Brazil", "Bahamas", "Bhutan", 
"Bouvet Island", "Botswana", "Belarus", "Belize", "Canada", "Cocos (Keeling) Islands", "Congo (Kinshasa)", 
"Central African Republic", "Congo (Brazzaville)", "Switzerland", "Côte d'Ivoire", "Cook Islands", "Chile", 
"Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cape Verde", "Christmas Island", "Cyprus", 
"Czech Republic", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic", "Algeria", 
"Ecuador", "Estonia", "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", 
"Falkland Islands", "Micronesia", "Faroe Islands", "France", "Gabon", "Grenada", "Georgia", 
"French Guiana", "Ghana", "Gibraltar", "Greenland", "Gambia", "Guinea", "Guadeloupe", "Equatorial Guinea", 
"Greece", "South Georgia and the South Sandwich Islands", "Guatemala", "Guam", "Guinea-Bissau", 
"Guyana", "Hong Kong", "Heard Island and McDonald Islands", "Honduras", "Croatia", "Haiti", 
"Hungary", "Indonesia", "Ireland", "Israel", "India", "British Indian Ocean Territory", "Iraq", 
"Iran", "Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", 
"Kiribati", "Comoros", "Saint Kitts and Nevis", "North Korea", "South Korea", "Kuwait", 
"Cayman Islands", "Kazakhstan", "Laos", "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", 
"Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco", 
"Moldova", "Montenegro", "Madagascar", "Marshall Islands", "North Macedonia", "Mali", "Myanmar", 
"Mongolia", "Macau", "Northern Mariana Islands", "Martinique", "Mauritania", "Montserrat", 
"Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", 
"New Caledonia", "Niger", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands", "Norway", 
"Nepal", "Nauru", "Niue", "New Zealand", "Oman", "Panama", "Peru", "French Polynesia", "Papua New Guinea", 
"Philippines", "Pakistan", "Poland", "Saint Pierre and Miquelon", "Pitcairn Islands", "Puerto Rico", 
"Portugal", "Palau", "Paraguay", "Qatar", "Réunion", "Romania", "Serbia", "Russia", "Rwanda", 
"Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Saint Helena", 
"Slovenia", "Svalbard and Jan Mayen", "Slovakia", "Sierra Leone", "San Marino", "Senegal", 
"Somalia", "Suriname", "South Sudan", "Sao Tome and Principe", "El Salvador", "Syria", 
"Eswatini", "Turks and Caicos Islands", "Chad", "French Southern Territories", "Togo", 
"Thailand", "Tajikistan", "Tokelau", "Timor-Leste", "Turkmenistan", "Tunisia", "Tonga", 
"East Timor", "Turkey", "Trinidad and Tobago", "Tuvalu", "Taiwan", "Tuvalu", "Tanzania", 
"Ukraine", "Uganda", "United Kingdom", "United States Minor Outlying Islands", "United States", 
"Uruguay", "Uzbekistan", "Vatican City", "Saint Vincent and the Grenadines", "Venezuela", 
"British Virgin Islands", "U.S. Virgin Islands", "Vietnam", "Vanuatu", "Wallis and Futuna", 
"Samoa", "Yemen", "South Africa", "Zambia", "Zaire", "Zimbabwe";

>**Pregunta:** ¿De donde viene el valor de $spriteRango: 0.413223?

### 2.2.4 Definir los estilos básicos
```
.bandera {
  display: flex;
  flex-direction: row;
  width: $ancho;
  height: $alto;  
  background: url($spriteArchivoFuente) no-repeat;
  background-size: 100%;  
  margin-top: 10px;
  margin-bottom: 10px;
}
```  
**Explicación del código:**  
Este estilo establece un contenedor que tiene un tamaño definido por las variables $ancho y $alto y establece **una imagen de fondo** que se ajusta al tamaño del contenedor.  

### 2.2.5 Definir e instanciar las funciones del proyecto
Como acabamos de ver en el archivo sprite, la primera imagen es una `dummy` para cuando se escriba mal <a href="https://www.sanidad.gob.es/ciudadanos/saludAmbLaboral/docs/codigoIsoPai.pdf">**el código del país**</a>.  
Así pues, será conveniente invertir la lista de paises para empezar por el final.
```
@function funcionInvertirLista($listado) {
  $listaInvertida: ();
  @for $i from list.length($listado) through 1 {
    $listaInvertida: list.append($listaInvertida, list.nth($listado, $i));
  }
  @return $listaInvertida;
}

$listaInvertida: funcionInvertirLista($listaPaises);
$listaInvertidaPais: funcionInvertirLista($listaNombrePais);
```
**Explicación del código:**  
La función `funcionInvertirLista` toma una lista como argumento y devuelve una nueva lista en la que los elementos están invertidos respecto al orden de la lista original.  
Utiliza un bucle @for para recorrer la lista original desde el final hasta el principio, añadiendo los elementos uno por uno a la nueva lista invertida.  
`list.nth($listado, $i)` devuelve el elemento de la lista $list en la posición $i.  
`list.append($listaInvertida, list.nth($listado, $i))` agrega un nuevo elemento al final de la lista $listaInvertida.  
`$listaInvertida` y `$listaInvertidaPais` instancian `funcionInvertirLista()`y `funcionInvertirLista()` respectivamente, para obtener el inverso de las listas que se les pasan por argumento.  

### 2.2.6 Definir los estilos para cada país
A continuación se definen los estilos de cada país siguiendo el siguiente esquema, `.bandera-XX`, donde XX es el código de país.  
Para ello se utilizará un **bucle @each**. Para fines cosméticos, se añade al estilos un pseudo elemento **::after** que añade, como contenido adicional, el nombre completo del país.  
```
@each $pais in $listaInvertida {
  $i: list.index($listaInvertida, $pais);   
  
  .bandera-#{$pais} {
    background-position: 0% (100% - ($spriteRango * ($i - 1)) * 1%);  
   
    &::after{ 
      position: relative;
      left: 50px;
      top: 5px;                
      white-space: nowrap;
      content: list.nth($listaInvertidaPais, $i);
    }      
  }   
}
```
**Explicación del código:**  
`@each $pais in $listaInvertida {}` itera sobre la lista `$listaInvertida`. A cada iteración, el valor actual de la lista se asigna a la variable `$pais`.  
`$i: list.index($listaInvertida, $pais)` devuelve el índice (la posición) de un valor dentro de la lista `$listaInvertida`.  
`.bandera-#{$pais} {}` define una clase con el nombre de cada país. Por ejemplo, si el valor de `$pais` es "España", el selector será `.bandera-España`.  
`background-position: 0% (100% - ($spriteRango * ($i - 1)) * 1%)` establece **la posición vertical** de fondo** (x estará siempre a 0%).    

### 2.2.5 Definir un HTML básico para ver el resultado
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Sprite</title>
</head>
<body>
  <body>
    <span class="bandera bandera-zz"></span>
    <span class="bandera bandera-nl"></span>
    <span class="bandera bandera-ro"></span>
    <span class="bandera bandera-ch"></span>
    <span class="bandera bandera-ca"></span>
    <span class="bandera bandera-gb"></span>
    <span class="bandera bandera-au"></span>
  </body>
</body>
</html>
```
>**Ejercicio, reflexión:**  
>¿La clase `bandera-zz`existe?
>¿Cual es la bandera representada?
>¿Por qué se ha pintado esa bandera?  

### 2.2.6 Tarea RA3CEd
Modularizar el siguiente código para que el bucle llame a un `@mixin estilos-bandera` el cual será el encargado de crear los estilos `.bandera-#{$pais}`
```
@each $pais in $listaInvertida {
  $i: list.index($listaInvertida, $pais);   
  
  .bandera-#{$pais} {
    background-position: 0% (100% - ($spriteRango * ($i - 1)) * 1%);  
   
    &::after{ 
      position: relative;
      left: 50px;
      top: 5px;                
      white-space: nowrap;
      content: list.nth($listaInvertidaPais, $i);
    }      
  }   
}
```
# 3 Sprites sobre imágenes vectoriales
## 3.1 Creación del archivo sprite SVG. Ejemplo práctico
Para el ejemplo utilizaremos un set de imágenes similar al del ejemplo anterior.  
Para ello, descargaremos un set de banderas de la página web de <a href="https://nucleoapp.com/">**Nucleo**</a> previa instalación de la aplicación gratuita pero de uso limitado **Nucleo**.  
Luego con la ayuda del editor de sprites online <a href="https://svgsprit.es/">**svgsprit**</a> convertimos el set de archivos de banderas a un único <a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/spriteBanderasSVG.svg">**spriteBanderasSVG.svg**</a>.  

Si visualizamos el archivo veremos la siguiente estructura.
```
<svg width="0" height="0" class="hidden">
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="cameroon">
    <title>cameroon</title>
    <g>
      <path ...></path>
    </g>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="cape-verde">
    <title>cape verde</title>
    <g>
      <path ...></path>
    </g>
  </symbol>
  ...
```
En el código, vemos que se ha usado la etiqueta `<symbol>` que se utiliza para definir elementos gráficos reutilizables.  
Las imágenes no se renderizan cuando se definen con `<symbol>`, sino que deben ser referenciados posteriormente con una etiqueta `<use>` como veremos a continuación.  

## 3.2 Creación de los estilos con Sass.
Podemos definir una clase por país con el siguiente código.  
**Nota:**
Las variables `$listaPaises` y `$codigoPaises` se pueden descargar <a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/img/variablesBanderasSpriteSVG.txt">**aquí**</a>.
```
@use "sass:list";

$listaPaises: "...";
$codigoPaises: "...";

@each $pais in $codigoPaises {
    $i: list.index($codigoPaises, $pais);    
    .bandera-#{$pais} {
      &::after{ 
        position: relative;
        left: -60px;
        bottom: 70px;       
        white-space: nowrap;
        font-size: 32px;
        font-weight: bold;
        content: list.nth($listaPaises, $i);
      }      
    }   
  }

```
Para visualizar el resultado podemos usar el siguiente código:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Sprite</title>
</head>
<body>
    <div class="bandera-cm">
      <svg>
        <use xlink:href="spriteBanderasSVG.svg#cameroon"></use>
      </svg>  
    </div>
    <div class="bandera-ca">
      <svg>
        <use xlink:href="spriteBanderasSVG.svg#canada"></use>
      </svg>  
    </div>
</svg>  
  
</body>
</html>
```
**Comentarios del código:**  
El código utiliza la etiqueta `<svg>` junto con `<use>` para incluir **una imagen** del archivo `spriteBanderasSVG.svg`.

```<use xlink:href="spriteBanderasSVG.svg#canada"></use>```
1. **`<use>`:** Etiqueta que se utiliza para incluir un elemento de un archivo SVG o un archivo SVG externo.  
2. **`xlink:href="spriteBanderasSVG.svg#canada"`:**  
   - **`xlink:href`:** Atributo utilizado para especificar la ubicación del elemento que se va a incluir. 
   - **`spriteBanderasSVG.svg`:** Archivo SVG externo donde está definido el elemento gráfico.
   - **`#canada`:** Identificador único (`id`) del símbolo o elemento gráfico dentro de ese archivo.

## 3.3 Tarea RA3CEe
1. Realizar un **sprite SVG** que incluya una colección de iconos de redes sociales (mínimo 3 iconos).
2. Crear un archivo de estilos Sass que cree unos estilos para cada imagen.
3. Al pasar por encima de los iconos, estos deberán ampliarse en un factor x1.05 (sois libres de usar propiedades de SVG o de CSS para realizar la animación).
4. Al pinchar encima del icono, estos deberán enlazar a la red social correspondiente.
5. Al soltar el ratón, se emitirá <a href="https://github.com/javieregeablasco/DAW/blob/main/DIW/UT.%205%20-%20SASS/audio/notification.mp3">**este sonido**</a>. 
6. Renderizar el resultado con un HTML. Optimizar el HTML para que las etiquetas sean coherentes con su contenido.
7. Subir vuestras soluciones a la tarea de aules correspondiente. La entrega deberá incluir el archivo.svg, el Sass y el HTML.
