export interface Duck {
id: number
name: string
image:  string
}

export interface User{
  id: number
  name: string
  email: string
}

export interface Collection {
  id: number
  duckId: number
  userId: number
  timesCollected: number
}