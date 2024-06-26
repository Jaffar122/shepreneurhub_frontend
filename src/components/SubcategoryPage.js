import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  SubCategoryImageContainer, 
  SubCategoryImageItem, 
  SubCategoryImageWrapper,
  SubCategoryImage, 
  SubCategoryName 
} from './StyledComponents';

const SubcategoryPage = () => {
  const { catid } = useParams();

  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/subcategories/${catid}`); 
        if (!response.ok) {
          throw new Error('Failed to fetch subcategories');
        }
        const data = await response.json();
        setSubcategories(data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    if (catid) {
      fetchSubcategories();
    }
  }, [catid]);

  if (!catid || subcategories.length === 0) {
    return <div>Category not found or no subcategories available</div>;
  }

  return (
    <SubCategoryImageContainer>
      {subcategories.map((subcategory) => (
        <SubCategoryImageItem key={subcategory.subcatid}>
          <Link to={`/categories/${catid}/${subcategory.subcatid}`} style={{ textDecoration: 'none', color: '#000' }}>
            <SubCategoryImageWrapper>
              <SubCategoryImage src={subcategory.image_url} alt={subcategory.subcatname} />
            </SubCategoryImageWrapper>
            <SubCategoryName>{subcategory.subcatname}</SubCategoryName>
          </Link>
        </SubCategoryImageItem>
      ))}
    </SubCategoryImageContainer>
  );
};

export default SubcategoryPage;
