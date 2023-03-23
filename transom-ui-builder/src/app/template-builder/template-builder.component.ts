import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { FormService } from '../services/form.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'transom-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.scss'],
})
export class TemplateBuilderComponent implements OnInit {
  public categories: Category[] = [];
  public sectionIds: string[] = [];
  public form: any;
  public item: any;

  constructor(
    public helperService: HelperService,
    private formService: FormService
  ) {}

  public ngOnInit(): void {
    this.form = this.formService.getForm();
    this.categories = this.helperService.getCategories();
    console.log(this.categories);
  }

  public setSelectedItem(item: any) {
    this.item = item;
  }

  public addSection() {
    const id = 'formFieldsList#' + this.sectionIds.length;
    this.sectionIds.push(id);
    if (this.form.sections) {
      this.form.sections.push({
        control: 'section',
        title: null,
        id: id,
        items: [],
        repeat: false,
      });
    }
  }
}
