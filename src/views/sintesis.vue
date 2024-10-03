<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 Un proyecto de diseño es tan bueno o malo como su arte final lo sea, este es un paso obligado antes de enviar a impresión. En el siguiente cuadro se presenta en contenido del componente formativo, donde se enuncian los elementos que se deben tener en cuenta para realizar un buen artefinalizado y algunas de las características más importantes de ellos.

    .row.justify-content-center
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama de flujo presenta el contenido del componente formativo, poniendo especial énfasis en conceptos y temas más importantes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
