import withThemeConfigProvider from "@/components/hoc/withThemeConfigProvider";
import {Listbox, ListboxItem} from "@nextui-org/react";


function SlashCard({ left, top, show, insertValue, setValue, getValue }: {
    left: number,
    top: number,
    show: boolean,
    insertValue: (value: string, render: boolean) => void,
    getValue: () => string,
    setValue: (markdown: string, clearStack: boolean) => void
}) {

    console.log(insertValue)

    console.log(show)

    if (!show) {
        return <></>
    }

    return (
        <Listbox
            style={{
                left: left,
                top: top,
                position: "absolute",
                backgroundColor: "white",
                width: 150
            }}
            aria-label="Actions"
            onAction={(key) => alert(key)}
        >
            <ListboxItem key="H1" onClick={() => {
                const value = getValue()
                if (value && value !== "") {
                    setValue(value.substring(0, value.length-1), false)
                }
            }}>一级标题</ListboxItem>
            <ListboxItem key="copy">Copy link</ListboxItem>
            <ListboxItem key="edit">Edit file</ListboxItem>
            <ListboxItem key="delete" className="text-danger" color="danger">
                Delete file
            </ListboxItem>
        </Listbox>
    )
}

export default withThemeConfigProvider(SlashCard)
