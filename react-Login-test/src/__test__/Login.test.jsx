import { fireEvent, render, screen, waitFor} from "@testing-library/react"
import Login from "../Login"
import { expect, test } from "vitest"

// test('name of the test', function() => { function of the test });

test('checking component Loaded', () => {
    // step or testing heading element component
    render(<Login/>)
    expect(screen.queryByText('Login')).toBeInTheDocument();
})    

test('checking email & passwords are empty', () => {
    render(<Login/>)
    expect(screen.queryByPlaceholderText(/Email/)).toHaveValue('');
    expect(screen.queryByPlaceholderText('Password')).toHaveValue('');
})

test('should display "Loading..." when the button is clicked', () => {
    render(<Login/>)
    const button = screen.getByText('Login');
    fireEvent.click(button);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
})

test('should display "Successfully LoggedIn!" after 3 seconds if credentials are correct', async () => {
    render(<Login />);
        fireEvent.change(screen.getByPlaceholderText('Email'), { 
            target: { 
                value: 'ramanathan20032@gmail.com' 
            } 
        });
        fireEvent.change(screen.getByPlaceholderText('Password'), { 
            target: { 
                value: 'test@123' 
            }     
        });
        
        const button = screen.getByText('Login');
        fireEvent.click(button);
        
        await waitFor(() => expect(screen.getByText('Successfully LoggedIn!')).toBeInTheDocument(), { timeout: 4000 });
})

test('should display "Successfully LoggedIn!" after 3 seconds if credentials are correct', async () => {
    render(<Login />);
        
        fireEvent.change(screen.getByPlaceholderText('Email'), { 
            target: { 
                value: 'wrongemail@example.com' 
            } 
        });
        fireEvent.change(screen.getByPlaceholderText('Password'), { 
            target: {
                 value: 'wrongpassword' 
            } 
        })

        const button = screen.getByText('Login');
        fireEvent.click(button);
        
        await waitFor(() => expect(screen.getByText('Invalid Credentials!')).toBeInTheDocument(), { timeout: 4000 });
});
