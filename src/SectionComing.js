import vinylGN2 from "./img/vinyl/gods-nightmares-2.png";
import vinylOriginal2 from "./img/vinyl/original-2.png";

function SectionComing() {
    return (
        <section id="section-coming"
                 className="py-7 border-bottom">
            <div className="container">
                <h2 className="text-center fs-1 letter-spacing-7 mb-5">
                    Coming Soon
                </h2>
                <div className="row row-cols-1 row-cols-md-2 gy-5 gx-md-5 text-center mx-auto"
                     style={{maxWidth: 900}}>
                    {[
                        {
                            imgSrc: `${vinylGN2}`,
                            title: "Gods & Nightmares",
                            text: "vinyl"
                        },
                        {
                            imgSrc: `${vinylOriginal2}`,
                            title: "Original",
                            text: "vinyl"
                        }
                    ].map(({imgSrc, title, text}, idx) => {
                        return (
                            <div className="col" key={idx}>
                                <div className="card bg-transparent">
                                    <img src={imgSrc}
                                         alt="vinyl - original soundtrack"
                                         className="card-img"
                                         style={{marginTop: -50}}/>
                                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                                        <h3 className="card-text h6 letter-spacing-4">
                                            {title}
                                        </h3>
                                        <p className="mb-0 mb-lg-5 text-uppercase text-white-50 letter-spacing-5"
                                           style={{fontSize: "0.75rem"}}>
                                            - {text} -
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default SectionComing;
