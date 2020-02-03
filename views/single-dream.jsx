var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    // console.log(this.props.currentuser); // no works
    let loggedIn = this.props.loggedIn;
    let deleteButton;
    let userUrl = "/dreamers/"+this.props.dreams.userid;
    if (this.props.currentuser === this.props.dreams.username) {
      let deleteUrl = "/dreams/" + this.props.dreams.dreamid + "/?_method=delete";
      deleteButton =  <form action={deleteUrl} method="POST"><button class="button-delete">Delete</button></form>;
    } else {
      console.log("FALSE")
    }
    return (
      <Layout loggedIn={loggedIn}>
        <div class="user-profile">
          <div class="user-profile-top">
              <h1>dream #{this.props.dreams.dreamid} - <span class="user-name">{this.props.dreams.dreamname}</span></h1>
            <div class="user-profile-username">
              <div class="user-profile-posted">posted by: <a href={userUrl}>{this.props.dreams.username}</a> on <span class="user-profile-date">{this.props.date}</span></div>
            </div>
            <div class="user-profile-follow">
              {deleteButton}
            </div>
          </div>
        <div class="dream-profile">Feeling: <img class="dream-profile-image" src={this.props.dreams.dreamimage}/> {this.props.dreams.dreamcategory} <br />
          <h3>the story...</h3>
          <div class="dream-profile-description">
            {this.props.dreams.dreamdescription}
          </div>
        </div>
         
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
