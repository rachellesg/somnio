var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div class="user-profile">
          <div class="user-profile-top">
            <div class="user-profile-username">
              <h1>#{this.props.username}</h1>
            </div>
            <div class="user-profile-follow">
              X
            </div>
          </div>
        </div>
        
        {this.props.dreamname} {this.props.privacy} {this.props.dreamcategory}
      </Layout>
    );
  }
}

module.exports = Home;
