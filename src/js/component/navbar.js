import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark">
			<div className="collapse navbar-collapse">
				<Link to="/characters">
					<h1>Characters</h1>
				</Link>
			</div>
			<div className="collapse navbar-collapse">
				<Link to="/planets">
					<h1>Planets</h1>
				</Link>
			</div>
			<div className="col-3">
				<div className="ml-auto">
					<div className="nav-item dropdown">
						<a
							className="nav-link bg-transparent btn btn-outline-light"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<div className="text-white d-flex justify-content-center">
								<h3>My Favorites</h3>
								<span className="badge badge-secondary">{store.favorites.length}</span>
							</div>
						</a>
						<div className="dropdown-menu drop-menu-right" aria-labelledby="navbarDropdown">
							{store.favorites.map((element, index) => {
								return (
									<div className="d-flex justify-content-between" key={index}>
										<div>
											<div className="dropdown-item text-white">{element}</div>
										</div>
										<div>
											<i
												className="far fa-times-circle"
												onClick={() => actions.deleteFavorite(element)}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
