var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'https://cdn.natemat.pl/26a1b5c428a46f4ee3567f9d65f20129,780,0,0,0.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'https://cdn.natemat.pl/26a1b5c428a46f4ee3567f9d65f20129,780,0,0,0.jpg'
  },
   {
  	id: 3,
    title: 'Skazani na Shawshank',
    desc: 'Adaptacja opowiadania Stephena Kinga.',
    poster: 'https://cdn.natemat.pl/26a1b5c428a46f4ee3567f9d65f20129,780,0,0,0.jpg'
  },
   {
  	id: 4,
    title: 'Ojciec chrzestny',
    desc: 'Opowieść o nowojorskiej rodzinie mafijnej.',
    poster: 'https://cdn.natemat.pl/26a1b5c428a46f4ee3567f9d65f20129,780,0,0,0.jpg'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster})
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));