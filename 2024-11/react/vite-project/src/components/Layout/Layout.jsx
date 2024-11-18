import './Layout.css';

function Layout({ children }){
    console.log(children);
    return(
        <div className='layout'>
            <header>This is the layout header</header>
            <hr></hr>
            { children }
            <hr></hr>
            <footer>This is the layout footer</footer>
        </div>
    )
}

export default Layout;