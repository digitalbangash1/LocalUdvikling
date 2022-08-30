import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn DevOps/i);
    expect(linkElement).toBeInTheDocument();
    let button = screen.getByRole("button");
    expect(button).toHaveTextContent("login");
});
test('has login button', () => {
    render(<App/>);
});