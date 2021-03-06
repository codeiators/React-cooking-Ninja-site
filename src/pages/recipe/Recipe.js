import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { projectFirestore } from '../../firebase/config';
import './Recipe.css'

export default function Recipe() {

    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null)

    const {id} = useParams()

    useEffect(() => {

        setIsPending(true)

        const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {

            if (doc.exists) {
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError("could not find the Recipe.")
            }

        })

        return () => unsub()

    },[id])
   

    const handleClick = () => {
        projectFirestore.collection('recipes').doc(id).update({
            title:'Something completely different'
        })
    }
    return (
        <div className='recipe'>

            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading Data....</p>}
            {recipe && (
                <>

                <h2 className='page-title'>{recipe.title}</h2>

                <p>{recipe.cookingTime} to cook</p>

                <ul>

                 {recipe.ingredients.map( ing => <li key={ing}>{ing}</li>)}   

                </ul>

                <p className="method">{recipe.method}</p>
                <button onClick={handleClick}>Update me</button>
                </>
            )}
        </div>

    )

}