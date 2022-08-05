import React,{ Suspense } from "react";

const LazyCHild = React.lazy(()=> import("./lazyChild"));

const  LazyComCOntainer = (props) =>{
    
    if(props.count>5)
        return <Suspense fallback={<p>Loading</p>}><LazyCHild></LazyCHild></Suspense>
    else
    return <ChildComp1></ChildComp1>

}

export default LazyComCOntainer;



const  ChildComp1 = () =>{
    return <>Child Comp 1</>
}