import sum from "../sum"

test("Testing sum.js file for sum() function",()=>{
    const result = sum(5,6);

    //assertion
    expect(result).toBe(11);
});