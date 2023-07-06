export function MyTrips(){
let myTrips=[]
function trips(){
    if (myTrips[0]){
        myTrips.forEach(trip=>{
            return <div>trips</div>
        })
        }
    else
        return<div className="noOldTrips">You haven't enjoy any of our trips yet.</div>
    
}
return<div id='MyTrips'>
    {trips()}
    </div>
}