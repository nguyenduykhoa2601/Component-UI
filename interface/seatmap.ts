import { ReactNode } from 'react'

export interface IAccessory {
  id: string | number
  name: string
  thumbnail: ReactNode | string
}

// type: 0  => normal chair
// type: 2  => couple chair
// type: 4  => bed
// type: 6  => VIP

export interface IChair {
  id: number | string
  type: number | string
  accessories?: IAccessory[]
}
