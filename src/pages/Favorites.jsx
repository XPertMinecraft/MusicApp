import './Favoriters.css'
import { useContext } from "react";
import Navbar from "../component/Navbar/Navbar";
import { PlayerContext } from "../context/PlayerContext";
import TrackCard from "../component/TrackCard/TrackCard";

export default function Favorites() {

    const { favorites } = useContext(PlayerContext);

    return (
        <div className="favorites_page">

            <h2>💖 Favorites</h2>

            <div className="favorites_list">

                {favorites.length > 0 ? (
                    favorites.map(track => (
                        <TrackCard
                            key={track.id}
                            id={track.id}
                            title={track.title}
                            album={track.album}
                            cover={track.cover}
                            src={track.src}
                        />
                    ))
                ) : (
                    <p>No favorites yet</p>
                )}

            </div>

            <Navbar />

        </div>
    );
}