import { Container } from "./styles"
import { DishCard } from "../../../components/DishCard"
import { Gallery } from "../../../components/Gallery"
import { Hero } from "../../../components/Hero"


export function Home(){
    return (
        <Container>
            <Hero />
            <div className="featured">
                <Gallery title="Refeições">
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                </Gallery>
                <Gallery title="Sucos">
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                </Gallery>
                <Gallery title="Almoços">
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                </Gallery>
            </div>
        </Container>

    )
}