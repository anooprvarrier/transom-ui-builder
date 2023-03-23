export interface CategoryModel {
  categories?: Category[];
}

export interface Category {
  name?: string;
  items?: Item[];
  section?: boolean;
}

export interface Item {
  control?: string;
  title?: any;
  id?: any;
  items?: any[];
  repeat?: boolean;
  visible?: boolean;
  name?: any;
  text?: any;
  label?: any;
  value?: any;
  input?: any;
  customClass?: any[];
  readonly?: boolean;
  required?: boolean;
  min?: any;
  max?: any;
  error?: any;
  rows?: number;
  columns?: number;
  checked?: boolean;
  type?: string;
  options?: Option[];
}

export interface Option {
  value?: any;
  label?: any;
}
