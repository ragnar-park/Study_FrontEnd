import "./Card.css";

const Card = (props) => { 
    // 사용자 지정 컴포넌트를 일종의 컨텐츠를 감싸는 래퍼로 사용할 수 없다.
    // 열고 닫는 태그 사이에 컨텐츠가있으면 작동이 안된다.
    // 내장된 html 요소인 <div> , <h2> 같은 요소는 사용 가능하다.
    // 이에 대응하기 위한 래퍼 컴포넌트를 만들수있다.

    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>; // children예약어 : 해당 엘리먼트 안에 있는 props.children에서 사용 가능하다.
}
    // css파일에서 별도의 래퍼 컴포넌트로 일부 중복되는 코드를  추출할 수 있었다
    // 단지 중복된 코드가 아니라, HTML코드와 JSX코드 그리고 여기 있는 <div>도 추출 가능했다. 
    // 추출이 가능하다는 것은 수많은 코드 중복을 피할수 있게 해주고 다른 컴포넌트를 깔끔하게 유지할 수 있게 해준다. 

    // props
    // 어떤 컴포넌트를 import해와서 사용하는 부모(상위) 컴포넌트 (ex. App.js)에서 정하는 값 
    // 부모 컴포넌트에서 설정해서 자식 컴포넌트로 전달하여, 자식 컴포넌트에서 사용
    // children 
    // A 컴포넌트 사이에 B 컴포넌트가 있을 때, A 컴포넌트에서 B 컴포넌트 내용을 보여주려고 사용하는 props
export default Card;