import { ReactElement } from "react"

interface ICardProps {
  content: ReactElement
}

function Cards(props: ICardProps) {
    return(
      <div>
        {props.content} 
      </div>
    )
}

export default Cards