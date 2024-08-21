import { X } from 'lucide-react'
import './index.scss'
import { ReactNode } from 'react'

interface IProps {
  type: string,
  icon: ReactNode,
  title: string,
  description?: string
  children?: ReactNode
}
function Alert({ type, icon, title, description, children }: IProps) {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className='close' />
      </div>
      <p>
        {children ? children : description}
      </p>
    </div>
  )
}

export default Alert