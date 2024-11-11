import { ReactNode } from "react";

interface ContainerType{
styleclass:string;
children:ReactNode;
}
function ContainerComponent({styleclass,children}:ContainerType) {
  return (
    <div className={`min-h-screen h-full ${styleclass}`}>
      {children}
    </div>
  )
}

export default ContainerComponent
