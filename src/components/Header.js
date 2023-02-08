export function Header(){
    return(
        <>
        <span>
        </span>
        <header>
            <h1>EgyTour</h1>
            <ul>
                <li><a href="/">Trips</a></li>
                <li><a href="/">AboutUs</a></li>
                <li><a href="/">Home</a></li>
            </ul>
            <div className="signIn">
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </header>
        </>
    );
}