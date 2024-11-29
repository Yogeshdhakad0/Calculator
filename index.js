
       

function matrix() {
    let matrix1 = document.getElementById('screen1').value;
    let matrix2 = document.getElementById('screen').value;
console.log(matrix1);

    let arr1 = matrix1.split(',').map(Number);
    let arr2 = matrix2.split(',').map(Number);
    let result = arr1.map((num, index) => num + arr2[index]);

screen.value = result.join(', ');

}
























    var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    for (iteam of btn) {
        iteam.addEventListener('click', (e) => {
            btntext = e.target.innerHTML;
            if (btntext == '+') {
                btntext = '+';
            }
            if (btntext == '/') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }

    function sin() {
        screen.value = Math.sin(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function log() {
        screen.value = Math.log(screen.value);
    }

    function pi() {
        screen.value = 3.14159;
    }
    function e() {
        screen.value = 2.71828;
    }

    function fact() {
        var i, num, f;
        f = 1;
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }
        i = i - 1;
        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }

    function facte() {
        let num = screen.value;
        var a = 0;
        var b = 1;
        for (var we = 0; we <= num; we++) {
            var tem3 = a + b;
            console.log(tem3);
            a = b;
            b = tem3;
            screen.value = b;
        }
    }
    function aram() {

        var rt = screen.value;
        var temp1 = rt;
        var ram = rt.toString().length;
        var sum1 = 0;
        while (temp1 > 0) {
            var digit = temp1 % 10;
            sum1 += digit ** ram;
            console.log(sum1)
            temp1 = parseInt(temp1 / 10);
        } 
        console.log(temp1);
        console.log(sum1);


        if (sum1 == rt) {
            let st = screen.value = "is armstrong";
            console.log(st);
        } else {
            console.log(`${sum1} is  yasarmshrong `)
            let st1 = screen.value = "not armstrong";
            console.log(st1);
        }
    }


    function rdx() {

        var srting1 = screen.value;
        var srrtingarry = srting1.split('');
        console.log(srrtingarry);
        var srrtingarryrec = srrtingarry.reverse();
        console.log(srrtingarryrec);
        var rrrrr = srrtingarryrec.join('');
        console.log(rrrrr);
        if (srting1 === rrrrr) {
            console.log(`${srting1} is pilnodrom`);
            let rt = screen.value = 'yas ';
        } else {
            console.log(`${srting1} is not pilnodrom`);
            let rt = screen.value = 'is not '
        }

    }
    function reverse() {
        let n = screen.value;
        let rem, rev = 0;

        while (n > 0) {
            rem = n % 10;//3

            rev = rev * 10 + rem;
            n = parseInt(n / 10);
            screen.value = rev;

        }
        console.log(rev);
    }
    function leapyear() {
        var bn = screen.value;
        if (bn %4 == 0) {
            let rt = screen.value = 'yas ';
        } 
 
        else {
            let rt = screen.value = 'not ';
        }
    }
    









    function odd() {
        var bn = screen.value;
        if (bn % 2 == 0) {
            let rt = screen.value = 'evan ';
        } else {

            screen.value = 'odd"';

        }
    }