<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.color-sistema 3
      h1 Sangrado
    
    p.mb-4(data-aos="fade") De acuerdo con Espino (2017):
    
    .row.justify-content-end.mb-4(data-aos="fade-down")
      .col-lg-11
        .cajon.color-secundario.bg4.p-4
          p.mb-0 El sangrado es un área de seguridad que se debe añadir a cualquier diseño que tenga como finalidad una impresión y se realiza agregando unos milímetros a su tamaño; esto se hace para evitar que al cortar con la guillotina queden partes blancas en algún lado de la impresión dañando su estética. Por ejemplo, si el diseño en cuestión es un #[em brochure], cuyo tamaño final será 15 x 10 cm, el tamaño que se debe mandar a imprenta debe ser 15,6 x 10,6 cm; de ese modo, se estará ampliando el diseño 3 mm por cada lado. Esos 3 mm serán el sangrado de diseño. 
    
    p.mb-4(data-aos="fade") Por ejemplo:

    .row.justify-content-around.align-items-center
      .col-lg-6.col-md-9.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t3/imag01.png', alt='La imagen representa un rectángulo con un borde de color  fucsia.')
          figcaption Figura 10. Sangría
      .col-lg-5.mb-4(data-aos="fade-left")
        p Como se ve en la figura 10, el área en color magenta es el sangrado del documento y corresponde a una zona de 3 mm por cada lado, fuera del diseño final; es decir, estos 3 mm se perderán cuando se haga el corte en la guillotina con lo que se garantizará que no haya bordes blancos en la impresión final.
    

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 ¿Cómo aplicar el sangrado a un diseño?
    
    p.mb-4(data-aos="fade") Una vez configurada el área de sangrado, esta se debe llenar con cualquier elemento que toque el borde del diseño, como por ejemplo en la figura 11.
    
    .row.align-items-center.justify-content-center
      .col-lg-7.col-md-9.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t3/imag02.svg', alt='La imagen representa dos recuadros en los que se indica, en el primero cómo no debe hacerse una sangría y en el segundo cómo sí debe hacerse.')
          figcaption Figura 11. Uso correcto de sangría
      .col-lg-5.mb-4(data-aos="fade-left")
        p En la parte izquierda de la figura 11 donde está la palabra NO se puede ver que la foto (área en color gris) llega justo al borde del diseño sin ocupar el área de sangrado; en ese caso está mal aplicado el sangrado y es lo que posteriormente causará problemas en el corte final. En la parte derecha (SÍ) se ve la manera correcta de utilizar el sangrado, es decir se lleva la imagen hasta el borde y el diseño hasta el área de sangrado y, de ese modo, cuando se corte por la línea negra será imposible que queden bordes blancos.
    

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 ¿Cuánto debe medir el sangrado?
    
    p(data-aos="fade") No hay una medida estándar para tal fin; sin embargo, lo habitual es dejar 2 o 3 mm que son suficientes en la mayoría de los casos; para trabajos que requieran troquelado, se suelen dejar entre 5 y 10 mm.
    p(data-aos="fade") El sangrado es un fundamento de preimpresión que debe conocer todo diseñador y aplicarlo correctamente ahorrará problemas y dolores de cabeza, tanto con la imprenta como con los clientes. 
    p.mb-4(data-aos="fade") Además, se puede determinar un área de sangrado para una pieza completa, desde que se configure el documento como se muestra en la siguiente figura.
    
    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/temas/t3/imag03.png', alt='La imagen presenta pantalla de un computador con varios iconos, en el que se resaltan las áreas de sangrado.')
      figcaption Figura 12. Área de sangrado

    .row.justify-content-around
      .col-lg-8
        p Ahora, se realizará un ejemplo con una pieza real con unos sencillos pasos:
        ul.lista-ul--color.fa-ul.color-primario.ps-2.ps-md-5
          li 
            i.fas.fa-check-circle
            span.mb-0 Traer la imagen que cumplirá la función de fondo del anuncio a Adobe Illustrator en la ruta: #[b Archivo - Colocar - Seleccionar imagen - Incrustar.]
          li 
            i.fas.fa-check-circle
            span Ahora, se debe escalar la imagen teniendo en cuenta que llegue hasta la margen roja (sangrado) que se configuró inicialmente (figura 13).
      .col-lg-3.col-md-6
        figure
          img(src='@/assets/curso/temas/t3/imag04.png', alt='La figura presenta fotografía de un paisaje en la que se resalta  el área de sangrado.')
          figcaption Figura 13. Área de sangrado



</template>

<script>
export default {
  name: 'Tema3',
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
