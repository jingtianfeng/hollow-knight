import vinylGN2 from "./img/vinyl/gods-nightmares-2.png";
import vinylOriginal2 from "./img/vinyl/original-2.png";

function SectionComing() {
    return (
        <section id="section-coming"
                 className="py-6 border-bottom">
            <div className="container">
                <h2 className="h2">
                    Coming Soon
                </h2>
                <p>
                    (placeholder)
                </p>
                <div className="row row-cols-1 row-cols-md-2 gy-5 gx-md-5 text-center">
                    <div className="col">
                        <div className="card bg-transparent">
                            <img src={vinylGN2}
                                 alt="vinyl - gods and nightmares soundtrack"
                                 className="card-img"/>
                            <div className="card-img-overlay d-flex flex-column justify-content-end">
                                <h3 className="card-text h6">
                                    Gods & Nightmares
                                </h3>
                                <p className="fst-italic mb-0 mb-lg-5">
                                    vinyl
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent">
                            <img src={vinylOriginal2}
                                 alt="vinyl - original soundtrack"
                                 className="card-img"/>
                            <div className="card-img-overlay d-flex flex-column justify-content-end">
                                <h3 className="card-text h6">
                                    Original
                                </h3>
                                <p className="fst-italic mb-0 mb-lg-5">
                                    vinyl
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionComing
