import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

export interface Producto {
  id: number;
  sku: string;
  nombre: string;
  precio: number;
  tipoEnvio: string;
  imagenUrl: string;
  descripcion: string;
  vendidos: number;
  estrellas: number;
  opiniones: number;
  disponibles: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio4';

  carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      caption: 'Laptops Gamer'
    },
    {
      src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      caption: 'Smartphones'
    },
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      caption: 'Accesorios'
    }
  ];

  productoSeleccionado: Producto | null = null;

  productos: Producto[] = [
    {
      id: 1,
      sku: "TK-001",
      nombre: "Faro Delantero",
      precio: 135,
      tipoEnvio: "Envío Express",
      imagenUrl: "https://m.media-amazon.com/images/I/61Ew6HBfftL._AC_SY300_SX300_QL70_FMwebp_.jpg",
      descripcion: "Faro delantero de alta calidad con tecnología LED avanzada. Compatible con múltiples marcas de vehículos. Proporciona iluminación superior en la noche para mayor seguridad.",
      vendidos: 150,
      estrellas: 4.5,
      opiniones: 32,
      disponibles: 8
    },
    {
      id: 2,
      sku: "TK-002",
      nombre: "Parachoques",
      precio: 80,
      tipoEnvio: "Envío a Domicilio",
      imagenUrl: "https://m.media-amazon.com/images/I/711vYNqOlOL._AC_SX679_.jpg",
      descripcion: "Parachoques resistente y duradero, hecho con materiales de primera calidad. Protege tu vehículo de impactos frontales y traseros. Fácil instalación.",
      vendidos: 89,
      estrellas: 4,
      opiniones: 18,
      disponibles: 5
    },
    {
      id: 3,
      sku: "TK-003",
      nombre: "Tape Cope Rin Centro Aveo Sedan 2006 A 2011 Juego",
      precio: 25,
      tipoEnvio: "Envío gratis",
      imagenUrl: "https://m.media-amazon.com/images/I/715CVS4a9NL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
      descripcion: "Juego completo de tapacubos para Chevrolet Aveo sedán 2006 a 2011. Diseño cromado elegante que mejora la apariencia de tu vehículo. Fácil colocación.",
      vendidos: 210,
      estrellas: 5,
      opiniones: 45,
      disponibles: 20
    },
    {
      id: 4,
      sku: "TK-004",
      nombre: "Aceite Motul",
      precio: 8.50,
      tipoEnvio: "Envío Express",
      imagenUrl: "https://m.media-amazon.com/images/I/61kYvkW915L._AC_SY300_SX300_QL70_FMwebp_.jpg",
      descripcion: "Aceite sintético de motor Motul de alta performance. Protección superior del motor, mayor vida útil de componentes. Recomendado para vehículos de alta cilindrada.",
      vendidos: 425,
      estrellas: 4.8,
      opiniones: 78,
      disponibles: 50
    },
    {
      id: 5,
      sku: "TK-005",
      nombre: "Faro Delantero LED",
      precio: 135,
      tipoEnvio: "Envío a Domicilio",
      imagenUrl: "https://m.media-amazon.com/images/I/61Ew6HBfftL._AC_SY300_SX300_QL70_FMwebp_.jpg",
      descripcion: "Faro delantero con tecnología LED última generación. Consume menos energía y dura más. Compatibilidad universal. Instalación sencilla.",
      vendidos: 156,
      estrellas: 4.3,
      opiniones: 26,
      disponibles: 12
    },
    {
      id: 6,
      sku: "TK-006",
      nombre: "Software Contable SGT",
      precio: 40,
      tipoEnvio: "Descarga Digital",
      imagenUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&q=80",
      descripcion: "Software contable completo para gestión de negocios. Módulos de facturación, inventario y reportes. Soporte técnico incluido.",
      vendidos: 98,
      estrellas: 4.2,
      opiniones: 22,
      disponibles: 100
    },
    {
      id: 7,
      sku: "TK-007",
      nombre: "Windows Server Standard",
      precio: 25,
      tipoEnvio: "Envío gratis",
      imagenUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&q=80",
      descripcion: "Sistema operativo Windows Server Standard con licencia legal. Ideal para pequeñas y medianas empresas. Soporte técnico garantizado.",
      vendidos: 75,
      estrellas: 4.6,
      opiniones: 19,
      disponibles: 15
    },
    {
      id: 8,
      sku: "TK-008",
      nombre: "Auriculares Estéreo",
      precio: 380,
      tipoEnvio: "Envío gratis",
      imagenUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
      descripcion: "Auriculares estéreo de audio premium con drivers de 40mm. Cancelación de ruido activa, batería de 30 horas. Excelente para música y gaming.",
      vendidos: 320,
      estrellas: 4.7,
      opiniones: 56,
      disponibles: 10
    },
    {
      id: 9,
      sku: "TK-009",
      nombre: "Auriculares Gaming",
      precio: 2.20,
      tipoEnvio: "Envío gratis",
      imagenUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
      descripcion: "Auriculares gaming con micrófono incorporado y sonido envolvente 7.1. Iluminación RGB personalizable, almohadillas ergonómicas.",
      vendidos: 890,
      estrellas: 4.4,
      opiniones: 134,
      disponibles: 40
    },
    {
      id: 10,
      sku: "TK-010",
      nombre: "Memoria RAM Kingston",
      precio: 9.50,
      tipoEnvio: "Envío gratis",
      imagenUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80",
      descripcion: "Módulo RAM Kingston DDR4 de 8GB a 3200MHz. Compatible con plataformas Intel y AMD. Garantía de por vida incluida.",
      vendidos: 560,
      estrellas: 4.8,
      opiniones: 88,
      disponibles: 25
    },
    {
      id: 11,
      sku: "TK-011",
      nombre: "Monitor 4K 27 pulgadas",
      precio: 350,
      tipoEnvio: "Envío Express",
      imagenUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80",
      descripcion: "Monitor 4K Ultra HD de 27 pulgadas con panel IPS. Frecuencia de 60Hz, HDR10 compatible. Ideal para diseño y entretenimiento.",
      vendidos: 245,
      estrellas: 4.9,
      opiniones: 62,
      disponibles: 7
    }
  ];

  constructor(private router: Router) {}

  seleccionarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }

  verDetalle(id: number) {
    this.router.navigate(['/descripcion', id]);
  }

  agregarAlCarrito(producto: Producto) {
    console.log('Producto agregado al carrito:', producto.nombre);
    alert(`${producto.nombre} agregado al carrito`);
  }

  getEstrellas(estrellas: number): string[] {
    const arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(estrellas)) arr.push('star');
      else if (i - 0.5 <= estrellas) arr.push('star_half');
      else arr.push('star_border');
    }
    return arr;
  }
}