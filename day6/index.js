// const div = document.getElementById("root")
// const h1 = document.createElement("h1");
// h1.innertext = "Welcome to FSD class!!";
// div.append(h1);

const root = ReactDOM.createRoot(document.getElementById("root"));
const h1 = React.createElement("h1",{},
    React.createElement("div",{},
        React.createElement("span",{},"1")
    )
);
root.render(div);


