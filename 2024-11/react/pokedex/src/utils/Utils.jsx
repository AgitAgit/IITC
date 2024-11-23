export default {
    capitalizeWord: function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    isPokemon: function(obj){
        let result = false;
        if(obj.data.name){
            return true;
        }
        return result;
    },

    getPokemonTypes: function(pokemon){
        {
            return pokemon?.types.map((type, index) => {
                return <span key={index} className='typeDiv'>{this.capitalizeWord(type.type.name)}</span>
            });
        }
    }
}