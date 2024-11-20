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
    }
}