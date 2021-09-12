import vinylGN2 from "./img/vinyl/gods-nightmares-2.png";
import vinylOriginal2 from "./img/vinyl/original-2.png";
import marker from "./img/marker3.png";

function SectionComing() {
    return (
        <section id="section-coming"
                 className="py-6 border-bottom">
            <div className="container">
                <h2 className="text-center">
                    Coming Soon
                </h2>
                <img src={marker} alt="divider"
                     className="d-block mx-auto"
                     style={{width: 24, height: 24, opacity: 0.875}}/>
                <p className="mt-2 text-center">
                    (placeholder)
                </p>
                <div className="row row-cols-1 row-cols-md-2 gy-5 gx-md-5 text-center">
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
                                         className="card-img"/>
                                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                                        <h3 className="card-text h6">
                                            {title}
                                        </h3>
                                        <p className="fst-italic mb-0 mb-lg-5">
                                            {text}
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
