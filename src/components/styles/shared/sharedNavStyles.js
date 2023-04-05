const SharedStyles = `
  display: flex;
  padding: 0 50px;
  position: sticky;
  left: 0;
  color: var(--dark-pink);
  font-family: var(--main-font);

  a{
    opacity: 0.7;
    color: var(--dark-pink);
    text-decoration: none;
    transition: opacity 0.5s;
  }

  a:hover {
    opacity: 1;
  }

  a::selection {
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.42);
  }
   
 
`;

export default SharedStyles;
