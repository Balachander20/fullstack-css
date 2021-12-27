
const container =document.getElementById("app")
const Name="amidh"
const jsx=
<ul>
  <div>{Name}</div>
  <li>im heading</li>
  <li>im heading</li> 
  <li>im heading</li>
  <ul>
    <li>sdf</li>
    <li>sdf</li>
  </ul>
</ul>
const c2=React.createElement("ul",{},[
React.createElement("li",{},"Im heading"),
React.createElement("li",{},"Im heading"),
React.createElement("ul",{},[
   React.createElement("li",{},"content"),
   React.createElement("li",{},"content"),
   React.createElement("li",{},"content"),
]),
]
)
ReactDOM.render(c2,container)



