function solution(id_pw, db) {
    return db.filter(v => v[0] === id_pw[0] && v[1] === id_pw[1]).length === 1 ? "login" : db.filter(v => v[0] === id_pw[0] && v[1] !== id_pw[1]).length === 1 ? "wrong pw" : "fail"
}