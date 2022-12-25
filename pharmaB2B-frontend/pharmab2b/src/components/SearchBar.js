import { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
  const { placeholder, ariaLabel, currentPath } = props;
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/${currentPath}/?q=${query}` : `/${currentPath}`);
  };

  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          id="q"
          name="q"
          type="text"
          aria-label={ariaLabel}
          placeholder={placeholder}
          aria-describedby="button-search"
          onChange={(e) => setQuery(e.target.value)}
        ></FormControl>
        <Button id="button-search" variant="outline-primary" type="submit">
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
