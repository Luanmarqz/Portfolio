import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 bg-dark text-white mt-auto">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {currentYear} <strong>Luhan Marques</strong> | Todos os
          direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
