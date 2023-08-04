const React = require("react");
const Def = require("./default");

function Home () {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/chia-fruit-by-brenda-godinez.jpeg" alt="Chia Fruit Shake"/>
          <div>
          Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
          </div>
        </div>
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
