var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    console.log(this.props.currentuser); // no works
    return (
      <Layout>
        <div class="user-profile">
          <div class="user-profile-top">
            <div class="user-profile-username">
              <h1>dream #{this.props.dreams.dreamid} - <span class="user-name">{this.props.dreams.dreamname}</span></h1>
            </div>
          </div>
        <div class="dream-profile">
          <img class="dream-profile-image" src={this.props.dreams.dreamimage}/> {this.props.dreams.dreamcategory} <br />
          <h2>the story...</h2>
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
