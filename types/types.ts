export type Skill = {
  skill:string;
  description:string
}

export type CardType = {
  name:string;
  role:string;
  image:string;
  skills:Skill[]
}