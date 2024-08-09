import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    // Actualiza el estado para que la próxima renderización muestre la interfaz de reserva.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores.
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de reserva.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
