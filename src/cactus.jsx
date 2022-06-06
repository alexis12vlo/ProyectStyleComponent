import img3 from './img3.png'
import imagefoter from './flechafooter.png'
import { RiCactusFill } from 'react-icons/ri'
import { GiPlainCircle } from 'react-icons/gi'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineUser } from 'react-icons/hi'
import { FiShoppingCart } from 'react-icons/fi'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'
import styled, { keyframes } from 'styled-components';

function Cactus() {
    const Cactus = styled.div`
    display:flex;
    background: linear-gradient(to left, #91ADA4,#27594A);
    width: 90%;
    height:90vh;
    flex-direction: column;
    `;
    const CactusNav = styled.div`
    display:flex;
    width: 100%;
    height:12%;
    `;
    const CactusBody = styled.div`
    display:flex;
    width: 100%;
    height:73%;
    `;
    const CactusNavLogo = styled.div`
    display:flex;
    width: 20%;
    height: 100%;
    justify-content: center;

    `;
    const CactusNavLogos = styled.div`
    display:flex;
    width: 30%;
    height: 100%;
    justify-content:end;
    align-items: center;
    `;
    const CactusNavLogoCar = styled.div`
     display:flex;
     height: 47%;
     padding-left: 12px;
     padding-right: 12px;
     border-radius: 20px;
     justify-content: center;
     align-items: center;
     margin-right: 30px;

     `;
    const CactusNavLogoImg = styled.div`
    display:flex;
    align-items: center;
    `;
    const CactusFooter_Logos = styled.div`
    display:flex;
    background: linear-gradient(to left,#bfcab8,#87b170);

    align-items: center;
    justify-content: center;
    width: 21%;
    height: 100%;
    `;
    const CactusFooter_Logos_Container = styled.div`
    display:flex;
    background: none;
    margin: 15px;
    align-items: center;
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    border-color: white;
    `;
    const CactusNavLogoMenu = styled.div`
    display:flex;
    align-items: center;
    width: 50%;
    `;
    const CactusNavLogoNav = styled.nav`
    display:flex;
    align-items: center;
    width: 100%;
    height: 100%;

    `;
    const CactusNavLogoNavul = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    justify-content: center;
    width: 100%;
    height: 100%;
    `;
    const CactusNavLogoNavli = styled.li`
    display:flex;
    align-items: center;
    list-style:none;
    text-align: center;
    padding-left: 20px;
    z-index:1;
    padding-right: 20px;
    height: 100%;
    justify-content: center;
    transition:all 0.5s;

    font-size: 20px;
    &:hover{
          color:#EEBB4D;
      }
    `;
    const CactusP = styled.p`
        font-size: 18px;
        line-height: 20px;
    `;
    const CactusPTitle = styled.p`
    display: flex;
    align-items: center;
    font-size: 15px;
    height: 10%;
    line-height: 20px;
    margin: 0;

    `;
    const CactusPTitle2 = styled.p`
    display: flex;
    align-items: center;
    font-size: 20px;
    height: 20%;
    line-height: 20px;
    margin: 0;

    `;
    const CactusFooter_Text_P = styled.p`
    display: flex;
    align-items: center;
    font-size: 13px;
    height: 100%;
    margin: 0;
    width: 40%;
    `;

    const Circulo = styled(GiPlainCircle)`
     align-items: initial;
     width:10px;
     height: 100%;
     padding-top:5px;
     padding-right: 40px;

     `;
    const FlechaFooter = styled(HiOutlineArrowNarrowDown)`
  
     width:80px;
     height:55px;
    

     `;
    const CactusImg = styled(RiCactusFill)`
      width:40px;
      height: 100%;
      transition:all 0.5s;

      padding-right:5px;
      &:hover{
          color:#EEBB4D;
      }
    
      `;
    const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }
    
      to {
        transform: rotate(360deg);
      }
    `;

    const Lupa = styled(BiSearch)`
       width:25px;
       height: 100%;
       z-index:1;
       transition: 1s;
       margin-right: 20px;
       transition: all 1.5s;
       &:hover{
        color:#EEBB4D;

        animation: ${rotate} 2s linear ;
       }
    
       `;
    const Car = styled(FiShoppingCart)`
        width:22px;
        height: 100%;
        margin-left: 9px;
        margin-top: 3px;
        `;

    const Username = styled(HiOutlineUser)`
         width:23px;
         height: 100%;
         margin-right: 20px;
       z-index:1;

         transition: all 1.5s;
       &:hover{
        color:#EEBB4D;

        animation: ${rotate} 2s linear ;
       }
         `;
    const Bars = styled(RiBarChartHorizontalLine)`
        width:25px;
        height: 100%;
        padding-right: 50px;
        padding-left: 50px;
         background-color:#36644E;
         &:hover{
            background-color: #376658;
         }
        `;
    const CactusBodyTitles = styled.div`
        display:flex;
        width: 55%;
        flex-direction: column;
        justify-content: center;
        height:100%;
        padding-left:40px;
        `;
    const CactusBodyImg = styled.div`
        display:flex;
        position: fixed;
        width: 540px;
        height:450px;
        transform: translate(600px,-40px);
        `;
    const CiculosBody = styled.div`
        display:flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        background: linear-gradient(to left,#97c07e,#ccd4c7);
        width: 45%;
        height:100%;
        border-top-left-radius:100px;
        `;
    const CactusFooter = styled.div`
        display:flex;
        width: 100%;
        height:15%;
    `;
    const CactusFooter_Flecha = styled.div`
        display:flex;
        align-items: center;
        justify-content: center;
        width: 14%;
        height:100%;
    `;
    const CactusFooter_Text = styled.div`
        display:flex;
        justify-content: space-around;
        width: 45%;
        background-color:#2B453F ;
        height:100%;
     `;
    const CactusFooter_Image = styled.div`
        background:url(${imagefoter});
        background-size:188px;
        background-repeat:no-repeat;
        background-position:center;
        background-color: #EEBB4D;
        border-top-left-radius:60px;
        width: 20%;
        height:100%;
    `;
    const CactusImage = styled.img`
        display:flex;
        
        `;
    const CactusBodyH1 = styled.h1`
        display:flex;
        width: 100%;
        align-items:center;
        height:35%;
        font-size: 150px;
        margin: 0;
        `;
    const rotates = keyframes`
        from {
          transform: rotate(0deg);
    
        }
      
        to {
          transform: rotate(360deg);
    
        }
      `;
    const Flecha = styled(BsFillArrowRightCircleFill)`
       width:37px;
       border-radius: 50px;
       height:auto;
       margin: 0;
       color:#EEBB4D ;
       background-color: white;
     
  
       `;
    const CactusButton = styled.button`
        display:flex;
        width: 200px;
        align-items: center;
        justify-content:end;
        text-indent:-150px;
        margin-top: 30px;
        height:10%;
        border-style: solid;
        border-width: 2px;
        background: none;
        border-radius: 30px;
        color: white;
        border-color:#EEBB4D ;
        padding: 0;
        &:hover{
            border-color:white ;

        }
        &:hover > ${Flecha}{
            animation: ${rotates} 2s linear infinite;

        }
        `;


    const Instagram = styled(FiInstagram)`
     width:15px;
     height:auto;
     margin: 0;
     padding: 5px;

     

     `;
    const Facebook = styled(FaFacebookF)`
     width:15px;
     height:auto;
     padding: 5px;
     margin: 0;

     

     `;
    const Twitter = styled(AiOutlineTwitter)`
     width:15px;
     height:auto;
     margin: 0;
     padding: 5px;

     

     `;
    const CirculoBody = styled(GiPlainCircle)`
          width:1.5%;
          height: 2%;
          margin-right: 20px;
          border-style:solid;
          border-color:white;
          border-width:2px;
          padding: 7px;

          border-radius:100px;
  
          margin: 5px;
          margin-right:50px;
     
          `;
    return (
        <Cactus>
            <CactusNav>
                <CactusNavLogo>
                    <CactusNavLogoImg >
                        <CactusImg />
                        <CactusP>Planet <br /> Desert</CactusP>
                    </CactusNavLogoImg>
                </CactusNavLogo>
                <CactusNavLogoMenu >
                    <CactusNavLogoNav>
                        <CactusNavLogoNavul>
                            <CactusNavLogoNavli>Home</CactusNavLogoNavli>
                            <CactusNavLogoNavli><Circulo />Catalogue</CactusNavLogoNavli>
                            <CactusNavLogoNavli><Circulo />Sale %</CactusNavLogoNavli>

                        </CactusNavLogoNavul>

                    </CactusNavLogoNav>
                </CactusNavLogoMenu>
                <CactusNavLogos>
                    <Lupa />
                    <Username />
                    <CactusNavLogoCar >
                        <CactusP>3</CactusP>
                        <Car />
                    </CactusNavLogoCar>
                    <Bars />
                </CactusNavLogos>
            </CactusNav>

            <CactusBody>
                <CactusBodyTitles>
                    <CactusPTitle>PLANTS</CactusPTitle>
                    <CactusBodyH1>CACTUS</CactusBodyH1>
                    <CactusPTitle2>The Fascinating and amazing world of cacti and succulents</CactusPTitle2>
                    <CactusButton>
                        Shop Now
                        <Flecha />
                    </CactusButton>
                </CactusBodyTitles>
                <CactusBodyImg>
                    <CactusImage src={img3} />
                </CactusBodyImg>
                <CiculosBody>
                    <CirculoBody />
                    <CirculoBody />
                    <CirculoBody />
                    <CirculoBody />
                    <CirculoBody />
                </CiculosBody>
            </CactusBody>
            <CactusFooter>
                <CactusFooter_Flecha>
                    <FlechaFooter />
                </CactusFooter_Flecha>
                <CactusFooter_Image>

                </CactusFooter_Image>
                <CactusFooter_Text>
                    <CactusFooter_Text_P>
                        Cacti and succulent are particularly easy Indoor plants to care for
                    </CactusFooter_Text_P>
                    <CactusFooter_Text_P>
                        Requiring very litle maintenance they are ideal for every plant lover
                    </CactusFooter_Text_P>
                </CactusFooter_Text>
                <CactusFooter_Logos>
                    <CactusFooter_Logos_Container>
                        <Facebook />
                    </CactusFooter_Logos_Container>
                    <CactusFooter_Logos_Container>
                        <Instagram />
                    </CactusFooter_Logos_Container>
                    <CactusFooter_Logos_Container>
                        <Twitter />
                    </CactusFooter_Logos_Container>
                </CactusFooter_Logos>
            </CactusFooter>

        </Cactus>
    );
}

export default Cactus;