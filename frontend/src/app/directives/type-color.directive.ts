import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTypeColor]',
  standalone: true
})
export class TypeColorDirective {

  colorList = {
    'bug ': '#A8B820',
    'dark ': '#705848',
    'dragon ': '#7038F8',
    'electric ': '#F8D030',
    'fairy ': '#EE99AC',
    'fighting ': '#C03028',
    'fire ': '#F08030',
    'flying ': '#A890F0',
    'ghost ': '#705898',
    'grass ': '#78C850',
    'ground ': '#E0C068',
    'ice ': '#98D8D8',
    'normal ': '#A8A878',
    'poison ': '#A040A0',
    'psychic ': '#F85888',
    'rock ': '#B8A038',
    'steel ': '#B8B8D0',
    'water ': '#6890F0',
    '??? ': '#68A090'
  };

  constructor(private element: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.style.backgroundColor = this.colorList[this.element.nativeElement.innerHTML];
  }

  @HostListener('mouseout') onMouseOut() {
    this.element.nativeElement.style.backgroundColor = 'transparent';
  }

}
