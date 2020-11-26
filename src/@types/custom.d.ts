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

declare type ApiError = {
  statusCode: number;
  error: {
    type: string;
    description: string;
  };
};
