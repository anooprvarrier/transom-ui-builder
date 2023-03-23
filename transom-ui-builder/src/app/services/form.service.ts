import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private form: any = {
    name: 'Form',
    description: 'Sample Form',
    sections: [],
  };

  public constructor() {}

  public setForm(form: any) {
    this.form = form;
  }

  public getForm() {
    return this.form;
  }
}
