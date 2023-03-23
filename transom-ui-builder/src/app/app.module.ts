import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MAT_IMPORTS } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';
import { CategoryComponent } from './template-builder/category/category.component';
import { AttributesComponent } from './template-builder/attributes/attributes.component';
import { SectionComponent } from './template-builder/section/section.component';
import { DropContainerComponent } from './template-builder/drop-container/drop-container.component';
import { FormComponent } from './template-builder/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateBuilderComponent,
    CategoryComponent,
    AttributesComponent,
    SectionComponent,
    DropContainerComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MAT_IMPORTS,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
