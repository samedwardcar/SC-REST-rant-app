const React = require("react");
const Def = require("./default");

function Home () {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <a href="/places">
          <button type="button" className="btn btn-primary">Places Page</button>
        </a>
        {/* <a href="/places/show">
          <button type="button" className="btn btn-primary">About this place</button>
        </a>
        <a href="/places/new">
          <button type="button" className="btn btn-primary">New Rest-rant Form</button>
        </a>
        <a href="/places/edit">
          <button type="button" className="btn btn-primary">Edit Rest-rant Info</button>
        </a> */}
      </main>
    </Def>
  );
}

module.exports = Home;
