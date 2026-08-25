import {media} from "../../scripts/data/mediaData.js";
import "./MediaViewer.css"

function MediaViewer({ mediaId }) {
    const item = media.find(
        (mediaItem) => mediaItem.id === mediaId
    );

    if (!item) {
        return (
            <div className="media-error">
                media file not found
            </div>
        );
    }

    return (
        <article className="media-viewer">
            <div className="media-content">
                {item.type === "image" && (
                    <img
                        src={item.src}
                        alt={item.alt}
                    />
                )}

                {item.type === "video" && (
                    <video
                        src={item.src}
                        controls
                    >
                        Your browser does not support video.
                    </video>
                )}
            </div>
        </article>
    );
}

export default MediaViewer;