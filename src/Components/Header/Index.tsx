import { CartShopHeader, HeaderContainer, LocationHeaderButtonLink } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from "../../Assets/Logo-coffee-delivery.svg"
import { NavLink } from "react-router-dom";
import { useCart } from "../Hooks/useCart";

export function Header() {
  const { deliveryAddress, totalPrices } = useCart()  
    return (
      <HeaderContainer>
        <div>
          <NavLink to="/Coffee-Delivery" title="Home">
            <img src={logoCoffeeDelivery} alt="" />
          </NavLink>   
          <nav>
            {deliveryAddress?.street && 
              <LocationHeaderButtonLink> 
                <MapPin size={22} weight="fill" /> {deliveryAddress?.city}, {deliveryAddress?.state}
              </LocationHeaderButtonLink>
            }
            <CartShopHeader>
              <NavLink to="/Coffee-Delivery/checkout" title="Compras">
                <ShoppingCart size={22} weight="fill" />
              </NavLink>    
              { totalPrices && totalPrices?.quantity > 0 &&
                <div>
                  <span>{totalPrices?.quantity}</span>
                </div>  
              }  
            </CartShopHeader>
          </nav>
        </div>
      </HeaderContainer>
    )
  }
  