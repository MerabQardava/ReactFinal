import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {getBooks} from "../ApiFunctions";
import SearchCard from "./SearchCard";
import LoaderSpinner from "../LoaderSpinner";

const validation = yup.object().shape({
    author: string(),
    isbn: string().matches(/^(?:\d{10}|\d{13})?$/, 'ISBN must be either 10 or 13 digits'),
    publisher: string(),
    title: string()
});
function AdvancedSearch(props) {
    const [books, setBooks] = useState(undefined);
    const [touched, setTouched] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            author: '',
            isbn: '',
            publisher: '',
            title: ''
        }
    });

    const onSubmit=(data)=>{
        setTouched(true)
        setBooks(undefined)
        const newObj = {};
        Object.keys(data).forEach(key => {
            if (data[key] !== '') {
                newObj[key] = data[key];
            }
        });
        getBooks("lists/best-sellers/history.json",newObj).then(response=>{
            console.log(response)
            setBooks(response.results)
        })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter The Book Author" {...register("author")}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="Text" placeholder="Title" {...register("title")} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ISBN"
                        {...register("isbn")}
                        isInvalid={!!errors.isbn}
                    />
                    {errors.isbn && <Form.Control.Feedback type="invalid">{errors.isbn.message}</Form.Control.Feedback>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="Text" placeholder="Publisher" {...register("publisher")} />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {books?<Container  fluid>
                <h1 className={"text-center m-4"}>Top Sellers</h1>

                <Row xs={1} md={2} lg={3} className="g-4"> {/* g-4 adds both vertical and horizontal spacing */}
                    {books?.map((item, index) => (
                        <Col key={index} className="d-flex">
                            <SearchCard key={index} item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>:touched&&<LoaderSpinner/>}

            {/*<div className={"booksContainer"}>*/}
            {/*    {books?.map((item,index)=>{*/}
            {/*        return <SearchCard key={index} item={item} />*/}
            {/*    })*/}

            {/*    }*/}

            {/*</div>*/}

        </div>

    );
}

export default AdvancedSearch;