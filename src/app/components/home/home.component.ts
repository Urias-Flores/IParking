import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../../styles.css'
  ]
})

export class HomeComponent {
  features = [
    {
      image : "feature-1.jpg",
      title : "Facilidad",
      description : "Ahora tus cliente se ahorraran la tarea de buscar un lugar donde aparcar."
    },
    {
      image : "feature-2.jpg",
      title : "Comodidad",
      description : "Tus clientes no se tendran que preocupar por el donde dejaran su automovil."
    },
    {
      image : "feature-3.jpg",
      title : "Automatización",
      description : "Con los dispositivos de deteccion, sabras en tiempo real que lugares estan o no ocupados."
    },
    {
      image : "feature-4.jpg",
      title : "Control",
      description : "Conoce en todo momento que ingresos estas recibiendo por el uso de aparcamientos"
    },
  ];

  companyFeatures = [
    {
      image : "quality.svg",
      title : "Calidad",
      description : "Ofrecemos sensores contruidos con lo mejores materiales y construcción"
    },
    {
      image : "innovation.svg",
      title : "Innovación",
      description : "Brindamos los mejores servicios basados en las ultimas tecnologias existentes en el mercado"
    },
    {
      image : "security.svg",
      title : "Seguridad",
      description : "Nuestros sistemas de deteccion cumplen con todas las normativas regulatorias"
    }
  ]

  references  = [
    {
      text : "es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. " +
        "Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, " +
        "cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro " +
        "de muestras tipográficas.",
      people : "Juan Lopez - CEO Diunsa",
    },
    {
      text : "es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. " +
        "Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, " +
        "cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro " +
        "de muestras tipográficas.",
      people : "Alberto Mejia - Dueño City Mall",
    },
    {
      text : "es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. " +
        "Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, " +
        "cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro " +
        "de muestras tipográficas.",
      people : "William Shape",
    },
  ]
}
