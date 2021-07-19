# CDMX011-cipher

## Protitpo y UX

La temática fue sobre censura en redes sociales, debido a que hoy en día bajan mucho del contenido que busca informar sobre algunos temas polémicos (tales como sexualidad o feminismo), de manera que se busca poder ayudar a los creadores de contenido y prácticamente a cualquier usuario de redes sociales apoder expresarse mejor acerca de estos temas sin que sea tan detectable por el algoritmo ya que este cada vez esta más refinado detectando palabras escritas incluso con otros caracteres, de manera que el modo de cifrado Cesar es el ideal para esconderlo ya que al variar el número de desplazamiento puede ser más indectable ya que no debe seguir necesariamente el mismo patrón, y al tener la opción de desencriptado puede ser ideal igual para los usuarios que consuman dicho contenido y no que necesariamente lo creen.

Dicho de una manera más simple, el usuario ideal sería alguien que crea y consume **contenido educativo** que suele ser censurado en las redes sociales.


Al tratar de proyectar una sensación de inclusión con usuarios que le preocupan los porblemas sociales al crear y/o consumir contenido educativo acerca de los temas ya mencionados, se busca que la interfaz sea *amigable* a la vista. Para esto se ha seleccionado una paleta de colores pastel y se han introducido imágenes para dar aún más una sensación de complicidad, el prototipo realizado fue el siguiente (hecho en Figma):

![prototipo](https://user-images.githubusercontent.com/62182593/126168549-d36f61bc-4608-4290-b531-874c92082299.png)

Al principio se pensó en hacer una pantalla más interactiva que vaya cambiando a través de la bienvenida al usuario, los inputs y el resultado, pero al hacer el prototipo una observación fue que no sería tan práctico para quien lo estuviese usando, ya que estaría cambiando de diversas pantallas y eso sería problemático si se quisiera cifrar y/o descifrar varios mensajes a la vez, al igual que al ser algo que se busca que soluciones algo de manera inmediata no sería lo ideal ya que alentaría el proceso de la funcionalidad, entonces se optó por mejor tenerun diseño más simple que pudiese ofrecer practicidad e inmediatez al usuario.


## HTML y CSS

Se hizo uso de inputs, botones, tablas, textarea y se introdujeron elementos gráficos. Al igual que se implementó uso del HTML semántico al usar elementos tales como Header, Footer, h1, h2, etc. 

Para facilitar el uso de CSS se crearon diversos <div> que en algunos casos sirvieron para agrupar elementos similares entre sí en _secciones_ y en otros casos sirvió como contenedores para centrar y acomodar elementos, darles un margin y demás. Con el CSS (sobretodo con el margin y el padding) se buscó que la interfaz fuera lo más cómoda para el usuario (visualmente hablando).
