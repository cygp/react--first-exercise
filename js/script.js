var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://cdn.natemat.pl/26a1b5c428a46f4ee3567f9d65f20129,780,0,0,0.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://cdn.natemat.pl/26a1b5c428a46f4ee3567f9d65f20129,780,0,0,0.jpg'
  },
   {
  	id: 3,
    title: 'Skazani na Shawshank',
    desc: 'Adaptacja opowiadania Stephena Kinga.',
    img: 'https://cdn.natemat.pl/26a1b5c428a46f4ee3567f9d65f20129,780,0,0,0.jpg'
  },
   {
  	id: 4,
    title: 'Ojciec chrzestny',
    desc: 'Opowieść o nowojorskiej rodzinie mafijnej.',
    img: 'https://cdn.natemat.pl/26a1b5c428a46f4ee3567f9d65f20129,780,0,0,0.jpg'
  }
];


//Components
var MovieImg = React.createClass({
  propTypes: {
    img: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('img', {src: this.props.img})
      )
  },
});
var MovieList = React.createClass({
  propTypes: {
    list: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('li', {key: this.props.id}, this.props.list)
    )
  },
});
var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('h2', {}, this.props.title)
    )
  },
});
var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('p', {}, this.props.desc)
    )
  },
});
// this version works
// var Movie = React.createClass({
// 	propTypes: {
//     movie: React.PropTypes.object.isRequired,
//   	},
// 	render: function() {
// 		return (
// 			React.createElement(MovieList, {list: this.props.movie.list, key: this.props.movie.id},
// 	      	React.createElement(MovieTitle, {title: this.props.movie.title}),
// 	      	React.createElement(MovieDesc, {desc: this.props.movie.desc}),
// 	      	React.createElement(MovieImg, {img: this.props.movie.img})
// 	      	)
// 		)
// 	}
// });
var Movie = React.createClass({
	propTypes: {
    movie: React.PropTypes.object.isRequired,
  	},
	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
	      	React.createElement(MovieTitle, {title: this.props.movie.title}),
	      	React.createElement(MovieDesc, {desc: this.props.movie.desc}),
	      	React.createElement(MovieImg, {img: this.props.movie.img})
	      	)
		)
	}
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {key: movie.id, movie: movie},
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));