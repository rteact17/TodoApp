import {render ,screen ,fireEvent} from '@testing-library/react';
import CompForTest from './CompForTest';



test('CHeck the counter increment',()=>{
    
    render(<CompForTest />);

    jest.spyOn(window,'fetch').mockImplementation(()=>{
        let data  = {name:'abc',age:12};
        return data;
    });
    const btn  = screen.getByTestId('btn1');
    const p  = screen.getByTestId('p1');
    fireEvent.click(btn);
    expect(p).toHaveTextContent(1);
})


test('CHeck the counter increment by 2',()=>{
    render(<CompForTest/>);
    const btn  = screen.getByTestId('btn1');
    const p  = screen.getByTestId('p1');
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(p).toHaveTextContent(2);
})


test('CHeck the counter increment by 3',()=>{
    render(<CompForTest/>);
    const btn  = screen.getByTestId('btn1');
    const p  = screen.getByTestId('p1');
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(p).toHaveTextContent(2);
})