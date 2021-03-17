import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
} from "react-router-dom";
import { useState, useEffect } from "react";

const loadRecipes = async (limit = 0) => {
    const request = await fetch(
        "https://codecoolfrontendapi.herokuapp.com/recipes/"
    );
    if (request.ok) {
        const response = await request.json();

        if (limit === 0) {
            return response;
        } else {
            return response.slice(0, limit);
        }
    }
};

const Navbar = ({ children }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="/">
                Grandma's Recipes
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#recipes-collapsible-nav"
                aria-controls="recipes-collapsible-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="recipes-collapsible-nav"
            >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">{children}</ul>
            </div>
        </div>
    </nav>
);

const Footer = ({ children }) => (
    <footer className="navbar navbar-expand-lg navbar-secondary bg-secondary text-white p-3">
        <div className="container">
            <small>{children}</small>
        </div>
    </footer>
);

const RecipeCard = ({ id, name, author, authorname }) => (
    <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={"/recipe/" + id}>{name}</Link>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    A recipe by{" "}
                    <Link to={"/author/" + author}>{authorname}</Link>
                </h6>
            </div>
        </div>
    </div>
);

const RecipeLister = ({ title, limit }) => {
    const [recipes, setRecipes] = useState([]);
    if (limit === null) {
        limit = 0;
    }

    useEffect(() => {
        const load = async () => {
            const loaded = await loadRecipes(limit);
            setRecipes(loaded);
        };
        load();
    }, [limit]);

    return (
        <>
            <h1>{title}</h1>
            {recipes.length ? (
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {recipes.map(({ id, name, authorname, author }) => (
                        <RecipeCard
                            key={id}
                            id={id}
                            name={name}
                            author={author}
                            authorname={authorname}
                        />
                    ))}
                </div>
            ) : (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">
                            Loading recipe...
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

const Home = () => <RecipeLister title="Grandma's latest recipes" limit="6" />;

const Recipes = () => <RecipeLister title="Grandma's latest recipes" />;
const Author = ({ match }) => {
    const { id } = match.params;

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const load = async () => {
            const request = await fetch(
                "https://codecoolfrontendapi.herokuapp.com/recipes/author/" + id
            );
            if (request.ok) {
                const response = await request.json();

                setRecipes(response);
            }
        };
        load();
    }, [id]);

    return (
        <>
            {recipes.length ? (
                <>
                    <h1>{recipes[0].authorname}'s recipes</h1>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {recipes.map(({ id, name, authorname, author }) => (
                            <RecipeCard
                                key={id}
                                id={id}
                                name={name}
                                author={author}
                                authorname={authorname}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">
                            Loading recipe...
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

const Recipe = ({ match }) => {
    const { id } = match.params;
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const loadRecipe = async () => {
            const request = await fetch(
                "https://codecoolfrontendapi.herokuapp.com/recipes/" + id
            );
            if (request.ok) {
                const response = await request.json();
                setRecipe(response[0]);
            }
        };
        loadRecipe();
    }, [id]);
    return (
        <>
            {recipe ? (
                <>
                    <h1>{recipe.recipe}</h1>
                    <p className="lead">
                        A recipe by{" "}
                        <Link to={"/author/" + recipe.author}>
                            {recipe.authorname}
                        </Link>
                    </p>
                    <hr />
                    <h3>Ingredients</h3>
                    <div className="row">
                        {recipe.photos.map((p, i) => (
                            <img
                                key={i}
                                src={p}
                                alt={"Image of " + recipe.ingredients[i]}
                                className="col p-0 d-block"
                            />
                        ))}
                    </div>
                    <ul className="list-group m-5">
                        {recipe.units.map((_, i) => (
                            <li key={i} className="list-group-item">
                                <strong>
                                    {recipe.quantities[i]} {recipe.units[i]}
                                </strong>{" "}
                                {recipe.ingredients[i]}
                            </li>
                        ))}
                    </ul>
                    <h4>Instructions</h4>
                    <p>{recipe.description}</p>
                </>
            ) : (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">
                            Loading recipe...
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

const App = () => (
    <Router>
        <Navbar>
            <NavLink className="nav-link" activeClassName="active" exact to="/">
                Home
            </NavLink>
            <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/recipes"
            >
                All recipes
            </NavLink>
        </Navbar>

        <div className="container flex-grow-1 py-3">
            <Switch>
                <Route path="/author/:id" component={Author} />
                <Route path="/recipe/:id" component={Recipe} />
                <Route path="/recipes" component={Recipes} />
                <Route path="/" component={Home} />
            </Switch>
        </div>

        <Footer>Grandma's Recipes</Footer>
    </Router>
);

export default App;
