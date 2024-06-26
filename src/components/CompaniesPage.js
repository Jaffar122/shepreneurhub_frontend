import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComments, faShareAlt, faClipboard, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const CompaniesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const CompanyItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const Address = styled.div`
  margin: 10px 0;
`;

const Details = styled.div`
  margin: 10px 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  align-items: center;

  &:first-child {
    background: #00c853;
    color: white;
  }

  &:nth-child(2) {
    background: #ff9800;
    color: white;
  }

  &:nth-child(3) {
    background: #3f51b5;
    color: white;
  }

  &:nth-child(4) {
    background: #ff4081;
    color: white;
  }

  svg {
    margin-right: 10px;
  }
`;

const CompaniesPage = () => {
  const { subcatid } = useParams();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/companies/${subcatid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    if (subcatid) {
      fetchCompanies();
    }
  }, [subcatid]);

  if (!subcatid || companies.length === 0) {
    return <div>No companies found for this subcategory</div>;
  }

  const copyToClipboard = (phone) => {
    navigator.clipboard.writeText(phone).then(
      () => {
        alert('Phone number copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  const openChat = (gmail) => {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${gmail}`;
  };

  const shareDetails = (name, address) => {
    if (navigator.share) {
      navigator
        .share({
          title: name,
          text: `Check out ${name} at ${address}`,
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Share feature is not supported in your browser.');
    }
  };

  const showProducts = (companyId) => {
    // Example: Fetch products for the companyId and display them
    console.log(`Fetching products for company with ID: ${companyId}`);
    // Implement your logic here to fetch and display products
  };

  return (
    <CompaniesContainer>
      {companies.map((company) => (
        <CompanyItem key={company.id}>
          <Image src={company.image} alt={company.name} />
          <Info>
            <Title>
              {company.name} <span style={{ fontSize: '0.8em', color: 'green' }}>✔ Claimed</span>
            </Title>
            <Address>{company.address}</Address>
            <Details>Available: {company.hours}</Details>
            <Details>
              <FontAwesomeIcon icon={faPhone} /> {company.phone}
            </Details>
            <Details>{company.gmail}</Details>
            <Actions>
              <Button onClick={() => copyToClipboard(company.phone)}>
                <FontAwesomeIcon icon={faClipboard} />
                Copy Number
              </Button>
              <Button onClick={() => openChat(company.gmail)}>
                <FontAwesomeIcon icon={faComments} />
                Chat
              </Button>
              <Button onClick={() => shareDetails(company.name, company.address)}>
                <FontAwesomeIcon icon={faShareAlt} />
                Share
              </Button>
              <Button onClick={() => showProducts(company.id)}>
                <FontAwesomeIcon icon={faBoxOpen} />
                Products
              </Button>
            </Actions>
          </Info>
        </CompanyItem>
      ))}
    </CompaniesContainer>
  );
};

export default CompaniesPage;
