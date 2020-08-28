import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Description = () => (
    <Jumbotron className="pb-1 pt-5">
        <h3>Why gratitude?</h3>
        <p>A gratitude journal is a diary of things for which one is grateful. Gratitude journals are used by individuals who wish to focus their attention on the positive things in their lives. Studies suggest that feelings of gratitude may even possess mental and physical health benefits.<sup><a href="#cite-1">[1]</a></sup></p>
        <h3>How do I contribute?</h3>
        <p>Add a statement of something you're grateful for below and read other contributers thoughts of gratitude. As you add more grateful thoughts and refresh the page, the word cloud is updated.</p>
        <br/>
        <p id="cite-1" className="text-muted" style={{fontSize: "0.75rem"}}><cite title="wikipedia, Gratitude journal">
            [1] Wikipedia contributers, 
            <a href="https://en.wikipedia.org/w/index.php?title=Gratitude_journal&oldid=969206363"> Gratitude journal</a>,   
            <a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC BY-SA 3.0</a>
        </cite></p>
    </Jumbotron>
)

export default Description;