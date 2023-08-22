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
            {/* <li>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>\
                    <button className="btn btn-outline-success my-sm-0" type="submit">Search</button>
                </form>
            </li> */}
          </ul>
        </nav>

        <div className="content">{html.children}</div>
        <div>
          <footer className="footer">
            <div>Social Media Links:</div>
            <div>
              <a href="https://github.com/samedwardcar">
                <img
                  className="github"
                  src="/images/github-mark-white.png"
                  alt="Link to my GitHub"
                />
              </a>
            </div>
          </footer>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}

module.exports = Def;
