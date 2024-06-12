import solve from "../actions/user"
export default function(){
    return (
        <div className="bg-slate-300 text-black border-emerald-200">
             <button onClick={
                async()=>
                    {
                        const response=await solve(username,password)
                        console.log(response)
                    }
            }>Submit</button>
        </div>
    )
}