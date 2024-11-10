export interface PageProps {    
        title: string;
        description: string;  
        image: string;
        slug: string;
        url:string
  
}
export interface Params{
  slug: string 
}
export interface FormDataTypes{
  name: string,
  email: string,
  phone: string,
  message: string,
}
export interface Service {
  name: string;
  description: string;
  color: string;
  icon: JSX.Element;
}