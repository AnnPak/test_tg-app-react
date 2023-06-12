'use client'
import { getAllCategories } from '@/services/getCategories';
import { ParentNodes } from '@/services/interfaces';
import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState<ParentNodes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCategories();
        const {nodes}= response;

        setCategories(nodes);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
        <li key={category.id}>{category.name}</li>
      ))}
      </ul>

    </div>
  );
};

export default Categories;