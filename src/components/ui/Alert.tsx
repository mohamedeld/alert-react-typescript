import {  X } from "lucide-react"
import "./index.scss"
import { ReactNode } from "react";

interface IProps{
  title:string;
  type:string;
  icon:ReactNode;
  description?:string;
  children?:ReactNode;
}
const Alert = ({title,type,icon,description,children}:IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
         {icon}
          <h4>{title}</h4>
        </div>
        <span>
          <span>
            <X size={20}/>
          </span>
        </span>
      </div>
    
    {children? children : <p>{description}</p>}
    </div>

  )
}

export default Alert