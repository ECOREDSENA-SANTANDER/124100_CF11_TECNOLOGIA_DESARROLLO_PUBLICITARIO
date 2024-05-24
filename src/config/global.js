export default {
  global: {
    componenteFormativo: 'Artefinalización de piezas gráficas',
    descripcionCurso:
      'El arte final en diseño es el proceso de revisión y preparación de un trabajo gráfico para enviarlo correctamente a la imprenta. Es un paso previo a la impresión y reproducción de cualquier encargo gráfico. De un arte final bien realizado, dependerá el resultado bueno o malo del proyecto (Adesing Perú, s.f.).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'El artefinalizado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es el arte finalizado?',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Colores de impresión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conversión de imágenes RGB - CMYK',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Reservas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Barniz UV',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sangrado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Cómo aplicar el sangrado a un diseño?',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '¿Cuánto debe medir el sangrado?',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Resolución de imágenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Color Lab',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tipografías empleadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Troqueles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Formato final',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Arte final',
      significado:
        'Es el proceso de revisión y preparación de un trabajo gráfico para enviarlo correctamente a la imprenta.',
    },
    {
      termino: 'Boceto',
      significado:
        'Esquema o proyecto que contiene solamente los rasgos principales de una obra artística o técnica.',
    },
    {
      termino: 'Curva Bézier',
      significado:
        'En aplicaciones de dibujo, es una línea curva entre dos puntos de control. Cada punto es una pequeña base de datos, o vector, que almacena información como su grosor, color, medida y dirección.',
    },
    {
      termino: 'Ilustración vectorial',
      significado:
        'Concepto vinculado a la imagen digital (compuesta por mapa de bits), aunque se compone de elementos geométricos independientes que se combinan para crear dibujos y figuras más complejas.',
    },
    {
      termino: 'Línea de corte',
      significado:
        'Líneas que indican la medida del formato acabado (papel). Pequeñas líneas que indican por donde guillotinar un trabajo una vez impreso.',
    },
    {
      termino: 'Paleta de colores',
      significado:
        'Conjunto de colores disponibles para ser utilizados en una imagen. Es una de las herramientas de diseño gráfico elementales, ya que se utiliza para crear combinaciones de colores que trabajen bien juntos.',
    },
    {
      termino: 'Reserva',
      significado:
        'Parte posterior de una hoja de papel; la hoja del lado izquierdo es la vuelta del pliego impreso. Espacio libre que se deja en un fondo para insertar otro elemento o para dejarlo en blanco. En acabado de superficie, técnica que se emplea para el recubrimiento parcial del impreso.',
    },
    {
      termino: 'Tipografía',
      significado:
        'Representación gráfica del lenguaje que estudia las diferentes categorías de letras, las familias, los recursos, su legibilidad. El arte y la técnica de imprimir a partir de caracteres alfabéticos realzados y fundidos en bloques de metal.',
    },
    {
      termino: 'Sangrado',
      significado:
        'En tipografía, la sangría desplaza la línea o líneas de introducción de un texto con determinados caracteres blancos o espacios.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adesing Perú. (s.f.). Cómo preparar trabajos de diseño gráfico para imprenta.',
      link:
        'https://adelossantos.wordpress.com/2012/10/22/como-preparar-trabajos-de-diseno-grafico-para-imprenta/',
    },
    {
      referencia: 'Cevagraf. (2013). Sobreimpresión, reserva y reventado.',
      link: 'https://www.cevagraf.coop/blog/sobreimpresion-y-reserva/',
    },
    {
      referencia:
        'El estudio. (2018). Cómo preparar un arte final antes de enviar a imprenta.',
      link:
        ' https://elestudio.com/como-preparar-un-arte-final-antes-de-enviar-imprenta',
    },
    {
      referencia:
        'Espino, N. (2017). ¿Qué es el sangrado (o sangre) en diseño gráfico?',
      link: 'https://nachoespino.com/diseno/que-es-el-sangrado/',
    },
    {
      referencia:
        'Imagen Digital. (2006). Principios de la impresión en colores.',
      link: 'http://www.gusgsm.com/principios_de_la_impresion_en_colores',
    },
    {
      referencia:
        'Reimers Design. (s.f.). Pequeño diccionario del diseñador. Consultado el 17 de junio de 2020.',
      link: 'https://cutt.ly/VyDzeWh',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor - Experto temático ',
          centro: 'Regional Quindío - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Andrea Velásquez Torres',
          cargo: 'Apoyo Experto temático',
          centro: 'Regional Quindío - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria y la Comunicación Gráfica',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Santander Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
