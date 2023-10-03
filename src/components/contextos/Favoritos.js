import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";


//Fornecimento do contexto
export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}
        >
            {children}
        </FavoritosContext.Provider>

    )
}


//Essa função adicionarFavorito lida com a lógica de adicionar ou remover favoritos da lista, garantindo que um novoFavorito não seja duplicado na lista de favoritos.
    export function useFavoritoContext(){
        const { favorito, setFavorito } = useContext(FavoritosContext);
        
        function adicionarFavorito(novoFavorito) {  
            //Verificação
            const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)
            
            //Lista antiga de favoritos
            let novaLista = [...favorito];
            
            //Permissão usando a verificação
            //Esta condicional verifica se o novoFavorito não está repetido na lista de favoritos. 
            //Se não estiver repetido (ou seja, favoritoRepetido é false), o código dentro deste bloco é executado.
            if(!favoritoRepetido) {
                //Puxa a lista antiga de favoritos e insere um novo favorito
                novaLista.push(novoFavorito);
                return setFavorito(novaLista);
            }
            
            novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
            return setFavorito(novaLista);
        }
        return {
            favorito,
            adicionarFavorito
        }
    }
