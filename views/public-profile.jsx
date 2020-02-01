var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    //console.log(this.props.dreams.name); // no works
    console.log(this.props.dreams.username); // no works
    let listOfDreams = "User has no dreams!";
    // console.log("this dreams", this.props.dreams) // works
    if (this.props.dreams !== null) {
      listOfDreams = this.props.dreams.map(item => {
        return <div class="user-profile-cards-dream">Title:<br />{item.dreamname} <br/> {item.dreamdescription}</div>
      });
      // listOfDreams = "Hi";
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
              <div class="button-follow">+ Follow</div>
            </div>
          </div>
          {listOfDreams}
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
