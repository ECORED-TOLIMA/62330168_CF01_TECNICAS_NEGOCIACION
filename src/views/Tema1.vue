<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos y preparación de la negociación
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") La negociación se considera una estrategia poderosa en la gestión organizacional, ya que permite encontrar puntos de acuerdo, generar unidad en contextos divergentes y gestionar conflictos, alcanzando beneficios compartidos bajo enfoques ganar-ganar. No obstante, resulta fundamental contextualizar el conflicto como el origen que da lugar al proceso de negociación.
      separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Definición de conflicto
      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img02.svg', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-4(data-aos="fade-down") El conflicto se considera una contradicción o antagonismo que se presenta entre una o más personas debido a percepciones, valores o intereses opuestos. En la organización por su parte, el conflicto es innato, surge de la inevitable interacción humana entre miembros de diferentes equipos, áreas o departamentos generada por las metas, recursos limitados o roles mal definidos; por esto debe ser tenido en cuenta en la gestión organizacional. Su finalidad es mejorar las relaciones entre los integrantes de la organización, así como la consecución de sus logros.
          p.mb-0(data-aos="fade-down")  El conflicto atraviesa distintas etapas:
      .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img03.svg' alt='AvatarTop')
            h4.text-center Oposición o surgimiento
            p Aparece una diferencia de intereses, percepciones o necesidades, generalmente provocada por fallas en la comunicación o recursos limitados.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img04.svg' alt='AvatarTop')
            h4.text-center Conocimiento y personalización
            p Las partes reconocen la existencia del conflicto y lo asumen de manera consciente, vinculándolo a intereses personales o grupales.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img05.svg' alt='AvatarTop')
            h4.text-center Intenciones
            p Cada parte define su postura y determina cómo actuará frente al conflicto, ya sea de forma colaborativa, competitiva o evasiva.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img06.svg' alt='AvatarTop')
            h4.text-center Comportamiento
            p El conflicto se expresa mediante acciones visibles, como discusiones, desacuerdos abiertos o conductas confrontativas.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img07.svg' alt='AvatarTop')
            h4.text-center Desenlace
            p Se alcanza un resultado que puede ser funcional, cuando contribuye al aprendizaje y mejora organizacional, o disfuncional, si genera efectos negativos.
      p.mb-4(data-aos="fade-down") La siguiente figura resume estas fases y cómo se presentan en un conflicto:
      .row.justify-content-center.mb-lg-4(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Proceso del conflicto
        .row.justify-content-center
          .col-10
            figure.desktop
              img(src='@/assets/curso/temas/t1/img08.svg', alt='Figura 1 que representa las etapas del conflicto organizacional, iniciando con la oposición potencial como situación latente que genera malestar, seguida del conocimiento y la personalización donde el conflicto se hace manifiesto, continuando con el comportamiento en el que se expresan las tensiones, y finalizando con los resultados, que pueden derivar en consecuencias constructivas o en conflicto violento.')
        .col-12.mb-4
          figure.movil
            img(src='@/assets/curso/temas/t1/img09.svg', alt='Figura 1 que representa las etapas del conflicto organizacional, iniciando con la oposición potencial como situación latente que genera malestar, seguida del conocimiento y la personalización donde el conflicto se hace manifiesto, continuando con el comportamiento en el que se expresan las tensiones, y finalizando con los resultados, que pueden derivar en consecuencias constructivas o en conflicto violento.')
      p.mb-5(data-aos="fade-down") En el proceso del conflicto se identifican distintos niveles, según las personas o grupos involucrados:
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.tarjeta--c1.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img40.svg', alt='Imagen decorativa')  
          h2.text-center Intrapersonal
          p Ocurre dentro de la misma persona, cuando existen tensiones internas, dudas, valores contrapuestos o decisiones difíciles.
        .col-md.tarjeta.tarjeta--c7.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img41.svg', alt='Imagen decorativa')
          h2.text-center Interpersonal
          p Se presenta entre dos o más personas, generalmente por diferencias de intereses, percepciones, roles o estilos de comunicación.
        .col-md.tarjeta.tarjeta--c3.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img42.svg', alt='Imagen decorativa')
          h2.text-center Intragrupal
          p Surge dentro de un mismo equipo o grupo de trabajo, asociado a metas, responsabilidades, liderazgo o distribución de tareas.
        .col-md.tarjeta.tarjeta--c8.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img43.svg', alt='Imagen decorativa')  
          h2.text-center Intergrupal
          p Se manifiesta entre distintos grupos, áreas o departamentos, normalmente por recursos, objetivos organizacionales o falta de coordinación.
      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .tarjeta.position-relative.p-4.pt-5(style="background-color: #FFE2C3;")
            div(style="position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px;")
              img(src='@/assets/curso/temas/t1/img10.svg', alt='Imagen decorativa')
            p.text-regular.text-center.mb-0.pt-3 La clave no es evitar el conflicto, sino gestionarlo para mejorar el funcionamiento de la organización y fomentar el crecimiento.
      p(data-aos="fade-down") En las organizaciones hay diferentes factores que pueden originar y desarrollar el conflicto. Estos factores son el nivel de interdependencia, el nivel de tensión en el conflicto, así como el tipo de conflicto. A continuación, la explicación de cada uno:
      p.mb-4(data-aos="fade-down") El nivel de interdependencia se refiere a la situación en la que las acciones de una persona influyen en los resultados de otra, y viceversa. Existen dos tipos de interdependencia:
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12.col-lg-10
          .tarjeta--container.row
            .col-xl.col-lg-6.tarjeta.tarjeta--c1.p-5
              .row.justify-content-center.mb-3
                .col-lg-5.col-4
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/t1/img11.svg', alt='Imagen decorativa')(style="width: 100%")
              h4.text-center La interdependencia positiva
              p.mb-0(data-aos="fade-down") Se presenta cuando existe concordancia en los objetivos y metas de las partes, aunque puedan aparecer desacuerdos respecto a la forma de alcanzarlos. En este contexto, predomina una actitud cooperativa, mayor apertura hacia los intereses del otro, creación de espacios de diálogo y trabajo conjunto, así como una mayor satisfacción al lograr acuerdos equilibrados y sostenibles en el tiempo.
            .col-xl.col-lg-6.tarjeta.tarjeta--c2.p-5
              .row.justify-content-center.mb-3
                .col-lg-5.col-4
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/t1/img12.svg', alt='Imagen decorativa')(style="width: 100%")
              h4.text-center La interdependencia negativa
              p.mb-0(data-aos="fade-down") Ocurre cuando los objetivos de las partes son contrarios o excluyentes. En este escenario, se presenta discordancia tanto en las metas como en las acciones para alcanzarlas, predominando la negación de los intereses de la otra parte, conductas competitivas, resistencia al diálogo y la búsqueda prioritaria del beneficio propio, incluso a costa de la relación.
      p.mb-4(data-aos="fade-down") En cuanto al nivel de tensión, se identifican tres tipos:
      .row.justify-content-center.mb.lg-4
        .col.col-lg-10.col-12
          ImagenInfografica.color-acento-botones.desktop
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t1/img13.svg', alt='Imagen decorativa')
            .tarjeta.color-acento-contenido.p-3(x="68%" y="23%" numero="+")
              p.mb-0 Reduce la capacidad de percibir y procesar adecuadamente la información, produciendo resultados menos favorables. Por ello, el nivel de tensión moderado es el más adecuado para una gestión positiva del conflicto.
            .tarjeta.color-acento-contenido.p-3(x="68%" y="46%" numero="+")
              p.mb-0 Favorece una mayor implicación en la negociación, mejor integración de la información, consideración de alternativas y disposición para mejorar la situación. 
            .tarjeta.color-acento-contenido.p-3(x="68%" y="70%" numero="+")
              p.mb-0 Conduce a la inactividad o evitación del conflicto, ya que no se percibe la necesidad de intervenir, lo que genera bajos resultados conjuntos. 
      .row.justify-content-center.col-12.mb-4
          figure.movil
            img(src='@/assets/curso/temas/t1/img14.svg', alt='Imagen decorativa')
      p.mb-4(data-aos="fade-down") Finalmente, existen diferentes tipos de conflicto que se agrupan en dos modalidades:
      .row.mb-0.justify-content-center
        .col.col-lg-10  
          .row
            .col-lg-6.col-md-12.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t1/img15.svg' alt='')
                .tarjeta.color-primario
                  .p-4
                    h4.text-center Conflicto orientado a la tarea
                    p.mb-0 Surge cuando existen diferencias de opinión sobre una actividad o decisión específica, como la distribución de recursos.
            .col-lg-6.col-md-12.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t1/img16.svg' alt='')
                .tarjeta.color-primario
                  .p-4
                    h4.text-center Conflicto orientado a la relación
                    p.mb-0 Se presenta por incompatibilidades personales relacionadas con valores, ideas o preferencias, afectando el rendimiento y la satisfacción del grupo.
      separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2 Definición de negociación
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img17.png', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-1.order-2
          p.mb-4(data-aos="fade-down") La negociación es un proceso mediante el cual dos o más partes interactúan con el propósito de llegar a un acuerdo que permita satisfacer intereses, necesidades y objetivos, tanto individuales como organizacionales. Este proceso no se limita a un intercambio puntual, sino que implica comunicación constante, análisis de alternativas y disposición para ceder en ciertos aspectos con el fin de alcanzar compromisos viables.
          p.mb-0(data-aos="fade-down") Durante la negociación, las partes exponen sus posiciones, identifican puntos de coincidencia y reconocen posibles divergencias. A partir de este diálogo, se toman decisiones conjuntas que buscan equilibrar beneficios y costos, evitando imposiciones y promoviendo soluciones aceptables para todos los involucrados.
      p.mb-4(data-aos="fade-down") La negociación puede implementarse con distintos fines, como la resolución de conflictos, la construcción y fortalecimiento de relaciones, la optimización de recursos y la toma de decisiones estratégicas. Asimismo, facilita el logro de objetivos comunes y contribuye al desarrollo de habilidades como la comunicación, la escucha activa y la argumentación.
      .row.justify-content-center.mb-0
        .col-lg-10.col-12.order-lg-2.order-2
          .cajon.c1.p-4
            .row.align-items-center
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t1/img18.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p.mb-0(data-aos="fade-down") Finalmente, la negociación fortalece la adaptabilidad y la flexibilidad organizacional, ya que permite responder de manera efectiva a cambios del entorno, gestionar intereses diversos y generar acuerdos sostenibles en escenarios de incertidumbre.
      separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Elementos y características de la negociación
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img19.png', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-2.order-2
          p.mb-4(data-aos="fade-down") Los elementos más importantes que deben considerarse en un escenario de negociación parten de comprender que el problema es distinto de las personas involucradas. Separar a las personas de los problemas permite manejar emociones, percepciones y relaciones sin que estas interfieran en la búsqueda de acuerdos, favoreciendo un diálogo respetuoso y constructivo entre las partes.
          .cajon.c2.color-secundario.p-4
            p(data-aos="fade-down") Otro aspecto clave consiste en centrar la atención en los intereses reales y no únicamente en las posiciones que cada parte defiende. Mientras las posiciones suelen ser visibles y rígidas, los intereses representan necesidades, motivaciones y expectativas subyacentes que, al identificarse, amplían las posibilidades de entendimiento y acuerdo.
      p(data-aos="fade-down") También resulta esencial promover la generación de soluciones creativas que permitan obtener beneficios mutuos. Explorar alternativas, proponer opciones diversas y adoptar una visión colaborativa facilita acuerdos sostenibles, equilibrados y satisfactorios para quienes participan en la negociación.
      p(data-aos="fade-down") El uso de criterios objetivos aporta equilibrio y legitimidad al proceso negociador. Basar las decisiones en datos, normas, estándares o referencias externas ayuda a reducir la subjetividad, fortalece la confianza y contribuye a acuerdos percibidos como justos y razonables.
      p.mb-4(data-aos="fade-down") Partiendo de lo anterior, se presenta la siguiente figura:
      .row.justify-content-center.mb-lg-4(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Elementos de la negociación
        .row.justify-content-center
          .col-10
            figure.desktop
              img(src='@/assets/curso/temas/t1/img20.svg', alt='Figura 2 que presenta los elementos clave de una negociación efectiva, destacando la importancia de separar a las personas de los problemas, centrar la atención en los intereses y no en las posiciones, generar soluciones creativas de beneficio mutuo y utilizar criterios objetivos para orientar la toma de decisiones.')
        .col-12.mb-4
          figure.movil
            img(src='@/assets/curso/temas/t1/img21.svg', alt='Figura 2 que presenta los elementos clave de una negociación efectiva, destacando la importancia de separar a las personas de los problemas, centrar la atención en los intereses y no en las posiciones, generar soluciones creativas de beneficio mutuo y utilizar criterios objetivos para orientar la toma de decisiones.')
      p.mb-4(data-aos="fade-down") Por su parte, las características principales y los beneficios de las técnicas de negociación son:
      .row.justify-content-center.mb-0
        .col.col-lg-10.col-12
          .tarjeta.tarjeta--c3.p-4
            ul.lista-ul--color(data-aos="fade-down")
              li.mb-4
                i.fas.fa-caret-right
                p.mb-0 Los negociadores tienen que utilizar modelos de conducta que aporten en influenciar a otros. De esa forma se logran soluciones beneficiosas y satisfactorias.
              li.mb-4
                i.fas.fa-caret-right
                p.mb-0 Las técnicas de negociación ayudan a resolver problemas, responder a objeciones y manejar eficientemente los conflictos. Además, permiten cerrar acuerdos entre las partes y mantener buenas relaciones en el largo plazo.
              li.mb-4
                i.fas.fa-caret-right
                p.mb-0 El uso correcto de las técnicas permite encontrar las mejores soluciones que favorezcan los intereses de las partes involucradas. Favorece todo el proceso de la negociación desde el inicio hasta el cumplimiento de los acuerdos.
              li.mb-4
                i.fas.fa-caret-right
                p.mb-0 El conocimiento y la aplicación eficiente de las técnicas de negociación, puede determinar el éxito o el fracaso obtenido. Puesto que bien aplicadas contribuyen a que la solución alcanzada satisfaga los intereses de todas las partes.
              li.mb-0
                i.fas.fa-caret-right
                p.mb-0 El negociador debe tener la habilidad de saber escuchar, saber preguntar y manejar siempre una conducta asertiva. Esto favorece el desarrollo apropiado del proceso de negociación.
      separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4 Estilos de negociación
      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img22.svg', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-4(data-aos="fade-down") Los estilos de negociación surgen de acuerdo con la posición de las partes, de esta manera se pueden encontrar diferentes estilos de negociación, los cuales varían en función de las variables: demandar valor, asertividad, empatía y crear valor.
          p.mb-4(data-aos="fade-down") La negociación efectiva requiere que las partes involucradas posean habilidades de comunicación adecuadas para que puedan entender y responder a las necesidades y expectativas de los demás.
          p.mb-0(data-aos="fade-down") Existen tres estilos principales de negociación que se distinguen por el enfoque que toman los negociadores:
      TabsC.color-acento-botones.mb-5
        .py-3.py-md-4(titulo="La negociación inmediata")
          .row.justify-content-center
            .col-lg-7.col-12.mb-4.mb-md-0.order-lg-2.order-2
              //- h4 La negociación inmediata.
              p Este tipo de negociación se centra en llegar a un acuerdo sin prestar demasiada atención a las relaciones personales. Es común en situaciones como transacciones de compra y venta, donde lo importante es cerrar el trato lo más rápido posible sin la necesidad de establecer vínculos duraderos.
            .col-lg-5.col-8.order-lg-1.order-1.mb-4
              figure
                img(src='@/assets/curso/temas/t1/img23.jpg', alt='Imagen decorativa')
        .py-3.py-md-4(titulo="La negociación progresiva")
          .row.justify-content-center
            .col-lg-7.col-12.mb-4.mb-md-0.order-lg-2.order-2
              //- h4 La negociación progresiva
              p En este estilo, el enfoque está en desarrollar una relación personal sólida antes de entrar en los aspectos técnicos o económicos de la negociación. Aquí, se prioriza crear un ambiente de confianza y cercanía, lo cual facilitará las negociaciones a futuro. Es útil en contextos donde se valoran las relaciones a largo plazo, ya que genera confianza antes de abordar los aspectos formales del negocio.
            .col-lg-5.col-8.order-lg-1.order-1.mb-4
              figure
                img(src='@/assets/curso/temas/t1/img24.jpg', alt='Imagen decorativa')
        .py-3.py-md-4(titulo="La negociación situacional")
          .row.justify-content-center
            .col-lg-7.col-12.mb-4.mb-md-0.order-lg-2.order-2
              //- h4 La negociación situacional
              p Es el estilo más flexible y ágil de negociación, ya que se adapta a las circunstancias específicas de cada situación. Se basa en un análisis detallado de las condiciones, habilidades y debilidades de las partes involucradas. Este estilo permite a los negociadores alternar entre la negociación inmediata y la progresiva según sea necesario, lo que lo convierte en una técnica efectiva para diversas situaciones.
            .col-lg-5.col-8.order-lg-1.order-1.mb-4
              figure
                img(src='@/assets/curso/temas/t1/img25.jpg', alt='Imagen decorativa')
      .row.justify-content-center.mb-0
        .col.col-lg-10.col-12
          .tarjeta.position-relative.p-4.pt-5(style="background-color: #FFE2C3;")
            div(style="position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px;")
              img(src='@/assets/curso/temas/t1/img10.svg', alt='Imagen decorativa')
            p.text-regular.text-center.mb-0.pt-3 Los estilos de negociación mencionados anteriormente no solo son útiles en el ámbito empresarial, sino que también tienen aplicación en las relaciones sociales cotidianas. La habilidad de adaptar el estilo a la situación específica es clave para lograr acuerdos exitosos en diferentes contextos.
      separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5 Fases de la negociación
      p.mb-4(data-aos="fade-down") La negociación debe entenderse como un proceso continuo y planificado, en el que las partes avanzan progresivamente hacia la construcción de un acuerdo. No se trata únicamente de exponer posiciones, sino de gestionar información, intereses, emociones y relaciones a lo largo de distintas etapas que requieren habilidades y decisiones específicas. El desarrollo ordenado de estas fases permite reducir la incertidumbre y aumentar la efectividad del proceso.
      .row.justify-content-center.mb-0
        .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img26.svg', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-1.order-1.mb-4
          .cajon.c2.color-secundario.p-4
            p.mb-2(data-aos="fade-down") Cada fase de la negociación cumple un propósito particular y aporta elementos clave para el avance hacia el acuerdo. Una preparación adecuada facilita una discusión más clara; una comunicación efectiva permite identificar oportunidades de consenso; y una gestión flexible de propuestas favorece soluciones equilibradas. Ignorar o acelerar alguna de estas etapas puede generar acuerdos frágiles o conflictos posteriores.
      p.mb-4(data-aos="fade-down") Conocer las fases de la negociación ayuda a las partes a ubicarse dentro del proceso, evaluar el progreso alcanzado y ajustar sus estrategias según las respuestas del interlocutor y el contexto. De esta manera, la negociación se convierte en una herramienta estratégica para la toma de decisiones y la resolución de conflictos de forma estructurada y consciente.
      p.mb-4(data-aos="fade-down") A continuación, se presentan las principales fases del proceso de negociación y sus características fundamentales:
      .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img27.svg' alt='AvatarTop')
            h4.text-center Preparación
            p La negociación exige que las partes deban prepararse investigando, estableciendo objetivos claros y definiendo estrategias. Esta fase es vital para el éxito futuro de la negociación.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img28.svg' alt='AvatarTop')
            h4.text-center Discusión
            p En esta etapa la comunicación es clave, los implicados intercambian información, presentan sus posiciones y comienzan a explorar posibles soluciones.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img29.svg' alt='AvatarTop')
            h4.text-center Propuestas y señales
            p Se presentan propuestas concretas y las partes buscan señales de aceptación o rechazo, las cuales son cruciales para adaptar la estrategia de negociación.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img30.svg' alt='AvatarTop')
            h4.text-center Intercambio
            p La flexibilidad y la creatividad son valoradas en este período de la negociación. Los interlocutores continúan negociando, realizando concesiones y buscando un común acuerdo.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img31.svg' alt='AvatarTop')
            h4.text-center Cierre y acuerdo
            p Finalmente, se llega a un acuerdo que satisface los intereses de ambas partes. Esta fase de negociación incluye la formalización del acuerdo y la garantía de su cumplimiento.
      separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.6 Tipos de negociación
      p.mb-4(data-aos="fade-down") Para presentar los tipos de negociación, a continuación, se exponen los puntos clave que caracterizan este proceso. En primer lugar, se encuentra el intercambio de compromisos, entendido como la interacción entre las partes involucradas en la que se comparten compromisos, información y recursos con el objetivo de alcanzar un acuerdo favorable para ambos interlocutores.
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img32.png', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-2.order-2
          p.mb-4(data-aos="fade-down") Otro aspecto fundamental es la búsqueda de la ganancia mutua, que se aleja de un enfoque estrictamente competitivo. En la negociación empresarial se prioriza la creación de valor y la generación de soluciones que beneficien a todos los actores involucrados.
          p.mb-4(data-aos="fade-down") Este escenario se complementa con el intercambio de criterios, el cual se desarrolla a través de un proceso estructurado que puede incluir diversas etapas, desde la preparación y la discusión, hasta la formalización de acuerdos y el cierre de la negociación. 
          p.mb-0(data-aos="fade-down") A partir de estos elementos, se presentan a continuación los tipos de negociación:
      .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
        .col-lg-10.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial
            .row(numero="1" titulo="Competitivo")
              .col-12.mb-4.mb-md-0
                p.mb-0 Busca la obtención del resultado sin otorgar mayor relevancia a la relación entre las partes. Está orientado a la apropiación de valor y se desarrolla bajo un enfoque “ganar–perder”, donde la prioridad es imponerse en la negociación. Es un estilo de carácter agresivo, utilizado generalmente en negociaciones aisladas, sin expectativas de relación futura, cuando los objetivos a corto plazo son incompatibles y se prevé que la otra parte también adopte una estrategia competitiva.
            .row(numero="2" titulo="Colaborativo")
              .col-12.mb-4.mb-md-0
                p.mb-0 Se basa en el enfoque “ganar–ganar” y tiene como propósito beneficiar a todas las partes involucradas. Este estilo busca satisfacer necesidades mutuas, crear valor y construir relaciones duraderas. Aunque las partes puedan tener intereses opuestos, la negociación se concibe como un medio necesario para alcanzar una meta común. Suele aplicarse cuando la relación continuará en el tiempo y se persiguen objetivos tanto de corto como de largo plazo, lo que exige intercambio constante de información y disposición para el entendimiento.
            .row(numero="3" titulo="Conciliador")
              .col-12.mb-4.mb-md-0
                p.mb-0 En este estilo existe una mayor preocupación por preservar la relación que por el resultado de la negociación. Se caracteriza por ceder ante los intereses de la otra parte, incluso en perjuicio de los propios, bajo un enfoque “perder–ganar”. Prima la empatía y el mantenimiento del vínculo, llegando a renunciar a objetivos inmediatos con la intención de fortalecer relaciones futuras. Puede utilizarse estratégicamente cuando se decide ceder en una negociación menor para obtener beneficios posteriores o evitar tensiones innecesarias.
            .row(numero="4" titulo="Evitación")
              .col-12.mb-4.mb-md-0
                p.mb-0 Se caracteriza por un bajo interés tanto en el resultado de la negociación como en la relación entre las partes. En este estilo se evita deliberadamente la negociación, adoptando actitudes como “se toma o se deja”. Se utiliza cuando el conflicto no justifica el esfuerzo, el tiempo o los recursos que implicaría negociar, o cuando se considera más conveniente concentrar dichos recursos en negociaciones con mayores posibilidades de beneficio.
            .row(numero="5" titulo="Compromiso")
              .col-12.mb-4.mb-md-0
                p.mb-0 Este estilo busca soluciones intermedias que satisfagan parcialmente a ambas partes, logrando resultados aceptables sin cubrir completamente las expectativas. Combina elementos de asertividad y empatía, implicando concesiones mutuas. Comparado con otros estilos, se cede más que en el competitivo, pero menos que en el conciliador; existe mayor implicación que en el evasivo, pero menor que en el colaborativo. Suele emplearse cuando el tiempo o los recursos son limitados, o cuando no es posible aplicar un enfoque plenamente colaborativo.
      p(data-aos="fade-down") A lo largo de las décadas se ha evidenciado que las negociaciones se han vuelto cada vez más complejas por diversos factores, entre los que destaca el aumento en el número de partes implicadas, lo cual influye de manera decisiva en la toma de decisiones en distintos ámbitos. Asimismo, la rapidez con la que cambian las relaciones laborales y organizacionales ha generado entornos cada vez más interconectados, donde lo global, regional y local tienden a difuminarse. Esta situación dificulta que los negociadores logren interrelacionar conflictos e interpretar adecuadamente las reacciones de grupos e individuos.
      p.mb-4(data-aos="fade-down") Basado en lo anterior, a continuación, se presenta la interacción entre los diferentes tipos de negociación:
      .row.justify-content-center.mb-lg-4(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span Tipos de negociación
        .row.justify-content-center
          .col-10
            figure.desktop
              img(src='@/assets/curso/temas/t1/img33.svg', alt='Figura 3 que describe los tipos de negociación según la relación entre resultados y relacionamiento, incluyendo la cesión o conformismo, caracterizada por un enfoque perder–ganar orientado a favorecer a la otra parte; la colaboración, basada en el enfoque ganar–ganar y la cooperación creativa; la transacción o compromiso, que plantea acuerdos intermedios; el estilo competitivo, centrado en ganar–perder; y la evasión, donde se evita el conflicto bajo un enfoque perder–perder.')
        .col-12.mb-4
          figure.movil
            img(src='@/assets/curso/temas/t1/img34.svg', alt='Figura 3 que describe los tipos de negociación según la relación entre resultados y relacionamiento, incluyendo la cesión o conformismo, caracterizada por un enfoque perder–ganar orientado a favorecer a la otra parte; la colaboración, basada en el enfoque ganar–ganar y la cooperación creativa; la transacción o compromiso, que plantea acuerdos intermedios; el estilo competitivo, centrado en ganar–perder; y la evasión, donde se evita el conflicto bajo un enfoque perder–perder.')
      separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.7 Técnicas de negociación
      p(data-aos="fade-down") Las técnicas de negociación constituyen herramientas operativas que orientan la forma en que los negociadores actúan durante el intercambio con la otra parte. A diferencia de los fundamentos, los estilos o los tipos de negociación, las técnicas se aplican de manera concreta en la interacción, permitiendo decidir cómo ceder, cómo presionar, cómo cooperar o cómo evitar, según las circunstancias del proceso negociador.
      p.mb-4(data-aos="fade-down") La selección de una técnica adecuada depende de múltiples factores, como el nivel de interés en el resultado, la importancia de la relación, el contexto organizacional y la disponibilidad de alternativas. En este sentido, las técnicas no deben entenderse como fórmulas rígidas, sino como opciones estratégicas que el negociador puede combinar o ajustar en función de la situación específica que enfrenta.
      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img35.svg', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-2.order-2
          .tarjeta.tarjeta--c3.p-4
            p.mb-2(data-aos="fade-down") Asimismo, el uso consciente de las técnicas de negociación permite gestionar de manera más eficiente los recursos, el tiempo y las expectativas de las partes involucradas. Una técnica mal aplicada puede generar tensiones innecesarias o acuerdos frágiles, mientras que una técnica bien empleada facilita la construcción de acuerdos viables, coherentes con los objetivos planteados y sostenibles en el tiempo.
      p.mb-4(data-aos="fade-down") A continuación, se presentan las principales técnicas de negociación empleadas en el ámbito empresarial, describiendo su enfoque general y los escenarios en los que suelen resultar más pertinentes:
      .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial
            .row(numero="1" titulo="Negociación acomodativa")
              .col-12.mb-4.mb-md-0
                p.mb-0 Este tipo de negociación se caracteriza por asumir voluntariamente una posición de concesión, cediendo en mayor medida para preservar la armonía en el corto plazo. Su aplicación responde a un propósito estratégico, orientado a obtener en el futuro beneficios superiores, fortalecer la relación y consolidar vínculos de largo plazo.
            .row(numero="2" titulo="Negociación competitiva")
              .col-12.mb-4.mb-md-0
                p.mb-0 Conocida también como negociación distributiva, se enfoca en la distribución de recursos limitados. Implica adoptar una postura firme o agresiva con el objetivo de maximizar los propios resultados, donde el beneficio de una parte supone la pérdida de la otra. Resulta útil en contextos de conflicto de intereses claramente definidos. En consecuencia, se le denomina negociación de suma cero, ya que el negociador que aplica esta técnica obtiene la ganancia mientras la contraparte asume la pérdida.
            .row(numero="3" titulo="Negociación colaborativa")
              .col-12.mb-4.mb-md-0
                p.mb-0 Busca alcanzar acuerdos beneficiosos para ambas partes mediante la creación de valor conjunto. En esta técnica, los negociadores cooperan para maximizar beneficios mutuos, integrando de manera creativa sus intereses y realizando concesiones estratégicas. Se fundamenta en el enfoque “ganar–ganar” y contribuye al fortalecimiento de relaciones sostenibles en el tiempo.
            .row(numero="4" titulo="Negociación por compromiso")
              .col-12.mb-4.mb-md-0
                p.mb-0 Implica un nivel intermedio de cooperación, en el cual las partes realizan concesiones mutuas con el fin de alcanzar un punto medio aceptable. Esta técnica permite llegar a acuerdos de forma relativamente rápida, aunque sin maximizar completamente los beneficios de ninguna de las partes.
            .row(numero="5" titulo="Negociación evitativa")
              .col-12.mb-4.mb-md-0
                p.mb-0 Esta técnica se aplica cuando una de las partes considera que no obtendrá beneficios significativos del acuerdo o que el conflicto no justifica el esfuerzo de negociar. Consiste en posponer la negociación o evitarla por completo, dando lugar a una situación de perder–perder, donde no se priorizan ni los resultados ni la relación.
        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img36.png', alt='Imagen decorativa')
      p.mb-4(data-aos="fade-down") Para complementar las técnicas de negociación previamente explicadas, se relaciona la siguiente figura ilustrativa que las ejemplifica: 
      .row.justify-content-center.mb-lg-4(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            span Técnicas de negociación
        .row.justify-content-center
          .col-10
            figure.desktop
              img(src='@/assets/curso/temas/t1/img37.svg', alt='Figura 4 que relaciona cinco enfoques que representan las técnicas de negociación: negociación acomodativa (perder–ganar), negociación competitiva (ganar–perder), negociación colaborativa (ganar–ganar), negociación por compromiso (ganar a medias), y negociación evitativa (perder–perder). Cada técnica se identifica mediante un ícono representativo y acciones entre dos personas facilitar su comprensión.')
        .col-12.mb-4
          figure.movil
            img(src='@/assets/curso/temas/t1/img38.svg', alt='Figura 4 que relaciona cinco enfoques que representan las técnicas de negociación: negociación acomodativa (perder–ganar), negociación competitiva (ganar–perder), negociación colaborativa (ganar–ganar), negociación por compromiso (ganar a medias), y negociación evitativa (perder–perder). Cada técnica se identifica mediante un ícono representativo y acciones entre dos personas facilitar su comprensión.')
      p.mb-4(data-aos="fade-down") A modo de cierre, es importante entender que negociar bien no es ganar una discusión, sino lograr acuerdos que funcionen para todas las partes. Las técnicas de negociación se convierten en herramientas clave para conducir conversaciones, manejar diferencias y transformar desacuerdos en oportunidades de entendimiento.
      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img38.png', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-1.order-1.mb-4
          .cajon.c2.color-secundario.p-4.mb-4
            p.mb-0(data-aos="fade-down") En toda negociación existen intereses compartidos y otros que entran en tensión; reconocerlos permite pasar del enfrentamiento al diálogo constructivo. Cuando se escucha activamente, se argumenta con claridad y se toman decisiones conscientes, es posible construir soluciones equilibradas y sostenibles.
          p.mb-0(data-aos="fade-down") Con esta idea en mente, a continuación, se explora un ejemplo práctico de negociación, donde por medio de un pódcast, se conocerá cómo estas técnicas se aplican en una situación real y cómo influyen en el resultado final del acuerdo:
      .row.justify-content-center.mb-0
        .col.col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Pódcast.
            span Así se construye una negociación exitosa
          .row.justify-content-center.align-items-center.g-0
            .col-lg-12.col-12.order-lg-2.order-2
              .cajon.cajon.c3.p-4
                .col-lg-12.col-12
                  .tarjeta.clr--pink.p-4.rounded-0.h-100
                    .tarjeta.bg-white.p-4
                      TarjetaAudio.color-acento-botones.mb-3(
                      texto="Pódcast"
                      :audio="require_src('@/assets/curso/Podcast_CF01_62330168.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-12.col-12.order-lg-1.order-1
              figure
                img(src='@/assets/curso/temas/t1/img39.svg', alt='Imagen decorativa')
  </template>

<script>
export default {
  name: 'Tema1',
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
