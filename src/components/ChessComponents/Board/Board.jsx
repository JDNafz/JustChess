import Square from "../Square/Square"


export default function Board({board,updateBoard}){
  return(
    <div id="boardMargin">
      {board.map((obj)=> {
        return <Square 
        key={`sq${obj.id}`} 
        id={obj.id} 
        board={board} 
        updateBoard={updateBoard} />
      })}   
    </div>
  )//end return
}//end Board function