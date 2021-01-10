import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  /* max-height: 180px; */
  overflow: hidden;
  position: relative;
`;

export const Poster = styled.figure`
  position: relative;
  margin: 0;
  width: 140px;
  height: 138px;
  cursor: pointer;
  img,
  a {
    height: 100%;
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;
export const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  padding: 0.6rem;
  font-weight: bold;
  background-color: #000000a8;
  padding: 0.5rem;
  color: #fff;
  width: 100%;
`;
export const Overview = styled.p`
  position: relative;
  margin: 0;
  padding: 0.5rem;
  min-height: 8rem;
  max-height: 8rem;
  overflow: hidden;
  line-height: 1rem;
  &::after {
    content: '';
    text-align: right;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), #fff);
    display: flex;
    position: absolute;
    overflow: hidden;
  }
`;
export const ActionsButtons = styled.div`
  display: flex;
  font-size: 0.75rem;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  font-weight: bold;
  a,
  button {
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: center;
  }

  a {
    text-decoration: none;
    &.action {
      background-color: #2d3748;
    }
    &.delete {
      background-color: #ff0000;
    }
  }

  button {
    background-color: #ff0000;
  }
`;
