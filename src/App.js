import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";

import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Artsy</Navbar.Brand>
        </Navbar>
        <div className="bg-light p-5 rounded-lg m-3 painting-background">
          <Container>
            <h1>Find Art You Love</h1>
            <Search query={query} onChange={(e) => setQuery(e.target.value)} />
          </Container>
        </div>
      </header>
      <main>
        <Container fluid>
          <SearchResults query={query} />
        </Container>
      </main>
    </div>
  );
}

export default App;
