import { Component, Input } from '@angular/core';

@Component({
  selector: 'transom-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
})
export class AttributesComponent {
  @Input() field!: any;

  public addOption(): void {
    if (this.field.type === 'select') {
      this.field.options.push({
        value: 'val',
        label: 'lbl',
      });
    }
  }

  public deleteOption(index: number): void {
    this.field.options.splice(index, 1);
  }
}
