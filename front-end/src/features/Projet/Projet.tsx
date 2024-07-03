import { Article } from "../../components/article/article"


export const Projet = () => {


    return (
        <>
            <section className="heroProjectContainer">
                <div className="heroBackgroundImage"></div>
                <div className="heroTagContainer">
                    <span>Veja EcoCollect</span>
                </div>
            </section>
            <section className="projectContentContainer">
                <h2>Notre mission</h2>
                <span className="hashTagContent">#walkforabetterfutur</span>
                <div className="introProjectContentContainer">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="introProjectImage"></div>
                </div>

                <div className="doubleImagesContainer">
                    <div className="fDoubleImages"></div>
                    <div className="sDoubleImages"></div>
                </div>

                <div className="festivalContainer">
                    <div className="festivalCard">
                        <span>Festivals</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </div>
                    <div className="festivalCard">
                        <span>Festivals</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </div>
                    <div className="festivalCard">
                        <span>Festivals</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </div>
                    <div className="festivalCard">
                        <span>Festivals</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </div>
                </div>

                <h2>Comment Veja recycles les déchets plastiques pour produire des sneakers durables</h2>
                <Article />
                <h2>Nombre de plastique ramassé en tonne</h2>
                <div className="ecoContentContainer">
                    <div className="ecoContent">
                        <div>
                            <span className="ecoValue">350</span>
                            <span className="ecoUnit"> tonnes</span>
                        </div>
                        <p>
                            Sebastião a grandi dans une communauté de l'Amazonie en regardant son père travailler comme récolteur de caoutchouc.
                        </p>
                    </div>
                    <div className="ecoImage">

                    </div>
                </div>
            </section>
        </>
    )
}