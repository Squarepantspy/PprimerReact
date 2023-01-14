// react esta compuesto por React y ReactDOM para manipular el document object model 
const App = () => {
    return React.createElement("h1",{},"Nuestra primera pagina se renderizo") //retorna un elemento simple, mejor retornar JSX
}
// Para renderizar un elemento primeramente pasamos el elemento DOM para que se cree el elemento de React y luego pasar eso a render

const root = ReactDOM.createRoot(document.getElementById('root'));

// Luego renderizamos el componente 
root.render(React.createElement(App));// se crea el componente App y se renderiza
