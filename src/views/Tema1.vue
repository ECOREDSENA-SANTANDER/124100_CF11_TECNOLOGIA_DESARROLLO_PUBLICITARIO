<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El arte finalizado
    
    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/imag01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el desarrollo de piezas gráficas intervienen varios actores; si bien el diseñador es el creador y el rol de mayor importancia en el proceso, es necesario entender que hay otros roles que también lo son. Así, se debe recordar que una pieza gráfica es un elemento del proceso de comunicación y que tiene como factores inherentes: un emisor, un código, un canal y un receptor; estos elementos implican que las piezas gráficas respondan a una serie de requisitos que permitan exponerlas de la forma más adecuada y comprensible garantizando que el mensaje no sufra ningún tipo de modificación.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 ¿Qué es el arte finalizado?
    
    .row
      .col-lg-8
        p.mb-4 El llamado arte final en el diseño gráfico es un proceso que implica la revisión y la preparación de las piezas gráficas para el envío a los diferentes sistemas de impresión y de exposición en medios.
        p.mb-4 En la actualidad, el proceso de arte finalizado se realiza en métodos de impresión “directos a plancha” o CTP, como el formato PDF de Adobe, que es un formato digital que ya está listos para su envío a la imprenta, sin la necesidad de realizar retoques y otro tipo de intervenciones.
        p Estos formatos han simplificado el envío de archivos gráficos a las empresas de impresión y el proceso de arte finalización que realiza el diseñador. Es importante entender que cada proyecto gráfico es distinto y requiere de un proceso de arte final particular, aunque existen algunas normas comunes en todos los diseños que hay que tener en cuenta antes de generar un PDF para impresión.
      .col-lg-4
        img(src='@/assets/curso/temas/t1/imag02.png', alt='')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
