<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.color-sistema 6
      h1 Troqueles
    
    p.mb-4(data-aos="fade") Un troquel es una línea de corte irregular que simplemente trazará la pieza para luego cortarla en postproducción, a través de cuchillas creadas con el patrón que se haya realizado (troquel).


    .row.fondo-t6.align-items-center.p-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo="b" data-aos="fade-down")
              .row.justify-content-around.align-items-center
                .col-md-6.mb-4.mb-md-0
                  p Para comprender mejor esta parte del arte final, se presenta un ejemplo con un empaque sencillo, al cual se deberá aplicar troquel y líneas guía de corte y doblado.
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/t6/imag01.svg', alt='La figura presenta el diseño  de  una caja.')
                    figcaption Figura 21. Modelo de caja
              .row.justify-content-around.align-items-center
                .col-md-6.mb-4.mb-md-0
                  p Aquí se tiene un diseño muy sencillo de una caja, ahora se explicarán cuáles son las líneas de corte y las de doblado:
                  p Corte: ______________________________
                  p Doblado: _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _    
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/t6/imag01.svg', alt='La figura presenta la misma caja de la figura anterior, pero con líneas punteadas entre vértices, por donde se deben realizar las dobleces.')
                    figcaption Figura 22. Líneas de corte y doblado
              .row.justify-content-around.align-items-center
                .col-md-6.mb-4.mb-md-0
                  p Desde el diseño se le han definido las líneas por donde debe doblarse y cortarse la caja, ahora, se debe crear un sangrado para evitar que el corte quede en extremo pegado de los bordes del diseño (figura 23).
                .col-md-5
                  figure
                    img(src='@/assets/curso/temas/t6/imag02.svg', alt='La figura presenta el diseño de una caja en la que se han marcado las líneas  por donde debe doblarse y a la derecha la pantalla del computador resaltando la opción de trazo')
                    figcaption Figura 23. Sangrado
              .row.justify-content-around.align-items-center
                .col-md-5.mb-4.mb-md-0
                  p Para esto, se debe agregar un nuevo contorno al diseño con un pequeño desplazamiento, haciendo clic en #[B Nuevo Trazado - Efectos (Fx de la ventana Apariencia) - Desplazamiento].
                  p Se pueden usar los valores predeterminados o modificar según sea el caso (figura 24).
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t6/imag03.svg', alt='La imagen presenta la pantalla del computador  con un menú desplegado en el que se resalta la opción trazado. Y en la parte inferior el modelo de la caja con las líneas que indican el trazado para ser doblada  y un recuadro con la ventana de  “desplazamiento”')
                    figcaption Figura 24. Desplazamiento
              .row.justify-content-around.align-items-center
                .col-md-6.mb-4.mb-md-0
                  p Para definir este nuevo trazo como sangrado, se requiere que tenga el mismo diseño que el modelo (figura 25); es decir, el mismo patrón decorativo definido para “adornarla”. Para esto, se debe proceder convertir este nuevo trazado en un objeto independiente en la ruta: #[b Objeto - Expandir apariencia - Desagrupar] y a continuación copiar el mismo relleno del patrón mencionado anteriormente.
                  p Ahora el diseño del patrón decorativo se extiende fuera de la primera margen para lograr que al cortar no se pierdan detalles de este.
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/t6/imag04.svg', alt='La figura presenta el diseño  de la caja en la que se indica el trazado de la sangría.')
                    figcaption Figura 25. Definir trazo sangrado

</template>

<script>
export default {
  name: 'Tema6',
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
