<<<<<<< HEAD
jQuery( '#copy-tel' ).click(
    function(e) {
        let target = document.querySelector('#tel'); 
        var text = target.textContent;
        $('#copyBox').val(text);
        $('#copyBox').select();
        try{
            var success = document.execCommand( 'copy' );
            if(success)
            alert( '전화번호가 복사 되었습니다.' );
        }catch(err){
            alert('이 브라우저에서는 지원하지 않는 기능입니다.');
        }
    }
);

jQuery( '#copy-mail' ).click(
    function() {
        let target = document.querySelector('#mail'); 
        var text = target.textContent;
        $('#copyBox').val(text);

        $('#copyBox').select();

        try{
            var success = document.execCommand( 'copy' );
            if(success)
            alert( '이메일 주소가 복사 되었습니다.' );
        }catch(err){
            alert('이 브라우저에서는 지원하지 않는 기능입니다.');
        }
    }
=======
jQuery( '#copy-tel' ).click(
    function(e) {
        let target = document.querySelector('#tel'); 
        var text = target.textContent;
        $('#copyBox').val(text);
        $('#copyBox').select();
        try{
            var success = document.execCommand( 'copy' );
            if(success)
            alert( '전화번호가 복사 되었습니다.' );
        }catch(err){
            alert('이 브라우저에서는 지원하지 않는 기능입니다.');
        }
    }
);

jQuery( '#copy-mail' ).click(
    function() {
        let target = document.querySelector('#mail'); 
        var text = target.textContent;
        $('#copyBox').val(text);

        $('#copyBox').select();

        try{
            var success = document.execCommand( 'copy' );
            if(success)
            alert( '이메일 주소가 복사 되었습니다.' );
        }catch(err){
            alert('이 브라우저에서는 지원하지 않는 기능입니다.');
        }
    }
>>>>>>> 4c1bc80c1462ac7c2441fe49011a283734c83742
);