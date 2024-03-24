import styled from "styled-components";
import { mixins } from '../../Styles/mixins';

export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 2rem 10rem 2rem 10rem;
    max-width: 90rem;

    gap: 3.5rem;
`;

export const BannerTitle = styled.h1`
    ${mixins.fonts.titleXL}
    padding-bottom: 1rem;
`;

export const BannerText = styled.div`
    padding-bottom: 2rem;
`;

export const BannerDescription = styled.div`
    ${mixins.fonts.textL}
`;

export const BannerGrid = styled.div`
    ${mixins.fonts.textM}
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
    
    > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`;