import React from "react";
import styled from 'styled-components';

// components
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import mapBg from './assets/img/map-bg.jpg';
import yellowSmile from "./assets/img/yellow-smile.svg";
import lightCircle from "./assets/img/light-circle.svg";

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #ffffff;
`;

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0px 147px;
`;

export const FooterContainer = styled(Container)`
    height: 100%;
`;

const Main = styled.div`
    background-image: url("${yellowSmile}"), url("${lightCircle}"), url("${mapBg}");
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top 20px left 30px, top 20px center, top right;
`;

const MainContainer = styled(Container)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FeedbackTitle = styled.h1`
    font-size: 40px;
    line-height: 52px;
    color: #3E3E3E;
    margin: 0 0 30px;
`;

const App = () => {
    return (
        <AppWrapper>
            <Main>
                <MainContainer>
                    <FeedbackTitle>Reach out to us!</FeedbackTitle>
                    <FeedbackForm />
                </MainContainer>
            </Main>
            <Footer />
        </AppWrapper>
    )
}

export default App;
