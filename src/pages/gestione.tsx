import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import DetailsRow from '../components/detailsRow';
import { addAutomezzo, addFiliale, deleteAutomezzoByCodice, deleteFilialeByCodice, getAutomezzi, getFiliali } from '../services/apiServices';

const Gestione: React.FC<any> = () => {
    const [newAutomezzo, setNewAutomezzo] = useState({ codice: '', targa: '', marca: '', modello: '' });
    const [newFiliale, setNewFiliale] = useState({ codice: '', indirizzo: '', città: '', cap: '' });

    const [automezzi, setAutomezzi] = useState([]);
    const [filiali, setFiliali] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const automezziData = await getAutomezzi();
                setAutomezzi(automezziData);
                const filialiData = await getFiliali();
                setFiliali(filialiData);

               
            } catch (err: any) {
                alert(err.message);
            }
        };

        fetchData();
    }, []);

    const navigateToAutomezzo = (code: string) => {
        navigate(`/automezzo/${code}`);
    }

    const navigateToFiliale = (code: string) => {
        navigate(`/filiale/${code}`);
    }

    async function deleteAutomezzoByCode(code: string): Promise<void> {
        await deleteAutomezzoByCodice(code)
        setAutomezzi(automezzi.filter((automezzo: any) => automezzo.codice !== code));
    }

    async function deleteFilialeByCode(code: string): Promise<void> {
        await deleteFilialeByCodice(code)
        setFiliali(filiali.filter((filiale: any) => filiale.codice !== code));
    }

    async function handleAddAutomezzo(): Promise<void> {
        if (newAutomezzo.codice && newAutomezzo.targa && newAutomezzo.marca && newAutomezzo.modello) {
            await addAutomezzo(newAutomezzo)
        } else {
            alert("Compilare tutti i campi")
        }
    }

    async function handleAddFiliale(): Promise<void> {
        if (newFiliale.codice && newFiliale.indirizzo && newFiliale.città && newFiliale.cap) {
            await addFiliale(newFiliale)
        } else {
            alert("Compilare tutti i campi")
        }
    }

    return (<>
        {automezzi.length === 0 ? (<h2>Non ci sono automezzi</h2>) : (
            <div className="column-header">
                <h2>Automezzi</h2>
                <div className="column">
                    {automezzi.map((automezzo: any) => (
                        <DetailsRow key={automezzo.codice} {...automezzo} onDettagliClick={navigateToAutomezzo} onDeleteClick={deleteAutomezzoByCode} />
                    ))}
                </div>
                <form onSubmit={handleAddAutomezzo}>
                    <input type="text" placeholder="Codice" value={newAutomezzo.codice} onChange={(e) => setNewAutomezzo({ ...newAutomezzo, codice: e.target.value })} />
                    <input type="text" placeholder="Targa" value={newAutomezzo.targa} onChange={(e) => setNewAutomezzo({ ...newAutomezzo, targa: e.target.value })} />
                    <input type="text" placeholder="Marca" value={newAutomezzo.marca} onChange={(e) => setNewAutomezzo({ ...newAutomezzo, marca: e.target.value })} />
                    <input type="text" placeholder="Modello" value={newAutomezzo.modello} onChange={(e) => setNewAutomezzo({ ...newAutomezzo, modello: e.target.value })} />
                    <button type="submit">Aggiungi Automezzo</button>
                </form>
            </div>
        )}
        {filiali.length === 0 ? (<h2>Non ci sono filiali</h2>) : (
        <div className="column-header">
            <h2>Filiali</h2>
            <div className="column">
                {filiali.map((filiale: any) => (
                    <DetailsRow key={filiale.codice} {...filiale} onDettagliClick={navigateToFiliale} onDeleteClick={deleteFilialeByCode} />
                ))}
            </div>
            <form onSubmit={handleAddFiliale}>
                <input type="text" placeholder="Codice" value={newFiliale.codice} onChange={(e) => setNewFiliale({ ...newFiliale, codice: e.target.value })} />
                <input type="text" placeholder="Indirizzo" value={newFiliale.indirizzo} onChange={(e) => setNewFiliale({ ...newFiliale, indirizzo: e.target.value })} />
                <input type="text" placeholder="Città" value={newFiliale.città} onChange={(e) => setNewFiliale({ ...newFiliale, città: e.target.value })} />
                <input type="text" placeholder="CAP" value={newFiliale.cap} onChange={(e) => setNewFiliale({ ...newFiliale, cap: e.target.value })} />
                <button type="submit">Aggiungi Filiale</button>
            </form>
        </div>

        )}</>
    ) 
}

export default Gestione;
