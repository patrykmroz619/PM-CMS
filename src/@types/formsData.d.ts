declare type SignInFormData = {
  email: string;
  password: string;
};

declare type SignUpFormData = {
  email: string;
  password: string;
  passwordRepeated: string;
  name?: string;
  surname?: string;
  company?: string;
};

declare type NewProjectFormData = {
  name: string;
};

declare type NewContentModelData = {
  name: string;
  endpoint: string;
};

declare type TextFieldFormData = Omit<TextField, "id">;

declare type NumberFieldFormData = Omit<NumberField, "id">;

declare type BooleanFieldFormData = Omit<BooleanField, "id">;

declare type ColorFieldFormData = Omit<ColorField, "id">;

declare type DateFieldFormData = Omit<DateField, "id">;

declare type ContentFieldFormData =
  | TextFieldFormData
  | NumberFieldFormData
  | BooleanFieldFormData
  | ColorFieldFormData
  | DateFieldFormData;
