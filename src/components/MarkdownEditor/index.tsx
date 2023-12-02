'use client'
import Vditor from "@zch0222/vditor";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {Listbox, ListboxItem} from "@nextui-org/react";

import SlashCard from "@/components/MarkdownEditor/SlashCard";
import withThemeConfigProvider from "@/components/hoc/withThemeConfigProvider";


function MarkdownEditor() {

    const {theme, setTheme} = useTheme()

    const [slashCardState, setSlashCardState] = useState<{
        left: number,
        top: number,
        show: boolean
    }>({
        left: 0,
        top: 0,
        show: false
    })

    const [vditor, setVditor] = useState()

    useEffect(() => {
        const vditor: any = new Vditor("vditor", {
            onSlash: ({top, left}) => {
                setSlashCardState({
                    show: true,
                    left: left,
                    top: top + 30
                })
            },
            height: "100%",
            preview: {
                theme: {
                    current: theme || "light",
                    path: "https://note-1253911311.cos.ap-shanghai.myqcloud.com/vditor%403.9.0/dist/css/content-theme",
                },
                parse(element: HTMLElement) {
                    console.log(element)
                }
            },
            cdn: "https://note-1253911311.cos.ap-shanghai.myqcloud.com/vditor%403.9.0",
            after() {
                setVditor(vditor)
            }
        })
    }, [])

    const insertValue = (value: string, render: boolean) => {
        if (vditor) {
            // @ts-ignore
            vditor.insertValue(value, render)
        }
    }

    const getValue = ():string => {
        if (vditor) {
            // @ts-ignore
            return vditor.getValue()
        }
        return ""
    }

    const setValue = (markdown: string, clearStack = false)	 => {
        if (vditor) {
            // @ts-ignore
            vditor.setValue(markdown, clearStack)
        }
    }

    useEffect(() => {
        if (vditor) {
            // @ts-ignore
            vditor.setTheme(theme)
        }
    }, [theme])

    return (
        <div
            className="flex-grow"
            style={{
                height: "100%"
            }}
        >
            <div id="vditor"></div>
            <SlashCard
                show={slashCardState.show}
                left={slashCardState.left}
                top={slashCardState.top}
                insertValue={insertValue}
                getValue={getValue}
                setValue={setValue}
            />
        </div>
    )
}

export default withThemeConfigProvider(MarkdownEditor)
