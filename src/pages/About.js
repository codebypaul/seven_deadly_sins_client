import styled from 'styled-components'

export default function About() {
    return (
        <>
        <AboutWrapper className="container-fluid p-5">

            <h1>About</h1>
            <h5>What is this?</h5>
            <p>This website provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to Pokémon. We specifically cover the video game franchise. Using this website, you can consume information on Pokémon, their moves, abilities, types, egg groups and much, much more.</p>
            <hr/>
            <br/>
            <h5>What is an API?</h5>
            <p>An API (Application Programming Interface) is a contract that allow developers to interact with an application through a set of interfaces. In this case, the application is a database of thousands of Pokémon-related objects, and the interfaces are URL links.</p>
            <p>A RESTful API is an API that conforms to a set of loose conventions based on HTTP verbs, errors, and hyperlinks.</p>
            <hr/>
            <br/>
            <h5>Is this the first of it's kind?</h5>
            <p>This API was modeled after other great APIs about fan beloved series' but there is no other Seven Deadly Sins API in existence.</p>
            <hr/>
            <br/>
            <h5>How much information is stored here?</h5>
            <p>Not enough... yet.</p>
            <p></p>
            <hr/>
            <br/>
            <div className="container">
            <ul> 
                <li>
                    Characters
                </li>
                <li>
                    Orders
                </li>
                <li>
                    Weapons
                </li>
                <li>
                    Abilities
                </li>
                
                
            </ul>

            </div>
            <hr/>
            <br/>
            <h5>The API is not complete</h5>
            <p>
            We know! Feel free to contribute to open issues on <a href='https://github.com/codebypaul/seven_deadly_sins_api'>GitHub</a>.
            </p>
            <hr/>
            <br/>
            <h5>Who built this?</h5>
            <p>The Seven Deadly Sins API v1 was created by <a href="https://github.com/codebypaul">Paul Williams</a> while in coding bootcamp. But he saw a lot of potential and put started to compile all the data he could.</p>
            <hr/>
            <br/>
            <h5>Where did you get all of this data?</h5>
            <p>All information comes from <a href="https://nanatsu-no-taizai.fandom.com/wiki/">The Seven Deadly Sins Wiki</a> pages.</p>
            <hr/>
            <br/>
            <h5>What is the technology stack?</h5>
            <p>V1 was built with Node.js and Express.js. MongoDB, on the cloud service MongoDB Atlas. With the server operating on Heroku.</p>
            <hr/>
            <br/>
        </AboutWrapper>
        </>
    )
}

const AboutWrapper = styled.div`
    ul {
        list-style: none;
    }
`