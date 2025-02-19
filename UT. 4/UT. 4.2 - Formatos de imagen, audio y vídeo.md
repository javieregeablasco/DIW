---
Título: UD. 4.2 - Formatos de imagen, audio y vídeo.
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

# 1. - Introducción
La gran popularidad de internet reside en el uso de contenidos multimedia, como imagenes, audios y videos. De hecho, se ha demostrado que estos contribuyen ampliamente a mejorar la experiencia del usuario (UX).  

No obstante, el uso o abuso de contenidos multimedia en una página web puede presentar diversos problemas como, por ejemplo, ralentizar la carga de la misma, presentar problemas de compatibilidad, etc. Por ese motivo es importante identificar correctamente los formatos adecuados para optimizar la carga, calidad y compatibilidad entre diferentes navegadores y dispositivos.

# 2. - Formatos de Imagen
En las interfaces web, las imágenes son un componente visual clave. Disponemos de muchos formatos, cada uno tiene sus propias características en términos de calidad, vistosidad y tamaño.  

Este apartado se dividirá entre las imágenes rasterizadas y las imagens vectoriales. 
-  Los **formatos de imagen rasterizados** (JPEG, PNG y GIF) están compuestos por una matriz de píxeles, donde cada píxel tiene un color específico. Son ideales para fotografías y gráficos complejos con muchos detalles, pero pierden calidad cuando se amplían, ya que la resolución es fija.  
-  Los **formatos de imagen vectoriales** (SVG) están formados por fórmulas matemáticas que definen formas, líneas y colores. Son escalables sin pérdida de calidad, lo que los hace perfectos para logotipos, iconos y gráficos simples.

## 2.1 - Formatos de imagenes rasterizados
### 2.1.1 - Formato de imagen JPG y JPEG  
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/JPEG_format_logo.svg/250px-JPEG_format_logo.svg.png" width=10%>  

El formato JPEG (Joint Photographic Experts Group) es un formato de imagen muy común debido a su eficiencia en la compresión de imágenes fotográficas. Utiliza compresión **con pérdida**, al reducir el tamaño del archivo eliminando información de la imagen que el ojo humano no puede percibir fácilmente. 
  
-  **Casos típicos de uso de imágenes en formato JPG JPEG:**
  
    **Imágenes de contenido:** Ya sea para el blog, páginas web o nuestras redes sociales.

    **Imágenes de producto:** Siempre que los mismos **no requieran de fondo transparente**.

    **Imágenes de fondo:** Al permitir una buena optimización su uso es típico en fondos y efectos decorativos.  
---
### 2.1.2 - Formato de imagen PNG  
<img src="https://cdn.icon-icons.com/icons2/2063/PNG/512/format_extension_png_page_file_icon_124654.png" width=18%>  

El formato PNG (Portable Network Graphics) destaca por la posibilidad de comprimir imágenes **sin pérdidas** y de ofrecer una profundidad de color de hasta 24 bits por píxel. Con el formato PNG **no se pueden generar animaciones**.    

El formato PNG soporta tanto la transparencia como la semitransparencia (gracias al canal alfa integrado).    

Los mecanismos de corrección del color y del brillo garantizan que los archivos de imagen en formato PNG tengan más o menos la misma apariencia en los diferentes sistemas.    

A causa del proceso de compresión sin pérdidas, los archivos son relativamente grandes, de modo que el formato no resulta tan adecuado para la presentación de fotografías.    
  
-  **Casos típicos de uso de imágenes en formato PNG:**  
  
    **Almacenamiento y publicación** de imágenes y gráficos pequeños (logotipos, iconos, barras, etc.).
   
    **Gráficos con transparencia.**
   
    **Fotos sin pérdidas.**
---   
### 2.1.3 - Formato de imagen BMP  
<img src="https://cdn.icon-icons.com/icons2/265/PNG/512/BMP_29699.png" width=15%>  
  
El formato BMP (Windows bitmap), inicialmente desarrollado para **sistemas operativos Microsoft e IBM** es un formato de almacenamiento para mapas de bits con una profundidad de color de hasta 24 bits por píxel.  

El formato de imagen **sin comprimir** asigna a cada píxel un valor cromático, por lo que los archivos suelen ser muy grandes, motivo por el que el formato **no es adecuado** para su uso en páginas web.

-  **Aplicación recomendada:** Almacenamiento de fotos/gráficos en el ámbito offline. 
---
### 2.1.4 - Formato de imagen GIF  
<img src="https://cdn.icon-icons.com/icons2/265/PNG/512/GIF_29666.png" width=15%>  

El formato GIF (Graphics Interchange Format) es una trama que utiliza la compresión sin pérdidas de calidad para imágenes de hasta 256 colores.  

Por ese motivo, con imágenes con más de 256 colores, la imagen debe adaptarse (reducire la cantidad de colores), lo que produce una consecuente pérdida de calidad.  

Su limitación de 8 bits hace que el tamaño del archivo sea pequeño, lo que le ideal para crear contenidos **de animación** cortos y atractivos.  

A pesar de su limitada calidad de imagen, mucha gente utiliza el GIF porque permite ofrecer un contenido visual más elaborado que una imagen estática.

-  **Casos típicos de uso de imágenes en formato GIF:**  
  
    **Animaciones simples.**
   
    **Indicadores de carga.**
   
    **Memes y reacciones.**
---
### 2.1.5 - Formato de imagen HEIF  
<img src="https://www.keycdn.com/img/blog/heif-lg.webp" width=20%>  

El formato HEIF (High Efficiency Image Format) no es ampliamente utilizado en la web, aunque tiene potencial debido a su eficiencia en la compresión de imágenes (mayor calidad y menor tamaño que JPEG).  

HEIF es más común en dispositivos móviles, especialmente en productos de Apple, donde se usa por defecto para capturar fotos.

El formato HEIF aún no ha sido adoptado como un estándar en la web porque presenta una **compatibilidad limitada** con algunos navegadores y sobre todo porque existen **alternativas más populares** como el formato **WebP**.  
  
---   
### 2.1.6 - Formato de imagen WebP  
<img src="https://media.licdn.com/dms/image/v2/D4E12AQGnkP8ZTlAgPw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706057357099?e=1734566400&v=beta&t=ed5Iq-yM8dtCQU15_92WkfMyogz8DMbBRW7r5rn1SJo" width=13%>  

El formato WEBP es una alternativa relativamente nueva para imágenes en la web y fue desarrollada por Google. Este formato utiliza **una combinación de compresión sin pérdida y con pérdida** para lograr tamaños de archivo más pequeños que los formatos de imagen anteriores.  

El formato WEBP es compatible con transparencia y es compatible con imágenes animadas, lo que lo hace ideal para banners o publicidad en línea.  

Otra característica del formato WEBP es que puede mostrar una imagen progresivamente, lo que puede mejorar significativamente el tiempo de carga de la página web y mejorar la experiencia del usuario.  

Como **principal inconveniente** el formato WEBP no es compatible con todos los navegadores web y plataformas de redes sociales.

---
## 2.2 - Formatos de imagenes vectoriales
### 2.2.1 - Formato SVG
<img src="https://cdn.icon-icons.com/icons2/1098/PNG/512/1485481342-5_78632.png" width=15%>  

El formato SVG (Scalable Vector Graphics) es un formato de imagen vectorial basado en XML que soporta transparencia y animaciones. Esto permite que las imágenes sean escalables sin perder calidad haciendolas ideales para gráficos e iconos de alta calidad en diferentes tamaños y resoluciones.

-  **Casos típicos de uso de imágenes en formato SVG:**  
  
    **Logotipos y marcas.**
   
    **Iconos y elementos gráficos.** (botones, ...)
   
    **Animaciones.** Los SVG permiten animaciones interactivas utilizando CSS o JavaScript.
---
### 2.2.2 - Formato EPS
<img src="https://cdn.icon-icons.com/icons2/265/PNG/512/EPS_29667.png" width=13%>  

El formato EPS (Encapsulated PostScript) se utiliza para guardar ilustraciones o trabajos de diseño gráfico en programas de ilustración como Adobe Illustrator y CorelDraw.  

Utilizado principalmente en gráficos profesionales es útil para crear imágenes de alta calidad. 

Aunque se pueda encontrar, no es muy común en la web y generalmente se convierte a SVG o PNG para su visualización.

---
### 2.2.3 - Formato PDF
<img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_pdf_icon_130274.png" width=18%>  

El formato PDF (Portable Document Format) es muy familiar como formato de documento, pero también puede utilizarse para guardar imágenes e ilustraciones.  

Un archivo PDF se basa en el mismo lenguaje PostScript que el EPS. Es un vector con compresión sin pérdidas, lo que te permite ampliar una imagen PDF tanto como un desea.

También es la mejor opción para los informes visuales interactivos o las infografías, ya que es indexable y tiene texto que se puede buscar.  

También es posible incluir elementos interactivos en un PDF, por ejemplo, enlaces y botones CTA.

---
## 2.3 - Tabla resumen / comprativa de los 4 formatos de imágenes mas populares.

| Característica         | JPG                                     | PNG                                                         | GIF                      | SVG                                          |
|------------------------|-----------------------------------------|--------------------------------------------------------------|--------------------------|----------------------------------------------|
| **Esquemas de color**   | RGB, escala de grises, CMYK             | RGB, escala de grises, colores indexados                     | Colores indexados         | RGB, nombres de color de SVG                 |
| **Número de colores**   | Hasta 16,7 mill.                        | Hasta 18 trillones                                           | Hasta 256                 | Hasta 16,7 mill.                             |
| **Canales de color**    | Tres                                    | Tres (más un canal alfa)                                     | Uno                      | Tres (más un canal alfa)                     |
| **Profundidad de bits** | 8 bits por canal                        | 1-16 bits por canal                                          | 1-8 bits                 | 8 bits por canal                             |
| **Compresión**          | Alta, con pérdidas                      | Alta, sin pérdidas                                           | Escasa                    | Ninguna                                      |
| **Tamaño de archivos**  | Muy pequeño                             | Pequeño                                                      | Grande                    | Individual                                   |
| **Animaciones**         | No                                      | No                                                           | Sí                        | Sí                                           |
| **Adecuado para**       | Fotos                                   | Imágenes y gráficos de pequeña envergadura (ej: logotipos), fotos sin pérdidas | Animaciones               | Todo tipo de gráficos (logotipos, iconos, diagramas, etc.) |

# 3. - Formatos de Audio
El audio en las interfaces web se utiliza principalmente en contenido multimedia, como videos o podcasts. Los formatos deben ofrecer un equilibrio entre calidad y tamaño de archivo.  
Existen muchos tipos de formatos de audio (mp3, wav, ogg, mp4…). Los que más se utilizan en la web son los formatos mp3 y ogg.

## 3.1 - Formato MP3
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Mp3.svg/250px-Mp3.svg.png" width=20%>  

El formato MP3 (MPEG 1 Layer 3) fue creado por el Instituto Fraunhofer. Su extraordinario grado de compresión y alta calidad lo ha convertido en el candidato ideal para publicar audios en la web.
  - **Ventajas**: Alta compatibilidad, buena compresión con pérdida aceptable.  
  - **Desventajas**: Calidad limitada en tasas de bits bajas.
  - **Usos**: Música, podcasts, efectos de sonido.  


## 3.2 - Formato OGG
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ogg_Logo.svg/250px-Ogg_Logo.svg.png" width=15%>

Desarrollado por la fundación Xiph.org, es libre y de código abierto (a diferencia del formato MP3). 
  - **Ventajas**: Libre de patentes, buena calidad y compresión.
  - **Desventajas**: Menor soporte en algunos navegadores comparado con MP3.
  - **Usos**: Alternativa a MP3 en navegadores que lo soporten.

## 3.3 - Formato WAV
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/AudacityWAV.png/100px-AudacityWAV.png" width=10%>

El formato WAV (WaveForm Audio File) es un archivo que desarrolló originalmente Microsoft para guardar audio.
  - **Ventajas**: Sin pérdida de calidad, alta fidelidad.
  - **Desventajas**: Tamaño de archivo muy grande.
  - **Usos**: Audio de alta calidad, efectos de sonido breves.


# 4. - Formatos de Video
El video es otro recurso de las interfaces web, pero su uso intensivo de datos requiere formatos que ofrezcan buena compresión sin sacrificar demasiada calidad.

## 4.1 - Formato MP4
<img src="https://icons.veryicon.com/png/o/file-type/file-type-icon/mp4-icon-1.png" width=10%>

El formato MP4 es uno de los formatos más utilizados en la actualidad, especialmente cuando se trata de compartir contenido en línea. YouTube, por ejemplo, recomienda cargar archivos en formato .mp4 para obtener la mejor calidad de video.  

Además de los datos de video y audio, también se puede usar para almacenar cosas como subtítulos e imágenes fijas. Por lo general, se combina con H.264 o H.265.  

Los videos que usan el contenedor .MP4 pueden tener tamaños de archivo relativamente pequeños mientras conservan una alta calidad.
  - **Ventajas**: Alta compresión, buena calidad, muy compatible.
  - **Desventajas**: Codificación con pérdida.
  - **Usos**: Videos en streaming, contenido multimedia general.

## 4.2 - Formato WebM
<img src="https://icons.veryicon.com/png/o/file-type/full-file-extension/webm.png" width=10%>

WebM es un formato multimedia abierto y libre desarrollado por Google y orientado para usarse con HTML5. 
  - **Ventajas**: Libre de patentes, buena compresión, compatible con HTML5.
  - **Desventajas**: Menor soporte que MP4 en algunos dispositivos.
  - **Usos**: Videos optimizados para web, streaming.

## 4.3 - Formato OGG
<img src="https://icons.veryicon.com/png/o/file-type/full-file-extension/ogg-11.png" width=10%>

Ogg es un formato contenedor libre y abierto, desarrollado y mantenido por la Fundación Xiph.Org

Ogg está diseñado para proporcionar una difusión de flujo eficiente y manipulación de multimedios digitales de alta calidad.
  - **Ventajas**: Libre de patentes, buena compresión.
  - **Desventajas**: Menor calidad comparada con mp4 o WebM.
  - **Usos**: Alternativa a mp4 o WebM en navegadores compatibles.

# 5 - Tarea:
Preguntas tipo test. 

# 6. - Herramientas para generar contenido multimedia. 

## 6.1 - Herramientas de edición de imagenes gratuitas
![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/120px-The_GIMP_icon_-_gnome.svg.png)  
**GIMP** (GNU Image Manipulation Program) es una de las alternativas más poderosas y completas a Adobe Photoshop. Ofrece herramientas avanzadas de edición y diseño de imágenes.  
- **Características**: Edición de capas, herramientas de selección avanzadas, filtros, soporte para plugins.
---   
![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Krita-logo.svg/160px-Krita-logo.svg.png)  
**Krita** es un programa de código abierto diseñado principalmente para ilustración y arte digital, pero también tiene capacidades de edición de imágenes.
- **Características**: Herramientas avanzadas de pintura digital, soporte para tabletas gráficas, capas, selección y ajuste de color.
---   
![](https://media.inkscape.org/static/images/inkscape-logo.svg)  
**Inkscape** es principalmente **un editor de gráficos vectoriales**, pero también permite trabajar con imágenes rasterizadas.
- **Características**: Creación y edición de gráficos vectoriales, soporte para SVG, herramientas de dibujo y edición.
---
<img src="https://pixlr.com/learn/wp-content/uploads/2021/04/PixlrX-Overview-400x250_tn.jpg" width=15%>  

**Pixlr X** es una herramienta de **edición de imágenes online** que ofrece una interfaz moderna con herramientas básicas y avanzadas para retoques rápidos.
- **Características**: Filtros, herramientas de edición de capas, ajustes de color, herramientas de retoque, soporte IA. Funciones avanzadas limitadas en comparación con software de escritorio gratuito.
---
![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Darktable_icon.svg/120px-Darktable_icon.svg.png)  

**Darktable** es un software gratuito de edición de imágenes para fotógrafos.
- **Características**: Herramientas avanzadas de corrección de color y exposición.
---   
![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/RawTherapee_logo-text-black.svg/120px-RawTherapee_logo-text-black.svg.png)  
**RawTherapee** está diseñado para la **edición de imágenes RAW** con un enfoque en la corrección de color y el procesamiento de alta calidad.
- **Características**: Procesamiento de imágenes RAW, ajustes de exposición, balance de blancos, corrección de color.
---
![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Photopea_logo.svg/120px-Photopea_logo.svg.png)  
**Photopea** es una herramienta de edición de imágenes **online** que se asemeja a Adobe Photoshop.  

Está diseñado para trabajar con gráficos rasterizados y vectoriales, y permite la edición de imágenes **online**.
- **Características**:  
   - Soporta múltiples formatos de archivo, incluidos PSD (Photoshop), XCF (GIMP), Sketch, AI, y formatos estándar como PNG, JPEG, SVG.
   - Edición de capas, herramientas de selección avanzadas, ajuste de color, retoque de imágenes, y soporte para máscaras y objetos inteligentes.
   - Herramientas de texto, filtros y efectos visuales.
   - Compatibilidad con gráficos vectoriales y rasterizados, permitiendo trabajar con formas, líneas y trazados.
   - Exportación de archivos en varios formatos comunes de imagen.

## 6.2 - Herramientas de edición de audio gratuitas
 ![](https://upload.wikimedia.org/wikipedia/commons/e/e2/Audacity_Logo_nofilter.svg))  

**Audacity** es una de las herramientas de edición de audio más populares y completas.   
- **Características**: Grabación y edición multipista, efectos de audio, soporte para varios formatos (MP3, WAV, OGG, FLAC), eliminación de ruido.
---
![](https://www.ocenaudio.com/imgs/logo.png)

**Ocenaudio** es una alternativa más ligera y fácil de usar que Audacity, ideal para ediciones rápidas y sencillas.
- **Características**: Edición en tiempo real, soporte para efectos VST, análisis espectral, y soporte para múltiples formatos.
---   
![](https://ardour.org/images/ardour_logo_navbar.png)  
**Ardour** es ideal para la grabación, edición y mezcla de audio multipista, especialmente orientado a músicos y productores.  
- **Características**: Grabación multipista, edición no destructiva, soporte para efectos VST, MIDI, y exportación a múltiples formatos.
---
![](https://users.notam02.no/~kjetism/radium/radium_logo_128x128_colorized.png)

**Radium** es un software de edición y composición de audio principalmente para Mac.  

Tiene una propuesta diferente en cuanto a la organización de su interfaz, lo que puede ser un poco desconcertante al principio. .

Con Radium se puede editar audio manualmente, pero cuenta con pequeñas ayudas para automatizar la velocidad y el tempo y para aplicar efectos y correcciones por su cuenta.

Este editor está enfocado a la edición musical, por lo que cuenta con soporte para plugins VST, AU y LADSPA, además de mezclador modular y secuenciador MIDI.

## 6.3 - Herramientas de edición de video gratuitas
![](https://www.videosoftdev.com/images/video_editor/box.png)  
**VSDC Free Video Editor** es un editor de video gratuito que ofrece una amplia gama de herramientas de edición para proyectos complejos, ideal para quienes buscan una opción robusta pero gratuita.
   - **Características**: Edición no lineal, efectos visuales, corrección de color, soporte para múltiples formatos de video, exportación en alta definición.
---    
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/DaVinci_Resolve_17_logo.svg/250px-DaVinci_Resolve_17_logo.svg.png" width=12%>  

**DaVinci Resolve** un editor de video profesional que ofrece herramientas avanzadas para edición, corrección de color, efectos visuales, y postproducción de audio.
   - **Características**: Edición no lineal, corrección de color avanzada, edición multipista, herramientas de postproducción de audio, efectos visuales.
---    
![](https://upload.wikimedia.org/wikipedia/commons/f/fe/Shotcut-logo-64.png)  
**Shotcut** es un editor de video gratuito y de código abierto que ofrece una interfaz fácil de usar y soporte para una amplia gama de formatos de video.
   - **Características**: Soporte para edición de video HD, filtros y efectos de video, línea de tiempo avanzada, soporte para múltiples formatos.
---   
<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Kdenlive_new_logo.png" width=25%>

**Kdenlive** es un editor de video de código abierto para Linux, aunque también está disponible para Windows y macOS. Es una de las mejores opciones gratuitas para usuarios de Linux.
   - **Características**: Edición multipista, efectos de video y transiciones, soporte para múltiples formatos de video y audio, integración con FFmpeg.
---
## 6.4 - Ejemplos de ediciones de video lineal y no lineales:

<a href="https://www.youtube.com/watch?v=63vqob-MljQ&list=PLuAMrIXhypV6rSk9RAS9hwF8VoMW3OVaE&index=2">Video lineal</a>  
<a href="https://www.youtube.com/watch?v=0P4A1K4lXDo">Video no lineal</a>

# 7 - Tarea:
Realizar breves comentarios sobre las herramientas elegidas. 


