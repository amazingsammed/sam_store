'use client'

function Error(props) {

    return (
        <div className="mx-auto items-center h-full my-auto">
            {props.error.message}
        </div>
    );
}

export default Error;
