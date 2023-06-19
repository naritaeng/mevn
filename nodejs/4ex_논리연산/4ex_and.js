const log = console.log
log(false&&false) // ===>
log(true&&false&&log('넌날미워할수없어'))
log(true&&log('넌날미워할수없어')&&true)
log(false&&333)
log(true&&123)

/* 앞이 true면 다음으로 진행 */
/* 앞이 false면 바로 종료 */