import './TitleList.scss'
import SingleGame from '../SingleGame/SingleGame';
import games from '../../fakeData/games';


function TitleList(props) {

    // const titlecategory = useRef(null);
    // var [data, setData] = useState([])

    // function loadContent() {
    //     //fetch content
    //     let trending = []
    //     let mostWatched = []
    //     let topGames = []

    //     // console.log(games)

    //     games.forEach(game => {
    //         if (parseInt(game.ratings_count) > 4500) {
    //             trending.push(game)
    //         }
    //         if (parseInt(game.rating) > 2) {
    //             mostWatched.push(game)
    //         }
    //         if (parseInt(game.ratings_count) > 4500) {
    //             topGames.push(game)
    //         }
    //     })
    // }
    // loadContent();

    //             var t = this.state.data.results.map(function (title, i) {
    //                 if (i < 5) {

    //                     var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
    //                     if (!title.name) {
    //                         var name = title.original_title;
    //                     } else {
    //                         var name = title.name;
    //                     }

    //                     return (
    //                         <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
    //                     );

    //                 }
    //             });

    //         } else {
    //             var titles = '';
    //         }

    // var sortGames = games.map(function (game) {


    //         <Item key={game.id} title={game.id} score={game.rating} overview={game.short_description} backdrop={game.background_image} />


    // });

    return (
        <div className="TitleList">
            <div className="Title" data-loaded={true}>
                <h1>{props.title}</h1>
                <div className="titles-wrapper">
                    {games.map((game, index) => <SingleGame key={game.id} title={game.name} score={game.rating} overview={game.short_description} backdrop={game.background_image} />)}
                </div>
            </div>
        </div>
    );


}

export default TitleList