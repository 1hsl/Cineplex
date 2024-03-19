import { useNavigate, Link } from "react-router-dom";

import maglass from '../media/maglass.svg'

const Navbar = ({ searchText, setSearchText }) => {

    const navigate = useNavigate()

    const updateSearchText = e => {
        navigate("/search");
        setSearchText(e.target.value)
    }

    const searchSubmit = e => {
        e.preventDefault()
        document.querySelector('.searchForm').value = ''
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white fw-bold" to="/">
                        <b>Cineplex</b>
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navB" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white font-monospace" to="/about">
                                    about
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                            className="form-control me-2 searchForm"
                            type="search"
                            aria-label="Search"
                            value={searchText}
							onChange={updateSearchText}
                            />
                            <button className="btn btn-outline-secondary searchBtn fw-bold" type="submit" onClick={searchSubmit}>
                                <img className="maglass" src={maglass} alt="search" width={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
