import React, {Component} from "react";

class Menu extends Component {
    render() {
        return (
            <section id="menu">
                <div className="row">
                    <div className="column twelve">
                        <h2>Menu</h2>
                    </div>
                </div>
                <div className="row">
                    {this.props.data.lang === "en" ? (
                        <>
                            <div className="four columns">
                                <h3>Starter</h3>
                                <p>
                                    <b>Jerusalem artichoke soup</b>
                                    <br/>
                                    Herbal oil, archipelago bread, garlic spread
                                </p>
                            </div>
                            <i className="fa fa-asterisk"></i>
                            <div className="four columns">
                                <h3>Main course</h3>
                                <h4>Meat</h4>
                                <p>
                                    <b>Overcooked beef breast and red wine sauce</b>
                                    <br/>
                                    roasted small potatoes, baked root vegetables, pickled mustard
                                    seeds, vegetable chips
                                </p>
                                <h4>Fish</h4>
                                <p>
                                    <b>Blood orange salmon and citrus sauce</b>
                                    <br/> roasted small potatoes, baked root vegetables, pickled
                                    mustard seeds, vegetable chips
                                </p>
                                <h4>Vegan</h4>
                                <p>
                                    <b>Melanzane</b>
                                    <br/> country bread, baked root vegetables, pickled mustard
                                    seeds, vegetable chips
                                </p>
                            </div>
                            <i className="fa fa-asterisk"></i>
                            <div className="four columns">
                                <h3>Dessert</h3>
                                <p>
                                    <b>Pineapple-passion chocolate cake</b>
                                    <br/> coffee/tea
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="four columns">
                                <h3>Alkuruoka</h3>
                                <p>
                                    <b>Maa-artisokkakeitto</b>
                                    <br/>
                                    yrttiöljyä, saaristolaisleipää, valkosipulilevite
                                </p>
                            </div>
                            <i className="fa fa-asterisk"></i>
                            <div className="four columns">
                                <h3>Pääruoka</h3>
                                <h4>Liha</h4>
                                <p>
                                    <b>Ylikypsää naudan rintaa ja punaviinikastiketta</b>
                                    <br/>
                                    paahdetut pikkuperunat, uunijuurekset, pikkelöidyt
                                    sinapinsiemenet, kasvissipsit
                                </p>
                                <h4>Kala</h4>
                                <p>
                                    <b>Veriappelsiinilohta ja sitruskastiketta</b>
                                    <br/> paahdetut pikkuperunat, uunijuurekset, pikkelöidyt
                                    sinapinsiemenet, kasvissipsit
                                </p>
                                <h4>Vegaani</h4>
                                <p>
                                    <b>Melanzane</b>
                                    <br/>
                                    maalaisleipää, uunijuurekset, pikkelöidyt sinapinsiemenet,
                                    kasvissipsit
                                </p>
                            </div>
                            <i className="fa fa-asterisk"></i>
                            <div className="four columns">
                                <h3>Jälkiruoka</h3>
                                <p>
                                    <b>Ananas-passionsuklaakakkua</b>
                                    <br/> kahvi/tee
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </section>
        );
    }
}

export default Menu;
