const enlarge = document.getElementById('enlarge');
const root = document.getElementById('root');

const handleEnlargeClick = () => {
    root.style.width = "700px";
    root.style.height = "500px";
}

const handleReduceClick = () => {
    root.style.width = "500px";
    root.style.height = "350px";
}

const handleNormalClick = () => {
    root.style.width = "600px";
    root.style.height = "400px";
}