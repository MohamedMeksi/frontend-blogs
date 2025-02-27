// eslint-disable-next-line no-unused-vars
import React from "react";
import styled, { keyframes } from "styled-components";

const AboutUs = () => {
  return (
    <StyledContainer>
      <ContentWrapper>
        <SectionHeader>Notre Mission</SectionHeader>
        <TextBlock>
          Chez <strong>Blogs City</strong>, nous croyons au pouvoir des mots et des histoires. 
          Notre mission est de donner une voix à chaque créateur, de connecter les esprits curieux 
          et d&apos;inspirer une nouvelle génération de penseurs et d’écrivains.
        </TextBlock>

        <SectionHeader>Pourquoi Nous?</SectionHeader>
        <FeaturesGrid>
          <FeatureCard>
            <h3>🌍 Une Communauté Globale</h3>
            <p>Rejoignez une communauté passionnée de blogueurs et de lecteurs à travers le monde.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>🚀 Inspiration Quotidienne</h3>
            <p>Découvrez du contenu frais et stimulant chaque jour, propulsé par des créateurs talentueux.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>💡 Partage & Apprentissage</h3>
            <p>Échangez des idées, apprenez et grandissez ensemble dans un environnement collaboratif.</p>
          </FeatureCard>
        </FeaturesGrid>
      </ContentWrapper>
    </StyledContainer>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styles
const StyledContainer = styled.div`
  background: #f9f9f9;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
`;

const ContentWrapper = styled.div`
  background: white;
  max-width: 1500px;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

const SectionHeader = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const TextBlock = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 1500px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.3rem;
    color: #ff6b00;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

export default AboutUs;
