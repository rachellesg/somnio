var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    let loggedIn = this.props.loggedIn;
    let currentuser = this.props.currentuser;
    let display;
    let listOfDreams = "User has no dreams";
    if (this.props.dreams !== null || this.props.dreams !== undefined) {
      let username = this.props.userinfo.username;
      listOfDreams = this.props.dreams.map(item => {
        if (username === currentuser) {
          console.log("yes user")
        } else {
          if (item.dreamprivacy === true) {
            display = "none";
            console.log("private")
          } else {
            // display = "inline-block";
          }
        }
        let dreamsUrl = "/dreams/"+item.dreamid;
        return <div class="user-profile-cards-dream" style={{display}} > <div class="dream-cards-details">
        <div class="dream-cards-image">
          <img src={item.dreamimage} />
        </div> 
        <div class="dream-cards-title">
          <a href={dreamsUrl}>{item.dreamname}</a>
        </div>
      </div> posted on: <span class="user-profile-date">{this.props.date}</span> </div>
      });
    } 
    let followButton;
    console.log("if following", this.props.following)
    if (this.props.following === true) {
      console.log("you follow already");
      followButton = <div class="button-follow">Following</div>;
    } else {
      // console.log("not followed");
      if (this.props.userinfo !== undefined) {
        if (this.props.userinfo.username !== this.props.currentuser) {
          let followUrl = "/dreamers/" + this.props.userinfo.userid + "/follow";
          followButton =  <a href={followUrl}><div class="button-follow">+ Follow</div></a>;
        } else {
          let followUrl = "/dreamers/" + this.props.userinfo.userid + "/edit";
          followButton = " ";
        }
      }
    }
    //console.log(listOfDreams)
    return (
      <Layout loggedIn={loggedIn}>
        <div class="user-profile">
          <div class="user-profile-top">
            <div class="user-profile-username">
              <h1>dreamer #{this.props.userinfo.userid} - <span class="user-name">{this.props.userinfo.username}</span></h1>
            </div>
            <div class="user-profile-follow">
              {followButton}
            </div>
          </div>
          <h2><img class="h2-icon" src="/images/dreamcatcher.png"/> dreamers are as what dreamers do</h2>
          <div class="user-profile-cards">
            {listOfDreams}
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
