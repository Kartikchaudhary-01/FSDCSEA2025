// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// const heading = React.createElement("h1", { id: "title" }, "Hello World from React");
// root.render(heading);


// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// const heading = <h1 id="title">Hello World from React</h1>;

// const container = React.createElement("div", { style : {id: "container" , justifyContent: "center" , width: "35%", border:"2px solid black" , borderRadius:"10px"}},
//   [
//     React.createElement("h1", { key: "h1" }, "Hello from React"),
//     React.createElement("img", { key: "img", src: "OIP.jpeg", alt: "mobile-img" }),
//     React.createElement("p", { key: "model"}, "dajfkusb" ),
//     React.createElement("p", { key: "price"}, "5,00,000 INR" ),
//     React.createElement("p", { key: "description"}, "Best phone to buy, like a BEAST." ),
//     React.createElement("button", { key: "btn" }, "Add to Cart")
//   ]
// );
// const div = React.createElement("div", {},heading,container)
// root.render(div)

import Card from "./ICard";
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
const App = () => {
    const students = [
        {
        name: "Harsh Arya",
        age: 20,
        branch: "Computer Science",
        college: "ABES Engineering College",
        location: "Ghaziabad"
        },
        {
        name: "Jane Smith",
        age: 22,
        branch: "Information Technology",
        college: "ABES Engineering College",
        location: "Ghaziabad"
        },
        {
        name: "Alice Johnson",
        age: 21,
        branch: "Electronics Engineering",
        college: "ABES Engineering College",
        location: "Ghaziabad"
        }
    ];
    return (
        <div>
            <h2>ABES Engineering College</h2>
            {students.map((ele, index) => (
                <Card key={index} data={[ele]} />
            ))}
        </div>
    );
}
    
root.render(<App />);