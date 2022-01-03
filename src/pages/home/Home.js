import './Home.css'

import {useFetch} from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

export default function Home() {

    const url = ' http://localhost:3000/recipes'
    const {data: recipes, isPending, error} = useFetch(url)
    return (
        <div className="home">

            {isPending && <p className="loading">Loading data...</p>}
            {error && <p className="error">{error}</p>}
            { recipes && <RecipeList recipes={recipes}/> }
        </div>

    )

}