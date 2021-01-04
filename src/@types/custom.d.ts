declare module "*.svg" {
  const src: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}

declare module "*.png";

declare type UserData = {
  email: string;
  name?: string;
  surname?: string;
  company?: string;
};

declare type Project = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  published: boolean;
};

declare type ContentModel = {
  id: string;
  name: string;
  endpoint: string;
  fields: Field[];
  userId: string;
  projectId: string;
};

declare type FieldType = "text" | "number" | "boolean" | "color" | "date" | "media";

declare type Field = {
  id: string;
  type: FieldType;
  name: string;
};

declare type TextField = Field & {
  type: "text";
  multiline: boolean;
  unique: boolean;
  maxLength?: number;
  minLength?: number;
};

declare type NumberField = Field & {
  type: "number";
  unique: boolean;
  integer: boolean;
  max?: number;
  min?: number;
};

declare type BooleanField = Field & {
  type: "boolean";
};

declare type ColorField = Field & {
  type: "color";
};

declare type DateField = Field & {
  type: "date";
};

declare type ContentField = TextField | NumberField | BooleanField | DateField | ColorField;

declare type RecordItem = {
  name: string;
  value: string;
};

declare type RecordObject = {
  id: string;
  userId: string;
  contentModelId: string;
  record: RecordItem[];
};

declare type CurrentProject = Project & {
  contentModels: ContentModel[];
  records: RecordObject[];
};
