import userPokemons from "../../utils/userPokemons";

export default function() {
//name, imageUrl, types, stats, abilities, baseExperience, weight, height
    return <form>
        <input name="name"></input>
        <input name="imageUrl"></input>

        <input name="baseExperience"></input>
        <input name="weight"></input>
        <input name="height"></input>

        <input name="type1"></input>
        <input name="type2"></input>

        <input name="hp"></input>
        <input name="attack"></input>
        <input name="defense"></input>
        <input name="special-attack"></input>
        <input name="special-defense"></input>
        <input name="speed"></input>
        
        <input name="ability1"></input>
        <input name="abilitiy2"></input>
    </form>
}