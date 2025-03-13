---
Título: UD. 3.3 - Diseño adaptativo y reactivo en CSS
Autor: Javier Egea Blasco
Año: 24-25
Palabras clave: DAW, DIW
---

# 1. - Introducción
En el desarrollo web moderno, garantizar una experiencia de usuario óptima en una amplia variedad de **dispositivos** es esencial. Para lograrlo, se emplean dos enfoques principales: **diseño responsive** y **diseño adaptativo**. 
![alt text](./img/ResponsiveAdaptative.png.png) 

El **diseño responsive** (o diseño responsivo) se basa en el uso de **CSS flexible** para que una misma estructura de página se adapte dinámicamente al tamaño de pantalla del usuario. Utiliza técnicas como **media queries, flexbox y grid** para reorganizar y escalar los elementos de la interfaz sin necesidad de versiones específicas para cada dispositivo.  

Por otro lado, el **diseño adaptativo** se fundamenta en la creación de **varias versiones predefinidas de la misma página**, cada una diseñada para un rango de tamaños de pantalla específicos. En lugar de reajustarse de manera continua, el diseño adaptativo carga una versión distinta según el tipo de dispositivo detectado, lo que puede ofrecer mayor control sobre la apariencia en distintos contextos.  

Ambos enfoques tienen sus ventajas y desventajas. Mientras que el diseño responsive ofrece mayor **flexibilidad y mantenimiento más sencillo**, el diseño adaptativo permite un **mayor control sobre la experiencia de usuario en cada dispositivo**. La elección entre uno u otro dependerá de factores como el tipo de contenido, el público objetivo y los recursos disponibles para el desarrollo.

# 2. - Responsive design
## 2.1. - Pros del diseño responsive  

- Elimina la necesidad de desarrollar diferentes diseños para cada dispositivo de visualización.   
- Los sitios web responsivos redimensionan imágenes, contenido, formas y botones para maximizar el espacio en pantalla. Esto hace que el contenido sea fácil de visualizar, que las imágenes se ajusten al tamaño de la pantalla y que los botones sean fácilmente seleccionables.  
- Un diseño responsive se adapta fácilmente a los estándares web modernos.  
- En un diseño responsive facilita el mantenimiento al solo existir una versión del sitio web.   
- Mejora **SEO** del sitio web, ya que los motores de búsqueda no necesitan rastrear versiones separadas para dispositivos móviles y escritorio.  

## 2.2. - Contras del diseño responsive  
- Las páginas web responsivas pueden tardar más en cargarse (lo que penaliza el **SEO**).  
- Dado que el sitio **se organiza verticalmente** para ajustarse al espacio reducido de la pantalla, el usuario puede pasar por alto elementos esenciales de la página debido al **scrolling excesivo**.

# 3. - Adaptative design
## 3.1. - Pros del diseño adaptativo
- **Carga de página más rápida**. Los contenidos se ajustan para mostrar solo las características necesarias para cada dispositivo y optimizar todo el contenido según el tamaño y la resolución de la pantalla.  
- **Interfaz optimizada para cada tamaño de dispositivo**. El diseño adaptativo permite **personalizar el contenido y su distribución** para mejorar la experiencia de usuario. Esto permite mostrar un diseño específico para cada tipo de dispositivo, a diferencia del diseño responsive, donde se mantiene el mismo diseño para todos.  
- **Mejor experiencia para una audiencia más amplia**. No todos los usuarios tienen dispositivos modernos capaces de ejecutar o interpretar el código complejo y las propiedades CSS avanzadas de un diseño responsive, lo que puede afectar negativamente la experiencia de usuario.   

## 3.2. - Contras del diseño adaptativo  

HASTA AQUI

- **Mayor esfuerzo de desarrollo** – Muchos diseñadores evitan el diseño adaptativo porque implica **trabajo repetitivo**. Mientras que en el diseño responsive solo se necesita un conjunto de HTML y CSS que se adapta a diferentes tamaños de pantalla, en el diseño adaptativo es necesario escribir **diferentes códigos para distintos dispositivos**, lo que requiere más tiempo y esfuerzo.  
- **Requiere desarrolladores especializados** – El diseño web adaptativo suele necesitar un equipo de desarrolladores con experiencia para manejar la complejidad de distintos dispositivos. Se deben crear y ajustar múltiples diseños para distintos viewports con el fin de ofrecer la mejor interfaz en cada caso. Esto puede ser una **desventaja para pequeñas empresas con recursos limitados**.




https://www.xenonstack.com/insights/adaptive-design-vs-responsive-design
https://www.geeksforgeeks.org/difference-between-responsive-design-and-adaptive-design/
  https://medium.com/theymakedesign/responsive-vs-adaptive-web-design-1da9e5398669
  https://www.idento.es/blog/desarrollo-web/diseno-responsive-vs-adaptive-cual-es-mejor/



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