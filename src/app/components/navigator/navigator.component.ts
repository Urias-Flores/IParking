import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['../../../styles.css']
})

export class NavigatorComponent{
  @Input() home:boolean = false;
}
