import React, { FC } from 'react'
import { IChair } from '../../../../interface/seatmap'

import s from './Chair.module.scss'

interface ChairProps extends IChair {
  onChange: () => void
}

const Chair: FC<ChairProps> = ({ id, type, onChange }) => {
  return <div>Chair</div>
}

export default Chair
