export interface EventInfo {
  age: string
  date: string
  location: string
  cost: string
}

export interface Prev {
  title: string
  data: PrevData[]
}
export interface PrevData {
  name: string
  short_desc: string
  image: string
}
export interface Sample {
  name: string
  short_desc: string
  image: string
  link: string
}

export default interface IEvent {
  link: string
  mainImage: string
  name: string
  short_desc: string
  long_desc: string[]
  event_info: EventInfo
  event_goals: string[]
  prev: Prev
  sample: Sample[]
}
