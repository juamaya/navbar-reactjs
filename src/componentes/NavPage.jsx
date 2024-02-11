
import './estilos.css'

function NavPage(props) {
    return (
      <header className=" container">
        <button
          className="btn1 "
          onClick={() => {
            if (props.page === 1) return null;
            props.setPage(props.page - 1);
          }}
        >
          &larr; Anterior
        </button>
        <p>Page: {props.page}</p>
        <button
          className="btn1 "
          onClick={() => {
            props.setPage(props.page + 1);
          }}
        >
          Siguiente &rarr;
          {/* Page {props.page + 1} */}
        </button>
      </header>
    );
  }
  
  export default NavPage;