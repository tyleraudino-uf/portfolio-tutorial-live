import profileImage  from '../assets/cat1.jpeg';

function Intro(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <img src={profileImage} alt="Profile" className="img-fluid rounded-circle" />
                </div>
                <div className="col">
                    <h1>Hello, I'm Tyler Audino</h1>
                    <p>I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
                </div>     
            </div>
        </div>
    )
}

export default Intro;