import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 565px;
    row-gap: 8px;
`;

const Input = styled.input`
    padding: 30px 46px;
    outline: none;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    font-family: "ApercuArabic", sans-serif;
    font-size: 18px;
    &::placeholder {
        color: #2D2D2D;
    }    
`;

const Textarea = styled.textarea`
    padding: 30px 46px;
    height: 190px;
    resize: none;
    outline: none;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    font-size: 18px;
    font-family: "ApercuArabic", sans-serif;
    &::placeholder {
        color: #2D2D2D;
    }
`;

const SubmitInput = styled.input`
    cursor: pointer;
    flex: 0 1 auto;
    width: 218px;
    height: 73px;
    margin-top: 15px;
    border: none;
    color: #ffffff;
    background: #FAD34F;
    border-radius: 500px;
    font-family: "ApercuArabic", sans-serif;
    font-size: 18px;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: 0px 5px 7px #00000030;
        transform: translateY(-3px);
    }
    &:active {
        transition: none;
        box-shadow: 0px 2px 2px #00000030;
        transform: translateY(0);
    }
`;

const ErrorField = styled.p`
    color: red;
`;

const FeedbackForm = (props) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://pern-feedback-page.herokuapp.com/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            console.log(response);
        } catch (err) {
            alert(err.message);
        } finally {
            reset();
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("name", {
                required: "This field is required!",
            })} type="text" placeholder='Your name*' />
            {
                errors.name && <ErrorField>{errors.name.message}</ErrorField>
            }
            <Input {...register("email", {
                required: "This field is required!",
            })} type="email" placeholder='Your e-mail*' />
            {
                errors.email && <ErrorField>{errors.email.message}</ErrorField>
            }
            <Textarea {...register("message", {
                required: "This field is required!",
            })} cols="30" rows="10" placeholder='Your message*' />
            {
                errors.message && <ErrorField>{errors.message.message}</ErrorField>
            }
            <SubmitInput type="submit" value="Send message" />
        </Form>
    )
}

export default FeedbackForm;