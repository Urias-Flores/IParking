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
      title : "funcionalidad-1",
      description : "Sample text. Lorem ipsum dolor sit amet, consectetur"
    },
    {
      image : "feature-2.jpg",
      title : "funcionalidad-2",
      description : "Sample text. Lorem ipsum dolor sit amet, consectetur"
    },
    {
      image : "feature-3.jpg",
      title : "funcionalidad-3",
      description : "Sample text. Lorem ipsum dolor sit amet, consectetur"
    },
    {
      image : "feature-4.jpg",
      title : "funcionalidad-4",
      description : "Sample text. Lorem ipsum dolor sit amet, consectetur"
    },
  ];

  companyFeatures = [
    {
      image : "quality.svg",
      title : "Calidad",
      description : "Sample text. Lorem ipsum dolor sit amet, consectetur"
    },
    {
      image : "innovation.svg",
      title : "Innovacion",
      description : "Sample text. Lorem ipsum dolor sit amet, consectetur"
    },
    {
      image : "security.svg",
      title : "Seguridad",
      description : "Sample text. Lorem ipsum dolor sit amet, consectetur"
    }
  ]

  references  = [
    {
      text : "es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. " +
        "Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, " +
        "cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro " +
        "de muestras tipográficas.",
      people : "Juan Camello - CEO Diunsa",
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
