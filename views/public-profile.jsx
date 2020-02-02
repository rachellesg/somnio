var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    //console.log(this.props.dreams.name); // no works
    console.log('in jsx', this.props.userinfo); // no works
    console.log('dreams', this.props.dreams)
    // console.log("this dreams", this.props.dreams) // works
    let listOfDreams = "User has no dreams!";
    if (this.props.dreams !== null || this.props.dreams !== undefined) {
      listOfDreams = this.props.dreams.map(item => {
        return <div class="user-profile-cards-dream"> <img src={item.dreamimage} />  Title: {item.dreamname} <br/> {item.dreamdescription}</div>
      });
    } else {
      listOfDreams = "User has no dreams!";
    }
    let followUrl = "/dreamers/" + this.props.userinfo.userid + "/follow";
    let followButton = "put edit button here";
    if (this.props.userinfo !== undefined) {
      if (this.props.userinfo.username !== this.props.currentuser) {
        followButton =  <a href={followUrl}><div class="button-follow">+ Follow</div></a>;
      }
    }
    //console.log(listOfDreams)
    return (
      <Layout>
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
