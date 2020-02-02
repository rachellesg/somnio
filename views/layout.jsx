const React = require("react");
// const Footer = require("./footer");
// const Navbar = require("./nav");

class Layout extends React.Component {
    render() {
        // let navBar = "<a href=\"/add\">Add Dreams</a>";
        console.log('does data pass hello', this.props.dreams)
        console.log('does data pass hello', this.props.dream)
        console.log('current user in layout', this.props.currentuser);
        // if (this.props.userinfo.username !== this.props.currentuser) {
        //   navBar =  <div class="nav_bar">home  |  profile  |  add dream | log out</div>;
        // }
        return (
            <html>
                <head>
                    <title>somniō</title>
                    <link rel="stylesheet" href="/style.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
                </head>
                <body>
                    <div class="container main">
                        <div class="nav">
                            <div class="logo">
                                <span class="logo-text">
                                    <a href="/">somniō</a>
                                </span>
                            </div>
                            <div class="create_dream">
                                <a href="/add">+++</a> | <a href="/logout">Log Out</a>
                            </div>
                        </div>
                        <div class="content">
                            {this.props.children}
                        </div>
                        <footer>
                            &copy; Rachelle // somniō 2020
                        </footer>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Layout;