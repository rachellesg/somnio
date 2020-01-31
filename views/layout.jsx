const React = require("react");
// const Footer = require("./footer");
// const Navbar = require("./nav");

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.pagetitle}</title>
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
                                home  |  profile  |  add dream | log out
                            </div>
                        </div>
                        <div class="content">
                            {this.props.children}
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Layout;