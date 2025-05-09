import React, { useState, useEffect } from 'react';
import { useLocation, useParams} from 'react-router-dom';
import { getAutomezzoByCodice, getFilialeByCodice } from '../services/apiServices';

const AutomezzoFilialeDetails = () => {
  const { codice } = useParams();
  const location = useLocation();
  const [data, setData] = useState<any>(null);

  const baseUrl = location.pathname.split('/').slice(0, -1).join('/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = baseUrl === "/automezzo" ? await getAutomezzoByCodice(codice) : await getFilialeByCodice(codice);
        setData(data);
      } catch (err: any) {
        alert(err.message);
      }
    };

    fetchData();
  }, [codice, baseUrl]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return ( baseUrl === "/automezzo" ? (
    <div>
      <h2>Dettagli Automezzo</h2>
      <p>Codice: {data.codice}</p>
      <p>Targa: {data.targa}</p>
      <p>Marca: {data.marca}</p>
      <p>Modello: {data.modello}</p>
    </div>
  ) : (
    <div>
      <h2>Dettagli Filiale</h2>
      <p>Codice: {data.codice}</p>
      <p>Indirizzo: {data.indirizzo}</p>
      <p>Città: {data.città}</p>
      <p>CAP: {data.cap}</p>
    </div>
  )
  );
};

export default AutomezzoFilialeDetails;