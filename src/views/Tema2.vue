<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.color-sistema 2
      h1 Colores de impresión
    
    p(data-aos="fade") Sobre este tema se debe tener presente lo siguiente para conocer en mayor medida todo lo relacionado con el color y que se explicarán en detalle:


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Conversión de imágenes RGB - CMYK
    
    p.mb-0(data-aos="fade") Como es sabido, el modo de color usado para impresión es CMYK; sin embargo, es común encontrar fotografías en modo RGB, por lo cual se hace necesario realizar la conversión. 
    p.mb-4(data-aos="fade") El siguiente video describe la manera de realizar la conversión del modo de la fotografía en Adobe Photoshop:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Leyenda del video 
    

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Reservas
    
    p(data-aos="fade") A continuación, se describe este tema, basado en lo indicado por Cevagraf (2013) y se ilustra esta parte con un ejemplo real realizado en Adobe Illustrator.
    p.mb-4(data-aos="fade") La reserva se utiliza cuando debe superponerse un objeto a otro; por ejemplo, cuando se desea imprimir un objeto en primer plano sobre un fondo, en este caso se puede elegir entre dos opciones:
    
    .row.align-items-end.justify-content-center.mb-5
      .col-lg-4.col-md-9.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t2/imag01.svg', alt='La figura presenta en la parte superior sobre fondo azul, dos cuadrados,  el primero de color fucsia y el segundo de color morado y en la parte inferior imagines de dichos  cuadrados en los que con línea punteada se indica que se levanta el cuadrado del centro.')
          figcaption Figura 1. Reserva y sobreimpresión
      .col-lg-8(data-aos="fade-left")
        .bg2.p-4
          h5.mb-1 Sobreimpresión: 
          p.mb-4 Imprimir el objeto directamente sobre el fondo.
          h5.mb-1 Reserva: 
          p.mb-0 Dejar un hueco con la forma que identifica a ese objeto e imprimirlo sobre el espacio en blanco en el área vacía, esta es la reserva (figura 1).
    
    #t_2_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2.1. La sobreimpresión
    
    p.mb-5(data-aos="fade") Como se observa en la figura 1, en la parte de “sobreimpresión”, el objeto del primer plano se imprime sobre el objeto de fondo generando un nuevo color debido a la mezcla de las tintas de los dos objetos que se superponen. Ahora bien, la sobreimpresión se realiza sobre los objetos de fondo; por lo tanto, se imprime una tinta sobre otra.
        
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        #t_2_2_2.titulo-segundo.color-acento-contenido
          h2 2.2.2 La reserva
        p En la misma figura 2, pero en “reserva”, el objeto tendrá el color que se le ha asignado en el diseño digital sin alterarse el color, debido a que será impreso directamente en el papel en blanco porque se ha reservado el espacio para dicho fin.
        p En los programas actuales las reservas se crean por defecto facilitando el proceso de preprensa. Crear reservas es muy conveniente porque la superposición genera colores indeseados; sin embargo, la sobreimpresión puede utilizarse como un recurso para crear efectos especiales de mezcla o para evitar la aparición de huecos entre colores u objetos debidos a la falta de registro.
      .col-lg-5(data-aos="fade-left")
        .row.justify-content-center
          .col-md-9
            figure
              img(src='@/assets/curso/temas/t2/imag02.svg', alt='La imagen presenta figuras impresas   indicando la reserva y la sobreimpresión')
              figcaption Figura 2. Reserva y sobreimpresión en impresos
    
    #t_2_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2.3 El #[em trapping] o reventado
    
    .row.align-items-center.mb-5
      .col-lg-5.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-md-11
            figure
              img(src='@/assets/curso/temas/t2/imag03.svg', alt='La figura presenta, en la parte superior dos cuadrados  de color  fucsia sobre fondo azul en los que se indica con un circulo en la esquina superior izquierda la alineación de colores y en la parte inferior dos cuadraos indicando con línea punteada la elevación de los cuadrados centrales.')
              figcaption Figura 3. #[em Trapping]
      .col-lg-7.mb-4(data-aos="fade-left")
        p Para el proceso de impresión es necesario alinear los colores separados CMYK, a través de guías de registro para que estas no queden movidas en el resultado final. Si alguna de ellas queda fuera de registro aparecerán huecos entre los objetos de color o sitios en los que un color de cuatricromía queda movido y no fundido con los demás.
        p Para minimizar estos defectos de registro, existe la técnica del #[em trapping] o reventado en la que los colores se ubican en orden y se imprimen uno sobre el otro para garantizar que queden alineados.
        p En este proceso pueden cambiar los tamaños de cada separación de color, efecto que se hace más evidente en objetos más pequeños, para ello se ajustan los tamaños y estos se igualan para garantizar la unificación de tamaños.
      
    p.mb-4(data-aos="fade") Este proceso es fácil de realizar en Adobe Illustrator, para lo cual se deben seguir estos pasos:

    .row.mb-5
      .col-lg-6.mb-4(data-aos="fade-right")
        ul.lista-ul--color.fa-ul.color-primario
          li 
            i.fas.fa-check-circle
            span.mb-0 Ubicar y seleccionar los dos elementos a los cuales desea aplicar el #[em trapping] o reventado: Hacer clic en #[b Buscatrazos - Menú desplegable - Reventar.]
        .row.justify-content-center
          .col-md-10
            figure
              img(src='@/assets/curso/temas/t2/imag04.svg', alt='La imagen representa  una pantalla de computador  con fondo totalmente fucsia, en la que se resalta la pestaña de Buscatrazos')
              figcaption Figura 4. #[em Trapping] en AI
      .col-lg-6.mb-4(data-aos="fade-left")
        ul.lista-ul--color.fa-ul.color-primario
          li 
            i.fas.fa-check-circle
            span.mb- A continuación, se abre una ventana de opciones (se puede dejar la configuración predeterminada o, si es necesario, modificarla).
        .row.justify-content-center
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t2/imag05.svg', alt='La figura presenta la pantalla del computador  en color fucsia con borde superior e izquierdo azul, con una ventana de ajustes desplegada')
              figcaption Figura 5. Opciones #[em trapping]
    
    p.mb-4(data-aos="fade") Es importante resaltar que para aplicar este filtro en Adobe Illustrator el texto debe estar convertido en contornos.

    .row
      .col-lg-6.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t2/imag06.svg', alt='La imagen representa dos cuadrados de color azul ordenados horizontalmente:  En el  primero sobrepuesto en el extremo inferior derecho un cuadrado de color fucsia y en el segundo sobrepuesto en el extremo inferior derecho un rectángulo de color fucsia.')
          figcaption Figura 6. Efectos #[em trapping]
      .col-lg-6.mb-4(data-aos="fade-left")
        .row.justify-content-center
          .col-md-9
            img(src='@/assets/curso/temas/t2/imag07.svg', alt='')
    

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Barniz UV
    
    p(data-aos="fade") Este método de ‘barniz UV’ (tinta de secado con rayos ultravioleta), consiste en imprimir barniz en determinadas partes (totales o parciales a través de una reserva), para crear un efecto brillante, o con apariencia de relieve si se hace sobre una zona en particular como un logo o un texto; usado de forma creativa, el barniz UV refuerza una imagen y la resalta.
    p.mb-4(data-aos="fade") Para imprimir barniz UV se debe realizar la impresión de dos archivos por separado: el que contiene toda la pieza y aquel en el cual solo se dejan los elementos que llevará el barniz (reserva UV).
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-3.col-md-9.pe-md-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/imag08.png', alt='La figura representa con rectángulo con dos  recuadros :  En el primero, bajo la palabra “imprimir” la imagen de un paisaje y el segundo, bajo las letras “UV”,  en blanco.')
          figcaption Figura 7. Archivo UV
      .col-lg-7.ps-md-0.mb-4
        .bg1.p-4.p-md-5
          p.mb-0.p-md-4 En el archivo a imprimir se borrará lo que desea que tenga el barniz; es decir, dejará únicamente lo que no lleva el barniz y en el archivo UV quedará solamente lo que llevará el barniz.

    .row.justify-content-between
      .col-lg-5.mb-4(data-aos="fade-right")
        p A continuación, los elementos que llevará el barniz deben ser convertidos a un color uniforme: creando una nueva muestra en el panel de #[b muestras]. 
        p Ahora, se debe marcar el tipo de color como tinta plana y el modo de color como CMYK y el nombre de la nueva muestra como “Color UV” para identificarlo fácilmente. Luego, se debe seleccionar el color que se quiere siempre y cuando sea un color al 100%, sin mezclas; por ejemplo, 100% cian o 100% magenta.
        figure
          img(src='@/assets/curso/temas/t2/imag09.png', alt='La imagen representa una pantalla de computador con dos menús desplegados, uno de ellos, una paleta de colores.')
          figcaption Figura 8. Color UV
      .col-lg-6.mb-4(data-aos="fade-left") 
        p.mb-4 Se deben convertir todos los textos a contornos así: hacer clic en #[b texto - crear contornos o por clic derecho - crear contornos]
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t2/imag10.png', alt='La imagen representa pantalla de computador con un menú desplegado resaltando  “crear contornos”.')
              figcaption.mb-4 Figura 9. Textos en contornos
        p Por último, ambos archivos deben enviarse a la imprenta para ser procesados correctamente.
        
    

    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
