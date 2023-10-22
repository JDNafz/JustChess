// this component puts the labels on the squares on the chessboard
export default function Coordinate({coordinate}){
  return (
    <>
      <div className="coordinate">
        {coordinate}
      </div>
    </>
  )
}