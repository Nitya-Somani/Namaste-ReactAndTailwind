import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

//Describe is used to group all the testcases 
describe("contactus page test case ",()=>{
    //test functions can be written as it "it " is just a alias of test function
    it("should check if a componenet is rendered on the browser or not ",()=>{
        //render the component 
        render(<Contact/>)
    
        //querying something 
        const input  =  screen.getByRole("heading");
    
        //asetertion 
        expect(input).toBeInTheDocument();
    
    
    });
    
    
    test("should check if the component input is rendered or not", () => {
        // Render the component 
        render(<Contact />);
        
        // Query all elements with the role "textbox"
        const inputs = screen.getAllByRole("textbox");
        
        // Check each input element individually
        inputs.forEach((input) => {
          expect(input).toBeInTheDocument();
        });
      });


      //it and test are both are same
})

