import { Link } from "react-router-dom"
export function FavTrips(){
let myFavTrips=[]
function trips(){
    if (myFavTrips[0]){
        myFavTrips.forEach(trip=>{
            return <div>trips</div>
        })
        }
    else
        return<div className="noFavTrips"><Link to={'/discover'} >Discover trips and add some to favouite</Link></div>
    
}
return<div id='MyTrips'>
    {trips()}
    </div>
}