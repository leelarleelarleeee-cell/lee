$(document).ready(function(){
  // Dark Mode
  $('#darkModeToggle').click(function(){
    $('body').toggleClass('dark-mode');
    $(this).text($('body').hasClass('dark-mode') ? 'Light Mode' : 'Dark Mode');
  });

  // Game List
  const games = [
    {name: "PRAGMATIC_SLOT", img: "pragmatic.png", link: "demo-games/pragmatic.html"},
    {name: "JILI", img: "jili.png", link: "demo-games/jili.html"},
    {name: "PG SOFT", img: "pgsoft.png", link: "demo-games/pgsoft.html"},
    {name: "SLOT", img: null, link: "#"},
    {name: "BUFFALO", img: null, link: "#"}
  ];

  games.forEach(g => {
    const img = g.img ? <img src="images/slot/${g.img}" width="60"> : '';
    $('#gameList').append(
      <div class="col-6 col-md-4">
        <div class="game-card text-center p-3 border rounded" onclick="window.location='${g.link}'">
          ${img}
          <p class="mt-2 mb-0">${g.name}</p>
        </div>
      </div>
    );
  });
});