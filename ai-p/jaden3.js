function jaden3_getDirection(gridSize,snake,apples,direction){
    row = snake[0]%gridSize
    col = int(snake[0] / gridSize)
    if(row[2]>snake[0]  >row[13] ){
        if( snake[0] == col[2] || col[4] || col[6] || col[8] || col[10] || col[12] || col[14]){
            return d
    }}
    if (snake[0] == row[14]){
        if( snake[0] == col[2] || col[4] || col[6] || col[8] || col[10] || col[12] || col[14]){
            return d
    }}
    if(row [2]>snake[0] >row[13] ){
        if( snake[0] == col[1] || col[3] || col[5] || col[7] || col[9] || col[11] || col[13]|| col[15]){
            return u
    }}
    if (snake[0] == row[14]){
        if( snake[0] == col[1]){
            return u
    }}
    if (snake[0] == row[15]){
        if( snake[0] == col[1] || col[3] || col[5] || col[7] || col[9] || col[11] || col[13]|| col[15]){
            return u
    }}
    if (snake[0] == row[15]){
        if( snake[0] == col[2] || col[4] || col[6] || col[8] || col[10] || col[12] || col[14]){
            return l
    }}
    if (snake[0] == row[14]){
        if( snake[0] == col[3] || col[5] || col[7] || col[9] || col[11] || col[13]|| col[15]){
            return l
    }}
    if (snake[0] == row[1]){
        if( snake[0] == col[1] || col[3] || col[5] || col[7] || col[9] || col[11] || col[13]|| col[15]){
            return r
    }}
    if (snake[0] == row[13]){
        if( snake[0] == col[2] || col[4] || col[6] || col[8] || col[10] || col[12] || col[14]){
            return r
    }}


}
function jaden3_newGame(){

    return;
}
ais['jaden3'] = {
    getDirection: jaden3_getDirection,
    newGame: jaden3_newGame
}