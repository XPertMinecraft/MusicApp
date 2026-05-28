import './TrackCard.css'
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

export default function TrackCard(props) {

    const { selectTrack, addToFav, removeFromFav, favorites } =
        useContext(PlayerContext);

    const isFav = favorites.some(t => t.id === props.id);

    return (
        <section className="trackcard">

            <p className="num">1</p>

            <img
                className='iii'
                src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                alt=""
            />

            <div className="name">
                <h4 className='hhh4'>{props.title}</h4>
                <p className='num'>{props.album}</p>
            </div>

            <p className="isCover">
                {props.cover ? "Cover" : ""}
            </p>

            <button onClick={() => selectTrack({
                id: props.id,
                title: props.title,
                album: props.album,
                cover: props.cover,
                src: props.src
            })}>
                ▶ Play
            </button>

            <button
                onClick={() => {
                    if (isFav) {
                        removeFromFav(props.id);
                    } else {
                        addToFav({
                            id: props.id,
                            title: props.title,
                            album: props.album,
                            cover: props.cover,
                            src: props.src
                        });
                    }
                }}
            >
                {isFav ? "💖" : "🤍"}
            </button>

        </section>
    )
}