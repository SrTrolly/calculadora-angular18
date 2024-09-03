import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, input, } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calculator-button.componet.css',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400'
  },

})
export class CalculatorButtonComponent {

  public isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value
  });

  public isDoubleSize = input(false, {
    transform: (value: string | boolean) =>
      typeof value === 'string' ? value === '' : value
  });

  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }


}
