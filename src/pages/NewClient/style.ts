import styled from 'styled-components';

export const FormContainer = styled.div`
    height: 100vh;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;    
    
    input {
        border-radius: 2px ;   
        
        &:first-child {
            margin-bottom: 10px;
        }
        
    }    
    
`;

export const LoginLinks = styled.div`
    

    a {
        text-decoration: none;
        font-size: 14px;        
        
        &:first-child {
            margin-right: 15px;
        }        
    }   
    
`;