/* 
    변수 이름은 유의미한 명사로
    함수이름은 getName() 처럼 동사로 시작하기.
    불리언 값을 반환하는 함수는 일반적으로 isEnabled()처런 is로 시작
    변수나 함수 이름은 길이를 신경 스지 말고 논리적으로 정하기

    변수타입
    1. 초기화하기
        var found = false; // 불리언
        var count = -1 // 숫자
        var name = ""; // 문자열
        var person = null; // 객체
    2. 헝가리언 표기법 사용
        var bFound; // 불리언 
        var iCount; // 숫자
        var sName; // 문자열
        var oPerson; // 객체

    3. 변수 타입을 나타내는 주석 - 보통 이렇게 사용
        변수 이름 바로 뒤에, 초기화 직전에 사용
 */   
        var found /*:Boolean*/ = false; // 불리언
        var count /*:int*/ = -1 // 숫자
        var name /*:String*/ = ""; // 문자열
        var person /*:Object*/ = null; // 객체

/* 
    느슨한 연결
        CSS에서 element.className = "edit" 이런식으로 클래스만 바꾸기 

    전역변수나 함수 사용은 무조건 피하기
        // 이것보다
        var name = "dasom";
        function sayName() {
            alert(name)
        }
        // 이렇게
        var Myapp = {
            name: "dasom",
            sayName: function() {
                alert(this.name);
            }
        }
        
    비교할 때 Null 사용하지 않기
        // 이것보다
        function sortArray(values){
            if(values != null){
                values.sort(comparator);
            }
        }
        // 이렇게
        function sortArray(values){
            if(values instanceof Array){
                values.sort(comparator);
            }
        }
    
    상수로 분리하기 
        값이 한곳 이상 쓰이는 반복되는 값
        사용자 인터페이스 문자열(?)
        URL
        값

        // 이것보다
        function validate(value) {
            if(!value){
                alert("invaild!");
                location.href = "/errors/invalid.php";
            }
        }

        // 이렇게
        var Contants = {
            INVALID_vALUE_MSG: "invaild!",
            IVNALID_VALUE_URL:"/errors/invalid.php"
        };

        function validate(value) {
            if(!value){
                alert(INVALID_vALUE_MSG);
                location.href = IVNALID_VALUE_URL;
            }
        }
    
    성능
    스코프 체인을 따라 이동하는 시간을 줄이자
    전역 검색을 피하기
        // 이것보다
        function updateUI(){
            var imgs = document.getElementsByTagName("img");
            for (var i=0; len=img.length; i< len; i++) {
                imgs[i].title = document.title + " image " + i;
            }
            var msg = document.getElementById("msg");
            msg.innerHTML = "Update.complete.";
        }
        // 이 함수는 아무문제 없어 보이지만 전역 document를 세번이나 참조한다. 
        // 페이지에 이미지가 많다면 수십번, 수백번 참조할 수도 있다. 이러한 과정을
        // document 객체를 가리키는 로컬 변수를 생성하기만 해도 전역 검색을 한번으로 제한할 수 있다.

        function updateUI() {
            var doc = document; // 이렇게 함으로써 전역검색을 단 한번하는 코드로 변신
            var imgs = doc.getElementsByTagName("img");
            for (var i=0; len=imgs.length; i<len; i++){
                imgs[i].title = doc.title + " image " + i;
            }
            var msg = doc.getElementById("msg");
            msg.innerHTML = "Update.complete.";
        }
        // 함수에서 두 번 이상 사용하는 전역 객체는 모두 로컬 변수에 저장하는게 좋다    

    with문 피하기
    객체 프로퍼티를 두번 이상 사용한다면 로컬 변수에 저장하기
        // 이것보다
            var query = window.location.href.substring(window.location.href.indexOf("?"))
        // 이렇게
            var url = window.location.href;
            var query = url.substring(url.indexOf("?"));
        
    이중 해석 피하기
        var sayHi = new Function("alert('hello world')");
    
    문장을 최소한으로 줄이기
        // 이것보단
            var count = 5;
            var color = "blue";
            var value = [1, 2, 3];
            var now = new Date();
        // 이렇게
            var count = 5,
            var color = "blue",
            var value = [1, 2, 3],
            var now = new Date();

*/ 
        



