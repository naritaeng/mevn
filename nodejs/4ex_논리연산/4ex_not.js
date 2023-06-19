const log = console.log
log(!true)
log(!true&&true)
log(true||log('내가누구게')&&false)

/* 우선순위 ! => && => || */