
export default function Section(props) {
    return ( 
        <div className="block h-full w-full overflow-visible relative m-64">
            {props.mainComponent}
        </div>
    )
}