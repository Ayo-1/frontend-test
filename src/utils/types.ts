export type FormComponent = 'text-input' | 'radio-input' | 'dropdown' | 'none';

export interface Option {
    id: number;
    value: string;
    label: string;
}

export interface Field {
    id: number;
    type: FormComponent;
    label: string;
    required: boolean;
    value?: string;
    options?: Option[];
  }