
const statusList={
    '0': {'title':'Inactive',"color":'bg-red-600'},
    '1': {'title':'Active',"color":'bg-blue-600'},
    '2': {'title':'Pending',"color":'bg-blue-600'},
    '3': {'title':'In progress',"color":'bg-blue-600'},
    '4': {'title':'Paused',"color":'bg-blue-600'},
    '5': {'title':'Complete',"color":'bg-blue-600'},

}
function StatusBtn({num}) {

    return (
        <div className={`px-2 py-1 rounded-full flex w-[60px] text-white ${statusList[num].color} items-center`}>
            {statusList[num].title}
        </div>
    );
}

export default StatusBtn;