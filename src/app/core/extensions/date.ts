interface DateConstructor{
    parseFull(value: string): Date;
}

Date.parseFull = function(value){
    return value ? new Date( Date.parse(value) ) : null ;
}