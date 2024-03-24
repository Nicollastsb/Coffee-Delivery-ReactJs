import { SuccessCardContainer, SuccessContainer, SuccessTextContainer, SuccessTitleContainer } from "./styles";
import deliveryMan from "../../Assets/Illustration.svg"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useCart } from "../../Components/Hooks/useCart";

export function Success() { 
  const { deliveryAddress, payment } = useCart()  
    return (
      <SuccessContainer>
        <SuccessTitleContainer>
          <p> Uhu! Pedido confirmado </p>
          <p> Agora é só aguardar </p>
        </SuccessTitleContainer>
        <SuccessCardContainer>
          <div>
            <SuccessTextContainer>              
              <MapPin
                size={32} 
                weight="fill"
              />
              <div>
                <p>Entrega em Rua <b>{deliveryAddress?.street}, {deliveryAddress?.number}</b></p>
                <p>{deliveryAddress?.neighborhood} - { deliveryAddress?.city}, {deliveryAddress?.state}</p>
              </div>
            </SuccessTextContainer>
            <SuccessTextContainer>     
              <Timer
                size={32} 
                weight="fill"
              />
              <div>
                <p>Previsão de entrega</p>
                <p><b>20 min - 30 min</b></p>                
              </div>
            </SuccessTextContainer>
            <SuccessTextContainer>     
              <CurrencyDollar
                size={32} 
                weight="fill"
              />
              <div>
                <p>Pagamento na entrega</p>
                <p><b>{payment?.paymentType}</b></p>                
              </div>
            </SuccessTextContainer>
          </div>
          <img src={deliveryMan} alt="" />
        </SuccessCardContainer>
      </SuccessContainer>
    )
  }
  