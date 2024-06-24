<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.color-sistema 5
      h1 Tipografías empleadas
    
    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p En este punto del proceso de desarrollo de la pieza gráfica y el arte final de la misma para impresión, se debe tener claro que las tipografías utilizadas en el diseño no estarán instaladas en todos los computadores, por lo que se debe garantizar que los textos no tengan ninguna alteración al abrir los archivos en un equipo distinto a aquel del diseño.
        p.mb-4 Para esto, lo más recomendable es convertir todos los textos a contornos una vez hayan sido revisados y aprobados; esto con el fin de minimizar errores. Es recomendable, además, tener un archivo alterno con los textos en formato tipográfico para hacer correcciones posteriores si es del caso. El proceso de conversión de textos a contornos es sencillo: 
        ul.lista-ul--color.fa-ul.color-primario
          li 
            i.fas.fa-check-circle
            span.mb-0 Seleccionar el #[b Texto] y hacer clic derecho, activar #[b Crear contornos] o por el panel #[b Texto - Crear contornos] (figura 20).
      .col-lg-4.col-md-7.d-none.d-lg-flex(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/imag01.png', alt='')
    
    .row.align-items-center.justify-content-center
      .col-lg-5.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-lg-10.col-md-8
            figure
              img(src='@/assets/curso/temas/t5/imag02.png', alt='La imagen presenta cuadro con las palabras “Texto en Contornos” resaltadlas en color negro en el extremo superior izquierdo y en el extremo inferior derecho se despliegan opciones en las que se resalta. “Crear contornos”.')
              figcaption Figura 20. Texto en contorno
      .col-lg-7.mb-4(data-aos="fade-left")
        ul.lista-ul--color.fa-ul.color-primario
          li 
            i.fas.fa-check-circle
            span.mv-0 Así, el texto ya no será un elemento editable por medio de la herramienta de #[b Texto] sino, un vector.
          li 
            i.fas.fa-check-circle
            | Si por algún motivo no se realiza esta conversión en contornos, se debe conservar una carpeta con las fuentes utilizadas para enviarlas a las empresas donde estén realizando las impresiones y ser instaladas allí, esto como último recurso.



</template>

<script>
export default {
  name: 'Tema5',
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
