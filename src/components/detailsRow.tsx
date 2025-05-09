import React from 'react';
import '../App.css';

interface DetailsRowProps {
  codice: string;
  targa?: string;
  marca?: string;
  modello?: string;
  indirizzo?: string;
  città?: string;
  cap?: string;
  onDettagliClick: (code: string) => void;
  onDeleteClick: (code: string) => void;
}

const DetailsRow: React.FC<DetailsRowProps> = (props: DetailsRowProps) => {
  const handleDettagliButtonClick = () => {
    if (props.onDettagliClick) {
      props.onDettagliClick(props.codice);
    }
  };

  const handleDeleteButtonClick = () => {
    if (props.onDeleteClick) {
      props.onDeleteClick(props.codice);
    }
  };

  return (
    <div className="details-row">
      <h2>Codice: {props.codice}</h2>
      <div>
        <button onClick={handleDettagliButtonClick}>Dettagli</button>
        <button onClick={handleDeleteButtonClick}>Delete</button>
      </div>
    </div>
  );
}

export default DetailsRow;