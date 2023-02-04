export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
};


export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
};

export interface ClassType {
    name: string;
    description?: string; // if we add question mark "?" it will be optional so we don't have to have description
    image: string;
};