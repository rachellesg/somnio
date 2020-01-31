var React = require("react");
const Layout = require("./layout");

class Public extends React.Component {
  render() {
    return (
      <Layout>
        <div class="user-profile">
          <div class="user-profile-top">
            <div class="user-profile-username">
              <h1>dreamer #{this.props.dreams.username}'s profile</h1>
            </div>
            <div class="user-profile-follow">
              X
            </div>
          </div>
          {this.props.dreams.dreamNames}
        </div>
        
      </Layout>
    );
  }
}

module.exports = Public;
