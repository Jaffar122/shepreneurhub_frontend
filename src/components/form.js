import React, { useState } from "react";
import { FullHeightContainer, SignupImage, SignupForm, FormContainer, Input, Button, Label } from "./StyledComponents";
import Image from './listingimg.jpg';

const FreeListingForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      businessName: "",
      contactPerson: "",
      email: "",
      phone: "",
      description: "",
    });
  };

  return (
    <FullHeightContainer>
      <SignupImage src={Image} alt="Promote your business for free" />
      <SignupForm>
        <FormContainer>
          <h2>Connect with New Customers & Grow Your Business</h2>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              required
            />
            <Label htmlFor="contactPerson">Name of the Person</Label>
            <Input
              type="text"
              id="contactPerson"
              name="contactPerson"
              placeholder="Contact Person"
              value={formData.contactPerson}
              onChange={handleInputChange}
              required
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <Label htmlFor="Address">Address</Label>
            <Input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              required
            />
            <Label htmlFor="description">Description</Label>
            <Input
              as="textarea"
              id="description"
              name="description"
              placeholder="Describe your Product and the Company"
              value={formData.description}
              onChange={handleInputChange}
              required
              style={{ height: "100px" }}
            />
            <Button type="submit">Submit</Button>
          </form>
        </FormContainer>
      </SignupForm>
    </FullHeightContainer>
  );
};

export default FreeListingForm;
