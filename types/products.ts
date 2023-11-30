export interface Products {
  id?: number,
  name?: string,
  category?: string,
  price?: number,
  image?: string,
  color?: string,
  isCart?: boolean,
  description?: string,
  quantity?: number,
  }

  export interface FormField {
      id?: string;
      name?: string;
      label?: string;
      type?: string;
      value?: string | object;
      placeholder?: string;
      checked?: boolean;
      required?: boolean;
      }