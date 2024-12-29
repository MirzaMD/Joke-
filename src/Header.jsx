export function Header(){
    const box={
        background:"#101010",
        color:"#d9ffe6",
        textShadow:"0.5px 1px 3px whitesmoke",
        fontFamily:"bold"
    }
    return(<section className="flex w-full h-[100px] sm:h-[120px] 
    justify-center items-center text-2xl sm:text-4xl" style={box}>
        <h1>Jokes</h1>
    </section>)
}