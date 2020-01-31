var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    // let listOfDreams = this.props.data.map(item => {
    //   return <li>{item.name}</li>
    // });
    return (
      <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>somniō // (present infinitive somniāre, perfect active somniāvī, supine somniātum);</title>
              <link rel="stylesheet" href="/style.css"/>
          </head>
          <body>
              <div class="welcome-screen">
                  <header>
                    <img src="/images/dream.png" class="header-icon" /> 
                    somniō
                    <div class="sleeping">
                       <span>z</span>
                       <span>z</span>
                       <span>z</span>
                    </div>
                  </header>
                  <p class="index-description">
                    (present infinitive somniāre, perfect active somniāvī, supine somniātum);
                  </p>
                  <div class="index-actions">
                    <a href="/register">Register today to be a dreamer</a> | <a href="/login">Start dreaming</a>
                  </div>
              </div>
          </body>
      </html>
    );
  }
}

module.exports = Home;
