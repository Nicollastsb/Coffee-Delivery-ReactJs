import { Banner } from "../../Components/Banner/Index";
import { CoffeeGrid } from "../../Components/CoffeeGrid/Index";
import { HomeContainer } from "./styles";

export function Home() {
    return (
      <HomeContainer>
        <Banner/>
        <CoffeeGrid/>
      </HomeContainer>
    )
  }
  