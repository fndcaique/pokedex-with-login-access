# Pokedex with login access

Todos os componentes para deixar a aplicação funcional já estão prontos, mas:

1. As rotas ainda não estão implementadas
2. Não tem nenhuma verificação de acesso para as rotas de detalhes dos pokemons

Então, segue o desafio 😉

1. Criar a rota principal "/" que deve ser vinculada ao componente Pokedex
2. Criar a rota "/about" que deve ser vinculada ao componente About
3. Criar a rota "/pokemon/:id" que será utilizada para renderizar os detalhes de cada pokemon por id e deve ser vinculada ao componente PokemonDetails
4. Criar componente de login e atribui-lo a rota "/login"
   - Para fazer o login será necessário informar um username (Pode ser o do Github 😉)
5. Somente quem tiver feito login pode acessar as rotas de detalhes dos pokemons
   - A pessoa que tentar acessar essas rotas e não tiver feito login, deverá ser redirecionada para a rota "/login"
