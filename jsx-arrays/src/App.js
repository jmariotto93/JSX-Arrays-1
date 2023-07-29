import React from "react";
  const App = () => {
  const livros = [
    {nome:'Game of Thrones ', ano: 2016},
    {nome:'A Clash of Kings ', ano: 1995},
    {nome:'A Storm of Swords ', ano: 2000},
  ];
 
  return (
    <ul>
      {livros
      .filter(({ano}) => ano >= 1998)
      .map(({nome, ano}) => (
        <li key={nome}>
        {nome}, {ano}
        </li>
      ))}
    </ul>
 
 
  )
 
 };
 
  export default App;
 
  {/* const filmes = ['Senhor dos Anéis ,', 'Piratas do Caribe, ', 'Interestelar']
  return (
    <div className="App">
     <ul> {filmes.map((filme) => (
      <li key={filme}>{filme}</li>
     ))} 
     </ul>
    </div>
  );
}
*/}


