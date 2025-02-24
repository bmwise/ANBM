import "./NavBar.css" ;
import {Search, Person, Chat, Notifications, PlayCircleFilledWhiteTwoTone } from "@material-ui/icons" ;
import {Link} from "react-router-dom";

export default function NavBar(){
    return (
      <div className="NavBarContainer"> 
          <div className="NavBarLeft">
              <Link to ="/" style={{textDecoration: "none"}}>
             <span className="logo">BANd</span>
             </Link>
          </div>
          <div className="NavBarCenter">
              <div className="searchbar">
                  <Search className="searchIcon" />
                  <input placeholder="Search for friends, songs, or artists" className="searchInput" /> 
              </div>
          </div>
          <div className="NavBarRight">
            <div className="NavBarLinks">
            <span className="NavBarLink1">Upload</span>
            <Link to ='/login' style={{textDecoration: "none"}}>
            <span className="NavBarLink"> Login</span>
            </Link>
            <Link to ='/register' style={{textDecoration: "none"}}>
            <span className="NavBarLink3"> Register</span>
            </Link>
            </div>
            <div className="NavBarIcons">
            <div className="NavBarIconItems">
                <Person />
                <span className="NavBarIconBadge">1.2k</span>
                </div>    
                <div className="NavBarIconItems">
                <Chat />
                <span className="NavBarIconBadge">657</span>
                </div>    
                <div className="NavBarIconItems">
                <Notifications />
                <span className="NavBarIconBadge">1.0k</span>
                </div>        
            </div>
            <Link to ='/profile' style={{textDecoration: "none"}}>
            <img src="/assets/profile/photo1.jpg" alt="" className="NavBarImg" />
            </Link>
        </div>
     </div>  
    )
}
