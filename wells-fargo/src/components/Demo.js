
{/* 
In functional component we do not have this keyword to fetch the value of prop. 
So here we have pass props as an argument to our functional component. 
And then we can use props. Title to get the value.
*/}

const Demo = (props) => {
    return(
        <div>
            <h1>Hello from functional Component</h1>
            <h2>{props.Title}</h2>
        </div>
    );
}

export default Demo;