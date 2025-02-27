import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';


const CreateBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    date: new Date().toISOString().slice(0, 10),
    image: '',
    author: '67c0363f67b530ee2cecc177' // Remplacez par l'ID de l'auteur dynamique
  });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/blog/add', formData);
      setBlogs((prevBlogs) => [...prevBlogs, response.data]);
      setFormData({
        title: '',
        description: '',
        category: '',
        image: '',
        date: '',
        author: ''
      });
      console.log('Blog created successfully:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <>
      <Header />
      <MainContent>
        <FormCard>
          <FormTitle>Create a New Blog</FormTitle>
          <FormDivider />
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" type="text" placeholder="Give your blog a catchy title" value={formData.title} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <TextArea id="description" name="description" placeholder="What’s your blog about?" rows={4} value={formData.description} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="category">Category</Label>
              <Select id="category" name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select a category</option>
                <option value="BUS">Business</option>
                <option value="HLT">Health</option>
                <option value="LFS">Lifestyle</option>
                <option value="TEC">Tech</option>
                <option value="TRV">Travel</option>
                <option value="EDU">Education</option>
                <option value="FOD">Food</option>
                <option value="ART">Art</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="date">Publication Date</Label>
              <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" name="image" type="text" placeholder="https://example.com/image.jpg" value={formData.image} onChange={handleChange} required />
            </FormGroup>

            <SubmitButton type="submit">Create Blog</SubmitButton>
          </form>
        </FormCard>
      </MainContent>
      <Footer />
    </>
  );
};

// Styled Components
const MainContent = styled.main`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #f4f6f9;
  min-height: 100vh;
  align-items: center;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const FormTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1.5rem;
`;

const FormDivider = styled.hr`
  margin: 1.5rem 0;
  border: 1px solid #e0e0e0;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-size: 18px;
  color: #34495e;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  border-radius: 10px;
  border: 2px solid #ddd;
  background: #ecf0f1;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
    background-color: #ffffff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  border-radius: 10px;
  border: 2px solid #ddd;
  background: #ecf0f1;
  font-size: 16px;
  transition: all 0.3s ease;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
    background-color: #ffffff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1.2rem;
  border-radius: 10px;
  border: 2px solid #ddd;
  background: #ecf0f1;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
    background-color: #ffffff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  background-color: #ff7420;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #f38c3e;
  }
`;

export default CreateBlog;
