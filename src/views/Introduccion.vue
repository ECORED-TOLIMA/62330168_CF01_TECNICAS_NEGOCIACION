<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Este componente presenta la conceptualización de la negociación como estrategias requeridas tanto en la vida diaria como en el ámbito organizacional. Desde aquí, se presentan sus elementos y características, así como sus estilos y técnicas, las cuales brindan un fundamento consistente para su implementación en escenarios diversos, donde la confrontación o la divergencia se presente.
        p.mb-4(data-aos="fade-down") El propósito de este componente es fortalecer las competencias en las técnicas de negociación a partir de sus fundamentos y ponerlas en escena a través del mercadeo.
        p.mb-0(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/V7jB-FuUmRk?si=G2rFigd2Hw-nen9J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption <b>Vídeo 1.</b> Fundamentos de negociación y mercadeo

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
