export interface howItWorksType{
    title: string;
    text: string;
    img: string;
}
  
  export interface SliderProps {
    sliderData: SlideData[]
    isMobileScreen: boolean
  }

export interface SlideData{
    avatar: string;
    name: string;
    city: string;
    message: string;
}

export interface QuestionsAndAnswersType {
  title: string;
  text: string;
}

export interface AccordionUsageProps {
  data: QuestionsAndAnswersType[];
}

export interface MenuItem {
  text: string;
  link: string;
}

export interface SideBarMenuProps {
  items: MenuItem[];
}