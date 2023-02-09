export function Header(){
    return(
        <>    
        <div></div>    
        <span>
            <div ></div>
            <div ></div>
            <div ></div>
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