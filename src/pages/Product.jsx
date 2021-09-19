import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Newsletter from "../components/Newsletter"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    object-fit: cover;
`
const ImgContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
`
    
const InfoContainer = styled.div`
    flex: 1;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0;
`

const Price = styled.span`
    font-size: 40px;
`
const FilterContainer = styled.div` 
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;  
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
     display: flex;
     align-items: center;
     font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <NavBar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Deni Jumpuit</Title>
                    <Desc>	Lorem ipsum hendrerit ipsum a quam vehicula 
                        est cras tempus quis, diam dui pharetra ad vestibulum 
                        iaculis erat purus. mollis nisi per commodo felis cras duis dapibus, 
                        conubia condimentum feugiat ad nostra eget aenean convallis, cubilia vitae dictum 
                        adipiscing vulputate nullam. primis lorem bibendum tempus mauris varius dapibus facilisis 
                        tortor porttitor lobortis nisi, vitae nisl turpis ultrices turpis aliquam volutpat elit euismod ante. 
                        vivamus conubia vel quisque bibendum consequat integer quisque mollis, mi imperdiet vivamus ornare torquent 
                        sociosqu nulla, velit aenean ut porttitor ipsum cras magna. nam 
                        commodo ut mollis aliquam praesent nec curabitur, class blandit eu dictumst cras eu. 
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="blue" />
                        <FilterColor color="gray" />
                        <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                                <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
