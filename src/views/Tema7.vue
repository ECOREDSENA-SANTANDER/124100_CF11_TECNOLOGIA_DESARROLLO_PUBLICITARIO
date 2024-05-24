<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Formato final
    
    .row.mb-4
      .col-lg-7
        p.mb-4 Para realizar impresiones de piezas gráficas, el archivo recomendado será siempre el PDF, este suele ser el favorito teniendo en cuenta que impide que se realicen cambios en textos y tamaños cuando se abre en otro equipo; sin embargo, Adobe Illustrator ofrece una excelente opción para tomar todos los elementos que componen un diseño (imágenes, tipografías, etc.) por medio de la opción Empaquetar.
        p Así, la opción Archivo - Empaquetar le ofrece la posibilidad de recopilar todo lo que incluyó en el diseño y crear un archivo completo en caso de que deba enviar el archivo fuente.
        img(src='@/assets/curso/temas/t7/imag02.png', alt='La imagen presenta pantalla del computador en  la que se despliega la ventana  “Empaquetar”')
        figcaption Figura 26 Empaquetar
      .col-lg-5
        img(src='@/assets/curso/temas/t7/imag01.png', alt='')
    
    .row
      .col-lg-7 
        p De esta manera, se crea una carpeta con el nombre y ubicación que se le haya asignado al archivo al guardarlo, conteniendo los elementos presentes en él, dando la posibilidad de editarlo o simplemente revisarlo en otro equipo (figura 27).
      .col-lg-5
        img(src='@/assets/curso/temas/t7/imag03.png', alt='La imagen presenta  pantalla del computador con carpetas que indican el “Empaquetado”')
        figcaption Figura 27 Empaquetar


</template>

<script>
export default {
  name: 'Tema7',
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
