

function store(key, value) {
    const finalValue = `${value}${SEPARATOR}${Date.now().toString()}`;
    console.log(finalValue)
    localStorage.setItem(key, finalValue);
}