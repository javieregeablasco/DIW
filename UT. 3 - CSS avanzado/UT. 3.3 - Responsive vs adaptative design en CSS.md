---
Título: UD. 3.3 - Diseño adaptativo y reactivo en CSS
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

# 1. Introducción
En el desarrollo web moderno, garantizar una experiencia de usuario óptima en una amplia variedad de **dispositivos** es esencial. Para lograrlo, se emplean dos enfoques principales: **diseño responsive** y **diseño adaptativo**. 
![alt text](./img/ResponsiveAdaptative.png.png) 

El **diseño responsive** (o diseño responsivo) se basa en el uso de **CSS flexible** para que una misma estructura de página se adapte dinámicamente al tamaño de pantalla del usuario. Utiliza técnicas como **media queries, flexbox y grid** para reorganizar y escalar los elementos de la interfaz sin necesidad de versiones específicas para cada dispositivo.  

Por otro lado, el **diseño adaptativo** se fundamenta en la creación de **varias versiones predefinidas de la misma página**, cada una diseñada para un rango de tamaños de pantalla específicos. En lugar de reajustarse de manera continua, el diseño adaptativo carga una versión distinta según el tipo de dispositivo detectado, lo que puede ofrecer mayor control sobre la apariencia en distintos contextos.  

Ambos enfoques tienen sus ventajas y desventajas. Mientras que el diseño responsive ofrece mayor **flexibilidad y mantenimiento más sencillo**, el diseño adaptativo permite un **mayor control sobre la experiencia de usuario en cada dispositivo**. La elección entre uno u otro dependerá de factores como el tipo de contenido, el público objetivo y los recursos disponibles para el desarrollo.

# 2. Responsive design
## 2.1. - Pros del diseño responsive  
- Elimina la necesidad de desarrollar diferentes diseños para cada dispositivo de visualización.   
- Los sitios web responsivos redimensionan imágenes, contenido, formas y botones para maximizar el espacio en pantalla. Esto hace que el contenido sea fácil de visualizar, que las imágenes se ajusten al tamaño de la pantalla y que los botones sean fácilmente seleccionables.  
- Un diseño responsive se adapta fácilmente a los estándares web modernos.  
- En un diseño responsive facilita el mantenimiento al solo existir una versión del sitio web.   
- Mejora **SEO** del sitio web, ya que los motores de búsqueda no necesitan rastrear versiones separadas para dispositivos móviles y escritorio.  

## 2.2. - Contras del diseño responsive  
- Las páginas web responsivas pueden tardar más en cargarse (lo que penaliza el **SEO**).  
- Dado que el sitio **se organiza verticalmente** para ajustarse al espacio reducido de la pantalla, el usuario puede pasar por alto elementos esenciales de la página debido al **scrolling excesivo**.

# 3. Adaptative design
## 3.1. - Pros del diseño adaptativo
- **Carga de página más rápida**. Los contenidos se ajustan para mostrar solo las características necesarias para cada dispositivo y optimizar todo el contenido según el tamaño y la resolución de la pantalla.  
- **Interfaz optimizada para cada tamaño de dispositivo**. El diseño adaptativo permite **personalizar el contenido y su distribución** para mejorar la experiencia de usuario. Esto permite mostrar un diseño específico para cada tipo de dispositivo, a diferencia del diseño responsive, donde se mantiene el mismo diseño para todos.  
- **Mejor experiencia para una audiencia más amplia**. No todos los usuarios tienen dispositivos modernos capaces de ejecutar o interpretar el código complejo y las propiedades CSS avanzadas de un diseño responsive, lo que puede afectar negativamente la experiencia de usuario.   

## 3.2. - Contras del diseño adaptativo  
- **Mayor esfuerzo de desarrollo**. El diseño adaptativo implica **trabajo repetitivo** ya que implica, tantos diseños como dispositivos.  
- **Requiere desarrolladores especializados** al necesitar un buen conocimiento de los distintos dispositivos. 

# 4. Grid y flexbox en el diseño responsive y adaptativo  
En el desarrollo web moderno, **CSS Grid** y **Flexbox** son herramientas fundamentales para la creación de diseños responsivos y adaptativos. Ambos modelos de diseño en CSS facilitan la disposición de los elementos en una página web, permitiendo que la interfaz se ajuste dinámicamente a distintos dispositivos y resoluciones de pantalla.  

El **diseño responsive**, que busca una adaptación fluida de la interfaz sin necesidad de versiones específicas, se beneficia enormemente de **Flexbox y Grid**. **Flexbox** es ideal para la alineación y distribución de elementos en una sola dimensión (filas o columnas), mientras que **Grid** permite diseñar estructuras más complejas en dos dimensiones, proporcionando un control avanzado sobre el espaciado y la distribución de los componentes. Gracias a estas herramientas, los elementos pueden reorganizarse automáticamente según el tamaño del viewport, sin necesidad de cambios manuales.  

Por otro lado, el **diseño adaptativo**, que se basa en versiones predefinidas de la misma página según el dispositivo, también puede aprovechar **Flexbox y Grid** para ajustar los elementos de cada diseño específico. En este enfoque, Grid facilita la creación de layouts personalizados para cada versión de la página, mientras que Flexbox permite una distribución eficiente dentro de cada sección de la interfaz.  

Para hacer que estos diseños sean verdaderamente efectivos, es necesario complementar Grid y Flexbox con **media queries**.  

# 5. Media queries  
Las **media queries** permiten aplicar estilos diferentes según el tamaño del dispositivo o las características de la pantalla. Gracias a ellas, se pueden definir puntos de quiebre (**breakpoints**) que ajustan el diseño de la página para mejorar la experiencia del usuario en distintos dispositivos. En combinación con **Grid y Flexbox**, las media queries permiten crear **layouts flexibles y adaptativos**, asegurando que la interfaz se vea bien en cualquier pantalla, desde móviles hasta monitores de gran tamaño.


  
HASTA AQUI  

https://blog.soaresdev.com/guia-rapido-css-grid/
https://lenguajecss.com/css/grid/que-es-grid/

https://victorroblesweb.es/2022/10/19/como-funciona-css-grid-layout/


https://www.youtube.com/watch?v=Fj6BGtNvXIc




funciones de filtros para colores https://lenguajecss.com/css/efectos/filtros-css/  
formas básicas  https://lenguajecss.com/css/mascaras-y-recortes/formas-basicas/  
responsive design https://lenguajecss.com/css/responsive-web-design/que-es/  
transformaciones https://lenguajecss.com/css/transformaciones/transform/