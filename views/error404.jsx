const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>

              <div>
                <img src='images/error-sheep-404.jpeg' alt='Error404' />
                <div>
                  Image by <a href="https://pixabay.com/users/0-0-0-0-165106/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2372148">Susanne Jutzeler, Schweiz 🇨🇭 suju-foto</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2372148">Pixabay</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404
