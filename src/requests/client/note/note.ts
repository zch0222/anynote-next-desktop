import request, {Method} from "@/utils/client-request"
import {NoteInfo} from "@/types/noteTypes";
import {PageBean, ResData} from "@/types/requestTypes";


export function getNoteInfoList(params: {
    knowledgeBaseId: number,
    page: number,
    pageSize: number
}){
    return request<ResData<PageBean<NoteInfo>>>({
        url: `/api/note/notes/bases/${params.knowledgeBaseId}`,
        method: Method.POST,
        data: {page: params.page, pageSize: params.pageSize},
        needToken: true
    })
}
