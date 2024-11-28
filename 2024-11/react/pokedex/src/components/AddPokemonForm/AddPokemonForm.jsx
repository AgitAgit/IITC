import userPokemons from "../../utils/userPokemons";

export default function() {
//name, imageUrl, types, stats, abilities, baseExperience, weight, height
    async function handleFormSubmission(event, form){
        event.preventDefault();
        const formData = new FormData(form);
        // Convert FormData to an object using Object.fromEntries()
        const formDataObject = Object.fromEntries(formData.entries());
        console.log(form);
        console.log(formData);
        console.log(formData.entries());
        console.log(formDataObject);
    }
    
    return <form onSubmit={(event) => handleFormSubmission(event, event.target)}>
        <div>
            <label htmlFor="">{'name'}</label>
            <input name="name"></input>
        </div>
        <div>
            <label htmlFor="">{'image URL'}</label>
            <input name="imageUrl"></input>
        </div>

        <div>
            <label htmlFor="">{'base experience'}</label>
            <input name="baseExperience"></input>
        </div>
        <div>
            <label htmlFor="">{'weight'}</label>
            <input name="weight"></input>
        </div>
        <div>
            <label htmlFor="">{'height'}</label>
            <input name="height"></input>
        </div>

        <div>
            <label htmlFor="">{'type 1'}</label>
            <input name="type1"></input>
        </div>
        <div>
            <label htmlFor="">{'type 2'}</label>
            <input name="type2"></input>
        </div>

        <div>
            <label htmlFor="">{'hp'}</label>
            <input name="hp"></input>
        </div>
        <div>
            <label htmlFor="">{'attack'}</label>
            <input name="attack"></input>
        </div>
        <div>
            <label htmlFor="">{'defense'}</label>
            <input name="defense"></input>
        </div>
        <div>
            <label htmlFor="">{'special attack'}</label>
            <input name="special-attack"></input>
        </div>
        <div>
            <label htmlFor="">{'special defense'}</label>
            <input name="special-defense"></input>
        </div>
        <div>
            <label htmlFor="">{'speed'}</label>
            <input name="speed"></input>
        </div>

        <div>
            <label htmlFor="">{'ability 1'}</label>
            <input name="ability1"></input>
        </div>
        <div>
            <label htmlFor="">{'ability 2'}</label>
            <input name="abilitiy2"></input>
        </div>

        <button>create pokemon</button>
    </form>
}