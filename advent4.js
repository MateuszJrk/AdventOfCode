// input is yzbqklnj
function hash(code, numOfZeros){
    var myers = document.createElement('script');
    myers.src = "http://www.myersdaily.org/joseph/javascript/md5.js"
    myers.onload = function(){
        var i = 0;
        while(md5(code+i).substr(0, numOfZeros) !== '0'.repeat(numOfZeros)) {i+=1; if(i%10000 === 0);}
        console.log(i)
    };
    document.body.appendChild(myers)
}
hash('yzbqklnj', 6)