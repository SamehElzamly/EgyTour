export function PaymentHistory(){
let myPayments=[]
function payments(){
    if (myPayments[0]){
        myPayments.forEach(payment=>{
            return <div>payment</div>
        })
        }
    else
        return<div className="noOldTrips">You haven't enjoy any of our trips yet.</div>
    
}
return<div id='MyTrips'>
    {payments()}
    </div>
}