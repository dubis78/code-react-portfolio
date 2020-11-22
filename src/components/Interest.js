import React from 'react';
import '../css/Interest.css';
import music from '../img/music.png';
import game from '../img/game.png';
import paw from '../img/paw.png';
import plane from '../img/plane.png';
import book from '../img/book.png';
import film from '../img/film.png';


const Interest = () => {
    return (
        <div className="container" id='interest'>                               
            <h4 className="text-uppercase text-center text-info text-icon"><img className="heart" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/72/heart-icon.png" alt="demo"/>Interest</h4>               
            <div id="interest-card" className="card" data-sr-id="30">
                {/*<!--INTEREST TEXT-->*/}
                <div className="timeline-title text-light m-3">
                    <p>
                        First of all, I love music, go to movies and play games. Sometimes I spend quite a lot of time
                        watching series, these keeps me fresh for working environment.
                        I also spend time reading or studying something like German, English or something new.  
                    </p>
                </div>
                {/*<!--INTEREST ICONS-->*/}
                <div className="row no-gutters">
                    {/*<!--INTEREST ICON ONE-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6  box text-center">
                        <div className="interest-icon">
                            <img className='img-icon' src={music} alt="music icon"/>
                            <span>Music</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON TWO-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon-even">
                            <img className='img-icon' src={game} alt="gamepad icon"/>
                            <span>Gaming</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON THREE-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon">
                            <img className='img-icon' src={paw} alt="paw icon"/>
                            <span>Animals</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON FOUR-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon-even">
                            <img className='img-icon' src={book} alt="book icon"/>
                            <span>Reading</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON FIVE-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon">
                            <img className='img-icon' src={plane} alt="plane icon"/>
                             <span>Traveling</span>
                        </div>
                    </div>
                    {/*<!--INTEREST ICON SIX-->*/}
                    <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
                        <div className="interest-icon-even">
                            <img className='img-icon' src={film} alt="film icon"/>
                            <span>Movies</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}
export default Interest;