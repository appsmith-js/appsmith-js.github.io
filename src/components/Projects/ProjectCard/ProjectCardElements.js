import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08), 0 6px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.06);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 16px 16px 0 0;
    
    @media (min-width: 992px) {
      border-radius: 16px 0 0 16px;
    }
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem 1.5rem;

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a2e;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1.5rem;
    color: #4a4a6a;
    text-align: center;
    line-height: 1.7;
    font-size: 0.95rem;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
    padding: 1.5rem 2rem 2rem 0;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 0.5rem;
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    font-size: 0.85rem;
    font-weight: 500;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
    min-height: 44px;
    
    img, svg {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
    
    &:hover {
      transform: translateY(-2px);
    }
    
    &:active {
      transform: scale(0.97);
    }
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.35);
    
    &:hover {
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.45);
    }
    
    &:active {
      box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
    }
  }
  
  .btn-secondary {
    background: #f0f2f5;
    color: #1a1a2e;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    
    &:hover {
      background: #e4e7ed;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
  }
  
  .btn-apple {
    background: #1a1a2e;
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(26, 26, 46, 0.3);
    
    &:hover {
      background: #2d2d44;
      box-shadow: 0 8px 25px rgba(26, 26, 46, 0.4);
    }
  }
  
  .btn-android {
    background: linear-gradient(135deg, #34a853 0%, #1a8a3f 100%);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(52, 168, 83, 0.35);
    
    &:hover {
      box-shadow: 0 8px 25px rgba(52, 168, 83, 0.45);
    }
  }
  
  .btn-github {
    background: #24292e;
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(36, 41, 46, 0.3);
    
    &:hover {
      background: #2f363d;
      box-shadow: 0 8px 25px rgba(36, 41, 46, 0.4);
    }
  }
  
  // Button variants based on type
  .btn-outline {
    background: transparent;
    color: #667eea;
    border: 2px solid #667eea;
    
    &:hover {
      background: #667eea;
      color: #ffffff;
    }
  }
  
  // Responsive adjustments
  @media (max-width: 480px) {
    gap: 8px;
    
    .btn {
      padding: 8px 14px;
      font-size: 0.75rem;
      min-height: 38px;
      min-width: 120px;
      flex: 1 1 auto;
      
      img, svg {
        width: 14px;
        height: 14px;
      }
    }
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    .btn {
      padding: 10px 18px;
      font-size: 0.8rem;
      min-height: 42px;
      flex: 0 1 auto;
    }
  }
  
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-bottom: 0.5rem;
  
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 8px;
  background: #f0f2f5;
  padding: 4px 12px;
  margin: 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: #4a4a6a;
  cursor: default;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  
  &:hover {
    background: #e4e7ed;
    transform: translateY(-1px);
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 3px 10px;
  }
`;