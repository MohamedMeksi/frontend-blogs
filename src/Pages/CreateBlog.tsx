import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Type definitions
enum Category {
  Business = 'Business',
  Health = 'Health',
  Lifestyle = 'Lifestyle',
  Tech = 'Tech'
}

interface Blog {
  id: number;
  title: string;
  description: string;
  category: Category;
  image: string;
}

interface BlogFormData {
  title: string;
  description: string;
  category: string;
  image: string;
}

// Constants
const API_BASE_URL = 'http://localhost:8080/api';

const CreateBlog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    description: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get<Blog[]>(`${API_BASE_URL}/blogs`);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post<Blog>(
        `${API_BASE_URL}/blogs/create`, 
        formData
      );      
      
      setBlogs(prevBlogs => [...prevBlogs, response.data]);

      setFormData({
        title: '',
        description: '',
        category: '',
        image: ''
      });

      console.log('Blog created successfully:', response.data);
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <CenteredContainer>
      <FormCard>
        <CardTitle>Create New Blog Post</CardTitle>
        <CardDivider />
          
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Blog Title</Label>
            <LightInput
              id="title"
              name="title"
              type="text"
              placeholder="Enter a captivating title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Blog Description</Label>
            <LightTextArea
              id="description"
              name="description"
              placeholder="Write your blog content here"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="category">Category</Label>
            <LightSelect
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {Object.values(Category).map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </LightSelect>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="image">Featured Image URL</Label>
            <LightInput
              id="image"
              name="image"
              type="text"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <BlueButton type="submit">
            Create Blog
          </BlueButton>
        </form>
      </FormCard>
    </CenteredContainer>
  );
};

// Styled components
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f9fafb;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 24px;
  box-sizing: border-box;
`;

const CardTitle = styled.h2`
  margin: 0 0 16px 0;
  color: #111827;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const CardDivider = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 16px 0 24px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
  font-size: 14px;
`;

const LightInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  color: #111827;
  box-sizing: border-box;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }

  &::placeholder {
    color: #6b7280;
  }
`;

const LightTextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  color: #111827;
  box-sizing: border-box;
  resize: vertical;
  min-height: 120px;
  transition: all 0.2s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }

  &::placeholder {
    color: #6b7280;
  }
`;

const LightSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  padding-right: 40px;
  color: #111827;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

const BlueButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;
  
  &:hover {
    background-color: #2563eb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

export default CreateBlog;