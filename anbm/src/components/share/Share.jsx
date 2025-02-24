import "./share.css"
import{PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons"

export default function () {
  return (
    <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src="/assets/profile/template_3.jpg" alt=""/>
            <input 
              placeholder="what's in your mind Safak?"
              className="shareInput"
            />
          </div>
          <hr className="shareHr"/>
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon"/>
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon"/>
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                <span className="shareOptionText">Feeling</span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
    </div>
  )
}
