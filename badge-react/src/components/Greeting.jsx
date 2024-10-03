export const Greeting = () => {

    const storedName = localStorage.getItem('name');
    return (
        <div className = "mt-6 mb-4 text-center font-bold text-3xl text-blue-700"> 
        Hi {storedName[0].toUpperCase() + storedName.slice(1).toLowerCase()}! Your Achievements so far.</div>
    )
}