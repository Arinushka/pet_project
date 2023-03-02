export type Skill = {
  skill:string;
  description:string
}

export type ImageItem = {
  url:string;
  isActive:string
}

export type CardType = {
  name:string;
  role:string;
  images:ImageItem[];
}