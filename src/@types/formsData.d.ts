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
