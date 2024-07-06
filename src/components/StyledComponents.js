import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 100vh; /* Ensure the container takes the full height of the viewport */
  background-color: #f7f7f7; /* Add a background color if needed */
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 0.2rem;
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;
export const SignupImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const SignupForm = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FullHeightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
`;


export const LoginContainer = styled(SignupContainer)``;
export const LoginImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover; // Ensures the image covers the container without stretching
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const LoginForm = styled(SignupForm)``;


export const FormContainer = styled.div`
  width: 80%;
  max-width: 400px;
  padding: 10rem;
  text-align: center;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 2rem;
  background: linear-gradient(to right, #4b0082, #9370db);
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;
export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;


export const Nav = styled.nav`
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 20px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`;


export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }

  & > div {
    margin-top: 10px;
    text-align: center;
  }
`;
export const LogoImg = styled.img`
  width: 200px;
  height: auto; 
  margin-right: 0.5rem;
`;
export const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: white;
  margin-left: 1.8rem;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  cursor:pointer

`;

export const FreeListingContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
  margin-left: 1rem;
`;

export const BusinessLabel = styled.div`
  background-color: red;
  color: white;
  padding: 2px 4px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 0.5rem; /* Add margin bottom for separation */
`;

export const FreeListingText = styled.div`
  color: white;
  font-size: 1.1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: linear-gradient(to right, #4b0082, #9370db);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: linear-gradient(to right, #fc6767, #f538a0);
  }
`;

export const FooterDesign = styled.div`
  height: 40vh;
  margin-top: 50px;
  padding: 0 0px 0 130px;
  background: linear-gradient(to right, #4b0082, #9370db);
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  font-size: 1.5em;
  margin-left:25px;
  color: white;
`;

export const LogoutButton = styled.p`
  color: white;
  padding: 5px 15px 8px 15px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #fc6767, #f538a0);
  }
`;

export const LocationDropdown = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const LocationInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex-grow: 1;
`;

export const SearchButton = styled.button`
  padding: 5px 10px;
  background: linear-gradient(to right, #4b0082, #9370db);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background: linear-gradient(to right, #fc6767, #f538a0);
  }
`;
export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px;
  width: 100%;
  max-width: 800px; /* Adjust this to reduce container size */
  margin: 0 auto;
  scroll-snap-type: x mandatory;
  background-color: #f7f7f7;
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Card = styled.div`
  flex: 0 0 auto;
  width: 200px; /* Adjust width to fit the container size */
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  scroll-snap-align: start;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
`;


export const CardContent = styled.div`
  text-align: center;
`;


export const SubCategoryImageContainer = styled.div`
  margin-top:40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

export const SubCategoryImageItem = styled.div`
  width: 500px; 
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  background-color: #f9f9f9;
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SubCategoryImageWrapper = styled.div`
  width: 100%;
  height: 400px; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

export const SubCategoryImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const SubCategoryName = styled.div`
  margin-top: 10px;
  padding: 10px;
  font-size: 1.2em;
  color: #333;
  background-color: #f7f7f7;
  text-align: center;
`;


export const SubCategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;




export const SubCategoryText = styled.div`
  padding: 10px;
  background-color: #f7f7f7;
  text-align: center;
  font-size: 1em;
  color: #333;
`;

