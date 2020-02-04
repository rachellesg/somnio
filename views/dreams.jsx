var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    let loggedIn = this.props.loggedIn;
    let username = this.props.dreams.username;
    let currentuser = this.props.currentuser;
    let display;
    console.log(username, currentuser)
    let listOfDreams = this.props.dreams.map(item => {
      if (item.dreamprivacy === true) {
        display = "none";
        console.log(item.dreamprivacy)
      } else if (item.dreamprivacy === false) {
        display = "inline-block";
        console.log(item.dreamprivacy)
      }
        let userUrl = "/dreamers/"+item.userid;
        let dreamsUrl = "/dreams/"+item.dreamid;
        return <div class="user-profile-cards-dream" style={{display}}>
          <div class="dream-cards-details">
            <div class="dream-cards-image">
              <img src={item.dreamimage} />
            </div> 
            <div class="dream-cards-title">
              <a href={dreamsUrl}>{item.dreamname}</a>
            </div>
          </div>
          {/* {item.dreamdescription} */}
          <div class="dream-cards-posted">Posted by: <a href={userUrl}>{item.username}</a>
          <br />posted on: <span class="user-profile-date">{this.props.date}</span></div> 
          </div>
      });
    //console.log(listOfDreams)
    return (
      <Layout loggedIn={loggedIn}>
        <div class="user-profile">
          <h2><img class="h2-icon" src="/images/dreamcatcher.png"/> all publicly listed dreams</h2>
          <div class="user-profile-cards">
            {listOfDreams}
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
