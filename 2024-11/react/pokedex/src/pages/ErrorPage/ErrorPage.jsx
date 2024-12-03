import { useNavigate } from 'react-router-dom';


export default function ErrorPage(){
    const navigate = useNavigate();
    return <>
        <h1>
        404 Page Not Found
        </h1>
        <button onClick={() => navigate('/')}>Back to Home...</button>
    </>
}