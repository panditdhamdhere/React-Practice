import React from 'react'
import ReactStars from 'react-stars'
const Detail = () => {
    return (
        <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
            <img className='h-96 block md:sticky top-24' src='https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg' alt='movie poster' />

            <div className='md:ml-4 ml-0 w-full md:w-1/2'>
                <h1 className='text-3xl font-bold text-gray-500'>Avengers <span className='text-xl'>(2019)</span></h1>
                <ReactStars size={20}
                    half={true}
                    value={4.5}
                    edit={false}
                />
                <p className='mt-2'>Avengers: Endgame is a 2019 superhero film, based on the Marvel Comics superhero team of the same name. The film is a sequel to The Avengers, Avengers: Age of Ultron, Avengers: Infinity War, Ant-Man and the Wasp, and Captain Marvel. It is the twenty-second film in the Marvel Cinematic Universe, and the tenth installment of Phase Three. The film was released in the United States on April 26, 2019 and re-released under the title Avengers: Endgame - With Bonus Content[1] on June 28, 2019. The film is directed by Joe Russo and Anthony Russo and stars Robert Downey, Jr. as Tony Stark/Iron Man, Chris Evans as Steve Rogers/Captain America, Mark Ruffalo as Bruce Banner/Hulk, Chris Hemsworth as Thor, Scarlett Johansson as Natasha Romanoff/Black Widow, Jeremy Renner as Clint Barton/Hawkeye/Ronin, Don Cheadle as James Rhodes/War Machine, Paul Rudd as Scott Lang/Ant-Man, Brie Larson as Carol Danvers/Captain Marvel, Karen Gillan as Nebula, Danai Gurira as Okoye, Benedict Wong as Wong, Jon Favreau as Happy Hogan, Bradley Cooper as Rocket Raccoon, Gwyneth Paltrow as Pepper Potts/Rescue and Josh Brolin as Than Two more sequels are in development, Avengers: The Kang Dynasty and Avengers: Secret Wars, releasing on May 2, 2025 and May 1, 2026, respectively.</p>

            </div>

        </div>
    )
}

export default Detail
