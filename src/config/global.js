export default {
  global: {
    Name: 'Fundamentos de negociación y mercadeo',
    Description:
      'Este componente introduce la negociación como estrategia que exige conocimientos y habilidades para lograr acuerdos. Describe sus características y tipos, facilitando la gestión de conflictos y divergencias. Finalmente, articula estos fundamentos con el mercadeo, aplicando la negociación a conceptos como mercados, segmentación, cliente y proceso de venta, desagregados para fortalecer el aprendizaje.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos y preparación de la negociación',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Definición de conflicto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Definición de negociación', hash: 't_1_2' },
          {
            numero: '1.3',
            titulo: 'Elementos y características de la negociación',
            hash: 't_1_3',
          },
          { numero: '1.4', titulo: 'Estilos de negociación', hash: 't_1_4' },
          { numero: '1.5', titulo: 'Fases de la negociación', hash: 't_1_5' },
          { numero: '1.6', titulo: 'Tipos de negociación', hash: 't_1_6' },
          { numero: '1.7', titulo: 'Técnicas de negociación', hash: 't_1_7' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos del mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Definición de mercadeo', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Tipos de mercado', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Segmentación del mercado', hash: 't_2_3' },
          { numero: '2.4', titulo: 'El cliente actual', hash: 't_2_4' },
          { numero: '2.5', titulo: 'Proceso de venta', hash: 't_2_5' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_62330168_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Arquetipo',
      significado:
        'perfil simbólico universal como el sabio, el héroe o el cuidador, utilizado para humanizar una marca, permitiéndole conectar emocionalmente con su audiencia y diferenciarse de la competencia.',
    },
    {
      termino: 'Buyer persona',
      significado:
        'es el perfil detallado del cliente en donde se identifica su comportamiento y sus dolores o necesidades basado en datos reales y observaciones clave.',
    },
    {
      termino: 'Demandantes',
      significado:
        'consumidores, compradores o clientes potenciales que poseen la necesidad, el deseo y la capacidad adquisitiva para comprar bienes o servicios en el mercado.',
    },
    {
      termino: 'Nicho de mercado',
      significado:
        'define un grupo reducido de consumidores que presenta necesidades específicas o una combinación particular de estas.',
    },
    {
      termino: 'Oferentes',
      significado:
        'organizaciones y personas que producen, comercializan o ponen a disposición bienes, servicios o soluciones en el mercado para satisfacer necesidades y obtener un beneficio económico.',
    },
    {
      termino: 'Omnicanal',
      significado:
        'también llamada omnicanalidad, es una estrategia empresarial que integra los canales de venta y comunicación: físicos, digitales, redes sociales y aplicaciones, para ofrecer una experiencia de cliente coherente, unificada y fluida.',
    },
    {
      termino: 'Prosumidor',
      significado: 'cliente que consume y produce contenido y reseñas.',
    },
    {
      termino: 'Técnicas',
      significado:
        'acciones específicas, herramientas y métodos prácticos utilizados para alcanzar los objetivos comerciales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bailén, M. & Carrillo, I. (2023). Programas e iniciativas para la formación y el entrenamiento en técnicas y habilidades de negociación: una revisión de la literatura. Facultad de Ciencias Sociales y Jurídicas. Universitas Miguel Hernández.',
      link: 'https://dspace.umh.es/bitstream/11000/29767/1/TFG-Bail%C3%A9n%20Fuentes%2C%20Mar%C3%ADa.pdf',
    },
    {
      referencia:
        'Davidson, A. & Aguilar, S. (2021). Poderosas Técnicas de Negociación y Ventas.',
      link: '',
    },
    {
      referencia:
        'ESADE (2025). Técnicas de negociación: una habilidad esencial en el mundo empresarial.',
      link: 'https://www.esade.edu/beyond/es/tecnicas-negociacion/#:~:text=%C2%BFQu%C3%A9%20son%20las%20t%C3%A9cnicas%20de,todos%20los%20niveles%20de%20responsabilidad.',
    },
    {
      referencia: 'ESAN (2022). Siete características del consumidor de hoy.',
      link: 'https://www.esan.edu.pe/conexion-esan/7-caracteristicas-del-consumidor-de-hoy#:~:text=Buscan%20facilidad%20y%20rapidez,el%20comercio%20electr%C3%B3nico%20crecer%C3%A1%2035%20%25.',
    },
    {
      referencia:
        'HubSpot (2023). Las 6 técnicas de negociación más eficaces para tus ventas.',
      link: 'https://blog.hubspot.es/sales/tecnicas-negociacion',
    },
    {
      referencia: 'RAE. (2024). Mercadeo.',
      link: 'https://dle.rae.es/mercadeo',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
