import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface Blog {
  id: number;
  title: string;
  description: string;
  category: Category;
  image: string;
}

enum Category {
  Business = 'Business',
  Health = 'Health',
  Lifestyle = 'Lifestyle',
  Tech = 'Tech'
}

const CreateBlog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<Blog[]>('http://localhost:8080/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/blogs/create', formData);
      console.log('Blog created successfully:', response.data);
      setBlogs([...blogs, response.data]); 
      setFormData({ title: '', description: '', category: '', image: '' }); 
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <StyledWrapper>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Blog Title</label>
          <input
            name="title"
            type="text"
            placeholder="Enter Blog Title"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Blog Description</label>
          <textarea
            name="description"
            placeholder="Enter Blog Description"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value={Category.Tech}>Tech</option>
            <option value={Category.Lifestyle}>Lifestyle</option>
            <option value={Category.Health}>Health</option>
            <option value={Category.Business}>Business</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Featured Image URL</label>
          <input
            name="image"
            type="text"
            placeholder="Enter Featured Image URL"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Create Blog
        </button>
      </form>
    
    </div>
     </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .form button {
    align-self: flex-end;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
  }

  .inputForm select,
  .inputForm textarea,
  .inputForm input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 10px;
  }

  .inputForm textarea {
    resize: none;
  }

  .button-submit {
    background-color: #4CAF50;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .button-submit:hover {
    background-color: #45a049;
  }
`;

export default CreateBlog;
