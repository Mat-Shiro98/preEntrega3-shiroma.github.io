# Notas de CSS y codigo

### ¿Que es css?
>CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado para diseñar y dar formato a páginas web, controlando la apariencia y presentación de los elementos HTML.


### Clase (.) y id (#)
>En CSS, una clase se define con un punto (.) seguido de un nombre, como ".mi-clase", y se utiliza para aplicar estilos a múltiples elementos HTML que tienen el mismo valor de clase. Un ID se define con un hashtag (#) seguido de un nombre, como "#mi-id", y se usa para aplicar estilos a un elemento HTML específico con ese ID. Las clases son más versátiles y pueden aplicarse a múltiples elementos, mientras que los IDs deben ser únicos en una página.


## Codigo css - Colores

>La propiedad "color" establece el color del texto en tus elementos HTML
>Sintáxis:
    .color{
        color: blue;
    }


>La propiedad "background-color" puede definir el color de fondo de un elemento     
>Sintáxis:
    #mi-clase {
      background-color: #F0F0F0;
    }


>La propiedad "border" puede especificar el color del borde de un elemento 
>Sintáxis:  
    .mi-otra-clase {
        border: 2px solid red;
    }


>En las propiedades de "pseudo-clases" tambien podemos agregar colores
>Sintáxis:
    a:link {
        color: blue;
    }   

    a:visited {
        color: purple;
    }

    a:hover {
        color: red;
    }


>La propiedad "opacity" controla la opacidad de un elemento y su contenido.
>Sintáxis:
    .mi-elemento {
        opacity: 0.5;
    }


>La función "rgba()" te permite definir colores utilizando un modelo de color RGBA, que incluye valores de rojo, verde, azul y alfa (transparencia)
>Sintáxis:
    .mi-clase {
        background-color: rgba(255, 0, 0, 0.5); /* Rojo con 50% de transparencia */
    }


>La función "hsl()" te permite definir colores utilizando el modelo de color HSL (tono, saturación y luminosidad).
>Sintáxis:
    .otra-clase {
        color: hsl(120, 100%, 50%); /* Verde brillante */
    }


>La función "gradient" puedes crear gradientes de color utilizando las propiedades " linear-gradient() o radial-gradient() "
>Estas propiedades te permiten crear fondos y efectos de color con transiciones suaves.
>Sintáxis:
    .gradiente-elemento {
        background: linear-gradient(to right, red, blue);
    }




## Codigo css - tipografias - font-family


>La propiedad "font-family" se utiliza para definir la familia de fuentes que se aplicará al texto de un elemento. 
>Puedes especificar múltiples fuentes en caso de que la primera elección no esté disponible en el sistema del usuario.
>Sintáxis:
    p {
        font-family: Arial, Helvetica, sans-serif;
    }


>La propiedad "font-size" establece el tamaño de la fuente para el texto de un elemento.
>Sintáxis:
    h1 {
     font-size: 24px;
    }


>La propiedad "font-weight" controla el grosor de la fuente, permitiendo valores como "normal", "bold", "bolder" y números para pesos específicos.
>Sintáxis:
    strong {
        font-weight: bold;
    }


>La propiedad "font-style" define el estilo de la fuente, como "normal" o "italic" (cursiva).
>Sintáxis:
    em {
        font-style: italic;
    }



>La propiedad "text-align" alinea el texto dentro de un elemento, pudiendo ser "left" (izquierda), "center" (centro), "right" (derecha) o "justify" (justificado).
>Sintáxis:
    div {
        text-align: center;
    }

> La propiedad "line-height" controla la altura de línea, que es la distancia vertical entre líneas de texto. Puede ser un valor numérico o un porcentaje.
>Sintáxis:
    p {
      line-height: 1.5;
    }

>La propiedad "letter-spacing" Ajusta el espaciado entre caracteres (kerning) en el texto.
>Sintáxis:
    p {
         letter-spacing: 2px;
    }


>La propiedad "text-transform" Cambia la transformación del texto, como convertirlo a mayúsculas o minúsculas.
>Sintáxis:
    h2 {
     text-transform: uppercase;
    }


## Para importar otras tipografias de internet
>Existen 2 maneras diferentes: 
>Es copiar el link de la página donde encontraste la tipo grafia y lo pegas en el HTML o CSS

>En el HTML usamos el <link>
>Ejemplo:

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400&family=MuseoModerno:ital,wght@0,200;0,300;0,400;0,500;1,100;1,200;1,400&family=Roboto:ital,wght@0,100;0,400;1,700&display=swap" rel="stylesheet">


>En el CSS usamos el @import
>Ejemplo:

    @import url('https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400&family=MuseoModerno:ital,wght@0,200;0,300;0,400;0,500;1,100;1,200;1,400&family=Roboto:ital,wght@0,100;0,400;1,700&display=swap');

