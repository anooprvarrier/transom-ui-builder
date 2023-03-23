import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'transom-drop-container',
  templateUrl: './drop-container.component.html',
  styleUrls: ['./drop-container.component.scss'],
})
export class DropContainerComponent {
  @Input() form!: any;
  @Input() sectionIds: string[] = [];
  @Output() selectedField = new EventEmitter<any>();
  @Output() sectionIdsEmitter = new EventEmitter();

  private htmlCode: any;

  public onItemSelect(item: any) {
    this.selectedField.emit(item);
  }

  public selHtmlCode(htmlCode: any): void {
    this.htmlCode = htmlCode;
  }
}
