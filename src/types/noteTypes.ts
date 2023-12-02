
export interface NoteKnowledgeBaseDTO {
    id: number;
    knowledgeBaseName: string;
    cover: string;
    type: number;
    status: number;
    organizationId?: number;
    organizationName?: string;
    permissions: number;
    detail: string;
}


export interface AdminNoteTask {
    createBy: number;
    createTime: string;
    updateBy: number;
    updateTime: string;
    id: number;
    taskName: string;
    startTime: string;
    endTime: string;
    knowledgeBaseId: number;
    status: number;
    submittedCount: number;
    needSubmitCount: number;
    submissionProgress: number;
}

export interface NoteTaskSubmissionInfo {
    createBy: number;
    createTime: string;
    updateBy: number;
    updateTime: string;
    noteTaskId: number;
    userId: number;
    noteId: number;
    submitTime: string;
    deleted: number;
    submissionUsername: string;
    submissionNickname: string;
    noteTitle: string;
}


export interface NoteInfo {
    createBy: number;
    createTime: string;
    updateBy: number;
    updateTime: string;
    id: number;
    title: string;
    noteTextId: number;
    knowledgeBaseId: number;
    status: number;
    dataScope: number;
    deleted: number;
    notePermissions: number;
    submitTaskName: string | null;
}


export interface KnowledgeBaseDTO {
    createBy: number;
    createTime: string;
    updateBy: number;
    updateTime: string;
    remark: string;
    id: number;
    knowledgeBaseName: string;
    cover: string;
    type: number;
    status: number;
    permissions: any;
    detail: any;
}




