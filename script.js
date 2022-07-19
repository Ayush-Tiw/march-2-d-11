(function(a){
    var prime=[];
    function isPrime(item){
        var ident=item/2;
        for(var j=2;j<=ident;j++)
        {
            if((item%j)==0){
                return false;
            }
        }
        return true;
    }
    
    for(var index=0;index<a.length;index++)
    {   if(isPrime(a[index])){
        prime.push(a[index])
    }
    }
    console.log(prime);
})([1,4,5,2,6,7,99]);