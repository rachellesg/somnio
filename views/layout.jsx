const React = require("react");
// const Footer = require("./footer");
// const Navbar = require("./nav");

class Layout extends React.Component {
    render() {
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