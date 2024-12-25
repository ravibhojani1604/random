const styleSheet={
    color:'red',
    borderRadius:'5px',
    padding:'10px',
    border:'none',
    width:'200px',
    fontSize:'22px',
    cursor:'pointer'
}

export default function Button ({children,clickParam}){
    return <button onClick={clickParam} style={styleSheet}>{children}</button>
}