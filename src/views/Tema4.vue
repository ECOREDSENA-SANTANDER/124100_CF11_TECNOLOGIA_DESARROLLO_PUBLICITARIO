<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.color-sistema 4
      h1 Resolución de imágenes
    
    p(data-aos="fade") En muchos momentos se hacen varias versiones de las imágenes que se destinan a la impresión para hacer publicaciones en redes sociales o refuerzo de las campañas a través de #[em e-mail]; aunque en ocasiones las piezas gráficas no deben ser de tamaño pequeño. Por ejemplo, un artista gráfico o que debe producir impresiones de fotografías grandes para una galería, requiere una resolución lo más alta posible; sin embargo, puede que cuente con archivos de baja calidad y deba mejorar su resolución. 
    p(data-aos="fade") Hacer que una imagen tenga alta resolución es indispensable para el desarrollo de trabajos gráficos y para ello, los programas de edición que existen en la actualidad permiten aumentar la resolución hasta un cierto punto, sin comprometer la calidad de la imagen. 
    p.mb-4(data-aos="fade") A continuación, se ofrece un ejemplo de cómo hacer que una imagen tenga una mayor resolución sin arriesgar la calidad de la misma, teniendo en cuenta estos pasos:
    
    .row.fondo-t4.align-items-center.p-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo="b" data-aos="fade-down")
              .row.align-items-center.justify-content-around
                .col-md-3.mb-4.mb-md-0
                  p.mb-0 Primero, abrir la imagen en
                  p.mb-0 #[b Photoshop - Imagen]
                  p #[b - Tamaño de Imagen.]
                .col-md-7
                  figure
                    img(src='@/assets/curso/temas/t4/imag01.png', alt=' La figura presenta pantalla del computador en el que se despliega la ventana de imagen y a su vez se resalta la opción tamaño de imagen.')
                    figcaption Figura 14. Resolución de imagen
              .row
                .col-md-6.mb-4.mb-md-0
                  h4 Ahora, hay que asegurarse de que en esta ventana desplegable esté seleccionada la casilla Remuestrear 
                  p En la resolución aparece 72 ppp, este valor se debe cambiar a 300 que es la resolución óptima.
                  p Siempre que se cambie la resolución, las dimensiones de los píxeles se ajustarán de manera acorde, pero la anchura y altura de la imagen seguirán siendo las mismas. De hecho, la cantidad total de píxeles puede aumentar sustancialmente y esto hará que lo haga el tamaño del archivo de la imagen. 
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t4/imag02.png', alt='La figura presenta pantalla del computador en el que se despliega la ventana de tamaño de la imagen y a su vez se resalta la opción remuestrear.')
                    figcaption Figura 15. Remuestrear
    

    Separador
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        #t_4_1.titulo-segundo.color-acento-contenido
          h2 4.1 #[em Color Lab]
        p.mb-4 El sistema de “#[em Color Lab]” permite realizar de otra forma el realce de los detalles de una imagen. 
        ul.lista-ul--color.fa-ul.color-primario.ps-2
          li 
            i.fas.fa-check-circle
            span.mb-0 Para habilitarlo, hay que dirigirse a la pestaña #[b Imagen], hacer clic en #[b Modo] y luego elegir #[em #[b Color Lab]].
          li 
            i.fas.fa-check-circle
            span.mb-0 Se debe tener habilitada la ventana de #[b Canales] (figura 16).
          li 
            i.fas.fa-check-circle
            span.mb-0 Dentro del modo #[em #[b Color Lab]], debe haber cuatro canales visibles. Solo es necesario que esté habilitado el canal #[b Luminosidad] (figura 17), por lo que se deben desactivar los otros canales haciendo clic sobre el icono “ojo” de cada uno. 
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t4/imag03.png', alt='La figura presenta pantalla del computador en el que se despliega la pestaña imagen y a su vez se resaltan las opciones modo  y color lab.')
          figcaption Figura 16. Ventana #[em Color Lab]
    
    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t4/imag04.png', alt='La figura presenta pantalla del computador con fotografía  de paisaje en blanco y negro en la que se resalta la opción “Luminosidad Color Lab”')
          figcaption.mb-4 Figura 17. Luminosidad #[em Color Lab]
        p A continuación, se debe mejorar el canal “Luminosidad” con el filtro #[b Enfoque suavizado] y para ello, en la pestaña #[b Filtros], hacer clic en #[b Enfoque suavizado] para abrir el cuadro de diálogo del filtro (figura 18). 
        p Lo recomendado es aumentar la #[b Cantidad] a, por lo menos, el 110%, mantener #[b Radio] en 12.4 px y habilitar la opción #[b Quitar para desenfoque gaussiano].
      .col-lg-7(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t4/imag05.png', alt='La figura presenta pantalla del computador con fotografía de paisaje en blanco y negro en la que se resalta la ventana de “Enfoque suavizado”')
          figcaption.mb-4 Figura 18. Enfoque suavizado
        p En esencia, el filtro #[b Enfoque suavizado] enfatiza los detalles más pequeños dentro de la imagen, sin afectar de manera negativa la calidad de esta. 
    
    .row.justify-content-center.align-items-center(data-aos="fade-center")
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/t4/imag06.png', alt='La figura presenta pantalla del computador con fotografía de paisaje a color en la que se resalta el resultado del “enfoque suavizado”')
          figcaption Figura 19. Resultado enfoque suavizado


</template>

<script>
export default {
  name: 'Tema4',
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
