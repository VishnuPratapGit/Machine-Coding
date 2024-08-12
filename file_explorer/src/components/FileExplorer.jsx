import { useState } from "react";

const FileExplorer = ({folderData}) => {
    const[open, setOpen] = useState(false);
    
    return (
        <div>
            <div className="type__name">
                {(folderData.type === "folder") ? (
                    <div onClick={() => setOpen(!open)}>
                        {open ? <div>📂 {folderData.name}</div>: <div>📁 {folderData.name}</div>}
                    </div>
                    ) : (
                    <div>📄 {folderData.name}</div>
                ) }
            </div>
            {open && <div className="childrens">
                {folderData.children.map(data => (
                    <FileExplorer key={data.name} folderData={data}/>
                ))}
            </div>}
        </div>
    )
}

export default FileExplorer;