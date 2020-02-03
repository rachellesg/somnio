var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    let loggedIn = this.props.loggedIn;
    let username = this.props.userinfo.username;
    let currentuser = this.props.currentuser;
    let display;
    let listOfDreams = "User has no dreams";
    console.log(username, currentuser)
    if (this.props.dreams !== null || this.props.dreams !== undefined) {
      listOfDreams = this.props.dreams.map(item => {
        // if (username === currentuser) {
        //   console.log("yes user")
        // } else {
        //   console.log("no user")
        // }
        if (item.dreamprivacy === true) {
          display = "none";
          console.log("private")
        }
        let dreamsUrl = "/dreams/"+item.dreamid;
        return <div class="user-profile-cards-dream" style={{display}}> <img src={item.dreamimage} />  Title: <a href={dreamsUrl}>{item.dreamname}</a> <br /> posted on: <span class="user-profile-date">{this.props.date}</span> </div>
      });
    } 
    let followButton;
    console.log("if following", this.props.following)
    if (this.props.following === true) {
      console.log("you follow already");
      let unfollowUrl = "/dreamers/" + this.props.userinfo.userid;
      // let unfollowUrl = "/dreamers/" + this.props.userinfo.userid + "/unfollow";
      followButton = <a href={unfollowUrl}><div class="button-follow">Following</div></a>;
    } else {
      // console.log("not followed");
      if (this.props.userinfo !== undefined) {
        if (this.props.userinfo.username !== this.props.currentuser) {
          let followUrl = "/dreamers/" + this.props.userinfo.userid + "/follow";
          followButton =  <a href={followUrl}><div class="button-follow">+ Follow</div></a>;
        } else {
          let followUrl = "/dreamers/" + this.props.userinfo.userid + "/edit";
          followButton = <a href={followUrl}><div class="button-follow">Edit</div></a>;
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
