import { BannerContainer, BannerTitle, BannerText, BannerDescription, BannerGrid } from "./styles";
import BannerCoffeDelivery from "../../Assets/Banner-coffee-delivery.svg";
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Banner() {
    const theme = useTheme()
    return (
      <BannerContainer>
        <div>
            <BannerText>
                <BannerTitle>Encontre o café perfeito para qualquer hora do dia</BannerTitle>
                <BannerDescription>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora.</BannerDescription>
            </BannerText>
            <BannerGrid>
                <div>
                    <ShoppingCart 
                        size={32} 
                        weight="fill"
                        color={theme.background}
                        style={{ backgroundColor: theme.yellowDark }}
                        />
                    <span>Compra simples e segura</span>
                </div>
                <div>
                    <Package 
                        size={32} 
                        weight="fill" 
                        color={theme.background}
                        style={{ backgroundColor: theme.baseText }}
                    />
                    <span>Embalagem mantém o café intacto</span>
                </div>
                <div>
                    <Timer 
                        size={32} 
                        weight="fill" 
                        color={theme.background}
                        style={{ backgroundColor: theme.yellow }}
                    />
                    <span>Entrega rápida e rastreada</span>
                </div>
                <div>
                    <Coffee 
                        size={32} 
                        weight="fill" 
                        color={theme.background}
                        style={{ backgroundColor: theme.purple }}
                    />
                    <span>O café chega fresquinho até você</span>
                </div>
            </BannerGrid>
        </div>
        <div>
            <img src={BannerCoffeDelivery} alt="" />
        </div>

      </BannerContainer>
    )
  }
  