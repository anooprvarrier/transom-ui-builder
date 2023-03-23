import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'transom-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() section!: any;
  @Output() selectEmitter = new EventEmitter();

  public selectedItem = null;

  public onItemSelect(item: any) {
    this.selectedItem = item;
    this.selectEmitter.emit(item);
  }

  public delete(index: any) {
    this.section.items.splice(index, 1);
    if (!this.section.items.includes(this.selectedItem)) {
      this.selectEmitter.emit(null);
      this.selectedItem = null;
    }
  }

  public onDrop(event: CdkDragDrop<string[]>) {
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

  public createCopy(data: any) {
    return JSON.parse(JSON.stringify(data));
  }
}
