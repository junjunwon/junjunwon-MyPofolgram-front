import moment from "moment";

export default{
    getDate(str) {
        const nowDate = moment().valueOf();
        const date = moment(str).valueOf();

        const miliseconds = nowDate - date;

        const years = Math.floor(miliseconds / 31536000000);
        if (years < 1) {
            const weeks = Math.floor(miliseconds / (1000 * 60 * 60 * 24 * 7));
            if (weeks < 1) {
                const days = Math.floor((miliseconds / (1000 * 60 * 60 * 24)) % 7);
                if (days < 1) {
                    const seconds = Math.floor((miliseconds / 1000) % 60);
                    const minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
                    if (minutes < 1) {
                        return `${seconds}초 전`;
                    }
                    const hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);
                    if (hours < 1) {
                        return `${minutes}분 전`;
                    }
                    return `${hours}시간 전`;
                }
                return `${days}일 전`;
            }
            return `${weeks}주 전`;
        }
        return `${years}년 전`;
    },
}