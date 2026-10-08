import {
  Component,
  HostBinding,
  input,
  ViewEncapsulation,
  inject,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // "Do not scope this CSS.", your CSS becomes ordinary global CSS,
  host: {
    class: 'control', // prefered way
    '(click)': 'onClick()',
  },
  // <app-control class="control">
  //   ...
  // </app-control>
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  private el = inject(ElementRef);

  label = input.required();

  onClick() {
    console.log('clicked');
    console.log(this.el);
  }
}
