// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "./About";
import { Typewriter } from 'react-simple-typewriter';
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5001/blog/get-all")
      .then(response => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des blogs :", error);
        setLoading(false);
      });
  }, []);

  return (
    <StyledContainer>
      <Header />

      <BannerSection>
        <BannerOverlay />
        <BannerContent>
          <AnimatedTitle>🌟 Découvrez, créez, partagez !</AnimatedTitle>
          <BannerSubtitle>
            <h1>
              <Typewriter
                words={['Explorez 🚀', 'Grandissez 📖', 'Inspirez-vous ✨']}
                loop={0} // 0 = infini
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </BannerSubtitle>
          <ActionButton href="/create">Commencez votre voyage ✨</ActionButton>
        </BannerContent>
      </BannerSection>


      <MainContent>
        <SectionHeader>
          <h1>Blogs City</h1>
          <Tagline>Chaque jour est une nouvelle aventure à écrire</Tagline>
        </SectionHeader>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <BlogGrid>
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <Card
                  title={blog.title}
                  description={blog.description}
                  author={blog.author?.name || "Unknown"}
                  image={blog.image || "https://source.unsplash.com/random/800x600"}
                  date={new Date(blog.date).toLocaleDateString('fr-FR')}
                />

              ))
            ) : (
              <EmptyMessage>Aucun article disponible pour le moment</EmptyMessage>
            )}
          </BlogGrid>
        )}
      </MainContent>
      <About />
      <Footer />
    </StyledContainer>
  );
};

// Composants stylisés
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledContainer = styled.div`
  background: #f9f9f9;
  min-height: 100vh;
  position: relative;
`;

const BannerSection = styled.section`
  position: relative;
  height: 70vh;
  overflow: hidden;
  margin-bottom: 4rem;
`;



const BannerContent = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  padding: 2rem;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`;

const AnimatedTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out 0.2s;
  animation-fill-mode: backwards;
`;

const MainContent = styled.main`
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.8rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 3rem;
  padding: 2rem 0;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ff6b00;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #95a5a6;
  padding: 4rem 0;
`;

const ActionButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.8rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #ff6b00, #ff9000);
  border-radius: 30px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 107, 0, 0.3);
  }
`;
const BannerOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), 
                    url("https://mediaim.expedia.com/destination/1/1e5824822e62655d9377ce1bba1fc6c3.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: blur(8px); /* Applique un flou sur l'image de fond */
  animation: animatedBackground 15s infinite alternate, parallaxEffect 20s linear infinite;

  @keyframes animatedBackground {
    0% { filter: brightness(1) saturate(1.2); }
    100% { filter: brightness(1.3) saturate(1.5); }
  }

  @keyframes parallaxEffect {
    0% { background-position: center; }
    50% { background-position: 50% 50%; }
    100% { background-position: center; }
  }
`;

;





export default Home;