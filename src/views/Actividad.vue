<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar el grado de apropiación de los conceptos clave de las Técnicas para la negociación aplicadas en ventas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por proceso de venta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una acción improvisada para cerrar negocios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un conjunto de estrategias publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un recorrido estructurado para concretar una transacción comercial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un contrato entre empresa y cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El proceso de venta es un recorrido estructurado y secuencial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿En qué etapa del proceso de venta se identifican clientes potenciales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Calificación.', esCorrecta: false },
            { id: 'b', texto: 'Prospección.', esCorrecta: true },
            { id: 'c', texto: 'Seguimiento.', esCorrecta: false },
            { id: 'd', texto: 'Cierre.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La prospección permite identificar nuevos clientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes opciones no corresponde a una etapa del conflicto?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Oposición.', esCorrecta: false },
            { id: 'b', texto: 'Intensiones.', esCorrecta: false },
            { id: 'c', texto: 'Organización.', esCorrecta: true },
            { id: 'd', texto: 'Desenlace.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La organización no hace parte de una etapa del conflicto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es el propósito del contacto inicial con el cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cerrar la venta.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Presentarse y explorar necesidades.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Firmar contrato.', esCorrecta: false },
            { id: 'd', texto: 'Evaluar la competencia.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El contacto inicial abre la relación comercial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué se busca en el análisis del cliente y propuesta de solución?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir costos internos.', esCorrecta: false },
            { id: 'b', texto: 'Presentar promociones.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Mejorar resultados del cliente.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Aumentar publicidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La propuesta debe aportar valor al cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una característica clave de la presentación de la propuesta de valor?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ocultar desventajas.', esCorrecta: false },
            { id: 'b', texto: 'Ser extensa.', esCorrecta: false },
            { id: 'c', texto: 'Ser clara y transparente.', esCorrecta: true },
            { id: 'd', texto: 'Ser solo verbal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Excelente trabajo! La claridad genera confianza.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿En qué fase se manejan las objeciones del cliente?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aclaración y negociación.', esCorrecta: true },
            { id: 'b', texto: 'Contacto inicial.', esCorrecta: false },
            { id: 'c', texto: 'Prospección.', esCorrecta: false },
            { id: 'd', texto: 'Seguimiento.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las objeciones se gestionan durante la negociación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué acción marca el cierre formal de la venta?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entrega del producto.', esCorrecta: false },
            { id: 'b', texto: 'Firma del contrato.', esCorrecta: true },
            { id: 'c', texto: 'Seguimiento.', esCorrecta: false },
            { id: 'd', texto: 'Prospección.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La firma formaliza el acuerdo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Por qué el seguimiento es importante en el proceso de venta?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Para vender más rápido.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Para evaluar a la competencia.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Para cambiar precios.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Para medir la satisfacción del cliente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El seguimiento fortalece la relación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué concepto define al cliente que consume y produce contenido?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Prosumidor.', esCorrecta: true },
            { id: 'b', texto: 'Oferente.', esCorrecta: false },
            { id: 'c', texto: 'Demandante.', esCorrecta: false },
            { id: 'd', texto: 'Nicho.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El prosumidor participa activamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué permite la segmentación del mercado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar costos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Dividir clientes por necesidades.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Eliminar clientes.', esCorrecta: false },
            { id: 'd', texto: 'Unificar precios.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La segmentación mejora la atención al cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué habilidad es clave para las técnicas de cuestionamiento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Escucha activa.', esCorrecta: true },
            { id: 'b', texto: 'Publicidad.', esCorrecta: false },
            { id: 'c', texto: 'Diseño gráfico.', esCorrecta: false },
            { id: 'd', texto: 'Contabilidad.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Excelente trabajo! Escuchar es fundamental.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿La comunicación no verbal influye principalmente en?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El precio.', esCorrecta: false },
            { id: 'b', texto: 'La percepción del mensaje.', esCorrecta: true },
            { id: 'c', texto: 'El contrato.', esCorrecta: false },
            { id: 'd', texto: 'El producto.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El lenguaje corporal comunica mucho.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué puede generar una barrera en la comunicación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Claridad del mensaje.', esCorrecta: false },
            { id: 'b', texto: 'Uso adecuado del lenguaje.', esCorrecta: false },
            { id: 'c', texto: 'Malentendidos.', esCorrecta: true },
            { id: 'd', texto: 'Empatía.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las barreras afectan la comprensión por malentendidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué se busca al manejar adecuadamente las reacciones del cliente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Imponer la venta.', esCorrecta: false },
            { id: 'b', texto: 'Evitar el diálogo.', esCorrecta: false },
            { id: 'c', texto: 'Acelerar el proceso.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Mantener la relación comercial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La relación es clave en los procesos de reacciones con el cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál es una característica del cliente actual?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pasividad.', esCorrecta: false },
            { id: 'b', texto: 'Falta de información.', esCorrecta: false },
            { id: 'c', texto: 'Mayor exigencia.', esCorrecta: true },
            { id: 'd', texto: 'Dependencia del vendedor.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El cliente actual es más exigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Cuál es la relación entre mercadeo y ventas?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Son procesos aislados.', esCorrecta: false },
            { id: 'b', texto: 'No se relacionan.', esCorrecta: false },
            {
              id: 'c',
              texto: 'El mercadeo apoya el proceso de venta.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Compiten entre sí.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El mercadeo facilita las ventas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué elemento fortalece la negociación en ventas?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Imposición.', esCorrecta: false },
            { id: 'b', texto: 'Comunicación efectiva.', esCorrecta: true },
            { id: 'c', texto: 'Silencio.', esCorrecta: false },
            { id: 'd', texto: 'Rigidez.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Comunicar bien mejora acuerdos en las negociaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué permite identificar un buyer persona?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Costos de producción.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Perfil detallado del cliente.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Estrategias legales.', esCorrecta: false },
            { id: 'd', texto: 'Canales logísticos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Un buyer persona ayuda a entender al cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué resultado busca una venta efectiva?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo el cierre.', esCorrecta: false },
            { id: 'b', texto: 'Una relación sostenible.', esCorrecta: true },
            { id: 'c', texto: 'Una promoción.', esCorrecta: false },
            { id: 'd', texto: 'Un descuento.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La venta inicia una relación que busca siempre una venta efectiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
