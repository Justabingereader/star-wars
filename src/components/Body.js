import Silver from '../silver-soldier.jpg';
import '../Body.css';
import White from '../white-soldiers.jpg';
function Body(){
    return (
        <div className='content-header'> 
        <h1>Star Wars: An Infographic</h1>
        <div className='wrapper'>
            <div className='first'>
                <p>Star Wars, one of the most remarkable creations of humanity.
                    From a movie in 1977, it has become a religion. Millions of people
                    are part of this religion. From time to time, they will meet.
                    They will be dressed up like Star Wars characters.
                    They will hold light sabers. And then they will gush over the Star
                    Wars Universe in joint admiration. The Universe, with its many species,
                    and many planets, and starships, and characters.Star Wars has the Force,
                    and you can think of it as a miracle. The Force is a mystical power,
                    created by all living things, which binds the galaxy together.</p>
            </div>
            <div >
                <img src={Silver} alt="Silver Soilder" className='silver'/>
            </div>
            <div >
                <img src={White} alt="White Soilder" className='white'/>
            </div>
            <div className='second'>
                <p>Star Wars takes place "a long time ago in a galaxy far, far away".
                    There are many beings in this galaxy: humans, humanoid beings,
                    and non-humanoid beings. These creatures co-exist with droids and robots.
                    Among these, there are two factions that use the Force. There is the dark side,
                    the Siths. And there is the light side, the Jedi. The Siths inspire fear and aggression,
                    while the Jedi draw their powers from arbitration. The Dark Lords of the Siths are "Darths".
                    There are always two, a master and their apprentice. The force-wielders are limited.
                    And the Jedi and the Darths are in a constant tussle.</p>
            </div>
            </div>
            <span className='footer'>Feel free to check the different information available on Star Wars with the navigation bar.</span>
            <span className='copy'>Copyright Imran Haroun 2023</span>
      </div>
    )
}

export default Body;