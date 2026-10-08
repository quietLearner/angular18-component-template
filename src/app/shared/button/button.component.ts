import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', // attribute-selector component, <button appButton> is host element
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
