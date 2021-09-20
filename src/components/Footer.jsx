import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
 margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
           <Left>
             <Logo>CsStore.</Logo>  
             <Desc>	Lorem ipsum hendrerit ipsum a quam vehicula 
                 est cras tempus quis, diam dui pharetra ad 
                 vestibulum iaculis erat purus. mollis nisi 
                 per commodo felis cras duis dapibus, conubia condimentum feugiat ad nostra eget aenean convallis, cubilia vitae dictum adipiscing vulputate nullam. primis lorem bibendum tempus mauris varius dapibus facilisis tortor porttitor lobortis nisi, vitae nisl turpis ultrices turpis aliquam volutpat elit euismod ante. vivamus conubia vel quisque bibendum consequat integer quisque mollis, mi imperdiet vivamus ornare torquent sociosqu nulla, velit aenean ut porttitor ipsum cras magna. nam commodo ut mollis aliquam praesent nec curabitur,
                 class blandit eu dictumst cras eu. 
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
           </Left> 
            <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Orden Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>   
            </Center> 
           <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRigth:"10px"}}/> 622 Dixie Path, South Tobinchester 98336</ContactItem>
            <ContactItem><Phone  style={{marginRigth:"10px"}}/>  +1 234 56 78</ContactItem>
            <ContactItem><MailOutline  style={{marginRigth:"10px"}}/> contact@csstore.dev</ContactItem>
            <Payment src="http://i.ibb.co/Qfvn4z6/payment.png"/>
           </Right> 
        </Container>
    )
}

export default Footer
