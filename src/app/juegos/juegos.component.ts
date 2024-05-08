import { Component } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  juegos = [
    { titulo: 'Hollow knight', 
    descripcion: '"Hollow Knight" es un juego de acción y aventuras desarrollado por el equipo de desarrollo independiente Team Cherry. Ambientado en un vasto mundo subterráneo conocido como Hallownest, el juego sigue las aventuras de un pequeño insecto caballero, el "Hollow Knight", mientras explora este oscuro y misterioso reino. Con una jugabilidad que combina elementos de plataformas, exploración y combate, los jugadores se sumergen en un viaje épico lleno de desafíos, descubrimientos y secretos por descubrir. La atmósfera única del juego, su hermoso arte dibujado a mano y su profundo diseño de niveles han sido aclamados por la crítica y han convertido a "Hollow Knight" en un favorito de los fans del género de metroidvania.', 
    imagenUrl: 'https://cdn.cdkeys.com/700x700/media/catalog/product/a/f/affeaf_10_16_15_.jpg' },
    { titulo: 'Fallout',
     descripcion: '"Fallout" es una icónica serie de juegos de rol de acción post-apocalípticos desarrollada por Bethesda Game Studios. Ambientada en un mundo alternativo devastado por la guerra nuclear, la serie "Fallout" presenta una narrativa rica y ramificada, donde los jugadores asumen el papel de supervivientes que luchan por sobrevivir en un entorno hostil lleno de mutantes, facciones en conflicto y peligros desconocidos. Con un enfoque en la exploración del mundo abierto, la toma de decisiones y la personalización del personaje, los juegos "Fallout" ofrecen una experiencia inmersiva donde cada elección del jugador tiene consecuencias significativas en el desarrollo de la historia y el destino del mundo post-apocalíptico. Con su combinación de acción, exploración y narrativa profunda, "Fallout" se ha ganado un lugar destacado entre los juegos de rol más influyentes de la industria del videojuego.', 
     imagenUrl: 'https://w7.pngwing.com/pngs/11/677/png-transparent-boy-face-logo-fallout-shelter-fallout-4-wasteland-electronic-entertainment-expo-2015-android-icon-fallout-4-miscellaneous-face-text-thumbnail.png' },
  ];
}
