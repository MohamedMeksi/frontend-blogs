import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";



const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer les blogs
    axios.get("http://localhost:5000/blog/get")
    .then(response => {
      console.log("Données reçues :", response.data);
      setBlogs(response.data);
    })
    .catch(error => {
      console.error("Erreur lors du chargement des blogs :", error);
    });
  }, []);  

  return (
    <StyledContainer>
      <header>
        <Header />
      </header>

      <div className="banner">
        <div className="content">
          <h1>Explorez, grandissez, inspirez-vous chaque jour !</h1>
          <p>Ta réussite, ton voyage, ton histoire.</p>
        </div>
      </div>

      <h1>Mon Blog</h1>
      <p>Chaque jour est une nouvelle aventure à écrire</p>

      <div className="blog-grid">
      {Array.isArray(blogs) ? (
        blogs.map((blog, index) => (
          <Card
            key={index}
            title={blog.title}
            description={blog.content}
            author={blog.author}
            image={blog.image || "https://support.heberjahiz.com/hc/article_attachments/21013105397138"}
            date={blog.createdAt}
          />
        ))
      ) : (
        <p>Aucun blog disponible.</p>
      )}
    </div>

      <Footer />
    </StyledContainer>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MonSite</h2>
          <p>© 2025 Tous droits réservés</p>
        </div>

        <div className="footer-links">
          <a href="#">Accueil</a>
          <a href="#">À propos</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledContainer = styled.div`
  text-align: center;
  background-color: white;
  color: black; /* Correction ici */

  header {
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2.5rem;
    color: #ff6b00;
  }

  .banner {
    position: relative;
    height: 800px;
    width: 100%;
    overflow: hidden;
  }

  .banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://www.guidesulysse.com/imageswebp/destinations/iStock-484506846.webp");
    background-size: cover;
    background-position: center;
    filter: blur(8px);
  }

  .content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    font-weight: bold;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 60px;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const StyledFooter = styled.footer`
  background: #111;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: 40px;

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    max-width: 1100px;
    margin: auto;
  }

  .footer-logo h2 {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .footer-links a,
  .footer-socials a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    transition: 0.3s;
  }

  .footer-links a:hover,
  .footer-socials a:hover {
    color: #f39c12;
  }

  .footer-socials a {
    font-size: 20px;
  }
`;

export default Home;
