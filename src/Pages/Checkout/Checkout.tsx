import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react"
import { useCart } from "../../Components/Hooks/useCart"
import { CoffeeChecoutAddress, CoffeeChecoutHeaderAddress, CoffeeCheckoutTitle, CoffeeChecoutTotalPayment, CoffeeChecoutTypePayment, CoffeeDeliveryChecoutContainer, CoffeeCheckoutFormAddress, CoffeeCheckoutInputDelivery, CoffeeCheckoutCardPaymentType, CoffeeChecoutPaymentContainer, CoffeeInShoppingCart, RemoveCoffeeButton, CoffeePrice, TotalCoffeePrice, ButtonConfirmPayment } from "./styles"
import { Col, Container, Row } from "react-bootstrap"
import { CoffeeQuantity } from "../../Components/CoffeeGrid/styles"
import { Coffee, DeliveryAddress, PaymentType } from "../../Components/Contexts/SaleProvider"
import { useForm } from "react-hook-form"
import { useState } from "react"

export function Checkout() {  
  const { coffees, removeOneCoffee, removeCoffee, addOneCoffeeOnShoppintCartAction, setCurrentPayment, setCurrentDeliveryAddress, totalPrices } = useCart()  
  const [selectedOption, setSelectedOption] = useState<PaymentType | null>(null);
  const { register, handleSubmit, watch } = useForm<DeliveryAddress>();

  const handleOptionClick = (option: PaymentType) => {
    setSelectedOption(option)
    setCurrentPayment(option)
  };

  const submitForms = () => {
    handleSubmit((data) => {
      handleCreateNewSale(data as DeliveryAddress);
    })();
  };
  
  const cep = watch('cep');
  const street = watch('street');
  const number = watch('number');
  const neighborhood = watch('neighborhood');
  const city = watch('city');
  const state = watch('state');

  const isSumitedDisabled = !cep || !street || !number || !neighborhood || !city || !state || !selectedOption;

  function handleCreateNewSale(data: DeliveryAddress){
    setCurrentDeliveryAddress(data)
  }

  const removeOneCoffeeAction = (coffee: Coffee) => {
    removeOneCoffee(coffee)
  };

  const removeCoffeeAction = (coffee: Coffee) => {
    removeCoffee(coffee)
  };
  
  const addOneCoffee = (coffee: Coffee) => {
    addOneCoffeeOnShoppintCartAction(coffee)
  };  

  return (
    <CoffeeDeliveryChecoutContainer>      
      <div>
        <CoffeeCheckoutTitle>Complete seu pedido</CoffeeCheckoutTitle>
        <CoffeeChecoutAddress>
          <CoffeeChecoutHeaderAddress>   
            <MapPinLine size={22} />      
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CoffeeChecoutHeaderAddress>
          <CoffeeCheckoutFormAddress id="formularioEndereco" onSubmit={handleSubmit(handleCreateNewSale)}>
            <Container>
              <Row>
                <Col sm={4}>
                  <CoffeeCheckoutInputDelivery 
                    type="text" 
                    placeholder="CEP"
                    {...register('cep')}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <CoffeeCheckoutInputDelivery 
                    type="text" 
                    placeholder="Rua"                      
                    {...register('street')}
                  /> 
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <CoffeeCheckoutInputDelivery 
                    type="text" 
                    placeholder="Número"              
                    {...register('number')}
                  /> 
                </Col>
                <Col sm={8}>
                  <CoffeeCheckoutInputDelivery 
                    type="text" 
                    placeholder="Complemento"                                    
                    {...register('complement')}
                  /> 
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <CoffeeCheckoutInputDelivery 
                    type="text" 
                    placeholder="Bairro"                      
                    {...register('neighborhood')}
                  />  
                </Col>
                <Col sm={6}>
                  <CoffeeCheckoutInputDelivery 
                    type="text" 
                    placeholder="Cidade"                
                    {...register('city')}
                  /> 
                </Col>
                <Col sm={2}>
                  <CoffeeCheckoutInputDelivery 
                    type="text"
                    placeholder="UF"        
                    {...register('state')}
                  /> 
                </Col>
              </Row>
            </Container>        
          </CoffeeCheckoutFormAddress>
        </CoffeeChecoutAddress>
        <CoffeeChecoutTypePayment>
          <div>
            <CoffeeChecoutHeaderAddress>   
              <CurrencyDollar size={32} /> 
              <div>
                <p>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </CoffeeChecoutHeaderAddress>
            <CoffeeChecoutPaymentContainer>
              <CoffeeCheckoutCardPaymentType 
                className={selectedOption == PaymentType.CreditCard ? "selected" : ""} 
                onClick={() => handleOptionClick(PaymentType.CreditCard)}>
                  <CreditCard size={22} />
                  <span>CARTÃO DE CRÉDITO</span> 
              </CoffeeCheckoutCardPaymentType>
              <CoffeeCheckoutCardPaymentType 
                className={selectedOption == PaymentType.DebitCard ? "selected" : ""} 
                onClick={() => handleOptionClick(PaymentType.DebitCard)}>
                  <Bank size={22} /> 
                  <span>CARTÃO DE DÉBITO</span>
              </CoffeeCheckoutCardPaymentType>
              <CoffeeCheckoutCardPaymentType 
                className={(selectedOption == PaymentType.Money ? "selected" : "")} 
                onClick={() => handleOptionClick(PaymentType.Money)}>
                  <Money size={22} /> 
                  <span>DINHEIRO</span>
              </CoffeeCheckoutCardPaymentType>
            </CoffeeChecoutPaymentContainer>
          </div>
        </CoffeeChecoutTypePayment>
      </div>
      <div>
        <CoffeeCheckoutTitle>Cafés Selecionados</CoffeeCheckoutTitle>
        <CoffeeChecoutTotalPayment>
          <div>
            {coffees.map((coffeeItem: Coffee) => {
              console.log(coffeeItem.url)
                return (
                  <div key={coffeeItem.id}>
                    <CoffeeInShoppingCart >     
                      <div>
                        <img src={coffeeItem.url} alt="" />
                      </div>
                      <div>
                        <div>{coffeeItem.title}</div>
                        <div>
                          <CoffeeQuantity>
                              <Minus onClick={()=> removeOneCoffeeAction(coffeeItem)} weight="bold" size={14} />
                              <span>{coffeeItem.quantity}</span>
                              <Plus onClick={()=> addOneCoffee(coffeeItem)} weight="bold" size={14} />
                          </CoffeeQuantity>
                          <RemoveCoffeeButton onClick={()=> removeCoffeeAction(coffeeItem)}>
                            <Trash  weight="bold" size={16} />
                            <span>REMOVER</span>
                          </RemoveCoffeeButton>                          
                        </div>
                      </div>  
                      <CoffeePrice>
                        {coffeeItem.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                      </CoffeePrice>   
                    </CoffeeInShoppingCart>
                    <hr/>        
                  </div>
                )
            })}
          </div>
          <TotalCoffeePrice>
            <div>
              <span>Total de Itens</span> 
              <span>{totalPrices?.totalCoffees.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div>
              <span>Entrega</span> 
              <span>{totalPrices?.deliveryFee.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div>
              <span>Total</span> 
              <span>{totalPrices?.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
          </TotalCoffeePrice>
            <ButtonConfirmPayment to="/Coffee-Delivery/Success" title="Success" >
              <button disabled={isSumitedDisabled} type="submit" onClick={submitForms}>
                  <span>CONFIRMAR PEDIDO</span>
              </button>  
            </ButtonConfirmPayment>
        </CoffeeChecoutTotalPayment>
      </div>
    </CoffeeDeliveryChecoutContainer>
  )
}
  