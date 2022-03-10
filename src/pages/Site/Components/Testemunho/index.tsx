import { TestemunhoSection, CarouselItem } from "./style";

export default function Testemunho() {
    return (
        <TestemunhoSection>
            <div className="container">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <CarouselItem className="carousel-item active" data-bs-interval="4000">
                        <h2>Gjf efgje dfjk fgdkmg lkgdklçg fgklrgk vgkrmglk</h2>
                        <img src="images/bbb.jpg" className="d-block" alt="..." />
                        <em>Joao dos Santos</em>
                    </CarouselItem>
                    <CarouselItem className="carousel-item" data-bs-interval="4000">
                        <h2>Olfd efgje adfdf fgdkmg lkgdklçg fgklrgk vgkrmglk</h2>
                        <img src="images/ccc.jpg" className="d-block " alt="..." />
                        <em>Maria das Flores</em>
                    </CarouselItem>                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </TestemunhoSection>
    )
}