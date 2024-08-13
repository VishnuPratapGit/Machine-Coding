import { FolderPlus, FilePlus2 } from 'lucide-react';
import { useState } from "react";
import "./fileExplorer.css";

const FileExplorer = ({ folderData }) => {
    const [open, setOpen] = useState(false);
    const [folderName, setFolderName] = useState("");
    const [isFolderEdit, setIsFolderEdit] = useState(false);
    const [isFileEdit, setIsFileEdit] = useState(false);
    console.log(folderData);

    function folderEdit() {
        setIsFolderEdit(!isFolderEdit);
        setIsFileEdit(false)
    }
    function fileEdit() {
        setIsFileEdit(!isFileEdit)
        setIsFolderEdit(false);
    }

    function addData(e) {
        e.preventDefault();
        let newData = {
            name: folderName,
            type: isFolderEdit ? "folder" : "file",
            children: []
        }
        folderData.children.push(newData);
        setFolderName("")
        setIsFolderEdit(false);
        setIsFileEdit(false);
    }

    return (
        <div>
            <div className="type__name">
                <div onClick={() => setOpen(!open)}>
                    {folderData.type === "folder" ? (open ? "📂" : "📁") : "📄"}{" "}
                    {folderData.name}
                </div>
                {folderData.type === "folder" && open && (
                    <div className="create__span">
                        <abbr onClick={folderEdit} title="create folder">
                            <FolderPlus size={20} color="grey" strokeWidth={1} />
                        </abbr>
                        <abbr onClick={fileEdit} title="create file">
                            <FilePlus2 size={20} color="grey" strokeWidth={1} />
                        </abbr>
                    </div>
                )}
            </div>

            {open && (
                <div>
                    {(isFolderEdit || isFileEdit) &&
                        <form onSubmit={(e) => addData(e)}>
                            <input
                                type="text"
                                value={folderName}
                                onChange={(e) => setFolderName(e.target.value)}
                            />
                        </form>
                    }
                    <div className="childrens">
                        {folderData.children.sort((a, b) => {
                            if (a.type > b.type) return -1;
                            else if (a.type < b.type) return 1;
                            else return 0;
                        }).map((data) => (
                            <FileExplorer key={data.name} folderData={data} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileExplorer;
