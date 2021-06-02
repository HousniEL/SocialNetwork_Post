import {post} from 'src/app/Model'
export const posts : post[] = [
    {
        pers : {
            nom : "Mike Ross",
            img : "http://emilcarlsson.se/assets/mikeross.png"
        } ,
        date : "janvier,2 2018 18:55",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, corrupti illum!",
        img : "http://emilcarlsson.se/assets/louislitt.png",
        comments : [
            {
                nom: "Louis Litt",
                date: "il y a 2 ans",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam labore ut dolorem culpa. Deleniti, vero?",
                img: "http://emilcarlsson.se/assets/louislitt.png"
            },
            {
                nom: "Harvey Specter",
                date: "il y a 3 ans",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam labore ut dolorem culpa. Deleniti, vero?",
                img: "http://emilcarlsson.se/assets/harveyspecter.png"
            }
        ]
    },
    {
        pers : {
            nom : "Harvey Specter",
            img : "http://emilcarlsson.se/assets/harveyspecter.png"
        } ,
        date : "janvier,3 2018 18:55",
        text : "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzlit. Ex, corrupti illum!",
        img : "http://emilcarlsson.se/assets/donnapaulsen.png",
        comments : [
            {
                nom: "Mike Ross",
                date: "il y a 1 ans",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam labore ut dolorem culpa. Deleniti, vero?",
                img: "http://emilcarlsson.se/assets/mikeross.png"
            }
        ]
    }

]