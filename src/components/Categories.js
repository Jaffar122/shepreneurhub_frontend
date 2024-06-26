import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoriesContainer, CategoryItem } from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons"; 
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from backend
    axios.get("http://localhost:5000/main")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []); // Empty array as second argument ensures useEffect runs only once

  return (
    <CategoriesContainer>
      {categories.map((category) => {
        const icon = Icons[category.cat_icon]; // Dynamically get the icon from the icon name
        return (
          <Link
            to={`/categories/${category.catid}`}  // Include catid in the URL
            key={category.catid}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <CategoryItem>
              {icon && (
                <FontAwesomeIcon
                  icon={icon}
                  style={{ fontSize: "3em", color: "#4b0082" }}
                />
              )}
              <div>{category.catname}</div>
            </CategoryItem>
          </Link>
        );
      })}
    </CategoriesContainer>
  );
};

export default Categories;


