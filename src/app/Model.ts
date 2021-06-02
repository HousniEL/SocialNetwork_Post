export interface post {
    pers : profil;
    date : string;
    text : string;
    img ?: string;
    comments : comment[];
}


interface profil {
    nom : string;
    img : string;
}

interface comment {
    nom : string;
    date : string;
    text : string;
    img : string;
}