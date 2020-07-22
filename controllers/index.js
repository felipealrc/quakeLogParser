module.exports = app =>{

    app.get('/', (req,res) => {
        res.send(`<table >
        <thead >
            <tr >
                <th >Link</th><th >Desciçao</th>
            </tr>
        </thead>
        <tr >
            <td><a href="/games/list">Listar Partidas</a></td>
            <td>Exibe um resumo da partida com o frag de cada player</td>
        </tr>
        <tr >
            <td><a href="/games/kills">Listar Causas de Morte</a></td>
            <td>Exibe de a quantidade de mortes agrupadas por causa</td>
        </tr>
        <tr >
            <td>
                <input type="text" placeholder="id do jogo"  id="id">
                
            </td>
            <td>
                <button  onclick="redirect()">Buscar partida por id</button>
            </td>
        </tr>
    </table><script>
    function redirect(){
        document.location.href = '/games/list/' +document.getElementById('id').value;
    }
    </script>
    `);
    })
}