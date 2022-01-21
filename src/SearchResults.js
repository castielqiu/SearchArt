import { Row, Col, Card } from "react-bootstrap";
import { search } from "./api";
import { useEffect, useState } from "react";
export default function SearchResults({ query }) {
  const [results, setResults] = useState(null);
  useEffect(() => {
    if (!(query || query.length)) {
      setResults(null);
      return;
    }
    //if search query less than 3 charaters still uanble to search
    if (query.length < 3) {
      return;
    }

    search(query)
      .then((results) => {
        if (results && results.data) {
          setResults(results.data);
          console.log("what" + results.data);
        }
      })
      .catch((err) => console.log(err));
  }, [query]);

  if (!results) {
    return null;
  }
  if (results.length === 0) {
    <h1>No Results Found</h1>;
  }
  return (
    <Row>
      {results.map((result) => (
        //if screen size is extra small then take 12 units space,medium size take 4 and large take 3
        // take the data.id as key
        <Col xs={12} md={4} lg={3} key={result.id}>
          <Card>
            <Card.Img
              variant="top"
              src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`}
              alt={result.thumbnail?.alt_text}
            />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
