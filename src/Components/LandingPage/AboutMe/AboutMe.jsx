import React from 'react'
import './AboutMe.css'
function AboutMe() {
    return (
        <div className='aboutme'>
            <div className='aboutme__row'>
                <div className="aboutme__titlecolumn">
                    <div>
                        ABOUT ME
                    </div>
                </div>
                <div className="aboutme__textcolumn">
                    <div className="aboutme__text">

                        <div className='aboutme__textBig'>
                            Currently pursuing a Master's in Computer Science, I am a passionate Developer.
                        </div>
                        <div className='aboutme__textSmall'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur architecto nihil ratione eos maxime pariatur, et sed harum corrupti quidem officiis asperiores! Corporis officia, sint error aperiam doloremque voluptatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sunt neque incidunt reiciendis nam molestias non, reprehenderit nihil. Amet aliquid voluptates dignissimos minima repudiandae eius cumque, in nisi tenetur dicta? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, architecto tempore fuga fugit ullam sint sunt eaque corporis saepe id maxime ad tenetur eligendi exercitationem nulla natus. Voluptatum, illo dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, iste, id vitae commodi atque illo dolore eos, itaque omnis quasi odit perspiciatis consequatur inventore aperiam veritatis magnam repudiandae? Maxime, odit.
                        </div>
                        <div className='aboutme__expandBtn'>
                            <p>
                                MORE ABOUT ME
                            </p>
                        </div>
                    </div>
                    <div className="aboutme__image">
                        <img src={require('../IMG_9151.png')} alt="My profile image" className='aboutme__profileImage' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
