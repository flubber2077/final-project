import HighlightContainer from './HighlightContainer.js';
import MusicianContainer from './MusicianContainer'
import EmailSubmit from './EmailSubmit';

export default function MainPage() {

    return (
        <div>
            <HighlightContainer />
            <div className="main">
                <MusicianContainer />
                <EmailSubmit />
            </div>
        </div>
    )
}