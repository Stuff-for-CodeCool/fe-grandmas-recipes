import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
} from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const API_URL = "https://codecoolfrontendapi.herokuapp.com/recipes";

const Recipe = () => {
    const { recipeId } = useParams();

    const [, setAuthorId] = useState(null);
    const [author, setAuthor] = useState(null);
    const [name, setName] = useState(null);
    const [photos, setPhotos] = useState(null);
    const [quantities, setQuantities] = useState(null);
    const [units, setUnits] = useState(null);
    const [ingredients, setIngredients] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        const loadRecipe = async () => {
            const request = await fetch(API_URL + recipeId);

            if (request.ok) {
                let response = await request.json();
                response = response[0];

                setAuthorId(response.author);
                setAuthor(response.authorname);
                setName(response.recipe);
                setPhotos(response.photos);
                setQuantities(response.quantities);
                setUnits(response.units);
                setIngredients(response.ingredients);
                setDescription(response.description);
            }
        };
        loadRecipe();
    }, [recipeId]);

    return (
        <>
            <h1>{name}</h1>
            <p className="lead">
                A recipe by <Link to="/">{author}</Link>
            </p>
            <h5>Ingredients</h5>
            <div className="row my-4">
                {photos
                    ? photos.map((p, i) => (
                          <div className="col" key={i}>
                              <img src={p} alt="" className="img-thumbnail" />
                          </div>
                      ))
                    : null}
            </div>
            <ul className="list-group mb-4">
                {quantities && units && ingredients
                    ? quantities.map((_, i) => (
                          <li className="list-group-item" key={i}>
                              <strong>
                                  {quantities[i]} {units[i]}
                              </strong>{" "}
                              {ingredients[i]}
                          </li>
                      ))
                    : null}
            </ul>
            <h5>Directions</h5>
            <p>{description}</p>
        </>
    );
};

const RecipeCard = ({ author, authorname, id, name }) => (
    <div className="col p-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={"/recipe/" + id}>{name}</Link>
                </h5>
                <div className="card-text">
                    A recipe by{" "}
                    <Link to={"/author/" + author}>{authorname}</Link>
                </div>
            </div>
        </div>
    </div>
);

const Lister = ({ name, recipes }) => {
    return (
        <>
            <h1>{name}'s latest recipes</h1>
            <div className="row row-cols-1 row-cols-md-3">
                {recipes ? (
                    recipes.map((r, i) => (
                        <RecipeCard
                            key={i}
                            author={r.author}
                            authorname={r.authorname}
                            id={r.id}
                            name={r.name}
                        />
                    ))
                ) : (
                    <div className="spinner-border text-info">
                        <span className="visually-hidden">
                            Loading recipes...
                        </span>
                    </div>
                )}
            </div>
        </>
    );
};

const AuthorLister = ({ recipes }) => {
    const { authorId } = useParams();

    const retete = recipes.filter((r) => r.author === parseInt(authorId, 10));
    const name = retete && retete[0] ? retete[0].authorname : "Grandma";

    return <Lister name={name} recipes={retete} />;
};

const App = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const loadRecipes = async () => {
            const request = await fetch(API_URL);
            if (request.ok) {
                const response = await request.json();
                setAllRecipes(response);
                setFilteredRecipes(response);
            }
        };
        loadRecipes();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.value.toLowerCase();

        if (text === "") {
            setSearch("");
            setFilteredRecipes(allRecipes);
        } else {
            setFilteredRecipes(
                allRecipes.filter((r) => r.name.toLowerCase().includes(text))
            );
            setSearch(text);
        }
    };

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Grandma's Recipes
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div id="navigation" className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    to="/recipes/"
                                >
                                    All recipes
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                type="search"
                                placeholder="Search"
                                className="form-control"
                                name="search"
                                value={search}
                                onChange={handleSearch}
                            />
                        </form>
                    </div>
                </div>
            </nav>

            <div className="container my-4">
                <Switch>
                    <Route path="/recipe/:recipeId/">
                        <Recipe />
                    </Route>
                    <Route path="/author/:authorId/">
                        <AuthorLister recipes={filteredRecipes} />
                    </Route>
                    <Route path="/recipes/">
                        <Lister name="Grandma" recipes={filteredRecipes} />
                    </Route>
                    <Route exact path="/">
                        {allRecipes ? (
                            <Lister
                                name="Grandma"
                                recipes={
                                    search
                                        ? filteredRecipes
                                        : allRecipes.slice(0, 6)
                                }
                            />
                        ) : null}
                    </Route>
                </Switch>
            </div>

            <footer className="mt-auto bg-secondary text-light">
                <div className="container fs-6 p-3">
                    Grandma's Recipes &copy; 2021 CodeCool
                </div>
            </footer>
        </Router>
    );
};

export default App;
