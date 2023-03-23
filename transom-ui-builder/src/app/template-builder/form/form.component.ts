import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'transom-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() form!: any;
  @Input() sectionIds: string[] = [];
  @Output() selectedField = new EventEmitter();
  @Output() htmlCodeEmitter = new EventEmitter();

  private selected = {};
  private htmlCode = '';

  public onDrop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        this.createCopy(event.previousContainer.data),
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public select(field: any) {
    this.selected = field;
    this.selectedField.emit(field);
  }

  public createCopy(data: any) {
    return JSON.parse(JSON.stringify(data));
  }

  public addSection() {
    const id = 'formFieldsList#' + this.sectionIds.length;
    this.sectionIds.push(id);
    console.log(this.sectionIds);
    return id;
  }

  public moveup(index: number) {
    if (index !== 0) {
      this.swap(this.form.sections, index, index - 1);
    }
  }

  public movedown(index: number) {
    if (index !== this.form.sections.length - 1) {
      this.swap(this.form.sections, index, index + 1);
    }
  }

  public delete(index: number) {
    this.form.sections.splice(index, 1);
    if (!this.form.sections.includes(this.selected)) {
      this.selectedField.emit({});
      this.selected = {};
    }
  }

  public swap(arr: any[], index1: number, index2: number) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}
