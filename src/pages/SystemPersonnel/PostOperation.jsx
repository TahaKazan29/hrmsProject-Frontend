import { useDispatch } from "react-redux"
import { activatePost, passivatePost, rejectPost } from "../../store/actions/systemPersonnelPostActions";

export default function PostOperations({statu,postId}) {
 
    const dispatch = useDispatch();

    const activatedPost = (postId) => {
        dispatch(activatePost(postId));
    }

    const passivatedPost = (postId) => {
        dispatch(passivatePost(postId));
    }

    const rejectedPost = (postId) => {
        dispatch(rejectPost(postId));
    }

    const checkActive = (statu) => {
        if(statu === "WAITING_APPROVAL"){
            return (
                <>
                    <button
                    className={
                        "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    }
                    onClick={() => activatedPost(postId)}>
                    AKTİFLEŞTİR </button>

                    <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => rejectedPost(postId)}
                    >
                    Reddet
                    </button>
                </>
                )
        }
        else if(statu === "ACTIVE"){
            return (
                <button
            className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => passivatedPost(postId)}
            >
            PASİFLEŞTİR
            </button>
        )
        }
        else if(statu == "PASSIVE"){
            return (
            <>
                <button
                    className={
                        "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    }
                    onClick={() => activatedPost(postId)}>
                    AKTİFLEŞTİR </button>
            </>
            )
        }
    }
    return (
        <>
            {checkActive(statu)}
        </>
    )
}
