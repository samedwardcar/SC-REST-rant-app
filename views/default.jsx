const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
          <nav>
            <ul>
              <li>
                <a href="/">
                  {/* <button type="button" className="btn btn-primary"> */}
                    Home
                  {/* </button> */}
                </a>
              </li>
              <li>
                <a href="/places">
                  {/* <button type="button" className="btn btn-primary"> */}
                    Places
                  {/* </button> */}
                </a>
              </li>
              <li>
                <a href="/places/new">
                  {/* <button type="button" className="btn btn-primary"> */}
                    New
                  {/* </button> */}
                </a>
              </li>
            </ul>
          </nav>

        <div className="content">
            {html.children}
        </div>
        <div>
          <footer className="footer" >
            <div>
                Social Media Links:
            </div>
            <div>
                <a href="https://github.com/samedwardcar"><img className="github" src="/images/github-mark-white.png" alt="Link to my GitHub" /></a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

module.exports = Def;
