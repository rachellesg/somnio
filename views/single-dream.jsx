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
         <img class="dream-profile-image" src={this.props.dreams.dreamimage}/><br></br>
            {this.props.dreams.dreamdescription}, {this.props.dreams.dreamcategory}
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
