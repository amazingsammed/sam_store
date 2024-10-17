

function StatusBtn({num}) {

    return (
        <div className={`px-2 py-1 rounded-full flex w-[60px] text-white ${num===1?"bg-blue-700":"bg-red-700"} items-center`}>
            {num ===1?"Active":"Inactive"}
        </div>
    );
}

export default StatusBtn;